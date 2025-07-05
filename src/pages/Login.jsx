import React, { useState } from 'react';
import { FaBuilding } from 'react-icons/fa';
import Button from '@buttons/Button';
import Dropdowns from '@dropdowns/Dropdowns';
import FormFields from '@formfields/FormFields';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userRole, setUserRole] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email, password, userRole, rememberMe });
    };

    const formFields = [
        {
            id: 'email',
            type: 'email',
            value: email,
            onChange: (e) => setEmail(e.target.value),
            placeholder: 'Your Email',
            required: true
        },
        {
            id: 'password',
            type: 'password',
            value: password,
            onChange: (e) => setPassword(e.target.value),
            placeholder: 'Your Password',
            required: true
        }
    ];

    const roleOptions = [
        { value: 'punong', label: 'Punong Barangay' },
        { value: 'admin', label: 'Administrator' },
        { value: 'secretary', label: 'Secretary' }
    ];

    return (
        <div className="flex h-screen">
            <div className="hidden md:flex md:w-5/12 bg-brand-gradient relative items-center justify-center">
                <div className="absolute inset-0 color-light-blue opacity-10"></div>
                <div className="relative z-10 flex justify-center items-center h-full">
                    <div className="w-48 h-48  bg-white flex items-center justify-center rounded-full shadow-lg">

                        <img
                            src="/static/img/template-logo2.png"
                            alt="Company Logo"
                            className="w-fulla h-full object-contain"
                        />
                    </div>
                </div>
            </div>

            <div className="w-full md:w-7/12 flex items-center justify-center px-8">
                <div className="w-full max-w-md">
                    <div className="mb-8">
                        <h3 className="text-3xl font-medium text-gray-900 border-l-4 border-deep-blue pl-3">
                            Admin Access
                        </h3>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <FormFields fields={formFields} />

                        <div className="mb-6">
                            <Dropdowns
                                options={roleOptions}
                                value={userRole}
                                onChange={(e) => setUserRole(e.target.value)}
                                placeholder="Select Role"
                            />
                        </div>

                        <div className="flex justify-between items-center mb-6">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={() => setRememberMe(!rememberMe)}
                                    className="form-checkbox h-4 w-4 text-green-600"
                                />
                                <span className="ml-2 text-sm text-gray-600">Remember me</span>
                            </label>
                            <a href="/resident-login" className="text-deep-blue hover:text-deep-blue text-sm">
                                Resident Login
                            </a>
                        </div>

                        <Button type="submit">Login</Button>

                        <div className="text-center mt-6">
                            <a href="/homepage" className="text-gray-600 hover:text-deep-blue">
                                Back to Homepage
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;