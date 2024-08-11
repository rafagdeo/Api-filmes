"use client";  // Adicione esta linha

import { useState, useEffect } from 'react';
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";

export default function Slide() {
    const slides = [
        { url: '/image/bg-deadpool-wolverine.jpg' },
        { url: '/image/planetapesbanner.jpeg' },
        { url: '/image/malvado.jpg' }, 
        { url: '/image/Cinerama.jpg' }, 
    ]
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 3000);

        return () => clearInterval(interval); 
    }, [slides.length]);

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
    };

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % slides.length);
    };

    return (
        <div className='px-6 align-middle '>
            <div
                style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                className="m-6 min-h-[550px] rounded-2xl bg-center bg-cover transform duration-2000 ease-out scale-70 animate-zoomOut p-6 "
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent rounded-2xl content-center px-8">
                <div>
                    <h1 className='text-bold text-4xl text-white align-center'>Filmes do momento</h1>
                </div>
                </div>
                
            </div>
            <button
                onClick={prevSlide}
                className="absolute left-2 z-10 p-2 text-white rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 hidden md:block"
                style={{ transform: "translateY(-50%)", top: "41%" }}
            >
                <MdArrowBackIosNew /> {/* Código Unicode para seta esquerda */}
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-2 z-10 p-2 text-white rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 hidden md:block"
                style={{ transform: "translateY(-50%)", top: "41%" }}
            >
                <MdArrowForwardIos />  {/* Código Unicode para seta direita */}
            </button>
        </div>
           
    );
}
