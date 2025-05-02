import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from '../components/Banner';

const Home = () => {
    return (
        <div className="space-y-10">
            {/* ✅ Hero Banner */}
            <Banner />

            {/* ✅ Features Section */}
            <section className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-6">Why Choose AuthVerse?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-base-200 p-6 rounded-lg shadow">
                        <h3 className="font-semibold text-xl mb-2">Secure Login</h3>
                        <p>We use Firebase Authentication to keep your account safe and secure.</p>
                    </div>
                    <div className="bg-base-200 p-6 rounded-lg shadow">
                        <h3 className="font-semibold text-xl mb-2">Multiple Auth Options</h3>
                        <p>Login with Google, Facebook, GitHub or Email/Password.</p>
                    </div>
                    <div className="bg-base-200 p-6 rounded-lg shadow">
                        <h3 className="font-semibold text-xl mb-2">User Dashboard</h3>
                        <p>Manage your profile, see updates, and explore your options easily.</p>
                    </div>
                </div>
            </section>

            {/* ✅ Popular Categories Section */}
            <section className="bg-base-100 py-10">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-6">Popular Categories</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div className="bg-accent text-white p-4 rounded-lg">Tech</div>
                        <div className="bg-accent text-white p-4 rounded-lg">Design</div>
                        <div className="bg-accent text-white p-4 rounded-lg">Marketing</div>
                        <div className="bg-accent text-white p-4 rounded-lg">Business</div>
                    </div>
                </div>
            </section>

            {/* ✅ Testimonials Section */}
            <section className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-6">What Our Users Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-base-200 p-6 rounded-lg shadow">
                        <p>“AuthVerse made login and user management a breeze. Highly recommend!”</p>
                        <p className="mt-2 font-semibold">— Aroshi Akter</p>
                    </div>
                    <div className="bg-base-200 p-6 rounded-lg shadow">
                        <p>“Very smooth experience. I was able to set up everything in minutes.”</p>
                        <p className="mt-2 font-semibold">— All Amin</p>
                    </div>
                </div>
            </section>

            {/* ✅ Nested Pages */}
            <div className="max-w-6xl mx-auto px-4">
                <Outlet />
            </div>
        </div>
    );
};

export default Home;
