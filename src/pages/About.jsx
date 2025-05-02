import React from 'react';

const About = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-10 space-y-12">
            {/* ✅ Introduction */}
            <section>
                <h1 className="text-4xl font-bold mb-4 text-center">About AuthVerse</h1>
                <p className="text-lg text-center text-gray-600">
                    AuthVerse is a powerful and user-friendly authentication solution built with Firebase. 
                    We aim to simplify user login, registration, and security through modern tools.
                </p>
            </section>

            {/* ✅ Mission & Vision */}
            <section className="grid md:grid-cols-2 gap-8">
                <div className="bg-base-200 p-6 rounded-lg shadow">
                    <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
                    <p>
                        To provide a seamless and secure authentication experience for both developers and users. 
                        We focus on making login systems fast, reliable, and flexible.
                    </p>
                </div>
                <div className="bg-base-200 p-6 rounded-lg shadow">
                    <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
                    <p>
                        To become the go-to authentication solution for modern web applications, 
                        ensuring users always feel safe and empowered when accessing their data.
                    </p>
                </div>
            </section>

            {/* ✅ Our Team */}
            <section>
                <h2 className="text-3xl font-bold text-center mb-6">Meet the Team</h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
                    <div className="bg-base-200 p-4 rounded-lg">
                        <h3 className="font-semibold text-xl">Md Riyajul Islam Akash</h3>
                        <p className="text-sm text-gray-600">Founder & Developer</p>
                    </div>
                    <div className="bg-base-200 p-4 rounded-lg">
                        <h3 className="font-semibold text-xl">All Amin</h3>
                        <p className="text-sm text-gray-600">UX/UI Designer</p>
                    </div>
                    <div className="bg-base-200 p-4 rounded-lg">
                        <h3 className="font-semibold text-xl">Ruma Akter</h3>
                        <p className="text-sm text-gray-600">Support Lead</p>
                    </div>
                </div>
            </section>

            {/* ✅ Contact Info */}
            <section className="text-center">
                <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                <p>Email: <span className="text-blue-600">hafejmohammadakash@gmail.com</span></p>
                <p>GitHub: <a className="text-blue-600" href="https://github.com/mdriyajulislamakash11" target="_blank">mdriyajulislamakash11</a></p>
                <p>LinkedIn: <a className="text-blue-600" href="https://www.linkedin.com/in/mdriyajulislam/" target="_blank">mdriyajulislam</a></p>
            </section>
        </div>
    );
};

export default About;
