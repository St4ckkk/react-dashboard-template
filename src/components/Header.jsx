import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCog, FaBars, FaUser, FaSignOutAlt, FaUserCog, FaBell, FaComment } from 'react-icons/fa';
import { FiInfo, FiCheck, FiX, FiAlertCircle } from 'react-icons/fi';
import Button from '@buttons/Button';

const Header = ({ sidebarOpen, setSidebarOpen }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const [showMessages, setShowMessages] = useState(false);

    const dropdownRef = useRef(null);
    const notificationsRef = useRef(null);
    const messagesRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
            if (notificationsRef.current && !notificationsRef.current.contains(event.target)) {
                setShowNotifications(false);
            }
            if (messagesRef.current && !messagesRef.current.contains(event.target)) {
                setShowMessages(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const notifications = [
        { id: 1, title: 'Lorem Ipsum', message: 'Quae dolorem earum veritatis oditseno', time: '30 min. ago', type: 'info' },
        { id: 2, title: 'Atque rerum nesciunt', message: 'Quae dolorem earum veritatis oditseno', time: '1 hr. ago', type: 'error' },
        { id: 3, title: 'Sit rerum fuga', message: 'Quae dolorem earum veritatis oditseno', time: '2 hrs. ago', type: 'success' },
        { id: 4, title: 'Dicta reprehenderit', message: 'Quae dolorem earum veritatis oditseno', time: '4 hrs. ago', type: 'info' },
    ];

    const messages = [
        { id: 1, sender: 'Maria Hudson', message: 'Velit asperiores et ducimus soluta repudiandae labore officia est ut...', time: '4 hrs. ago', avatar: '/static/img/avatar-1.jpg' },
        { id: 2, sender: 'Anna Nelson', message: 'Velit asperiores et ducimus soluta repudiandae labore officia est ut...', time: '6 hrs. ago', avatar: '/static/img/avatar-2.jpg' },
        { id: 3, sender: 'David Muldon', message: 'Velit asperiores et ducimus soluta repudiandae labore officia est ut...', time: '8 hrs. ago', avatar: '/static/img/avatar-3.jpg' },
    ];

    const getNotificationIcon = (type) => {
        switch (type) {
            case 'success': return <FiCheck className="text-green-500" />;
            case 'error': return <FiX className="text-red-500" />;
            case 'warning': return <FiAlertCircle className="text-yellow-500" />;
            case 'info':
            default: return <FiInfo className="text-blue-500" />;
        }
    };

    return (
        <header className="bg-deep-blue shadow-sm z-30 text-white fixed top-0 left-0 right-0">
            <div className="flex items-center justify-between px-3 md:px-4 py-2">
                <div className="flex items-center">
                    {/* Mobile menu button with smooth rotation */}
                    <button 
                        className="bg-light-blue p-2 rounded text-white mr-2 flex items-center justify-center lg:hidden transition-all duration-300 ease-in-out hover:bg-blue-600 active:scale-95"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                    >
                        <FaBars className={`text-xl transition-transform duration-300 ease-in-out ${
                            sidebarOpen ? 'rotate-90' : 'rotate-0'
                        }`} />
                    </button>
                    
                    {/* Desktop menu button with smooth rotation */}
                    <button className="hidden lg:flex bg-light-blue p-2 rounded text-white mr-2 items-center justify-center transition-all duration-300 ease-in-out hover:bg-blue-600 active:scale-95">
                        <FaBars className="text-xl transition-transform duration-300 ease-in-out hover:rotate-180" />
                    </button>
                    
                    <div className="px-2 md:px-5 flex items-center">
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center mr-2 bg-white transition-transform duration-300 ease-in-out hover:scale-110">
                            <img
                                src="/static/img/template-logo2.png"
                                alt="Barangay Logo"
                                className="w-full h-full object-cover rounded-full transition-transform duration-300 ease-in-out"
                            />
                        </div>
                        <div className="py-1 rounded hidden sm:block">
                            <h2 className="font-bold text-xs md:text-sm transition-colors duration-300 ease-in-out">St4ckkk</h2>
                            <p className="text-xs hidden md:block transition-colors duration-300 ease-in-out">Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center">
                    {/* Notification Icons with smooth animations */}
                    <div className="flex mr-2 md:mr-4 space-x-1 md:space-x-3">
                        {/* Bell Notification with bounce animation */}
                        <div className="relative" ref={notificationsRef}>
                            <button
                                className="bg-light-blue p-1.5 md:p-2 rounded-full hover:bg-blue-600 transition-all duration-300 ease-in-out transform hover:scale-110 active:scale-95"
                                onClick={() => {
                                    setShowNotifications(!showNotifications);
                                    setShowMessages(false);
                                }}
                            >
                                <FaBell className={`text-white text-sm md:text-lg transition-transform duration-300 ease-in-out ${
                                    showNotifications ? 'animate-pulse' : ''
                                }`} />
                            </button>
                            <span className="absolute -top-1 -right-1 bg-blue-500 text-xs text-white w-4 h-4 md:w-5 md:h-5 flex items-center justify-center rounded-full text-xs animate-pulse">
                                4
                            </span>

                            {/* Notifications Dropdown with smooth slide-in */}
                            {showNotifications && (
                                <div className="absolute right-0 mt-2 w-72 md:w-80 bg-white rounded-md shadow-lg overflow-hidden z-50 animate-in slide-in-from-top-2 duration-300">
                                    <div className="flex justify-between items-center px-3 md:px-4 py-3 bg-gray-50 border-b">
                                        <p className="text-xs md:text-sm font-medium text-gray-700">You have 4 new notifications</p>
                                        <button className="text-xs font-medium text-white bg-blue-500 px-2 md:px-3 py-1 rounded transition-all duration-200 hover:bg-blue-600 active:scale-95">View all</button>
                                    </div>

                                    <div className="max-h-72 md:max-h-96 overflow-y-auto">
                                        {notifications.map((notification, index) => (
                                            <div key={notification.id} className="border-b hover:bg-gray-50 transition-colors duration-200" style={{ animationDelay: `${index * 50}ms` }}>
                                                <a href="#" className="block px-3 md:px-4 py-3">
                                                    <div className="flex items-start">
                                                        <div className="flex-shrink-0 h-6 w-6 md:h-8 md:w-8 rounded-full flex items-center justify-center bg-gray-100">
                                                            {getNotificationIcon(notification.type)}
                                                        </div>
                                                        <div className="ml-2 md:ml-3 w-0 flex-1">
                                                            <p className="text-xs md:text-sm font-medium text-gray-900">{notification.title}</p>
                                                            <p className="text-xs md:text-sm text-gray-500 line-clamp-2">{notification.message}</p>
                                                            <p className="mt-1 text-xs text-gray-400">{notification.time}</p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="border-t border-gray-100 p-2">
                                        <a href="#" className="block text-center text-xs md:text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors duration-200">
                                            Show all notifications
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Message Notification with smooth animations */}
                        <div className="relative" ref={messagesRef}>
                            <button
                                className="bg-light-blue p-1.5 md:p-2 rounded-full hover:bg-blue-600 transition-all duration-300 ease-in-out transform hover:scale-110 active:scale-95"
                                onClick={() => {
                                    setShowMessages(!showMessages);
                                    setShowNotifications(false);
                                }}
                            >
                                <FaComment className={`text-white text-sm md:text-lg transition-transform duration-300 ease-in-out ${
                                    showMessages ? 'animate-pulse' : ''
                                }`} />
                            </button>
                            <span className="absolute -top-1 -right-1 bg-green-500 text-xs text-white w-4 h-4 md:w-5 md:h-5 flex items-center justify-center rounded-full animate-pulse">
                                3
                            </span>

                            {/* Messages Dropdown with smooth slide-in */}
                            {showMessages && (
                                <div className="absolute right-0 mt-2 w-72 md:w-80 bg-white rounded-md shadow-lg overflow-hidden z-50 animate-in slide-in-from-top-2 duration-300">
                                    <div className="flex justify-between items-center px-3 md:px-4 py-3 bg-gray-50 border-b">
                                        <p className="text-xs md:text-sm font-medium text-gray-700">You have 3 new messages</p>
                                        <button className="text-xs font-medium text-white bg-blue-500 px-2 md:px-3 py-1 rounded transition-all duration-200 hover:bg-blue-600 active:scale-95">View all</button>
                                    </div>

                                    <div className="max-h-72 md:max-h-96 overflow-y-auto">
                                        {messages.map((message, index) => (
                                            <div key={message.id} className="border-b hover:bg-gray-50 transition-colors duration-200" style={{ animationDelay: `${index * 50}ms` }}>
                                                <a href="#" className="block px-3 md:px-4 py-3">
                                                    <div className="flex">
                                                        <div className="flex-shrink-0">
                                                            <img className="h-8 w-8 md:h-10 md:w-10 rounded-full transition-transform duration-200 hover:scale-105" src={message.avatar} alt={message.sender} />
                                                        </div>
                                                        <div className="ml-2 md:ml-3">
                                                            <p className="text-xs md:text-sm font-medium text-gray-900">{message.sender}</p>
                                                            <p className="text-xs md:text-sm text-gray-500 line-clamp-2">{message.message}</p>
                                                            <p className="mt-1 text-xs text-gray-400">{message.time}</p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="border-t border-gray-100 p-2">
                                        <a href="#" className="block text-center text-xs md:text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors duration-200">
                                            Show all messages
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Settings Dropdown with smooth rotation */}
                    <div className="relative" ref={dropdownRef}>
                        <Button
                            className="bg-light-blue p-1.5 md:p-2 rounded-full hover:bg-blue-600 transition-all duration-300 ease-in-out transform hover:scale-110 active:scale-95"
                            onClick={() => {
                                setShowDropdown(!showDropdown);
                                setShowNotifications(false);
                                setShowMessages(false);
                            }}
                        >
                            <FaCog className={`text-white text-sm md:text-xl transition-transform duration-300 ease-in-out ${
                                showDropdown ? 'rotate-180' : 'rotate-0'
                            }`} />
                        </Button>

                        {showDropdown && (
                            <div className="absolute right-0 mt-2 w-44 md:w-48 bg-white rounded-md shadow-lg py-1 z-50 animate-in slide-in-from-top-2 duration-300">
                                <div className="px-3 md:px-4 py-3 border-b">
                                    <p className="text-xs md:text-sm font-medium text-gray-700">Admin User</p>
                                    <p className="text-xs text-gray-500 truncate">admin@example.com</p>
                                </div>

                                <Link to="/profile" className="block px-3 md:px-4 py-2 text-xs md:text-sm text-gray-700 hover:bg-gray-100 flex items-center transition-colors duration-200">
                                    <FaUser className="mr-2 text-gray-500 text-xs md:text-sm" />
                                    Your Profile
                                </Link>

                                <Link to="/account-settings" className="block px-3 md:px-4 py-2 text-xs md:text-sm text-gray-700 hover:bg-gray-100 flex items-center transition-colors duration-200">
                                    <FaUserCog className="mr-2 text-gray-500 text-xs md:text-sm" />
                                    Account Settings
                                </Link>

                                <div className="border-t border-gray-100"></div>

                                <Link to="/logout" className="block px-3 md:px-4 py-2 text-xs md:text-sm text-red-600 hover:bg-gray-100 flex items-center transition-colors duration-200">
                                    <FaSignOutAlt className="mr-2 text-xs md:text-sm" />
                                    Sign out
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;