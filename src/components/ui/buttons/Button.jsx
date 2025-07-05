import React from 'react';

const Button = ({ type, onClick, className, children }) => {
    return (
        <button
            type={type || "button"}
            onClick={onClick}
            className={className || "w-full bg-deep-blue hover:bg-light-blue text-xs text-white py-2 px-4 rounded cursor-pointer"}
        >
            {children}
        </button>
    );
};

export default Button;