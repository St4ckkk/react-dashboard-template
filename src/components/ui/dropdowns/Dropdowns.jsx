import React from 'react'

const Dropdowns = ({
    options,
    value,
    onChange,
    className = "",
    placeholder = "Select...",
    name
}) => {
    return (
        <div className="relative w-full">
            <select
                name={name}
                value={value}
                onChange={onChange}
                className={`w-full py-2 px-4 border border-gray-300 rounded-md bg-white appearance-none ${className}`}
            >
                {placeholder && <option value="">{placeholder}</option>}
                {options.map((option, index) => (
                    <option key={index} value={option.value || option}>
                        {option.label || option}
                    </option>
                ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                <svg className="h-4 w-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
            </div>
        </div>
    )
}

export default Dropdowns