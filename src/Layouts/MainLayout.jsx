import React from 'react';
import Nav from '../Components/Navbar/Nav';

import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';

const MainLayout = () => {
    return (
        <div className='w-full'>
            <nav className='backdrop-blur-2xl sticky top-0 z-50'>
                <Nav/>
            </nav>
            <section>
                <Outlet></Outlet>
            </section>
            <footer className='py-5 mt-[100px]'> 
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;