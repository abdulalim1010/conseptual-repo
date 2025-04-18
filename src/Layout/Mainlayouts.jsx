import React from 'react';
import { NavLink } from 'react-router';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';

const Mainlayouts = () => {
  return (
    <>
      <Navbar/>
      <Outlet />
      <h1>footer</h1>
      
    </>
  );
};

export default Mainlayouts;