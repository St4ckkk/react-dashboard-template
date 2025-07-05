import React, { useState, useEffect, useMemo } from 'react'
import { FaUsers, FaPlus, FaArchive, FaEdit, FaTrash, FaUserCircle } from 'react-icons/fa'
import DashboardLayout from '@components/DashboardLayout'
import HeaderText from '@components/HeaderText'
import Button from '@buttons/Button'
import Table from '@table/Table'
import Select from '@dropdowns/Dropdowns'

const ManageOfficials = () => {
    const [entriesPerPage, setEntriesPerPage] = useState('10');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedOfficial, setSelectedOfficial] = useState(null);


    const officialsData = useMemo(() => [
        {
            id: 1,
            name: 'Keyan Andy Delgado',
            image: '/static/img/officials/keyan.jpg',
            position: 'Punong Barangay',
            service: '2016-Present'
        },

    ], []);

    useEffect(() => {
        if (officialsData.length > 0 && !selectedOfficial) {
            setSelectedOfficial(officialsData[0]);
        }
    }, [officialsData, selectedOfficial]);

    const filteredData = useMemo(() => {
        return officialsData.filter(official =>
            official.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            official.position.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [officialsData, searchTerm]);


    const columns = [
        {
            key: 'image',
            header: 'Image',
            render: (value, row) => (
                <div
                    className="w-20 h-20 overflow-hidden cursor-pointer flex items-center justify-center"
                    onClick={() => setSelectedOfficial(row)}
                >
                    {row.image ? (
                        <img
                            src={row.image}
                            alt={row.name}
                            className="w-full h-full object-cover bg-white"
                        />
                    ) : (
                        <div className="flex items-center justify-center w-full h-full">
                            <FaUserCircle className="w-20 h-20 text-gray-400" />
                        </div>
                    )}
                </div>
            )
        },
        {
            key: 'name',
            header: "Official's Name",
            render: (value, row) => (
                <span className="cursor-pointer hover:text-blue-500" onClick={() => setSelectedOfficial(row)}>
                    {value}
                </span>
            )
        },
        {
            key: 'position',
            header: 'Position',
        },
        {
            key: 'service',
            header: 'Rendered Service',
        },
        {
            key: 'action',
            header: 'Action',
        },
    ];


    const handleEntriesChange = (e) => {
        setEntriesPerPage(e.target.value);
    };


    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };


    return (
        <>
            <DashboardLayout
                title="Manage Officials"
                breadcrumb="Profile"
                icon={<FaUsers className="mr-1 text-gray-500" />}
            >
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <HeaderText
                            TitleHeader="Barangay"
                            title="Officials"
                        />
                    </div>

                    <div className="flex space-x-3 mb-5">
                        <Button
                            onClick={() => console.log('Add Official clicked')}
                            className="flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-full"
                        >
                            <FaPlus className="text-white" />
                            ADD OFFICIAL
                        </Button>

                        <Button
                            onClick={() => console.log('Archived Officials clicked')}
                            className="flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full"
                        >
                            <FaArchive className="text-white text-xs" />
                            ARCHIVED OFFICIALS
                        </Button>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 mb-6">
                    <div className="flex flex-col items-center w-full md:w-60 md:mb-0">
                        {selectedOfficial && (
                            <div className="w-full md:w-60 shadow-md overflow-hidden">
                                <div className="w-full h-64 overflow-hidden flex items-center justify-center bg-gray-100 relative">
                                    {selectedOfficial.image ? (
                                        <img
                                            src={selectedOfficial.image}
                                            alt={selectedOfficial.name}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="flex items-center justify-center w-full h-full">
                                            <FaUserCircle className="w-24 h-24 text-gray-400" />
                                        </div>
                                    )}
                                    <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-90 py-1.5 px-2">
                                        <h2 className="text-center font-bold mb-2">{selectedOfficial.name}</h2>
                                        <p className="text-sm text-center text-gray-600 pb-2">{selectedOfficial.position}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="flex-1">
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center space-x-2">
                                <span className="text-sm text-gray-600">Show</span>
                                <div className="w-50">
                                    <Select
                                        options={[
                                            { value: '10', label: '10' },
                                            { value: '25', label: '25' },
                                            { value: '50', label: '50' },
                                            { value: '100', label: '100' }
                                        ]}
                                        value={entriesPerPage}
                                        onChange={handleEntriesChange}
                                        className="text-sm py-1 px-2"
                                    />
                                </div>
                                <span className="text-sm text-gray-600">entries</span>
                            </div>

                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                    className="border border-gray-300 rounded-md py-1.5 px-3 text-sm w-64 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                            </div>
                        </div>


                        <div className="overflow-hidden">
                            <Table
                                columns={columns}
                                data={filteredData}
                                renderActions={(official) => (
                                    <div className="flex space-x-2">
                                        <Button
                                            onClick={() => console.log('Edit', official)}
                                            className="p-2 bg-cyan-500 text-white rounded hover:bg-cyan-600"
                                        >
                                            <FaEdit />
                                        </Button>
                                        <Button
                                            onClick={() => console.log('Delete', official)}
                                            className="p-2 bg-red-400 text-white rounded hover:bg-red-500"
                                        >
                                            <FaTrash />
                                        </Button>
                                    </div>
                                )}
                                itemsPerPage={parseInt(entriesPerPage)}
                                onExport={() => console.log('Exporting data to PDF')}
                            />
                        </div>
                    </div>
                </div>
            </DashboardLayout>
        </>
    )
}

export default ManageOfficials