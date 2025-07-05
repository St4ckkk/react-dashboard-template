import React from 'react';

const TextAreaField = ({
    value,
    onChange,
    label,
    placeholder = 'Enter text here...',
    required = false,
    className = '',
    rows = 4
}) => {
    return (
        <div className="mb-4">
            {label && (
                <label className="bg-white block text-gray-600 font-medium mb-2">
                    {label}
                    {required && <span className="text-red-500 ml-1">*</span>}
                </label>
            )}
            <textarea
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                rows={rows}
                className={`w-full p-3 border border-gray-200 rounded resize-none bg-white ${className}`}
            />
        </div>
    );
};

export default TextAreaField;