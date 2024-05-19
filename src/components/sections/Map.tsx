"use client"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';


export const Map: React.FC = () => {
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from('.map-header', {
            scrollTrigger: {
                trigger: '.map-header',
                start: 'top 80%',
            },
            y: 50,
            opacity: 0,
            duration: .6,
        });

        gsap.from('.contact-details', {
            scrollTrigger: {
                trigger: '.contact-details',
                start: 'top 80%',
            },
            y: 50,
            opacity: 0,
            duration: .6,
        });

        gsap.from('.map', {
            scrollTrigger: {
                trigger: '.map',
                start: 'top 80%',
            },
            y: 50,
            opacity: 0,
            duration: .6,
        });
    });


    return (
        <div className="relative">
            <section className="w-full h-full flex flex-col items-center mx-auto mt-20 px-4">
                <div className="flex flex-col items-center justify-center gap-2 text-white px-7 map-header">
                    {/* microphone  */}
                    <i className="fas fa-microphone fa-2x"></i>
                    <span className="text-red-700 font-bold text-sm">Get in touch</span>
                    <h2 className="text-3xl font-bold uppercase text-center">Come and see us</h2>
                </div>

                <div className="contact-details flex flex-col md:flex-row items-center justify-between gap-4 w-full h-full mt-8 mx-auto max-w-screen-lg px-4 lg:px-0">
                    <div className="mb-4 md:mb-0 flex flex-col items-center md:items-start justify-start min-w-52 text-lg md:text-sm">
                        <p className="mb-2">
                            <i className="fas fa-map-marker-alt mr-2"></i>
                            <strong>Address</strong>
                        </p>
                        <p>123 Fake Street</p>
                        <p>Fake Lane</p>
                        <p>YO1 8GH</p>
                    </div>
                    <div className="mb-4 md:mb-0 flex flex-col items-center md:items-start justify-start min-w-52 text-lg md:text-sm">
                        <p className="mb-2">
                            <i className="fas fa-phone-alt mr-2"></i>
                            <strong>Contact</strong>
                        </p>
                        <p>Phone: 01234 567 890</p>
                        <p>Email: jason@src.co.uk</p>
                    </div>
                    <div className="mb-4 md:mb-0 flex flex-col items-center md:items-start justify-start min-w-52 text-lg md:text-sm">
                        <p className="mb-2">
                            <i className="far fa-clock mr-2"></i>
                            <strong>Hours</strong>
                        </p>
                        <p>Mon - Fri: 9:00 to 17:00</p>
                        <p>Sat: 10:00 - 14:00</p>
                        <p>Sun: Closed</p>
                    </div>
                </div>

                <div className="max-w-screen-lg w-full map">
                    <iframe
                        title="map"
                        className="w-full h-96 mt-10"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.113228318992!2d-0.08282078422931326!3d51.50735007963648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604e9b7c4c6b9%3A0x3f1f5b5b0c7f6c6f!2sBig%20Ben!5e0!3m2!1sen!2suk!4v1633373386184!5m2!1sen!2suk"
                        loading="lazy"
                    ></iframe>
                </div>
            </section>
        </div>
    );
}