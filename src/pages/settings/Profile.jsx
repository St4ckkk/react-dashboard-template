import React, { useState } from 'react';
import DashboardLayout from '@components/DashboardLayout';
import { FaDownload, FaUser } from 'react-icons/fa';
import Button from '@buttons/Button';
import Select from '@dropdowns/Dropdowns';
import FormFields from '@formfields/FormFields';
import Dropdowns from '../../components/ui/dropdowns/Dropdowns';

const Profile = () => {
    const [profileData, setProfileData] = useState({
        name: 'Keyan Andy Delgado',
        occupation: 'Software Engineer',
        birthDate: '05/22/2002',
        birthPlace: 'Santo Nino, South Cotabato',
        gender: 'Male',
        civilStatus: 'Married',
        contactNumber: '09280693642',
        email: 'keyanandydelgado@gmail.com',
        purok: 'Purok Sampaguita',
        residentSince: '2000'
    });

    const [profileImage, setProfileImage] = useState('/static/img/officials/keyan.jpg');
    const [imageError, setImageError] = useState(false);

    const handleInputChange = (field, value) => {
        setProfileData({
            ...profileData,
            [field]: value
        });
    };

    const handleUpdatePhoto = () => {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';
        fileInput.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    setProfileImage(e.target.result);
                    setImageError(false);
                };
                reader.readAsDataURL(file);
            }
        };
        fileInput.click();
    };

    const genderOptions = [
        { value: 'Female', label: 'Female' },
        { value: 'Male', label: 'Male' },
        { value: 'Other', label: 'Other' }
    ];

    const civilStatusOptions = [
        { value: 'Single', label: 'Single' },
        { value: 'Married', label: 'Married' },
        { value: 'Widowed', label: 'Widowed' },
        { value: 'Divorced', label: 'Divorced' }
    ];

    const purokOptions = [
        { value: 'Purok 1', label: 'Purok 1' },
        { value: 'Purok 2', label: 'Purok 2' },
        { value: 'Purok 3', label: 'Purok 3' },
        { value: 'Purok 4', label: 'Purok 4' },
        { value: 'Purok 5', label: 'Purok 5' }
    ];

    // Create form fields configuration for the FormFields component
    const nameFields = [
        {
            id: 'name',
            type: 'text',
            value: profileData.name,
            onChange: (e) => handleInputChange('name', e.target.value),
            placeholder: 'Name',
            required: true,
            readOnly: true
        }
    ];

    const occupationFields = [
        {
            id: 'occupation',
            type: 'text',
            value: profileData.occupation,
            onChange: (e) => handleInputChange('occupation', e.target.value),
            placeholder: 'Occupation',
            required: true
        }
    ];

    const birthDateFields = [
        {
            id: 'birthDate',
            type: 'text',
            value: profileData.birthDate,
            onChange: (e) => handleInputChange('birthDate', e.target.value),
            placeholder: 'Birth Date',
            required: true,
            readOnly: true
        }
    ];

    const birthPlaceFields = [
        {
            id: 'birthPlace',
            type: 'text',
            value: profileData.birthPlace,
            onChange: (e) => handleInputChange('birthPlace', e.target.value),
            placeholder: 'Birth Place',
            required: true
        }
    ];

    const contactNumberFields = [
        {
            id: 'contactNumber',
            type: 'text',
            value: profileData.contactNumber,
            onChange: (e) => handleInputChange('contactNumber', e.target.value),
            placeholder: 'Contact Number',
            required: true
        }
    ];

    const emailFields = [
        {
            id: 'email',
            type: 'email',
            value: profileData.email,
            onChange: (e) => handleInputChange('email', e.target.value),
            placeholder: 'Email',
            required: true
        }
    ];

    const residentSinceFields = [
        {
            id: 'residentSince',
            type: 'text',
            value: profileData.residentSince,
            onChange: (e) => handleInputChange('residentSince', e.target.value),
            placeholder: 'Resident Since',
            required: true,
            readOnly: true
        }
    ];

    return (
        <>
            <DashboardLayout
                title="Dashboard"
                breadcrumb="Profile"
                icon={<FaUser className="mr-1 text-gray-500" />}
            >
                <div className="p-6">
                    <div className="flex flex-col md:flex-row">
                        {/* Profile Photo Section */}
                        <div className="md:w-1/4 mb-6 md:mb-0 flex flex-col items-center">
                            <div className="relative w-70 h-70 rounded-full overflow-hidden mb-4">
                                {!imageError ? (
                                    <img
                                        src={profileImage}
                                        alt="Profile"
                                        className="w-full h-full object-cover"
                                        onError={() => setImageError(true)}
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                        <FaUser className="w-20 h-20 text-gray-400" />
                                    </div>
                                )}
                            </div>
                            <Button
                                onClick={handleUpdatePhoto}
                                className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-full flex items-center justify-center text-sm"
                            >
                                <FaDownload className="mr-2" />
                                Update Photo
                            </Button>
                        </div>

                        {/* Form Fields Section */}
                        <div className="md:w-3/4 md:pl-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                                {/* Name and Occupation */}
                                <div>
                                    <FormFields fields={nameFields} />
                                </div>
                                <div>
                                    <FormFields fields={occupationFields} />
                                </div>

                                {/* Birth Date and Birth Place */}
                                <div>
                                    <FormFields fields={birthDateFields} />
                                </div>
                                <div>
                                    <FormFields fields={birthPlaceFields} />
                                </div>

                                {/* Gender dropdown */}
                                <div>
                                    <label className="block text-gray-600 font-medium mb-2">Gender</label>
                                    <div className="relative">
                                        <Dropdowns
                                            options={genderOptions}
                                            value={profileData.gender}
                                            onChange={(e) => handleInputChange('gender', e.target.value)}
                                            className="w-full p-3 border border-gray-200 rounded appearance-none"
                                        />
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Civil Status dropdown */}
                                <div>
                                    <label className="block text-gray-600 font-medium mb-2">Civil Status</label>
                                    <div className="relative">
                                        <Select
                                            options={civilStatusOptions}
                                            value={profileData.civilStatus}
                                            onChange={(e) => handleInputChange('civilStatus', e.target.value)}
                                            className="w-full p-3 border border-gray-200 rounded appearance-none"
                                        />
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Contact Number and Email */}
                                <div>
                                    <FormFields fields={contactNumberFields} />
                                </div>
                                <div>
                                    <FormFields fields={emailFields} />
                                </div>

                                {/* Purok dropdown */}
                                <div>
                                    <label className="block text-gray-600 font-medium mb-2">Purok</label>
                                    <div className="relative">
                                        <Dropdowns
                                            options={purokOptions}
                                            value={profileData.purok}
                                            onChange={(e) => handleInputChange('purok', e.target.value)}
                                            className="w-full p-3 border border-gray-200 rounded appearance-none"
                                        />
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Resident Since */}
                                <div>
                                    <FormFields fields={residentSinceFields} />
                                </div>
                            </div>

                            <div className="mt-8 flex justify-end">
                                <Button
                                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-8 rounded"
                                >
                                    Save Changes
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </DashboardLayout>
        </>
    );
};

export default Profile;