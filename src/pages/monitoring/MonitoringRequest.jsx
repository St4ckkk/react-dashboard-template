import React, { useState, useMemo } from 'react'
import DashboardLayout from '@components/DashboardLayout'
import HeaderText from '@components/HeaderText'
import { FaClipboardCheck } from 'react-icons/fa'
import Table from '@table/Table'
import Dropdowns from '@dropdowns/Dropdowns'
import Button from '@buttons/Button'
import StatusBadge from '@badges/StatusBadge'
import FormFields from '@formfields/FormFields'
import SearchField from '@formfields/SearchField'
import TextAreaField from '@formfields/TextAreaField'
import { FiSearch, FiPrinter, FiCheck, FiX } from 'react-icons/fi'
import SearchHook from '@hooks/SearchHook'
import EntriesHook from '@hooks/EntriesHook'

const MonitoringRequest = () => {
    const [requestorName, setRequestorName] = useState('')
    const [certificateType, setCertificateType] = useState('')
    const [purpose, setPurpose] = useState('')
    const [dateRequested, setDateRequested] = useState('')
    const [price, setPrice] = useState('')


    const pendingRequestsData = useMemo(() => [
        { id: 1, name: 'Eugene Reyes', certificateType: 'Barangay Clearance', dateSent: 'Apr. 13, 2023 11:41 AM', status: 'Processing' },
        { id: 2, name: 'Angela Apolonio', certificateType: 'Certificate of Residency', dateSent: 'Nov. 13, 2022 2:07 PM', status: 'Processing' },
        { id: 3, name: 'Angela Apolonio', certificateType: 'Barangay Clearance', dateSent: 'Nov. 13, 2022 2:03 PM', status: 'Processing' },
        { id: 4, name: 'Angela Apolonio', certificateType: 'Certificate of Residency', dateSent: 'Nov. 13, 2022 1:44 PM', status: 'Processing' },
        { id: 5, name: 'Orvil Von Salagan', certificateType: 'Certificate of Residency', dateSent: 'Nov. 13, 2022 1:22 PM', status: 'Processing' },
        { id: 6, name: 'Jhon Michael Cruz', certificateType: 'Barangay Clearance', dateSent: 'Nov. 13, 2022 1:20 PM', status: 'Pending' },
        { id: 7, name: 'Angela Apolonio', certificateType: 'Certificate of Residency', dateSent: 'Nov. 13, 2022 1:10 PM', status: 'Pending' },
        { id: 8, name: 'Angela Apolonio', certificateType: 'Certificate of Residency', dateSent: 'Nov. 13, 2022 12:38 PM', status: 'Processing' },
    ], []);

    // Using our custom hooks
    const { entriesPerPage, handleEntriesChange, entriesOptions } = EntriesHook('10', ['10', '25', '50', '100']);
    const { searchTerm, handleSearch, filteredData } = SearchHook(
        pendingRequestsData,
        ['name', 'certificateType', 'dateSent', 'status']
    );

    const columns = [
        { header: 'Name', key: 'name' },
        { header: 'Certificate Type', key: 'certificateType' },
        { header: 'Date Sent', key: 'dateSent' },
        {
            header: 'Status',
            key: 'status',
            render: (status) => <StatusBadge status={status} />
        },
        {
            header: 'Action',
            key: 'action',
            render: (_, row) => renderActionButtons(row)
        }
    ]

    const renderActionButtons = (row) => {
        if (row.status === 'Processing') {
            return (
                <Button
                    className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded"
                    onClick={() => console.log('Print', row.id)}
                >
                    PRINT
                </Button>
            )
        } else {
            return (
                <div className="flex space-x-2">
                    <Button
                        className="bg-teal-500 hover:bg-teal-600 text-white p-2 rounded"
                        onClick={() => console.log('Approve', row.id)}
                    >
                        <FiCheck />
                    </Button>
                    <Button
                        className="bg-red-500 hover:bg-red-600 text-white p-2 rounded"
                        onClick={() => console.log('Reject', row.id)}
                    >
                        <FiX />
                    </Button>
                </div>
            )
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Submitting request...')
    }

    return (
        <DashboardLayout
            title='Monitoring of Requests'
            breadcrumb='All Requests'
            icon={<FaClipboardCheck className='mr-1 text-gray-500' />}
        >
            <div className="flex flex-col md:flex-row gap-6">

                <div className="md:w-1/3">
                    <HeaderText
                        TitleHeader="Walk-In"
                        title="Requests"
                    />

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4 mt-10">
                            <label className="block text-gray-600 font-medium mb-2">
                                Requestor Name
                            </label>
                            <Dropdowns
                                options={['Alejandro, Evangelyn Rayray']}
                                value={requestorName}
                                onChange={(e) => setRequestorName(e.target.value)}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-600 font-medium mb-2">
                                Certificate Type
                            </label>
                            <Dropdowns
                                options={['Request of Barangay Clearance']}
                                value={certificateType}
                                onChange={(e) => setCertificateType(e.target.value)}
                            />
                        </div>

                        <div className="mb-4">
                            <TextAreaField
                                label="Purpose"
                                value={purpose}
                                onChange={(e) => setPurpose(e.target.value)}
                                placeholder="Enter purpose"
                                rows={3}
                            />
                        </div>

                        <div className="mb-6">
                            <FormFields
                                fields={[
                                    {
                                        id: 'dateRequested',
                                        type: 'text',
                                        value: 'June 14, 2023',
                                        onChange: () => { },
                                        placeholder: 'Date Requested',
                                        readOnly: true
                                    },
                                    {
                                        id: 'price',
                                        type: 'text',
                                        value: '₱20.00',
                                        onChange: () => { },
                                        placeholder: 'Price',
                                        readOnly: true
                                    }
                                ]}
                            />
                        </div>

                        <Button
                            type="submit"
                            className="bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded w-full"
                        >
                            Submit Request
                        </Button>
                    </form>
                </div>

                <div className="md:w-2/3">
                    <HeaderText
                        TitleHeader="Pending"
                        title="Requests"
                    />

                    <div className="mb-4 flex justify-between items-center mt-5">
                        <div className="flex items-center">
                            <span className="mr-2">Show</span>
                            <Dropdowns
                                options={entriesOptions}
                                value={entriesPerPage}
                                onChange={handleEntriesChange}
                                className="w-20"
                            />
                            <span className="ml-2">entries</span>
                        </div>

                        <div className="relative">
                            <SearchField
                                value={searchTerm}
                                onChange={handleSearch}
                                placeholder="Type to search requests..."
                                className="w-64"
                            />
                        </div>
                    </div>

                    <Table
                        columns={columns}
                        data={filteredData}
                        containerClassName="bg-white"
                        itemsPerPage={parseInt(entriesPerPage)}
                    />
                </div>
            </div>
        </DashboardLayout>
    )
}

export default MonitoringRequest