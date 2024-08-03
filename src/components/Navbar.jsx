import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { useState } from 'react';


function Navbar() {

   const [Toggle, setToggle] = useState(false);

   const isToggle =() => {setToggle (!Toggle)}

   const closeMenu = () => {
    setToggle(false);
  };

  return (
    <div className='bg-[#0F0F0F] text-white text-center'>

      <nav className='container flex items-center justify-between p-4 mx-auto lg:px-12'>
      <h1 className='z-10 text-3xl font-semibold'>
        <NavLink to="/">GridX</NavLink>
      </h1>

      
    
    <div className='hidden space-x-12 text-lg md:flex '>
      <NavLink  className={({ isActive }) => `${isActive ? 'text-white' : 'text-gray-500'} hover:text-white`}             
                to= "/">
         Home 
      </NavLink>
      <NavLink className={({ isActive }) => `${isActive ? 'text-white' : 'text-gray-500'} hover:text-white`}             
               to="/About">
          About
      </NavLink>

      <NavLink className={({ isActive }) => `${isActive ? 'text-white' : 'text-gray-500'} hover:text-white`} 
                to="/Work">
          Works
      </NavLink>

      <NavLink className={({ isActive }) => `${isActive ? 'text-white' : 'text-gray-500'} hover:text-white`} 
              to="/Contact">
          Contact
      </NavLink>
    </div>

    <NavLink to="/Contact"><h1 className='text-lg bg-[#323232] px-8 py-1 rounded-xl text-white hover:bg-white hidden md:block hover:text-black duration-200	 '>Let's Talk</h1></NavLink>

    <button className='z-10 text-3xl md:hidden transition-200' onClick={isToggle}>
    {Toggle? <RxCross2 /> : <FiMenu />}

    </button>
      </nav>


      <div className={`text-lg flex md:hidden text-center justify-center items-center fixed flex-col duration-300	 space-y-4 bg-[#0F0F0F] w-full h-auto p-4 ${Toggle? "top-[67px]": " top-[-200px]" }`}>
      <NavLink onClick={closeMenu} className={({ isActive }) => `${isActive ? 'text-white' : 'text-gray-500'} hover:text-white`}             
                to= "/">
         Home 
      </NavLink>
      <NavLink onClick={closeMenu} className={({ isActive }) => `${isActive ? 'text-white' : 'text-gray-500'} hover:text-white`}             
               to="/About">
          About
      </NavLink>

      <NavLink onClick={closeMenu} className={({ isActive }) => `${isActive ? 'text-white' : 'text-gray-500'} hover:text-white`} 
                to="/Work">
          Works
      </NavLink>

      <NavLink onClick={closeMenu} className={({ isActive }) => `${isActive ? 'text-white' : 'text-gray-500'} hover:text-white`} 
              to="/Contact">
          Contact
      </NavLink>
    </div>


    </div>
    

  );
}

export default Navbar;
