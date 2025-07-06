import React from 'react';
import {
    FaChevronLeft,
    FaChevronRight,
    FaAngleDoubleLeft,
    FaAngleDoubleRight,
    FaEllipsisH
} from 'react-icons/fa';

// Default Pagination (keeping your original)
const Pagination = ({
    currentPage,
    totalPages,
    totalItems,
    onPageChange,
    itemsPerPage = 10
}) => {
    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };

    const startItem = Math.min(((currentPage - 1) * itemsPerPage) + 1, totalItems);
    const endItem = Math.min(startItem + itemsPerPage - 1, totalItems);

    return (
        <div className="flex justify-between items-center mt-2 py-3 text-sm text-gray-600">
            <div>
                Showing {startItem} to {endItem} of {totalItems} entries
            </div>

            <div className="flex items-center border border-gray-400">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-3 py-1  ${currentPage === 1
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                >
                    Previous
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`px-3 py-1 ${currentPage === page
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-100 hover:bg-gray-200'
                            }`}
                    >
                        {page}
                    </button>
                ))}

                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-3 py-1 ${currentPage === totalPages
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

// Basic Pagination with Icons
export const BasicPagination = ({
    currentPage = 1,
    totalPages = 5,
    onPageChange = () => { },
    variant = 'default' // 'default' | 'outlined' | 'text'
}) => {
    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };

    const getVariantClasses = (isActive = false, isDisabled = false) => {
        const baseClasses = 'px-3 py-2 mx-1 text-sm transition-all duration-200';

        if (isDisabled) {
            return `${baseClasses} text-gray-400 cursor-not-allowed`;
        }

        switch (variant) {
            case 'outlined':
                return `${baseClasses} border ${isActive
                    ? 'border-blue-500 bg-blue-500 text-white'
                    : 'border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-500'
                    }`;
            case 'text':
                return `${baseClasses} ${isActive
                    ? 'text-blue-500 font-medium'
                    : 'text-gray-700 hover:text-blue-500'
                    }`;
            default:
                return `${baseClasses} rounded ${isActive
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`;
        }
    };

    return (
        <div className="flex items-center justify-center">
            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={getVariantClasses(false, currentPage === 1)}
            >
                Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={getVariantClasses(currentPage === page)}
                >
                    {page}
                </button>
            ))}

            <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={getVariantClasses(false, currentPage === totalPages)}
            >
                Next
            </button>
        </div>
    );
};

// Icon Pagination
export const IconPagination = ({
    currentPage = 1,
    totalPages = 5,
    onPageChange = () => { },
    showText = false
}) => {
    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };

    return (
        <div className="flex items-center justify-center space-x-1">
            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`flex items-center px-3 py-2 text-sm rounded transition-all duration-200 ${currentPage === 1
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
            >
                <FaChevronLeft className="w-3 h-3" />
                {showText && <span className="ml-1">Previous</span>}
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-3 py-2 text-sm rounded transition-all duration-200 ${currentPage === page
                            ? 'bg-blue-500 text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                >
                    {page}
                </button>
            ))}

            <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`flex items-center px-3 py-2 text-sm rounded transition-all duration-200 ${currentPage === totalPages
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
            >
                {showText && <span className="mr-1">Next</span>}
                <FaChevronRight className="w-3 h-3" />
            </button>
        </div>
    );
};

