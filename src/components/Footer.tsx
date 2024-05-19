"use client"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import { ThemeButton } from "./ThemeButton";
import { ThemeInput } from "./sections/QuoteForm";

export const Footer: React.FC = () => {
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from('.footer-logo', {
            scrollTrigger: {
                trigger: '.footer-logo',
                start: 'top 90%',
            },
            y: 50,
            opacity: 0,
            duration: .6,
        });

        // .footer-links 
        gsap.from('.footer-links div, .footer-links li', {
            scrollTrigger: {
                trigger: '.footer-links',
                start: 'top 90%',
            },
            y: 50,
            opacity: 0,
            duration: .6,
            delay: 0.1,
            stagger: 0.1,
        });
    });

    return (
        <footer className="relative overflow-hidden">
            <div className="mx-auto w-full max-w-screen-xl py-8 lg:py-12 font-bold">
                <div className="flex-col flex lg:flex-row lg:justify-between p-8">
                    <div className="mb-6 lg:mb-0">
                        <div className="flex lg:flex-col items-center lg:items-start footer-logo">
                            <img src="/assets/logo.svg" alt="RSC Buying Group logo" className="w-20 h-6" />
                            <span className="text-xs leading-relaxed my-2">
                                © RSC Buying Group
                                <br className="hidden md:block" />
                                All Rights Reserved
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:grid-cols-4 footer-links">
                        <div>
                            <h2 className="mb-6 text-lg uppercase">Contact Us</h2>
                            <ul className="font-medium text-sm">
                                <li className="mb-4">
                                    <i className="fas fa-phone-alt min-w-6"></i> Phone: 01234 567 890
                                </li>
                                <li className="mb-4">
                                    <i className="far fa-envelope min-w-6"></i> Email: email@rsc.co.uk
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-lg uppercase">Follow Us On</h2>
                            <ul className="font-medium text-sm">
                                <li className="mb-4">
                                    <i className="fab fa-facebook-f min-w-6"></i> Facebook
                                </li>
                                <li className="mb-4">
                                    <i className="fab fa-twitter min-w-6"></i> Twitter
                                </li>
                                <li className="mb-4">
                                    <i className="fab fa-instagram min-w-6"></i> Instagram
                                </li>
                                <li className="mb-4">
                                    <i className="fab fa-linkedin-in min-w-6"></i> LinkedIn
                                </li>
                            </ul>
                        </div>
                        <div className="w-full col-span-2 mt-4 md:mt-0">
                            <h2 className="text-2xl tracking-tight text-white uppercase">Subscribe.</h2>
                            <p className="mt-4 text-sm leading-8 font-medium">
                                Get the latest news and updates from RSC Buying Group.
                            </p>

                            <div className="mt-6 flex gap-x-4">
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <ThemeInput type="email" name="email-address" label="Email address" />
                                <ThemeButton className="text-sm">Subscribe</ThemeButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}