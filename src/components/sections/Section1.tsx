"use client"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ThemeButton } from "../ThemeButton";

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const stepsForQuote = [
    {
        // car
        icon: "fas fa-car",
        title: "Step 1",
        description: "Add your details",
        backgroundImage: "/assets/hakon-sataoen-qyfco1nfMtg-unsplash.jpg"
    },
    {
        // invoice
        icon: "fas fa-file-invoice",
        title: "Step 2",
        description: "Get A Quote",
        backgroundImage: "/assets/jean-philippe-delberghe-FxSe9U-PqI4-unsplash.jpg"
    },
    {
        //  money
        icon: "fas fa-money-bill",
        title: "Step 3",
        description: "Paid in 24hrs",
        backgroundImage: "/assets/takahiro-taguchi-_SKIDRiIEtk-unsplash.jpg",
    },
]

export const Section1: React.FC = () => {
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from('.steps', {
            scrollTrigger: {
                trigger: '.steps',
                start: 'top 80%',
            },
            y: 50,
            opacity: 0,
            duration: .6,
            stagger: 0.2,
        });

        gsap.from('.section-2', {
            scrollTrigger: {
                trigger: '.section-2',
                start: 'top 50%',
            },
            y: 50,
            opacity: 0,
            duration: .6,
            stagger: 0.2,
        });

        // animate section 2 text
        gsap.from('.section-2 h2', {
            scrollTrigger: {
                trigger: '.section-2 h2',
                start: 'top 80%',
            },
            y: 50,
            opacity: 0,
            duration: .6,
        });

        gsap.from('.section-2 p', {
            scrollTrigger: {
                trigger: '.section-2 p',
                start: 'top 80%',
            },
            y: 50,
            opacity: 0,
            duration: .6,
            delay: 0.2,
        });

        gsap.from('.section-2 button', {
            scrollTrigger: {
                trigger: '.section-2 button',
                start: 'top 80%',
            },
            y: 50,
            opacity: 0,
            duration: .6,
            delay: 0.4,
        });

        // section 3
        gsap.from('.section-3', {
            scrollTrigger: {
                trigger: '.section-3',
                start: 'top 60%',
            },
            y: 50,
            opacity: 0,
            duration: .6,
        });

        // section 3 text
        gsap.from('.section-3 h2', {
            scrollTrigger: {
                trigger: '.section-3 h2',
                start: 'top 60%',
            },
            y: 50,
            opacity: 0,
            duration: .6,
        });

        gsap.from('.section-3 p', {
            scrollTrigger: {
                trigger: '.section-3 p',
                start: 'top 60%',
            },
            y: 50,
            opacity: 0,
            duration: .6,
            delay: 0.2,
        });

        gsap.from('.section-3 img', {
            scrollTrigger: {
                trigger: '.section-3 img',
                start: 'top 60%',
            },
            y: 50,
            opacity: 0,
            duration: .6,
            delay: 0.4,
        });
    });


    return (
        <div className="w-full h-full min-h-[100dvh] flex-col flex items-center mx-auto px-10 py-6">
            {/* section 1 */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full h-full mt-8 place-items-center max-w-screen-xl">
                {stepsForQuote.map((step, index) => (
                    <div className="steps relative flex flex-col items-center lg:items-start justify-center p-5 w-full h-full text-white uppercase font-bold" key={index}
                        style={{
                            backgroundImage: `url(${step.backgroundImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            maxHeight: '200px',
                            height: '200px',
                        }}
                    >
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                        <i className={`${step.icon} text-red-700 fa-2x z-10`}></i>
                        <h3 className="text-lg font-semibold mt-2 z-10">{step.title}</h3>
                        <p className="text-sm text-center mt-1 z-10">{step.description}</p>
                    </div>
                ))}
            </section>

            {/* section 2 */}
            <section className="w-full h-full flex flex-col items-center mx-auto max-w-screen-lg mt-20">
                <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-4 section-2">
                    <div className="w-full md:w-1/2 flex flex-col items-start gap-4 text-white ">
                        <p className="text-sm text-center md:text-left w-full">Get the highest price for your car hassle free.</p>
                        <h2 className="text-3xl text-center md:text-left font-bold max-w-xs uppercase">Welcome to rsc buying group</h2>
                        <p className="text-sm text-center md:text-left leading-relaxed">RSC Buying group is a contemporary and vibrant compnay, boasting more thatn 25 years of experience in the motor trade.
                            Our exceptional custom serverice experience leads to a high number of referrals and recommendations, further strengthening our well-established reputation.</p>
                        <ThemeButton className="mt-3 mx-auto md:mx-0">
                            Get a valuation
                        </ThemeButton>
                    </div>
                    <div className="w-full md:w-2/3">
                        <img src="/assets/tyler-clemmensen-nOrLbpXgNs4-unsplash.jpg" alt="car" className="w-full h-full object-cover" />
                    </div>
                </div>
            </section>

            {/* section 3 */}
            <section className="w-full h-full flex flex-col items-center mx-auto max-w-screen-md mt-20 section-3">
                <div className="flex flex-col items-center justify-center gap-2 text-white px-7">
                    <i className="fas fa-home text-2xl"></i>
                    <span className="text-red-700 font-bold text-sm">How We Work</span>
                    <h2 className="text-3xl font-bold uppercase text-center">We Work Differently</h2>
                    <p className="text-center mt-2 text-sm leading-relaxed">
                        At RSC Buying Group, our approach sets us apart from other car buying companies. We maintain a
                        robust network of reputable sports and prestige motor dealers who rely on us to find high-quality
                        used cars that meet their specific needs.
                    </p>
                    <p className="text-center mt-2 text-sm leading-relaxed">
                        Using the details you provide, we present your car to our dealer network and facilitate a competitive
                        bidding process to ensure we secure the highest possible price for your vehicle. Once we have
                        achieved the best price, we buy the car directly from you and deliver it to the dealer with the winning
                        bid. We charge the dealers a separate finder's fee, which means you get the full sale amount of your
                        car, unlike other companies that might reduce your payment by taking a profit margin from the sale.
                    </p>
                </div>

                <img src="/assets/taneli-lahtinen-tG5TwCXg0bw-unsplash.jpg" alt="car" className="w-full h-full object-cover my-7" />

                <div className="flex flex-col-reverse md:flex-row items-start w-full mt-4">
                    <div className="w-full flex justify-center md:justify-start text-white mt-6">
                        <ThemeButton>
                            Get a valuation
                        </ThemeButton>
                    </div>
                    <div className="w-full">
                        <p className="text-center lg:text-left text-sm leading-relaxed max-w-lg mx-auto">
                            With us, you won't receive a standard, system-generated quote simply by entering your registration
                            number. We're interested in learning about the specific details of your car, including its features,
                            service history, and any other information you can provide that will assist us in offering you a better
                            deal.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}