// Advanced Pagination with ellipsis
export const AdvancedPagination = ({
    currentPage = 1,
    totalPages = 20,
    onPageChange = () => { },
    siblingCount = 1,
    showFirstLast = true
}) => {
    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };

    const getPageNumbers = () => {
        const delta = siblingCount;
        const range = [];
        const rangeWithDots = [];

        for (
            let i = Math.max(2, currentPage - delta);
            i <= Math.min(totalPages - 1, currentPage + delta);
            i++
        ) {
            range.push(i);
        }

        if (currentPage - delta > 2) {
            rangeWithDots.push(1, '...');
        } else {
            rangeWithDots.push(1);
        }

        rangeWithDots.push(...range);

        if (currentPage + delta < totalPages - 1) {
            rangeWithDots.push('...', totalPages);
        } else {
            rangeWithDots.push(totalPages);
        }

        return rangeWithDots;
    };

    const pages = totalPages > 1 ? getPageNumbers() : [1];

    return (
        <div className="flex items-center justify-center space-x-1">
            {showFirstLast && (
                <button
                    onClick={() => handlePageChange(1)}
                    disabled={currentPage === 1}
                    className={`flex items-center px-2 py-2 text-sm rounded transition-all duration-200 ${currentPage === 1
                            ? 'text-gray-400 cursor-not-allowed'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                >
                    <FaAngleDoubleLeft className="w-3 h-3" />
                </button>
            )}

            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`flex items-center px-2 py-2 text-sm rounded transition-all duration-200 ${currentPage === 1
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
            >
                <FaChevronLeft className="w-3 h-3" />
            </button>

            {pages.map((page, index) => (
                <React.Fragment key={index}>
                    {page === '...' ? (
                        <span className="px-3 py-2 text-gray-400">
                            <FaEllipsisH className="w-3 h-3" />
                        </span>
                    ) : (
                        <button
                            onClick={() => handlePageChange(page)}
                            className={`px-3 py-2 text-sm rounded transition-all duration-200 ${currentPage === page
                                    ? 'bg-blue-500 text-white'
                                    : 'text-gray-700 hover:bg-gray-100'
                                }`}
                        >
                            {page}
                        </button>
                    )}
                </React.Fragment>
            ))}

            <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`flex items-center px-2 py-2 text-sm rounded transition-all duration-200 ${currentPage === totalPages
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
            >
                <FaChevronRight className="w-3 h-3" />
            </button>

            {showFirstLast && (
                <button
                    onClick={() => handlePageChange(totalPages)}
                    disabled={currentPage === totalPages}
                    className={`flex items-center px-2 py-2 text-sm rounded transition-all duration-200 ${currentPage === totalPages
                            ? 'text-gray-400 cursor-not-allowed'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                >
                    <FaAngleDoubleRight className="w-3 h-3" />
                </button>
            )}
        </div>
    );
};

// Sized Pagination
export const SizedPagination = ({
    currentPage = 1,
    totalPages = 5,
    onPageChange = () => { },
    size = 'medium' // 'small' | 'medium' | 'large'
}) => {
    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };

    const getSizeClasses = (isActive = false) => {
        const sizes = {
            small: 'px-2 py-1 text-xs',
            medium: 'px-3 py-2 text-sm',
            large: 'px-4 py-3 text-base'
        };

        return `${sizes[size]} rounded transition-all duration-200 ${isActive
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`;
    };

    return (
        <div className="flex items-center justify-center space-x-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={getSizeClasses(currentPage === page)}
                >
                    {page}
                </button>
            ))}
        </div>
    );
};

// Minimal Pagination
export const MinimalPagination = ({
    currentPage = 1,
    totalPages = 5,
    onPageChange = () => { },
    showInfo = true
}) => {
    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };

    return (
        <div className="flex items-center justify-between">
            {showInfo && (
                <span className="text-sm text-gray-600">
                    Page {currentPage} of {totalPages}
                </span>
            )}

            <div className="flex items-center space-x-2">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-3 py-1 text-sm rounded transition-all duration-200 ${currentPage === 1
                            ? 'text-gray-400 cursor-not-allowed'
                            : 'text-blue-500 hover:bg-blue-50'
                        }`}
                >
                    Previous
                </button>

                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-3 py-1 text-sm rounded transition-all duration-200 ${currentPage === totalPages
                            ? 'text-gray-400 cursor-not-allowed'
                            : 'text-blue-500 hover:bg-blue-50'
                        }`}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

// Rounded Pagination
export const RoundedPagination = ({
    currentPage = 1,
    totalPages = 5,
    onPageChange = () => { }
}) => {
    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };

    return (
        <div className="flex items-center justify-center space-x-1">
            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200 ${currentPage === 1
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
            >
                <FaChevronLeft className="w-3 h-3" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-8 h-8 rounded-full text-sm transition-all duration-200 ${currentPage === page
                            ? 'bg-blue-500 text-white shadow-md'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                >
                    {page}
                </button>
            ))}

            <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200 ${currentPage === totalPages
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
            >
                <FaChevronRight className="w-3 h-3" />
            </button>
        </div>
    );
};

// Jump to Page Pagination
export const JumpPagination = ({
    currentPage = 1,
    totalPages = 5,
    onPageChange = () => { }
}) => {
    const [jumpPage, setJumpPage] = React.useState('');

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };

    const handleJump = () => {
        const page = parseInt(jumpPage);
        if (page >= 1 && page <= totalPages) {
            handlePageChange(page);
            setJumpPage('');
        }
    };

    return (
        <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center space-x-1">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-3 py-2 text-sm rounded transition-all duration-200 ${currentPage === 1
                            ? 'text-gray-400 cursor-not-allowed'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                >
                    Previous
                </button>

                <span className="px-3 py-2 text-sm text-gray-600">
                    {currentPage} / {totalPages}
                </span>

                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-3 py-2 text-sm rounded transition-all duration-200 ${currentPage === totalPages
                            ? 'text-gray-400 cursor-not-allowed'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                >
                    Next
                </button>
            </div>

            <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Go to:</span>
                <input
                    type="number"
                    min="1"
                    max={totalPages}
                    value={jumpPage}
                    onChange={(e) => setJumpPage(e.target.value)}
                    className="w-16 px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="1"
                />
                <button
                    onClick={handleJump}
                    className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200"
                >
                    Go
                </button>
            </div>
        </div>
    );
};

export default Pagination;