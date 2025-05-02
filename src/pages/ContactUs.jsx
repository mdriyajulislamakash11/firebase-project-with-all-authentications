import React, { useState } from 'react';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for contacting us!");
        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-10 space-y-12">
            {/* ✅ Contact Form */}
            <section>
                <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
                <form onSubmit={handleSubmit} className="bg-base-200 p-6 rounded-lg shadow-md max-w-3xl mx-auto">
                    <div className="mb-4">
                        <label className="block text-xl font-semibold mb-2" htmlFor="name">Your Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleChange} 
                            className="w-full px-4 py-2 rounded-lg border border-gray-300" 
                            required 
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-xl font-semibold mb-2" htmlFor="email">Your Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            className="w-full px-4 py-2 rounded-lg border border-gray-300" 
                            required 
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-xl font-semibold mb-2" htmlFor="message">Your Message</label>
                        <textarea 
                            id="message" 
                            name="message" 
                            value={formData.message} 
                            onChange={handleChange} 
                            className="w-full px-4 py-2 rounded-lg border border-gray-300" 
                            rows="4" 
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="w-full py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700">
                        Send Message
                    </button>
                </form>
            </section>

            {/* ✅ Contact Info */}
            <section className="text-center">
                <h2 className="text-3xl font-bold mb-6">Our Contact Information</h2>
                <p className="text-lg mb-4">Email: <span className="text-blue-600">support@authverse.com</span></p>
                <p className="text-lg mb-4">Phone: <span className="text-blue-600">+880 123 456 7890</span></p>
                <p className="text-lg">Address: <span className="text-blue-600">1234 AuthVerse St, Dhaka, Bangladesh</span></p>
            </section>
        </div>
    );
};

export default ContactUs;
