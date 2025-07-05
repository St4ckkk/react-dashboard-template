import React from 'react';

const Loader = ({ isLoading = false }) => {
    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-white bg-opacity-80">
            <div className="flex flex-col items-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-deep-blue"></div>
                <p className="mt-4 text-gray-700 font-medium">Loading...</p>
            </div>
        </div>
    );
};

export default Loader;