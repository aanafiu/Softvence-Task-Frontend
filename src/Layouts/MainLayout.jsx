import React from 'react';
import Nav from '../Components/Navbar/Nav';

import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className='w-full'>
            <nav className='backdrop-blur-2xl sticky top-0 z-50'>
                <Nav/>
            </nav>
            <section>
                <Outlet></Outlet>
            </section>
            <footer>
                this is footer
            </footer>
        </div>
    );
};

export default MainLayout;