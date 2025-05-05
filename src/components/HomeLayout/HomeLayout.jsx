import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Navbar';
import Footer from './Footer';

const HomeLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
           <div className='lg:min-h-[calc(100vh-280px)]md:min-h-[calc(100vh-280px)] min-h-[calc(100vh-80px)]'>
           <Outlet></Outlet>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;