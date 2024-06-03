"use client"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import Slider, { Settings } from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings: Settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    rows: 1,
    draggable: true,
    focusOnSelect: false,
    centerMode: true,
    initialSlide: 1,
    responsive: [
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 820,
            settings: {
                slidesToShow: 1.5,
                slidesToScroll: 1,
                centerMode: true,
            }
        },
        {
            breakpoint: 670,
            settings: {
                slidesToShow: 1.3,
                centerMode: true,
                slidesToScroll: 1,
                dots: true,
                accessibility: true,
            }
        },
        {
            breakpoint: 540,
            settings: {
                slidesToShow: 1,
                centerMode: false,
                slidesToScroll: 1,
                dots: true,
                accessibility: true,
            }
        }
    ]
};

const testimonials = [
    {
        image: "/assets/takahiro-taguchi-_SKIDRiIEtk-unsplash.jpg",
        text: "I am very happy with the service I received from RSC Buying Group. They were very professional and I would recommend them to anyone.",
        name: "John Doe",
        vehicle: "BMW 3 Series"
    },
    {
        image: "/assets/hakon-sataoen-qyfco1nfMtg-unsplash.jpg",
        text: "I was very impressed with the service I received from RSC Buying Group. They were very professional and I would recommend them to anyone.",
        name: "Jane Doe",
        vehicle: "Audi A4"
    },
    {
        image: "/assets/jean-philippe-delberghe-FxSe9U-PqI4-unsplash.jpg",
        text: "I was very impressed with the service I received from RSC Buying Group. They were very professional and I would recommend them to anyone.",
        name: "John Smith",
        vehicle: "Mercedes C Class"
    },
]

export const Section2: React.FC = () => {
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        // testimonials
        gsap.from('.testimonials', {
            scrollTrigger: {
                trigger: '.testimonials',
                start: 'top 80%',
            },
            y: 50,
            opacity: 0,
            duration: .6,
        });

        gsap.from('.slider-container', {
            scrollTrigger: {
                trigger: '.slider-container',
                start: 'top 80%',
            },
            y: 50,
            opacity: 0,
            duration: .6,
        });
    });

    return (
        <div className="w-full h-full mx-auto px-10 pt-6 pb-12 bg-theme-gray mt-16 hidden">
            <section className="w-full h-full flex flex-col items-center mx-auto mt-8 testimonials">
                <div className="flex flex-col items-center justify-center gap-2 text-white px-7">
                    {/* tropyh */}
                    <i className="fas fa-trophy fa-2x"></i>
                    <span className="text-red-700 font-bold text-sm">Testimonials</span>
                    <h2 className="text-3xl font-bold uppercase text-center">what people say about us</h2>
                </div>
            </section>
            <div className="slider-container mt-10 cursor-pointer">
                <Slider {...settings}>
                    {testimonials.map((step, index) => (
                        <div className="flex items-center" key={index}>
                            <img src={step.image} alt="car" className="w-full h-full object-cover max-w-xs md:max-w-lg lg:max-w-xs" />
                            <h3 className="text-md max-w-xs text-center md:text-left font-medium mt-2 z-10 italic mb-3">
                                <q>
                                    {step.text}
                                </q>
                            </h3>
                            <p className="text-sm text-center lg:text-left mt-1 max-w-xs">{step.name}</p>
                            <p className="text-sm text-center lg:text-left max-w-xs">{step.vehicle}</p>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}