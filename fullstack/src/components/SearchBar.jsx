import React from 'react';

const SearchBar = () => {
  return (
    <div className="relative w-full max-w-md ">
      <form action="#" method="GET" className="text-white flex items-center">
        <input
          type="text"
          placeholder="Hii, i am ..."
          className="w-full pl-12 text-white pr-16 py-2  border-4 border-white h-[60px] bg-blue-600 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none "
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="absolute top-1/2 left-3 transform -translate-y-1/2 text-white w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m-3.15 0A7.5 7.5 0 1115 3.75a7.5 7.5 0 010 15z"
          />
        </svg>
        <button
          type="submit"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white text-blue-600 px-4 py-1 rounded-full hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SearchBar;