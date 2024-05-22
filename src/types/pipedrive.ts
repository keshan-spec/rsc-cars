export interface Person {
    name: string;
    email: string;
    phone: string;
}

export type PersonSearchResponse = {
    success: boolean;
    data: {
        items: SearchedPerson[];
    }
}

export type SearchedPerson = {
    result_score: number;
    item: {
        id: number;
        name: string;
        emails: string[] | null;
        primary_email: string | null;
    }
}

export type Lead = {
    contact: Person;
    title: string;
    fields: LeadFields
}

export type LeadFields = {
    make: string;
    model: string;
    mileage: string;
    plate: string;
    lastServiceDate: string;
    serviceHistory: string;
    specifications: string;
}

type LeadCustomFieldKeys = {
    make: string;
    model: string;
    mileage: string;
    plate: string;
    lastServiceDate: string;
    serviceHistory: string;
    specifications: string;
}

export const leadCustomFieldKeys: LeadCustomFieldKeys = {
    "make": "eaa09730262540f8bd318e4ad166f05d112b3ba2",
    "model": "4f0e4dc53b96b5bc8f31f3907b53ce68fbd9ee88",
    "mileage": "07efdf4a34f1502f0b20574371420edc2e2c642c",
    "plate": "d734d9fddb18bf9a0840c8ba60988ffa7e461cf2",
    "lastServiceDate": "eb8b5ff59113ae1ab560d179ee26baa4297ab4ce",
    "serviceHistory": "05719e15d4fe5b18cf1a7238bd802faa92fc2d6a",
    "specifications": "cfafaed0c9aa96123ca80b7fbeece3d730495b72",
}
