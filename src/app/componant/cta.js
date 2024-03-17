"use client"
import React, { useState } from 'react';
import { reset } from "next/dist/lib/picocolors";

const Cta = () => {
    const [email, setEmail] = useState("");
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    function handlemail() {
        if (isValidEmail) {
            alert("Thanks To Submit " + email);
            setEmail("");
        }
    }

    function handleform(e) {
        e.preventDefault();
        if (isValidEmail) {
            handlemail();
        } else {
            setErrorMessage("Please enter a valid email address.");
        }
    }

    function validateEmail(email) {
        // Regular expression for email validation
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    function handleEmailChange(e) {
        const inputEmail = e.target.value;
        setEmail(inputEmail);
        setIsValidEmail(validateEmail(inputEmail));
        // Clear error message when user starts typing a new email
        if (errorMessage) {
            setErrorMessage("");
        }
    }

    return (
        <div>
            <div className="bg-sky-700 text-center rounded-lg p-6">
                <h2 className="text-2xl font-bold text-white mb-4">Discover more!</h2>
                <p className="text-white mb-4">Stay informed with our latest updates, exclusive content, and insider insights!</p>
                <form onSubmit={handleform} className="flex flex-col sm:flex-row items-center sm:justify-center">
                    <input value={email} onChange={handleEmailChange} type="email" className="border border-gray-300 rounded-md py-2 px-4 mb-2 sm:mb-0 sm:mr-2 focus:outline-none" placeholder="Your email address" />
                    <button type="submit" className="bg-white text-sky-700 border-2 rounded-md py-2 px-4 hover:bg-sky-700 hover:text-white hover:border-2 focus:outline-none">
                        Subscribe
                    </button>
                </form>
                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            </div>
        </div>
    );
};

export default Cta;
