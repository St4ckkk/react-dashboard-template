import React, { useEffect, useState } from 'react';
import { FaTimes, FaCheck, FaInfoCircle } from 'react-icons/fa';
import Button from '@buttons/Button';

const Modal = ({
    isOpen,
    onClose,
    title,
    children,
    footer,
    size = 'md',
    closeOnBackdrop = true,
    showCloseButton = true,
    statusMessage = null,
    statusType = 'success'
}) => {
    const [isVisible, setIsVisible] = useState(false);


    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEsc);
            document.body.style.overflow = 'hidden';
            setTimeout(() => setIsVisible(true), 10);
        } else {
            setIsVisible(false);
        }

        return () => {
            document.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'auto';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;


    const sizeClasses = {
        sm: 'max-w-xs',
        md: 'max-w-sm',
        lg: 'max-w-md',
        xl: 'max-w-lg',
        '2xl': 'max-w-xl',
        full: 'max-w-full mx-4'
    };


    const statusClasses = {
        success: 'bg-green-50 text-green-700 border border-green-200',
        warning: 'bg-yellow-50 text-yellow-700 border border-yellow-200',
        error: 'bg-red-50 text-red-700 border border-red-200',
        info: 'bg-blue-50 text-blue-700 border border-blue-200'
    };


    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget && closeOnBackdrop) {
            onClose();
        }
    };


    const defaultFooter = (
        <>
            <Button
                className="px-4 py-1.5 text-ss bg-gray-100 text-gray-700 rounded hover:bg-gray-200 border border-gray-300"
                onClick={onClose}
            >
                Cancel
            </Button>
            <Button
                className="px-4 py-1.5 text-sm bg-green-500 text-white rounded hover:bg-green-600"
                onClick={onClose}
            >
                Complete
            </Button>
        </>
    );

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            onClick={handleBackdropClick}
            aria-modal="true"
            role="dialog"
        >
            <div
                className={`w-full ${sizeClasses[size]} transform rounded-lg bg-white shadow-xl transition-all duration-300 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
            >
                
                <div className="flex items-center justify-between px-4 py-3">
                    <h3 className="text-base font-medium text-gray-800">{title}</h3>
                    {showCloseButton && (
                        <Button
                            onClick={onClose}
                            className="text-gray-400 hover:text-gray-500 focus:outline-none"
                            aria-label="Close"
                        >
                            <FaTimes className="text-sm" />
                        </Button>
                    )}
                </div>

                {statusMessage && (
                    <div className={`mx-4 mb-3 p-3 text-sm rounded-md flex items-start ${statusClasses[statusType]}`}>
                        {statusType === 'success' && <FaCheck className="mr-2 mt-0.5 text-xs" />}
                        {statusType === 'info' && <FaInfoCircle className="mr-2 mt-0.5 text-xs" />}
                        <span>{statusMessage}</span>
                    </div>
                )}


                <div className="px-4 pb-4">
                    {children}
                </div>


                <div className="flex justify-end space-x-2 px-4 py-3 bg-gray-100 border-t border-gray-200">
                    {footer || defaultFooter}
                </div>
            </div>
        </div>
    );
};

export default Modal;