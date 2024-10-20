"use client";

import { useState } from "react";

export default function Home() {
  const [url, setURL] = useState("");
  const [short, setShort] = useState("");
  const [error, setError] = useState("");
  async function copyShortURL() {
    try {
      await navigator.clipboard.writeText(short);
      alert("Copied to clipboard");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  }
  async function shortURL(event: any) {
    if (url === "") {
      setError("Please enter a URL");
      return;
    }
    const response = await fetch("/api/shorten/short", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: url }),
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
              <p className="mb-8 leading-relaxed text-white">Copy your long boring url. Paste it below. {!(short==="") && (`Then 💥 You got it, right?`)}
              </p>
              {!(short==="") ? (
                <div className="flex w-full items-end justify-center">
                  <div className="relative mr-4 w-3/5 text-left md:w-full lg:w-full xl:w-1/2">
                      <label htmlFor="long-url" className="text-sm font-semibold leading-10 text-gray-200">Your shorten Url</label>
                      <div className="relative">
                          <input className="w-full rounded-md border-y border-transparent border-t-gray-600 bg-gray-700 px-4 py-3 text-lg font-medium leading-8 shadow-2xl outline-none transition duration-200 ease-in-out focus:border focus:border-blue-600 focus:bg-transparent focus:ring-2 focus:ring-blue-600"
                              value={short} readOnly />
                          <a href={short} target="_blank">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="absolute right-3 top-1/2 h-6 w-6 -translate-y-1/2 transform text-orange-600">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                          </svg>
                          </a>
                      </div>
                  </div>
                  <button onClick={copyShortURL} type="button" className="inline-flex flex-shrink-0 rounded border-0 bg-orange-600 px-6 py-4 text-lg font-semibold text-white transition hover:bg-orange-600 hover:brightness-50 focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-6 w-6 transition">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
                    </svg>
                    COPY
                  </button>
                </div>
              ): (
                <form className="flex w-full items-end justify-center" action={shortURL}>
                  <div className="relative mr-4 w-2/4 text-left md:w-full lg:w-full xl:w-1/2">
                      <label htmlFor="url" className="text-sm font-semibold leading-10 text-gray-200">Your long Url</label>
                      <input className="focus:ring-blue-600 focus:border-blue-600 w-full rounded-md border-y border-transparent border-t-gray-600 bg-gray-700 px-4 py-3 text-lg font-medium leading-8 shadow-2xl outline-none transition duration-200 ease-in-out placeholder:text-gray-400 focus:border focus:bg-transparent focus:ring-2"
                          onChange={(e) => setURL(e.target.value)} type="url" name="url" placeholder="https://example.com/" required />
                  </div>
                  <button type="submit" className="bg-orange-600 hover:ring-2 hover:ring-orange-400 inline-flex flex-shrink-0 rounded border-0 px-6 py-4 text-lg font-semibold text-white transition focus:outline-none">Shorten URL</button>
                </form>
              )}
              {error && (
                <p className="text-md text-orange-600 my-4 w-full animate-pulse font-semibold">{error}</p>
              )}
          </div>
      </div>
    </main>
  );
}
