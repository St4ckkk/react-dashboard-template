import React from 'react';

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

export default Pagination;