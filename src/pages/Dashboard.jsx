import React from 'react';
import { useState } from 'react';
import DashboardLayout from '@components/DashboardLayout';
import Cards from '@components/ui/cards/Cards';
import Table from '@components/ui/table/Table';
import CustomCalendar from '@components/ui/calendar/Calendar';
import Button from '@buttons/Button';
import Modal from '@modals/Modals';
import { FaBullhorn, FaUser, FaIdCard, FaUsers, FaMale, FaFemale, FaUserCheck, FaHome } from 'react-icons/fa';

const Dashboard = () => {

    const dashboardCards = [
        { title: 'Announcements', count: 3, icon: <FaBullhorn className="text-3xl" />, color: 'bg-amber-300' },
        { title: 'Blotters', count: 7, icon: <FaUser className="text-3xl" />, color: 'bg-red-400' },
        { title: 'Certificate Request', count: 31, icon: <FaIdCard className="text-3xl" />, color: 'bg-cyan-400' },
        { title: 'Total Residents', count: 33, icon: <FaUsers className="text-3xl" />, color: 'bg-emerald-400' },
        { title: 'Voter', count: 30, icon: <FaUser className="text-3xl" />, color: 'bg-amber-700' },
        { title: 'Male', count: 18, icon: <FaMale className="text-3xl" />, color: 'bg-blue-600' },
        { title: 'Female', count: 15, icon: <FaFemale className="text-3xl" />, color: 'bg-pink-500' },
        { title: 'Registered Resident', count: 27, icon: <FaUserCheck className="text-3xl" />, color: 'bg-purple-600' }
    ];

    const pendingRequests = [
        {
            name: 'Jhon Michael Tantay Cruz',
            certificateType: 'Barangay Clearance',
            dateRequest: 'Nov. 13, 2022 1:20 PM'
        },
        {
            name: 'Angela Gacayan Apolonio',
            certificateType: 'Certificate of Residency',
            dateRequest: 'Nov. 13, 2022 1:10 PM'
        }
    ];

    const requestColumns = [
        { header: 'Name', key: 'name' },
        { header: 'Certificate Type', key: 'certificateType' },
        { header: 'Date Request', key: 'dateRequest' },
        { header: 'Action', key: 'action' }
    ];



    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRequest, setSelectedRequest] = useState(null);
    const renderRequestActions = (row) => (
        <Button
            className="p-2 bg-cyan-500 text-white rounded cursor-pointer hover:bg-cyan-600"
            onClick={() => {
                setSelectedRequest(row);
                setIsModalOpen(true);
            }}
        >
            <FaIdCard />
        </Button>
    );

    return (
        <DashboardLayout
            title="Dashboard"
            breadcrumb="Home"
            icon={<FaHome className="mr-1 text-gray-500" />}
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 px-4">
                {dashboardCards.map((card, index) => (
                    <Cards
                        key={index}
                        title={card.title}
                        count={card.count}
                        icon={card.icon}
                        color={card.color}
                    />
                ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Table
                    titleHighlight="Pending"
                    title="Requests"
                    columns={requestColumns}
                    data={pendingRequests}
                    renderActions={renderRequestActions}
                />
                <CustomCalendar />
            </div>



            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Request Details"
                statusMessage="Please review the request details before approving."
                statusType="info"
                footer={
                    <>
                        <Button
                            className="px-5 py-2 text-xs bg-gray-100 text-gray-700 rounded hover:bg-gray-200 border border-gray-300"
                            onClick={() => setIsModalOpen(false)}
                        >
                            Cancel
                        </Button>
                        <Button
                            className="px-5 py-2 text-xs bg-green-500 text-white rounded hover:bg-green-600"
                            onClick={() => {
                                // Handle approval logic
                                console.log('Approving request', selectedRequest);
                                setIsModalOpen(false);
                            }}
                        >
                            Approve
                        </Button>
                    </>
                }
            >
                {selectedRequest && (
                    <div className="space-y-4">
                        <div>
                            <p className="text-sm text-gray-500">Requestor Name</p>
                            <p className="font-medium">{selectedRequest.name}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Certificate Type</p>
                            <p className="font-medium">{selectedRequest.certificateType}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Date Requested</p>
                            <p className="font-medium">{selectedRequest.dateRequest}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Purpose</p>
                            <p className="font-medium">Employment requirement</p>
                        </div>
                    </div>
                )}
            </Modal>
        </DashboardLayout>
    );
};

export default Dashboard;