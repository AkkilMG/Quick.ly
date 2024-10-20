"use client";

import { useEffect, useState } from "react";

export default function secure({ params }: { params: { id: string } }) {
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(true);
    const [error, setError] = useState("");
    var id = decodeURIComponent(params.id);
    async function secureUnshort(event: any) {
        fetch(`/api/unshorten/secure`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ code: id, password: password }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success && data.url) {
                    window.location.href = data.url;
                }
            });
    }
    return (
        <main className="body-font text-gray-200">
            <div className="container mx-auto flex flex-col items-center justify-center px-5 py-24">
                <div className="flex w-full flex-col items-center text-center md:w-2/3">
                    <h1 className="w-full title-font text-orange-600 mb-4 text-2xl font-bold sm:text-6xl">
                        Welcome To <span className="text-white">Quick<span className="text-orange-600">.</span>ly</span>, Explore Powerful!
                    </h1>
                    <p className="mb-8 leading-relaxed text-white">
                        Enter your password to access the page.
                    </p>
                    <form className="flex w-full items-end justify-center" action={secureUnshort}>
                        {/* <div className="relative mr-4 w-2/4 text-left md:w-full lg:w-full xl:w-1/2" x-data="{ show: true }">
                            <label htmlFor="password" className="text-sm font-semibold leading-10 text-gray-200">Password</label>
                            <div className="relative">
                                <input required type={show ? 'password' : 'text'} id="password" name="password" className="w-full rounded-md border-y border-transparent border-t-gray-600 bg-gray-700 px-4 py-3 text-lg font-medium leading-8 shadow-2xl outline-none transition duration-200 ease-in-out placeholder:text-gray-400 focus:border focus:border-blue-600 focus:bg-transparent focus:ring-2 focus:ring-blue-600"
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-sm leading-5">
                                    <svg className={`h-5 text-gray-100 ${show ? 'block' : 'hidden'}`} fill="none" onClick={() => setShow(!show)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                        <path fill="currentColor" d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path>
                                    </svg>
                                    
                                    <svg className={`h-5 text-gray-100 ${show ? 'block' : 'hidden'}`} fill="none" onClick={() => setShow(!show)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                        <path fill="currentColor" d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div> */}

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
                        <button type="submit" className="bg-orange-600 hover:ring-2 hover:ring-orange-400 inline-flex flex-shrink-0 rounded border-0 px-6 py-4 text-lg font-semibold text-white transition focus:outline-none">Unlock</button>
                    </form>
                    {error && (
                        <p className="text-md text-orange-600 my-4 w-full animate-pulse font-semibold">{error}</p>
                    )}
                </div>
            </div>
        </main>
    );
}