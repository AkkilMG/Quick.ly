"use client";

import { useEffect } from "react";

export default function secure({ params }: { params: { id: string } }) {
    var id = decodeURIComponent(params.id);
    useEffect(() => {
        fetch(`/api/unshorten/short`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ code: id }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success && data.url) {
                    window.location.href = data.url;
                }
            });
    });
    return (
        <div className="flex items-center justify-center h-screen">
            <h1 className="text-center font-bold text-4xl text-white">Redirecting...</h1>
        </div>
    );
}