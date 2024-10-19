"use client";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function secureRedirect() {
    const router = useRouter();
    useEffect(() => {
        router.push("/secure");
    }, [router]);

    return null;
}