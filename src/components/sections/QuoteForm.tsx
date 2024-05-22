"use client"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import React, { useRef, useState } from 'react'
import { ThemeButton } from '../ThemeButton';
import { addLead } from "@/actions/pipedrive";

export const QuoteForm: React.FC = () => {
    const [message, setMessage] = useState<{
        type: "success" | "danger";
        message: string;
    } | null>(null);
    const [loading, setLoading] = useState(false);

    const formRef = useRef<HTMLFormElement>(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from('.qoute-header', {
            scrollTrigger: {
                trigger: '.qoute-header',
                start: 'top 60%',
            },
            y: 50,
            opacity: 0,
            duration: .6,
        });

        gsap.from('.quote-form .group', {
            scrollTrigger: {
                trigger: '.quote-form',
                start: 'top 50%',
            },
            y: 50,
            opacity: 0,
            duration: .6,
            stagger: 0.1,
        });

        gsap.from('.quote-form button', {
            scrollTrigger: {
                trigger: '.quote-form',
                start: 'top 30%',
            },
            y: 50,
            opacity: 0,
            duration: .6,
            delay: 0.5,
        });
    });

    const validatedDate = (date: string) => {
        const datePattern = /^\d{4}-\d{2}-\d{2}$/;
        return datePattern.test(date);
    }

    const handleSubmit = async (data: FormData) => {
        setMessage(null);

        const formData = {
            name: data.get('name')?.toString() || "",
            phone: data.get('phone')?.toString() || "",
            email: data.get('email')?.toString() || "",
            postcode: data.get('postcode')?.toString() || "",
            make: data.get('make')?.toString() || "",
            model: data.get('model')?.toString() || "",
            mileage: data.get('mileage')?.toString() || "",
            plate: data.get('plate')?.toString() || "",
            lastService: data.get('last-service')?.toString() || "",
            serviceHistory: data.get('service-history')?.toString() || "",
            specifications: data.get('specifications')?.toString() || "",
        };

        // if any of the fields are empty, return
        if (Object.values(formData).some((value) => !value)) {
            setMessage({
                type: "danger",
                message: "Please fill all the fields.",
            });
            return;
        }

        // validate data
        if (!validatedDate(formData.lastService)) {
            setMessage({
                type: "danger",
                message: "The date you entered is not valid. Please enter a valid date.",
            });
            return;
        }

        setLoading(true);

        try {
            const response = await addLead({
                contact: {
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                },
                title: "Car Quote",
                fields: {
                    make: formData.make,
                    model: formData.model,
                    mileage: formData.mileage,
                    plate: formData.plate,
                    lastServiceDate: formData.lastService,
                    serviceHistory: formData.serviceHistory,
                    specifications: formData.specifications,
                }
            });

            setLoading(false);

            if (!response || !response?.success) {
                setMessage({
                    type: "danger",
                    message: "Something went wrong. We could not submit your request. Please try again later.",
                });
                return;
            }

            setMessage({
                type: "success",
                message: "Your request has been submitted successfully. We will get back to you soon.",
            });

            formRef.current?.reset();
        } catch (error) {
            console.error(error);
            setMessage({
                type: "danger",
                message: "Oops! Something went wrong. We could not submit your request. Please try again later.",
            });
        }
    }

    return (
        <div className="relative min-h-[90dvh] overflow-hidden" id="value-car">
            <section className="w-full h-full flex flex-col items-center mx-auto max-w-screen-md mt-20 qoute-header">
                <div className="flex flex-col items-center justify-center gap-2 text-white px-7">
                    <i className="fas fa-file-invoice fa-2x"></i>
                    <span className="text-red-700 font-bold text-sm">Get a quote</span>
                    <h2 className="text-3xl font-bold uppercase text-center">Lets get some details</h2>
                </div>
            </section>

            <form
                ref={formRef}
                action={handleSubmit}
                className="flex flex-col md:grid md:grid-cols-2 gap-10 w-full h-full mt-8 mx-auto max-w-screen-md px-16 lg:px-0 quote-form">
                <ThemeInput type="text" name="name" label="Name" />
                <ThemeInput type="tel" name="phone" label="Phone" />
                <ThemeInput type="email" name="email" label="Email" />
                <ThemeInput type="text" name="postcode" label="Postcode" />
                <ThemeInput type="text" name="make" label="Make" />
                <ThemeInput type="text" name="model" label="Model" />
                <ThemeInput type="text" name="mileage" label="Mileage" />
                <ThemeInput type="text" name="plate" label="Plate" />
                <ThemeInput type="date" name="last-service" label="Last service date" />
                <ThemeInput type="text" name="service-history" label="Service history" />

                <div className="col-span-2 w-full">
                    <ThemeInput type="text" name="specifications" label="Specifications" componentType="textarea" />
                </div>
                {/* error */}
                <div className="col-span-2 w-full">
                    {message?.message && <Alerts type={message.type} message={message.message} />}
                </div>
                <ThemeButton
                    type="submit"
                    loading={loading}
                >
                    {loading ? "Submitting..." : "Get a quote"}
                </ThemeButton>
            </form>

            {/* overlay */}
            <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
                <div
                    className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-red-700 to-red-800 opacity-30"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
        </div>
    );
}

interface ThemeInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    componentType?: "input" | "textarea";
}

const TextArea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = (props) => {
    return (
        <textarea {...props} className="w-full h-32 px-4 text-sm peer bg-transparent outline-none border-b border-red-800" />
    );
}

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
    return (
        <input {...props} className="w-full h-10 px-4 text-sm peer bg-transparent outline-none border-b border-red-800" />
    );
}

export const ThemeInput: React.FC<ThemeInputProps> = ({ label, type, ...props }) => {
    const Component = props.componentType === "textarea" ? TextArea : Input as any;

    return (
        <div className="relative group">
            <Component
                {...props}
                id={props.name}
                type={type}
                required
            // className="w-full h-10 px-4 text-sm peer bg-transparent outline-none border-b border-red-800"
            />
            <label htmlFor={props.name} className="transform transition-all text-white/50 absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/4 peer-valid:h-1/4 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">
                {label}
            </label>
        </div>
    );
}

interface AlertProps {
    type: "success" | "danger";
    message: string;
    title?: string;
}

const Alerts: React.FC<AlertProps> = ({
    message,
    title,
    type,
}) => {
    const className = type === "success" ? "text-green-800 border-green-300 bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800" : "text-red-800 border-red-300  bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800";

    return (
        <div className={`flex items-center p-4 mb-4 text-sm rounded-lg border-t-2 ${className}`} role="alert">
            <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="sr-only">Info</span>
            <div>
                <span className="font-medium mr-2">
                    {type === "success" ? "Success" : "Error"} alert!
                </span>
                {message}
            </div>
        </div>
    )
}