import React, { useState, useMemo } from 'react'
import { FaBullhorn, FaArchive, FaEdit, FaTrash, FaPlus } from 'react-icons/fa'
import DashboardLayout from '@components/DashboardLayout'
import Button from '@buttons/Button'
import Dropdowns from '@dropdowns/Dropdowns'
import Table from '@table/Table'
import HeaderText from '@components/HeaderText'
import SearchField from '@formfields/SearchField'
import SearchHook from '@hooks/SearchHook'
import EntriesHook from '@hooks/EntriesHook'

const ManageAnnouncements = () => {
    const [expandedRows, setExpandedRows] = useState({});

    const announcementsData = useMemo(() => [
        {
            id: 1,
            image: '/static/img/logo.png',
            title: 'TUPAD Orientation and Contract Signing',
            details: 'Handog ng ating mahal na Cong. Christian Telll A. Yap, Gov. Susan Yap, Sec. Bienvenido E. Laguesma. Kasama ang ating mahal na Mayor Rex Villa Agustin.',
            date: 'Oct. 30, 2022 7:00 AM'
        }
    ], []);

    const { entriesPerPage, handleEntriesChange, entriesOptions } = EntriesHook();
    const { searchTerm, handleSearch, filteredData } = SearchHook(
        announcementsData,
        ['title', 'details']
    );

    const toggleReadMore = (id) => {
        setExpandedRows(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const columns = [
        {
            key: 'image',
            header: 'Image',
            render: (value, row) => (
                <div className="w-20 h-16 overflow-hidden">
                    <img
                        src={row.image}
                        alt={row.title}
                        className="w-full h-full object-cover"
                    />
                </div>
            )
        },
        {
            key: 'title',
            header: 'Title',
        },
        {
            key: 'details',
            header: 'Details',
            render: (value, row) => {
                const isExpanded = expandedRows[row.id] || false;
                const displayText = isExpanded ? value : value.substring(0, 80) + '...';

                return (
                    <div className="max-w-lg">
                        <p className={`${isExpanded ? '' : 'truncate'}`}>{displayText}</p>
                        <button
                            onClick={() => toggleReadMore(row.id)}
                            className="text-deep-blue hover:underline mt-1"
                        >
                            {isExpanded ? 'Show less' : 'Read more'}
                        </button>
                    </div>
                );
            }
        },
        {
            key: 'date',
            header: 'Date',
        },
        {
            key: 'action',
            header: 'Action',
        }
    ];

    return (
        <DashboardLayout
            title="Manage Announcements"
            breadcrumb="Announcements"
            icon={<FaBullhorn className='mr-1 text-gray-500' />}
        >
            <div className="flex justify-between items-center mb-6">
                <div>
                    <HeaderText
                        TitleHeader="Barangay"
                        title="Announcements"
                    />
                </div>

                <div className="flex gap-2">
                    <Button
                        className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-full flex items-center"
                    >
                        <FaPlus className="mr-2" /> ADD NEW ANNOUNCEMENT
                    </Button>
                    <Button
                        className="bg-red-400 hover:bg-red-500 text-white py-2 px-4 rounded-full flex items-center"
                    >
                        <FaArchive className="mr-2" /> ARCHIVED ANNOUNCEMENTS
                    </Button>
                </div>
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
                        placeholder="Type to search..."
                        className="w-64"
                    />
                </div>
            </div>

            <div className="overflow-hidden">
                <Table
                    columns={columns}
                    data={filteredData}
                    renderActions={(announcement) => (
                        <div className="flex space-x-2">
                            <Button
                                onClick={() => console.log('Edit', announcement)}
                                className="p-2 bg-cyan-500 text-white rounded hover:bg-cyan-600"
                            >
                                <FaEdit />
                            </Button>
                            <Button
                                onClick={() => console.log('Delete', announcement)}
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
        </DashboardLayout>
    )
}

export default ManageAnnouncements