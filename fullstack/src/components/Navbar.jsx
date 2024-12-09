import React from 'react';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <img src={logo} className='h-[70px] m-2 rounded-[50%]' alt="" />
        </h1>
        <ul className="flex space-x-10 mr-40 text-xl">
          <li className="hover:underline"><a href="#home">Home</a></li>
          <li className="hover:underline"><a href="#about">About</a></li>
          <li className="hover:underline"><a href="#contact">Contact Us</a></li>
          <li className="hover:underline"><a href="#profile">Profile</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
