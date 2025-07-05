import Sidebar from '@components/Sidebar'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { FaHome, FaChevronRight } from 'react-icons/fa'
import { Fragment, useState } from 'react'

const DashboardLayout = ({
    children,
    title = "Dashboard",
    breadcrumb = [{ name: 'Home', href: '/' }],
    icon = <FaHome className="mr-1 text-gray-500" />
}) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const headerHeight = "56px";

    const renderBreadcrumbs = () => {
        if (Array.isArray(breadcrumb)) {
            return (
                <div className="flex items-center">
                    {breadcrumb.map((item, index) => (
                        <Fragment key={index}>
                            {index > 0 && <FaChevronRight className="mx-1 md:mx-2 text-xs text-gray-400" />}
                            <a
                                href={item.href}
                                className={`text-xs md:text-sm ${index === breadcrumb.length - 1 ?
                                    "text-gray-500" :
                                    "text-blue-500 hover:text-blue-700"
                                    }`}
                            >
                                {item.name}
                            </a>
                        </Fragment>
                    ))}
                </div>
            );
        }
        return <span className="text-gray-400 text-xs md:text-sm">{breadcrumb}</span>;
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            <div style={{ height: headerHeight }}></div>

            <div className="flex flex-1">
                {/* Sidebar - Desktop */}
                <div className="hidden lg:block w-64 flex-shrink-0">
                    <div className="fixed h-[calc(100vh-56px)] w-64" style={{ top: headerHeight }}>
                        <Sidebar />
                    </div>
                </div>

                {/* Sidebar - Mobile Overlay with Smooth Animations */}
                <div className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ease-in-out ${sidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}>
                    {/* Backdrop with fade animation */}
                    <div
                        className={`absolute inset-0 bg-black transition-opacity duration-300 ease-in-out ${sidebarOpen ? 'opacity-50' : 'opacity-0'
                            }`}
                        onClick={() => setSidebarOpen(false)}
                    ></div>

                    {/* Sidebar with slide animation */}
                    <div
                        className={`absolute left-0 top-0 w-64 h-full transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                            }`}
                        style={{ top: headerHeight }}
                    >
                        <Sidebar onClose={() => setSidebarOpen(false)} />
                    </div>
                </div>

                {/* Main Content with smooth margin transition */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto p-3 md:p-5 lg:p-7 bg-layout transition-all duration-300 ease-in-out">
                    <div className="border-b border-gray-200 pb-2 md:pb-3 mb-3 md:mb-5">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0">
                            <h1 className="text-lg md:text-xl font-semibold">{title}</h1>
                            <div className="hidden sm:block border-l border-gray-300 h-6 mx-3"></div>
                            <div className="flex items-center text-sm text-gray-500">
                                <span className="hidden sm:inline">{icon}</span>
                                {renderBreadcrumbs()}
                            </div>
                        </div>
                    </div>
                    {children}
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default DashboardLayout