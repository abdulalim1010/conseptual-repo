import React from 'react';
import { NavLink } from 'react-router';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';

const Mainlayouts = () => {
  return (
    <>
      <Navbar />
      
      <div className='bg-gray-200 min-h-[calc(100vh-130px)]'>
        <div className='max-w-screen-2xl mx-auto px-8 md:px-12 lg:px-16 xl:px-24'>
          <Outlet />
          </div>
    </div>
     <Footer/>
      
    </>
  );
};

export default Mainlayouts;