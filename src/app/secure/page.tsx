"use client";

import { useState } from "react";


export default function secure() {
    const [url, setURL] = useState("");
    const [password, setPassword] = useState("");
    const [short, setShort] = useState("");
    const [error, setError] = useState("");
    const [show, setShow] = useState(true);
    async function copyShortURL() {
        try {
        await navigator.clipboard.writeText(short);
        alert("Copied to clipboard");
        } catch (err) {
        console.error("Failed to copy: ", err);
        }
    }
    async function secureURL(event: any) {
        if (url === "") {
            setError("Please enter a URL");
            return;
        } else if (password === "") {
            setError("Please enter a Password");
            return;
        }
        const response = await fetch("/api/shorten/secure", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ url: url, password: password }),
        });
        const data = await response.json();
        if (response.ok) {
            setShort(data.short);
        } else {
            setShort("");
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
                        Copy your long boring url. Paste it below with a password to secure. {!(short==="") && (`Then 💥 You got it, right?`)}
                    </p>
                    { !(short==="") ? (
                        <div className="flex w-full items-end justify-center">
                            <div className="relative mr-4 w-3/5 text-left md:w-full lg:w-full xl:w-1/2">
                                <label htmlFor="long-url" className="text-sm font-semibold leading-10 text-gray-200">Your shorten Url</label>
                                <div className="relative">
                                    <input className="w-full rounded-md border-y border-transparent border-t-gray-600 bg-gray-700 px-4 py-3 text-lg font-medium leading-8 shadow-2xl outline-none transition duration-200 ease-in-out focus:border focus:border-blue-600 focus:bg-transparent focus:ring-2 focus:ring-blue-600"
                                        value={short} readOnly />
                                    <a href={short} target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="absolute right-3 top-1/2 h-6 w-6 -translate-y-1/2 transform text-orange-600">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                    </svg>
                                    </a>
                                </div>
                            </div>
                            <button onClick={copyShortURL} type="button" className="inline-flex flex-shrink-0 rounded border-0 bg-orange-600 px-6 py-4 text-lg font-semibold text-white transition hover:bg-orange-600 hover:brightness-50 focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="h-6 w-6 transition">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
                                </svg>
                                COPY
                            </button>
                        </div>
                    ) : (
                        <>
                        
                        <form className="w-full " action={secureURL}>
                            <div className="flex w-full items-end justify-center">
                                <div className="relative lg:w-full 2xl:w-4/6 xl:w-full md:w-full sm:w-full text-left">
                                    <label htmlFor="url" className="text-sm font-semibold leading-10 text-gray-200">Your long Url</label>
                                    <input className="w-full rounded-md border-y border-transparent border-t-gray-600 bg-gray-700 px-4 py-3 text-lg font-medium leading-8 shadow-2xl outline-none transition duration-200 ease-in-out placeholder:text-gray-400 focus:border focus:border-blue-600 focus:bg-transparent focus:ring-2 focus:ring-blue-600"
                                        onChange={(e) => setURL(e.target.value)} type="url" name="url" placeholder="https://example.com/" required />
                                </div>
                            </div>
                            <div className="flex w-full items-end justify-center">
                                <div className="relative mr-4 w-2/4 text-left md:w-full lg:w-full xl:w-1/2" x-data="{ show: true }">
                                    <label htmlFor="password" className="text-sm font-semibold leading-10 text-gray-200">Password</label>

                                    <div className="relative">
                                        <input required type={show ? 'password' : 'text'} onChange={(e)=> setPassword(e.target.value)} name="password" 
                                            className="w-full rounded-md border-y border-transparent border-t-gray-600 bg-gray-700 px-4 py-3 text-lg font-medium leading-8 shadow-2xl outline-none transition duration-200 ease-in-out placeholder:text-gray-400 focus:border focus:border-blue-600 focus:bg-transparent focus:ring-2 focus:ring-blue-600"
                                        />
                                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-sm leading-5">
                                            <svg className={`h-5 text-gray-100 ${show ? 'block' : 'hidden'}`} fill="none" onClick={() => setShow(!show)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                <path fill="currentColor" d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path>
                                            </svg>
                                            
                                            <svg className={`h-5 text-gray-100 ${!show ? 'block' : 'hidden'}`} fill="none" onClick={() => setShow(!show)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                                <path fill="currentColor" d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <button type="submit" className="inline-flex flex-shrink-0 rounded border-0 bg-orange-600 px-6 py-4 text-lg font-semibold text-white transition hover:ring-2 hover:ring-orange-400 focus:outline-none">Shorten URL</button>
                            </div>
                        </form>
                        </>
                    )}
                    {error && (
                        <p className="text-md text-orange-600 my-4 w-full animate-pulse font-semibold">{error}</p>
                    )}
                </div>
            </div>
        </main>
    )
}
