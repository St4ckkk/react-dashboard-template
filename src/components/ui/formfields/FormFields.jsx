import React from 'react';

const FormFields = ({ fields = [] }) => {
    return (
        <>
            {fields && fields.map((field) => (
                <div className="mb-6" key={field.id}>
                    <label className="block text-gray-600 font-medium mb-2">
                        {field.placeholder}
                    </label>
                    <input
                        type={field.type}
                        value={field.value}
                        onChange={field.onChange}
                        className={`w-full p-3 border border-gray-200 rounded ${field.readOnly ? 'bg-gray-100' : ''}`}
                        placeholder={field.placeholder}
                        required={field.required}
                        readOnly={field.readOnly}
                    />
                </div>
            ))}
        </>
    );
};

export default FormFields;