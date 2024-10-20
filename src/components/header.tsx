"use client";

import { useEffect } from "react";

export default function Header() {
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                document.querySelector("header")?.classList.add("bg-gray-800", "bg-opacity-60");
            } else {
                document.querySelector("header")?.classList.remove("bg-gray-800", "bg-opacity-60");
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });
    return (
        <header className="text-gray-100 body-font fixed top-0 w-full shadow-lg z-50 transition-all duration-300 ease-in-out">
            <div className="container flex flex-row flex-wrap items-center p-5 mx-auto">
                <a className="flex-grow font-semibold text-2x1" href="/">
                Quick.ly
                </a>
                <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
                    <a href="/" className="mr-6 cursor-pointer hover:text-orange-600 ">Home</a>
                    <a href="/secure" className="mr-6 cursor-pointer hover:text-orange-600">Secure Shortener</a>
                    <a href="/report" className="mr-6 cursor-pointer hover:text-orange-600">Report</a>
                    <a href="/contact" className="mr-6 cursor-pointer hover:text-orange-600">Contact</a>
                </nav>
            </div>

            {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script> */}
            
        </header>
    );
}