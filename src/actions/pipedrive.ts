"use server"

import { Lead, LeadFields, Person, PersonSearchResponse, leadCustomFieldKeys } from "@/types/pipedrive";

const API_TOKEN = process.env.PIPEDRIVE_API_TOKEN;
const API_URL = "https://rscbuyinggroupd.pipedrive.com/api";

const parseCustomFields = (fields: LeadFields) => {
    // loop through the fields and return the custom field keys with the values
    const parsedFields = Object.keys(fields).map((key) => ({
        [leadCustomFieldKeys[key as keyof LeadFields]]: fields[key as keyof LeadFields]
    }));

    const customFields = parsedFields.reduce((acc, item) => {
        const key = Object.keys(item)[0];
        acc[key] = item[key];
        return acc;
    }, {} as Record<string, string>);

    return customFields;
}

const pickFirstPerson = (data: PersonSearchResponse) => {
    return data.data.items[0].item;
}

export const addLead = async ({
    contact,
    title,
    fields
}: Lead) => {
    try {
        const personId = await addPerson(contact);
        if (!personId) {
            throw new Error("Failed to add person");
        }

        const custom_fields = parseCustomFields(fields);

        const response = await fetch(`${API_URL}/v1/leads?api_token=${API_TOKEN}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title,
                person_id: personId,
                label_ids: ['d42b9340-185f-11ef-aa5e-4b45c8cd4918'],
                ...custom_fields
            })
        });

        const data = await response.json();

        if (!response.ok || response.status !== 201) {
            console.log(data);
            throw new Error("Failed to submit lead");
        }

        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const addPerson = async ({
    name,
    email,
    phone
}: Person): Promise<number | null> => {
    try {
        let personId = null;

        const existingPerson = await checkPersonWithEmail(email);
        if (existingPerson !== null) {
            personId = pickFirstPerson(existingPerson).id;
            return personId;
        } else {
            const response = await fetch(`${API_URL}/v1/persons?api_token=${API_TOKEN}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    phone
                })
            });

            const data = await response.json();
            if (data && data.success) {
                console.log(`Person added: ${data.data.id} - ${name}`);

                personId = data.data.id;
                return personId;
            }

            throw new Error("Failed to add person");
        }
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const checkPersonWithEmail = async (email: string): Promise<PersonSearchResponse | null> => {
    if (!isEmailValid(email)) {
        console.log("Invalid email");
        return null;
    }

    const fields = encodeURIComponent("email");
    const response = await fetch(`${API_URL}/v1/persons/search?term=${encodeURIComponent(email)}&fields=${fields}&api_token=${API_TOKEN}&exact_match=true`);

    // if (!response.ok || response.status !== 200) {
    //     return null;
    // }

    const data = await response.json() as PersonSearchResponse;

    if (data && data.data) {
        if (data.data.items.length > 0) {
            return data
        }
    }

    return null;
}

const isEmailValid = (email: string) => {
    if (!email.includes("@")) {
        return false;
    }

    return true;
}