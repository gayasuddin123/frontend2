import React from 'react';
import image from "../assets/image.jpg"
const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container  grid grid-cols-1 md:grid-cols-4 gap-6 mx-auto">
        <img src={image} alt="" className='ml-3'/>
        <div className='ml-10'>
          <h3 className="font-bold text-lg mb-2 text-blue-600">Contact us</h3>
          <ul className="flex flex-col">
            <li><a href="#" className="hover:underline">NH-24 Sitapur Road BKT Lucknow UP 226001</a></li>
            <li><a href="#" className="hover:underline">Addmission@bncet.ac.in</a></li>
            <li><a href="#" className="hover:underline">723546871</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2 text-blue-600">Students </h3>
          <ul className="flex  flex-col">
            <li><a href="#" className="hover:underline">Course Eligibility</a></li>
            <li><a href="#" className="hover:underline">Fee Structure</a></li>
            <li><a href="#" className="hover:underline">College Scholarship</a></li>
            <li><a href="#" className="hover:underline">Goverment Scholarship</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2 text-blue-600">Campus </h3>
          <ul className="flex  flex-col">
            <li><a href="#" className="hover:underline">Service</a></li>
            <li><a href="#" className="hover:underline">Academics</a></li>
            <li><a href="#" className="hover:underline">Addmission</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;

