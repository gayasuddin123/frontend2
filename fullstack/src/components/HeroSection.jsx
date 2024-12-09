import React from 'react';
import SearchBar from './SearchBar';
import poster from "../assets/poster-removebg-preview.png"

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center bg-blue-600 py-10 px-4">
      <div className="md:w-1/2 text-center md:text-left text-center w-1/3 mx-10">
        <h2 className="text-6xl font-bold text-white mb-4 ">
          Technova Samera 2.0
        </h2>
        <p className="text-white text-lg mb-4 ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi voluptas recusandae quis! Sequi, facilis dolor est amet voluptatum non cum vero velit quasi, odio doloremque aspernatur. Facilis, reprehenderit molestias fugit maiores reiciendis exercitationem quisquam dolorum maxime cumque hic, magni sapiente ipsa iure dicta mollitia consequuntur deleniti, possimus aut minima eum iste amet assumenda nam? Saepe exercitationem magnam repudiandae tenetur reprehenderit.
        </p>
        <SearchBar />
        
      </div>
      <div className="md:w-1/2 bg-transparent flex justify-center">
        <img
          src={poster}
          alt="Hero Illustration"
          className="max-w-full h-auto bg-blue-600 shadow-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;

