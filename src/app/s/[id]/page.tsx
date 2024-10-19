"use client";

import { useRouter } from "next/router";
import { useEffect } from "react";

export default function secure() {
    const route = useRouter();
    const { id } = route.query;
    useEffect(() => {
        // redirect to a url from a api
        fetch(`/api/unshorten/${id}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.url) {
                    window.location.href = data.url;
                }
            });
    });
    return (
        <></>
    );
}