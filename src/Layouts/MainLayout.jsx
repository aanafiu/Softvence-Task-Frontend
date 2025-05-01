import React from 'react';
import Nav from '../Components/Navbar/Nav';

import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className='w-full'>
            <nav className='w-[95%] sm:w-[90%] md:w-[85%] lg:w-[75%] mx-auto sticky top-0 z-50'>
                <Nav/>
            </nav>
            <section className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[75%] mx-auto">
                <Outlet></Outlet>
            </section>
            <footer>
                this is footer
            </footer>
        </div>
    );
};

export default MainLayout;