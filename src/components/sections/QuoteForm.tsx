"use client"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import React from 'react'
import { ThemeButton } from '../ThemeButton';

export const QuoteForm: React.FC = () => {

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

    const handleSubmit = (data: FormData) => {
        console.log(data);
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
                    <ThemeInput type="text" name="message" label="Specifications" />
                </div>
                <ThemeButton type="submit">Get a quote</ThemeButton>
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
}

export const ThemeInput: React.FC<ThemeInputProps> = ({ label, type, ...props }) => {
    return (
        <div className="relative group">
            <input {...props}
                id={props.name}
                type={type}
                required
                className="w-full h-10 px-4 text-sm peer bg-transparent outline-none border-b border-red-800"
            />
            <label htmlFor={props.name} className="transform transition-all text-white/50 absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">
                {label}
            </label>
        </div>
    );
}