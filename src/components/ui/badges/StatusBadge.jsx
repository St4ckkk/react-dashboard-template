
import React from 'react';

const StatusBadge = ({ status, className = '' }) => {
    const getBadgeColor = () => {
        switch (status?.toLowerCase()) {
            case 'active':
            case 'registered':
            case 'approved':
                return 'bg-green-500';
            case 'inactive':
            case 'pending':
                return 'bg-yellow-500';
            case 'rejected':
            case 'archived':
                return 'bg-red-500';
            case 'processing':
                return 'bg-blue-500';
            default:
                return 'bg-gray-500';
        }
    };

    return (
        <span className={`inline-block px-2 py-1 rounded text-white text-xs font-medium ${getBadgeColor()} ${className}`}>
            {status || 'Unknown'}
        </span>
    );
};

export default StatusBadge;
