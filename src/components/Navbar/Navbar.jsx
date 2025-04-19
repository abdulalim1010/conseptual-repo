import React from 'react';
import { Link, NavLink } from 'react-router';
import { FaShoppingCart } from "react-icons/fa";
import { FaBookOpenReader } from "react-icons/fa6";




const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm max-w-screen-2xl mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn cursor-pointer mr-2 lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <ul className="menu menu-horizontal px-1">
          <li><NavLink className={({ isActive }) => (isActive ? 'text-white bg-amber-800' : '')} to='/'>Home</NavLink></li>
          
      <li>
       <NavLink className={({isActive})=>(isActive?'text-white bg-yellow-300':'')} to='/about'>About</NavLink>
      </li>
      <li><NavLink className={({isActive})=>(isActive?'text-white bg-blue-600':'')} to='/cart'><FaShoppingCart size={20} />
</NavLink></li>
      <li><NavLink className={({isActive})=>(isActive?'text-white bg-green-500':'')} to='/favorite'><FaBookOpenReader /> </NavLink></li>
    </ul> 
        
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost text-xl">Amar time notsto</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
   
  </div>
      <div className="navbar-end  hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><NavLink className={({ isActive }) => (isActive ? 'text-white bg-amber-800' : '')} to='/'>Home</NavLink></li>
          
      <li>
       <NavLink className={({isActive})=>(isActive?'text-white bg-yellow-300':'')} to='/about'>About</NavLink>
      </li>
      <li><NavLink className={({isActive})=>(isActive?'text-white bg-blue-600':'')} to='/cart'><FaShoppingCart size={20} />
</NavLink></li>
      <li><NavLink className={({isActive})=>(isActive?'text-white bg-green-500':'')} to='/favorite'><FaBookOpenReader /> </NavLink></li>
    </ul> 
   
  </div>
</div>

  );
};

export default Navbar;