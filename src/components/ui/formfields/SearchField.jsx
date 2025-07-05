import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchField = ({ value, onChange, placeholder = "Search...", className = "" }) => {
    return (
        <div className={`relative flex items-center ${className}`}>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
            </div>
            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                autoComplete="off"
            />
        </div>
    );
};

export default SearchField;