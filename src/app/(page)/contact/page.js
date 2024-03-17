"use client"
import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [formErrors, setFormErrors] = useState({
        name: false,
        email: false,
        message: false
    });
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        // Clear error message when user starts typing
        setFormErrors({
            ...formErrors,
            [e.target.name]: false
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Check for blank fields
        const errors = {};
        Object.keys(formData).forEach((key) => {
            if (!formData[key].trim()) {
                errors[key] = true;
            }
        });
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }
        // Simulate form submission (replace with actual submission logic)
        console.log(formData);
        // Reset form fields and show success message
        setFormData({
            name: '',
            email: '',
            message: ''
        });
        setFormSubmitted(true);
    };

    return (
        <div className="max-w-4xl mx-auto px-4 mt-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
            {formSubmitted ? (
                <div className="text-green-700 text-center mb-8">
                    Your message has been sent successfully!
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                        <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={`p-3 w-full border rounded-md ${formErrors.name ? 'border-red-500' : 'border-gray-300'}`} />
                        {formErrors.name && <p className="text-red-500 text-sm mt-1">Name is required</p>}
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={`p-3 w-full border rounded-md ${formErrors.email ? 'border-red-500' : 'border-gray-300'}`} />
                        {formErrors.email && <p className="text-red-500 text-sm mt-1">Email is required</p>}
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                        <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" className={`p-3 w-full border rounded-md ${formErrors.message ? 'border-red-500' : 'border-gray-300'}`}></textarea>
                        {formErrors.message && <p className="text-red-500 text-sm mt-1">Message is required</p>}
                    </div>
                    <div className="sm:col-span-2">
                        <button type="submit" className="bg-sky-700 text-white py-3 px-6 rounded-md hover:bg-sky-900 w-full">Submit</button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default ContactForm;
