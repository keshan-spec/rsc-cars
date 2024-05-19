"use client"
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Loader: React.FC = () => {
    const loaderRef = useRef<HTMLDivElement>(null);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black z-50" ref={loaderRef}>
            <div className="h-16 w-16 border-4 border-t-4 border-t-transparent border-white rounded-full"></div>
        </div>
    );
};

export default Loader;
