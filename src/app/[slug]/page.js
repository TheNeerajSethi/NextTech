// pages/Page.js or pages/Page.tsx
import React from 'react';
import Link from "next/link";

const Page = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <p className="text-2xl md:text-3xl lg:text-4xl text-center">Hello, This is a Dynamic Route</p>
            <Link className="mt-4 text-blue-500 hover:underline" href="/">
                Go back to Home
            </Link>
        </div>
    );
};

export default Page;
