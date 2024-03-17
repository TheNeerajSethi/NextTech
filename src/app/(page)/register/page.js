"use client"
import React, { useState } from 'react';
import Login from "../../componant/login";
import Link from "next/link";

const RegisterPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    function sendData() {
        if (!email || !password || !confirmPassword) {
            setErrorMessage("Please fill in all fields.");
        } else if (!isValidEmail(email)) {
            setErrorMessage("Please enter a valid email address.");
        } else if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match.");
        } else {
            console.log(email, password, confirmPassword);
            setErrorMessage(""); // Clear error message if fields are not empty and passwords match

            // Reset input fields after successful registration
            setPassword("");
            setConfirmPassword("");
            setEmail("");
        }
    }

    function isValidEmail(email) {
        // Regular expression for validating email format
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function handleForm(e) {
        e.preventDefault();
        sendData();
    }

    return (
        <div className="mb-[70%] lg:mb-[20%] mt-10">
            <div className="">
                <p className="text-center lg:text-3xl text-2xl font-bold">Register To Get Content Access!</p>
                <form onSubmit={handleForm} className="justify-center items-center flex m-5">
                    <div className="flex flex-col gap-2">
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border-2 px-2 py-1 outline-none border-sky-800" placeholder="Enter Email Id" />
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="border-2 px-2 outline-none py-1 border-sky-800" placeholder="Enter Password" />
                        <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" className="border-2 px-2 outline-none py-1 border-sky-800" placeholder="Confirm Password" />
                        <button type="submit" className="bg-sky-700 text-white py-2">Register</button>
                        {errorMessage && <p className="text-red-500">{errorMessage}</p>}

                        <p className="font-light text-center m-1">Or Continue with </p>
                        <Login />
                        <p className="">Already Registered User?
                        <Link className="underline" href="/login">Click here to login</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;
