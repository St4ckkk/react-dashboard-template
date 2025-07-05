import React, { useState, useMemo } from 'react';
import { FaClipboardList, FaEye, FaTrash, FaPlus, FaArchive, FaSearch, FaDownload } from 'react-icons/fa';
import DashboardLayout from '@components/DashboardLayout';
import Table from '@table/Table';
import Button from '@buttons/Button';
import Select from '@dropdowns/Dropdowns';
import StatusBadge from '@badges/StatusBadge';
import Dropdowns from '@dropdowns/Dropdowns';
import SearchField from '@formfields/SearchField';
import SearchHook from '@hooks/SearchHook';
import EntriesHook from '@hooks/EntriesHook';

const ManageResidents = () => {
    // Define the dropdown options
    const purokOptions = [
        { value: 'All Purok', label: 'All Purok' },
        { value: 'Purok 1', label: 'Purok 1' },
        { value: 'Purok 2', label: 'Purok 2' }
    ];

    const genderOptions = [
        { value: 'All Gender', label: 'All Gender' },
        { value: 'Male', label: 'Male' },
        { value: 'Female', label: 'Female' }
    ];

    const civilStatusOptions = [
        { value: 'All Civil Status', label: 'All Civil Status' },
        { value: 'Single', label: 'Single' },
        { value: 'Married', label: 'Married' },
        { value: 'Widowed', label: 'Widowed' },
        { value: 'Separated', label: 'Separated' }
    ];

    const voterStatusOptions = [
        { value: 'All Voter Status', label: 'All Voter Status' },
        { value: 'Registered', label: 'Registered' },
        { value: 'Not Registered', label: 'Not Registered' }
    ];

    const statusOptions = [
        { value: 'All status', label: 'All status' },
        { value: 'Registered', label: 'Registered' },
        { value: 'Pending', label: 'Pending' }
    ];

    const [residents] = useState([
        { id: 1, name: 'Allysa Astrero Valentino', age: 19, gender: 'Female', purok: 'Purok 2', contact: '09686624094', civilStatus: 'Single', status: 'Registered' },
        { id: 2, name: 'Angela Gacayan Apolonio', age: 23, gender: 'Female', purok: 'Purok 2', contact: '09686624094', civilStatus: 'Single', status: 'Registered' },
        { id: 3, name: 'Angelika Abalos Pascua', age: 23, gender: 'Female', purok: 'Purok 1', contact: '09686624094', civilStatus: 'Single', status: 'Registered' },
        { id: 4, name: 'Angelique Joy Ganiban Mayo', age: 24, gender: 'Female', purok: 'Purok 1', contact: '09686624094', civilStatus: 'Single', status: 'Registered' },
        { id: 5, name: 'April Grace Gacayan Apolonio', age: 28, gender: 'Female', purok: 'Purok 2', contact: '09686624094', civilStatus: 'Single', status: 'Registered' },
    ]);

    const [filters, setFilters] = useState({
        purok: 'All Purok',
        gender: 'All Gender',
        civilStatus: 'All Civil Status',
        voterStatus: 'All Voter Status',
        status: 'All status'
    });
    
    const { entriesPerPage, handleEntriesChange, entriesOptions } = EntriesHook('10', ['10', '25', '50', '100']);
 
    const { searchTerm, handleSearch, filteredData } = SearchHook(
        residents,
        ['name', 'age', 'gender', 'purok', 'contact', 'civilStatus', 'status']
    );

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };

    const handleAddNewResident = () => {
        console.log('Add new resident');
    };

    const handleArchivedResidents = () => {
        console.log('View archived residents');
    };

    const handleViewResident = (resident) => {
        console.log('View resident:', resident);
    };

    const handleDeleteResident = (resident) => {
        console.log('Delete resident:', resident);
    };

    const columns = [
        { header: 'Name', key: 'name' },
        { header: 'Age', key: 'age' },
        { header: 'Gender', key: 'gender' },
        { header: 'Purok', key: 'purok' },
        { header: 'Contact', key: 'contact' },
        { header: 'Civil Status', key: 'civilStatus' },
        {
            header: 'Status',
            key: 'status',
            render: (value) => <StatusBadge status={value} />
        },
        { header: 'Action', key: 'action' },
    ];

    return (
        <DashboardLayout
            title="Resident Management"
            breadcrumb="Registered Residents"
            icon={<FaClipboardList className="mr-1 text-gray-500" />}
        >
            <div className="flex justify-end mb-10 gap-2">
                <Button
                    onClick={handleAddNewResident}
                    className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded flex items-center rounded-full"
                >
                    <FaPlus className="mr-2" /> ADD NEW RESIDENT
                </Button>
                <Button
                    onClick={handleArchivedResidents}
                    className="bg-red-400 hover:bg-red-500 text-white py-2 px-4 rounded flex items-center rounded-full"
                >
                    <FaArchive className="mr-2" /> ARCHIVED RESIDENTS
                </Button>
            </div>

            <div className="w-full flex items-center justify-between gap-8 mb-8">
                <div className="flex-1">
                    <Select
                        name="purok"
                        value={filters.purok}
                        onChange={handleFilterChange}
                        options={purokOptions}
                    />
                </div>

                <div className="flex-1">
                    <Select
                        name="gender"
                        value={filters.gender}
                        onChange={handleFilterChange}
                        options={genderOptions}
                    />
                </div>

                <div className="flex-1">
                    <Select
                        name="civilStatus"
                        value={filters.civilStatus}
                        onChange={handleFilterChange}
                        options={civilStatusOptions}
                    />
                </div>

                <div className="flex-1">
                    <Select
                        name="voterStatus"
                        value={filters.voterStatus}
                        onChange={handleFilterChange}
                        options={voterStatusOptions}
                    />
                </div>

                <div className="flex-1">
                    <Select
                        name="status"
                        value={filters.status}
                        onChange={handleFilterChange}
                        options={statusOptions}
                    />
                </div>

                <Button
                    onClick={() => console.log('Filtering fields')}
                    className="bg-yellow-400 hover:bg-yellow-500 text-white text-lg py-2 px-6 rounded-full flex items-center whitespace-nowrap"
                >
                    <FaSearch className="h-5 w-5 mr-2" /> FILTER FIELDS
                </Button>
            </div>

            <div className="flex justify-between items-center mb-5">
                <div className="flex items-center">
                    <span className="mr-2">Show</span>
                    <div className="w-40">
                        <Dropdowns
                            name="entriesPerPage"
                            value={entriesPerPage}
                            onChange={handleEntriesChange}
                            options={entriesOptions.map(option => ({ value: option, label: option }))}
                        />
                    </div>
                    <span className="ml-2">entries</span>
                </div>
                <div className="flex items-center">
                    <SearchField
                        value={searchTerm}
                        onChange={handleSearch}
                        placeholder="Type to search residents..."
                        className="w-64"
                    />
                </div>
            </div>

            <Table
                columns={columns}
                data={filteredData}
                renderActions={(resident) => (
                    <div className="flex space-x-2">
                        <Button
                            onClick={() => handleViewResident(resident)}
                            className="p-2 bg-cyan-500 text-white rounded hover:bg-cyan-600"
                        >
                            <FaEye />
                        </Button>
                        <Button
                            onClick={() => handleDeleteResident(resident)}
                            className="p-2 bg-red-400 text-white rounded hover:bg-red-500"
                        >
                            <FaTrash />
                        </Button>
                    </div>
                )}
                itemsPerPage={parseInt(entriesPerPage)}
            />
            <div className="flex justify-end mt-4">
                <Button
                    onClick={() => console.log('Exporting to PDF')}
                    className="flex items-center gap-1 px-5 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded-full transition-colors duration-200"
                >
                    <FaDownload className="w-4 h-4" />
                    EXPORT TO PDF
                </Button>
            </div>
        </DashboardLayout>
    );
};

export default ManageResidents;