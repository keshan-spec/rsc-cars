"use client"
import Link from "next/link";
import { ThemeButton } from "./ThemeButton";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect } from "react";

export const Header: React.FC = () => {
    useGSAP(() => {

        gsap.from('.nav-links img', {
            opacity: 0,
            y: -50,
            duration: 1,
            ease: 'power4.out',
        });

        gsap.from('.nav-links a', {
            opacity: 0,
            y: -50,
            duration: 1,
            ease: 'power4.out',
            delay: 0.5,
            stagger: 0.1,
        });

        gsap.from('.nav-links i', {
            opacity: 0,
            y: -50,
            duration: 1,
            ease: 'power4.out',
            delay: 1,
            stagger: 0.1,
        });


        gsap.from('.banner-info h1', {
            opacity: 0,
            y: -50,
            duration: 1,
            ease: 'power4.out',
        });


        gsap.from('.banner-info p', {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power4.out',
            delay: 0.5,
        });

        gsap.from('.banner-info button', {
            opacity: 0,
            scale: 0.8,
            duration: 1,
            ease: 'power4.out',
            delay: 1,
        });
    });

    return (
        <header className="min-h-[90dvh] relative"
            style={{
                backgroundImage: "url('/assets/louis-meeckers-rKPRxpTe92o-unsplash.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "top",
                backgroundRepeat: "no-repeat",
            }}
        >
            <nav className="nav-links flex w-full justify-between items-center min-h-20 px-4 bg-black text-white">
                <div className="flex items-center">
                    <Link href="/">
                        <img src="/assets/" alt="Logo" className="h-12 w-12 ml-4" />
                    </Link>
                </div>
                <nav className="flex items-center gap-6 text-white uppercase font-medium">
                    <Link href="#faq">FAQ</Link>
                    <Link href="#value-car">Value your car</Link>
                    <Link href="#contact">Contact us</Link>
                </nav>
                <div className="flex items-center gap-4 mr-3">
                    <i className="far fa-phone text-white"></i>
                    <i className="far fa-envelope text-white"></i>
                </div>
            </nav>

            <div className="banner-info absolute left-12 top-2/4 flex flex-col items-start justify-start gap-2">
                <h1 className="text-4xl text-white font-bold uppercase">Sell your car today!</h1>
                <p className="text-white text-center font-bold">Get the highest price for your car hassle free.</p>
                <ThemeButton className="mt-3">
                    Get a valuation
                </ThemeButton>
            </div>
        </header>
    );
}