import React from "react";

const ProductIntro = () => {
  const handlePurchaseClick = () => {
    alert("Purchase UI Kit clicked!");
  };

  const handleLearnMoreClick = () => {
    alert("Learn More clicked!");
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-12 bg-gray-100 min-h-screen">
      {/* Text Section */}
      <div className="text-center md:text-left md:w-1/2">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Introduce Your Product <br /> Quickly & Effectively
        </h1>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa.
        </p>
        <div className="flex justify-center md:justify-start space-x-4">
          <button
            onClick={handlePurchaseClick}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Purchase UI Kit
          </button>
          <button
            onClick={handleLearnMoreClick}
            className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-200 transition"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Illustration Section */}
      <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
        <div className="relative">
          {/* Screen Illustration */}
          <div className="bg-gray-200 rounded-md p-6 w-[300px] md:w-[400px] shadow-lg">
            <div className="bg-blue-400 h-16 w-16 mx-auto rounded-md mb-4"></div>
            <div className="bg-gray-400 h-6 mb-2"></div>
            <div className="bg-gray-300 h-6"></div>
          </div>

          {/* Tool Illustration */}
          <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-8">
            <div className="bg-gray-300 h-16 w-6 rounded-md shadow-lg"></div>
            <div className="bg-gray-500 h-6 w-6 rounded-full mt-2 mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductIntro;
