import { useState, useEffect, useRef } from 'react';
import {
    FaHome, FaBullhorn, FaUsers, FaFileAlt, FaDatabase,
    FaClipboardList, FaClipboardCheck, FaChevronDown,
    FaUser, FaChevronUp, FaList, FaTimes, FaUserPlus, FaSignInAlt
} from 'react-icons/fa';
import {
    FiAlertTriangle, FiGrid, FiStar, FiChevronsRight,
    FiSquare, FiBox, FiMonitor, FiList, FiColumns,
    FiSliders, FiMoreHorizontal, FiLoader, FiRotateCcw,
    FiHelpCircle, FiBook, FiUserPlus, FiUsers
} from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import Avatar from '@components/Avatar';
import ProfileBanner from '@components/ProfileBanner';

const Sidebar = ({ onClose }) => {
    const location = useLocation();
    const url = location.pathname;
    const currentPath = '/' + url.split('/').filter(Boolean)[0];
    const navRef = useRef(null);
    const activeItemRef = useRef(null);

    const [openDropdowns, setOpenDropdowns] = useState({
        records: false,
        components: false
    });

    const toggleDropdown = (key) => {
        setOpenDropdowns(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    const navItems = [
        {
            icon: <FaHome className="w-4 h-4 md:w-5 md:h-5" />,
            label: 'Dashboard',
            path: '/dashboard',
            active: currentPath === '/dashboard'
        },
        {
            icon: <FaSignInAlt className="w-4 h-4 md:w-5 md:h-5" />,
            label: 'Login',
            path: '/login',
            active: currentPath === '/login'
        },
        {
            icon: <FaUserPlus className="w-4 h-4 md:w-5 md:h-5" />,
            label: 'Register',
            path: '/register',
            active: currentPath === '/register'
        },
        {
            icon: <FaList className="w-4 h-4 md:w-5 md:h-5" />,
            label: 'Components',
            key: 'components',
            path: '/components',
            active: currentPath === '/components' || url.startsWith('/components/'),
            hasDropdown: true,
            subItems: [
                {
                    icon: <FiAlertTriangle className="w-3 h-3 md:w-4 md:h-4" />,
                    label: 'Alerts',
                    path: '/components/alerts',
                    active: url === '/components/alerts'
                },
                {
                    icon: <FiGrid className="w-3 h-3 md:w-4 md:h-4" />,
                    label: 'Accordion',
                    path: '/components/accordions',
                    active: url === '/components/accordions'
                },
                {
                    icon: <FiStar className="w-3 h-3 md:w-4 md:h-4" />,
                    label: 'Badges',
                    path: '/components/badges',
                    active: url === '/components/badges'
                },
                {
                    icon: <FiChevronsRight className="w-3 h-3 md:w-4 md:h-4" />,
                    label: 'Breadcrumbs',
                    path: '/components/breadcrumbs',
                    active: url === '/components/breadcrumbs'
                },
                {
                    icon: <FiSquare className="w-3 h-3 md:w-4 md:h-4" />,
                    label: 'Buttons',
                    path: '/components/buttons',
                    active: url === '/components/buttons'
                },
                {
                    icon: <FiBox className="w-3 h-3 md:w-4 md:h-4" />,
                    label: 'Cards',
                    path: '/components/cards',
                    active: url === '/components/cards'
                },
                {
                    icon: <FiMonitor className="w-3 h-3 md:w-4 md:h-4" />,
                    label: 'Carousel',
                    path: '/components/carousels',
                    active: url === '/components/carousels'
                },
                {
                    icon: <FiList className="w-3 h-3 md:w-4 md:h-4" />,
                    label: 'List group',
                    path: '/components/list-groups',
                    active: url === '/components/listgroups'
                },
                {
                    icon: <FiColumns className="w-3 h-3 md:w-4 md:h-4" />,
                    label: 'Modal',
                    path: '/components/modals',
                    active: url === '/components/modals'
                },
                {
                    icon: <FiSliders className="w-3 h-3 md:w-4 md:h-4" />,
                    label: 'Tabs',
                    path: '/components/tabs',
                    active: url === '/components/tabs'
                },
                {
                    icon: <FiMoreHorizontal className="w-3 h-3 md:w-4 md:h-4" />,
                    label: 'Pagination',
                    path: '/components/pagination',
                    active: url === '/components/pagination'
                },
                {
                    icon: <FiLoader className="w-3 h-3 md:w-4 md:h-4" />,
                    label: 'Progress',
                    path: '/components/progress',
                    active: url === '/components/progress'
                },
                {
                    icon: <FiRotateCcw className="w-3 h-3 md:w-4 md:h-4" />,
                    label: 'Spinners',
                    path: '/components/spinners',
                    active: url === '/components/spinners'
                },
                {
                    icon: <FiHelpCircle className="w-3 h-3 md:w-4 md:h-4" />,
                    label: 'Tooltips',
                    path: '/components/tooltips',
                    active: url === '/components/tooltips'
                }
            ]
        },
        // {
        //     icon: <FaBullhorn className="w-4 h-4 md:w-5 md:h-5" />,
        //     label: 'Announcements',
        //     path: '/announcements',
        //     active: currentPath === '/announcements'
        // },
        // {
        //     icon: <FaUsers className="w-4 h-4 md:w-5 md:h-5" />,
        //     label: 'Officials',
        //     path: '/officials',
        //     active: currentPath === '/officials'
        // },
        // {
        //     icon: <FaFileAlt className="w-4 h-4 md:w-5 md:h-5" />,
        //     label: 'Issuance Details',
        //     path: '/issuance-details',
        //     active: currentPath === '/issuance-details'
        // },
        // {
        //     icon: <FaDatabase className="w-4 h-4 md:w-5 md:h-5" />,
        //     label: 'Content Management',
        //     path: '/content-management',
        //     active: currentPath === '/content-management'
        // },
        // {
        //     icon: <FaClipboardList className="w-4 h-4 md:w-5 md:h-5" />,
        //     label: 'Records',
        //     key: 'records',
        //     active: ['/records', '/record'].some(path => currentPath.startsWith(path)),
        //     hasDropdown: true,
        //     subItems: [
        //         {
        //             icon: <FiBook className="w-3 h-3 md:w-4 md:h-4" />,
        //             label: 'Blotter Record',
        //             path: '/records/blotter',
        //             active: url === '/records/blotter'
        //         },
        //         {
        //             icon: <FiUsers className="w-3 h-3 md:w-4 md:h-4" />,
        //             label: 'Residents Management',
        //             path: '/record/residents',
        //             active: url === '/record/residents'
        //         },
        //         {
        //             icon: <FiUserPlus className="w-3 h-3 md:w-4 md:h-4" />,
        //             label: 'Pending Residents',
        //             path: '/records/pending-residents',
        //             active: url === '/records/pending-residents'
        //         }
        //     ]
        // },
        // {
        //     icon: <FaClipboardCheck className="w-4 h-4 md:w-5 md:h-5" />,
        //     label: 'Monitoring of Request',
        //     path: '/request',
        //     active: currentPath === '/request'
        // },
    ];

    // Auto-open dropdowns and scroll to active item
    useEffect(() => {
        // Auto-open dropdowns for active items
        navItems.forEach(item => {
            if (item.hasDropdown && item.active && !openDropdowns[item.key]) {
                setOpenDropdowns(prev => ({
                    ...prev,
                    [item.key]: true
                }));
            }
        });

        // Scroll to active item after dropdowns are open
        const scrollToActiveItem = () => {
            if (navRef.current && activeItemRef.current) {
                const navContainer = navRef.current;
                const activeElement = activeItemRef.current;

                const containerHeight = navContainer.clientHeight;
                const elementTop = activeElement.offsetTop;
                const elementHeight = activeElement.clientHeight;

                // Calculate the ideal scroll position (center the active item)
                const idealScrollTop = elementTop - (containerHeight / 2) + (elementHeight / 2);

                // Smooth scroll to the active item
                navContainer.scrollTo({
                    top: Math.max(0, idealScrollTop),
                    behavior: 'smooth'
                });
            }
        };

        // Delay scrolling to allow dropdown animations to complete
        const timeoutId = setTimeout(scrollToActiveItem, 300);

        return () => clearTimeout(timeoutId);
    }, [currentPath, url]);

    const handleLinkClick = () => {
        if (onClose) {
            onClose();
        }
    };

    // Function to check if an item should get the active ref
    const shouldGetActiveRef = (item, isSubItem = false) => {
        if (isSubItem) {
            return item.active;
        }
        return item.active && (!item.hasDropdown || !item.subItems?.some(sub => sub.active));
    };

    return (
        <div className="bg-white text-gray-700 w-64 shadow-lg flex flex-col h-full relative transform transition-all duration-300 ease-in-out">
            {/* Mobile close button with smooth animation */}
            {onClose && (
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 lg:hidden z-10 transition-all duration-200 ease-in-out transform hover:scale-110 active:scale-95"
                >
                    <FaTimes className="text-gray-600 transition-transform duration-200 ease-in-out hover:rotate-90" />
                </button>
            )}

            <div className="relative pt-5 pb-3 px-4 flex-shrink-0 transition-all duration-300 ease-in-out">
                <ProfileBanner />
                <div>
                    <Avatar />
                </div>
            </div>

            <div className="bg-gray-200 py-2 px-4 flex-shrink-0 transition-colors duration-300 ease-in-out">
                <p className="text-xs md:text-sm font-medium text-gray-700">Main Navigation</p>
            </div>

            <nav ref={navRef} className="flex-1 overflow-y-auto overflow-x-hidden">
                <div className="h-full scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                    <ul>
                        {navItems.map((item, index) => (
                            <li key={index} className="border-b border-gray-100 transition-all duration-200 ease-in-out hover:border-gray-200">
                                {item.hasDropdown ? (
                                    <>
                                        <button
                                            ref={shouldGetActiveRef(item) ? activeItemRef : null}
                                            onClick={() => toggleDropdown(item.key)}
                                            className={`w-full flex items-center justify-center px-3 md:px-4 py-2 md:py-3 text-sm md:text-base transition-all duration-300 ease-in-out transform hover:scale-[1.02] ${item.active || openDropdowns[item.key]
                                                ? 'bg-deep-blue text-white shadow-md'
                                                : 'hover:bg-deep-blue hover:text-white hover:shadow-sm'
                                                }`}
                                        >
                                            <span className="mr-2 md:mr-3 transition-transform duration-300 ease-in-out">{item.icon}</span>
                                            <span className="flex-1 text-left">{item.label}</span>
                                            {openDropdowns[item.key] ?
                                                <FaChevronUp className="w-2 h-2 md:w-3 md:h-3 opacity-70 transition-all duration-500 ease-in-out transform rotate-180" /> :
                                                <FaChevronDown className="w-2 h-2 md:w-3 md:h-3 opacity-70 transition-all duration-500 ease-in-out transform rotate-0" />
                                            }
                                        </button>

                                        <div
                                            className={`overflow-hidden transition-all duration-500 ease-in-out ${openDropdowns[item.key] ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                                                }`}
                                        >
                                            <ul className="bg-gray-100">
                                                {item.subItems.map((subItem, subIndex) => (
                                                    <li key={`${index}-${subIndex}`}
                                                        className="transform transition-all duration-300 ease-in-out hover:translate-x-1"
                                                        style={{
                                                            animationDelay: openDropdowns[item.key] ? `${subIndex * 50}ms` : '0ms'
                                                        }}
                                                    >
                                                        <Link
                                                            ref={shouldGetActiveRef(subItem, true) ? activeItemRef : null}
                                                            to={subItem.path}
                                                            onClick={handleLinkClick}
                                                            className={`flex items-center pl-10 md:pl-12 py-2 md:py-3 text-xs md:text-sm transition-all duration-200 ease-in-out ${subItem.active
                                                                ? 'text-blue-500 font-medium bg-blue-50 border-r-2 border-blue-500'
                                                                : 'text-gray-700 hover:bg-gray-200 hover:text-gray-900'
                                                                }`}
                                                        >
                                                            <span className="mr-1 md:mr-2 transition-transform duration-200 ease-in-out">{subItem.icon}</span>
                                                            {subItem.label}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </>
                                ) : (
                                    <Link
                                        ref={shouldGetActiveRef(item) ? activeItemRef : null}
                                        to={item.path}
                                        onClick={handleLinkClick}
                                        className={`flex items-center px-3 md:px-4 py-2 md:py-3 text-sm md:text-base transition-all duration-300 ease-in-out transform hover:scale-[1.02] ${item.active
                                            ? 'bg-deep-blue text-white shadow-md'
                                            : 'hover:bg-deep-blue hover:text-white hover:shadow-sm'
                                            }`}
                                    >
                                        <span className="mr-2 md:mr-3 transition-transform duration-300 ease-in-out">{item.icon}</span>
                                        <span className="flex-1">{item.label}</span>
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;