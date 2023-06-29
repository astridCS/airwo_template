import { useState } from "react";
import PropTypes from "prop-types";

const SearchInput = ({ search, setSearch }) => {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 text-gray-400 top-1/2 transform -translate-y-1/2">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      </div>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="pl-8 pr-4 py-2 mb-4 w-64 sm:w-auto border border-slate-600 rounded-md dark:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
      />
    </div>
  );
};

SearchInput.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func,
};

export default SearchInput;
