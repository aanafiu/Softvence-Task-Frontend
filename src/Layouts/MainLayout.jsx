import React from 'react';
import Nav from '../Components/Navbar/Nav';

import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className='w-[95%] sm:w-[90%] md:w-[85%] lg:w-[75%] mx-auto'>
            <nav className='h-full w-full'>
                <Nav/>
            </nav>
            <section className="hero">
                <Outlet></Outlet>
            </section>
            <footer>
                this is footer
            </footer>
        </div>
    );
};

export default MainLayout;