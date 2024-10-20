"use client";

import { reports } from "@/lib/constant";
import { useState } from "react";


export default function report() {
    const [type, setType] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    async function sendReport(event: any) {
        const response = await fetch("/api/grievence/report", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ type, email, message }),
        });
        const data = await response.json();
        if (response.ok) {
            alert("Your message has been sent successfully!");
        } else {
            setError(data.error);
        }
    }
    return (
        <main className="body-font text-gray-200">
            <div className="container mx-auto flex flex-col items-center justify-center px-5 py-24">
                <div className="flex w-full flex-col items-center text-center md:w-2/3">
                    <h1 className="w-full title-font text-orange-600 mb-4 text-2xl font-bold sm:text-6xl">
                        Welcome To <span className="text-white">Quick<span className="text-orange-600">.</span>ly</span>, Explore Powerful!
                    </h1>
                    <p className="mb-8 leading-relaxed text-white">
                        
                    </p>
                        <form className="w-full " action={sendReport}>
                            <div className="flex w-full items-end justify-center">
                                <div className="relative lg:w-full 2xl:w-4/6 xl:w-full md:w-full sm:w-full text-left">
                                    <label htmlFor="url" className="text-sm font-semibold leading-10 text-gray-200">Your email</label>
                                    <input className="w-full rounded-md border-y border-transparent border-t-gray-600 bg-gray-700 px-4 py-3 text-lg font-medium leading-8 shadow-2xl outline-none transition duration-200 ease-in-out placeholder:text-gray-400 focus:border focus:border-blue-600 focus:bg-transparent focus:ring-2 focus:ring-blue-600"
                                        onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="name@example.in" required />
                                </div>
                            </div>
                            <div className="flex w-full items-end justify-center">
                                <div className="relative lg:w-full 2xl:w-4/6 xl:w-full md:w-full sm:w-full text-left">
                                    <label htmlFor="url" className="text-sm font-semibold leading-10 text-gray-200">Your message</label>
                                    <textarea className="w-full rounded-md border-y border-transparent border-t-gray-600 bg-gray-700 px-4 py-3 text-lg font-medium leading-8 shadow-2xl outline-none transition duration-200 ease-in-out placeholder:text-gray-400 focus:border focus:border-blue-600 focus:bg-transparent focus:ring-2 focus:ring-blue-600"
                                        onChange={(e) => setMessage(e.target.value)} placeholder="Your text..." required></textarea>
                                </div>
                            </div>
                            <div className="flex w-full items-end justify-center">
                                <div className="relative mr-4 w-2/4 text-left md:w-full lg:w-full xl:w-1/2">
                                    <label htmlFor="type" className="text-sm font-semibold leading-10 text-gray-200">Report Type</label>
                                    <select
                                        onChange={(e) => setType(e.target.value)}
                                        className="w-full rounded-md border-y border-transparent border-t-gray-600 bg-gray-700 px-4 py-3 text-lg font-medium leading-8 shadow-2xl outline-none transition duration-200 ease-in-out placeholder:text-gray-400 focus:border focus:border-blue-600 focus:bg-transparent focus:ring-2 focus:ring-blue-600"
                                        name="type"
                                        required
                                    >
                                        {reports.map((type) => (
                                            <option className="text-black" key={type} value={type}>
                                                {type}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <button type="submit" className="inline-flex flex-shrink-0 rounded border-0 bg-orange-600 px-6 py-4 text-lg font-semibold text-white transition hover:ring-2 hover:ring-orange-400 focus:outline-none">Report</button>
                            </div>
                        </form>
                    {error && (
                        <p className="text-md text-orange-600 my-4 w-full animate-pulse font-semibold">{error}</p>
                    )}
                </div>
            </div>
        </main>
    )
}
