import React from 'react';
import Navber from '../components/Navber';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const Root = () => {
    return (
        <div>
            {/* Navbar */}
            <Navber />

            {/* Dynamic Laoute */}
            <div className="min-h-[calc(100vh-300px)] w-11/12 mx-auto py-14">
                <Outlet />
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Root;