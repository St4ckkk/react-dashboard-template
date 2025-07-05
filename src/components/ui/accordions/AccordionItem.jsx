import React from 'react';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';

const AccordionItem = ({ title, children, isOpen, toggleItem, isLast, variant = 'default' }) => {
    // Determine item border classes based on variant
    const itemClasses = variant === 'default'
        ? `${!isLast ? 'border-b border-gray-200' : ''}`
        : 'mb-3'; // Add margin between borderless items

    // Determine button classes based on variant
    const buttonClasses = variant === 'default'
        ? "w-full flex items-center justify-between p-4 text-left focus:outline-none focus:ring-2 focus:ring-blue-100 bg-gray-50 hover:bg-gray-100"
        : "w-full flex items-center justify-between p-3 text-left focus:outline-none rounded-lg bg-gray-50 hover:bg-gray-100";

    // Determine content classes based on variant
    const contentClasses = variant === 'default'
        ? "p-4 text-gray-700 accordion-body"
        : "p-3 pt-2 text-gray-700 accordion-body";

    return (
        <div className={itemClasses}>
            <button
                className={buttonClasses}
                onClick={toggleItem}
                aria-expanded={isOpen}
            >
                <h3 className="text-base font-medium text-deep-blue">{title}</h3>
                {isOpen ? (
                    <FiChevronUp className="flex-shrink-0 ml-2 h-5 w-5 text-deep-blue transition-transform duration-200" />
                ) : (
                    <FiChevronDown className="flex-shrink-0 ml-2 h-5 w-5 text-deep-blue transition-transform duration-200" />
                )}
            </button>
            <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className={contentClasses}>{children}</div>
            </div>
        </div>
    );
};

export default AccordionItem;