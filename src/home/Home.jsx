import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from '../components/Banner';

const Home = () => {
    return (
        <div>
            {/* Banner */}
            <Banner />













            {/* LayOutes */}
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default Home;