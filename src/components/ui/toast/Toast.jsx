import React, { useState, useEffect, createContext, useContext } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '@libs/utils';
import {
    FaCheckCircle,
    FaExclamationTriangle,
    FaInfoCircle,
    FaTimes,
    FaTimesCircle,
    FaBell,
    FaExclamationCircle
} from 'react-icons/fa';

// Toast Context
const ToastContext = createContext();

// Toast Provider
export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);

    const addToast = (toast) => {
        const id = Date.now() + Math.random();
        const newToast = {
            id,
            ...toast,
            timestamp: new Date()
        };
        setToasts(prev => [...prev, newToast]);

        // Auto remove toast after duration
        if (toast.duration !== 0) {
            setTimeout(() => {
                removeToast(id);
            }, toast.duration || 5000);
        }
    };

    const removeToast = (id) => {
        setToasts(prev => prev.filter(toast => toast.id !== id));
    };

    const removeAllToasts = () => {
        setToasts([]);
    };

    return (
        <ToastContext.Provider value={{
            toasts,
            addToast,
            removeToast,
            removeAllToasts
        }}>
            {children}
            <ToastContainer />
        </ToastContext.Provider>
    );
};

// Hook to use toast
export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within ToastProvider');
    }
    return context;
};

// Toast Container Component
const ToastContainer = () => {
    const { toasts } = useToast();

    if (toasts.length === 0) return null;

    return createPortal(
        <div className="fixed inset-0 pointer-events-none z-50">
            <div className="flex flex-col items-end justify-start min-h-screen p-4 space-y-2">
                {toasts.map(toast => (
                    <ToastItem key={toast.id} toast={toast} />
                ))}
            </div>
        </div>,
        document.body
    );
};

// Individual Toast Item Component
const ToastItem = ({ toast }) => {
    const { removeToast } = useToast();
    const [isVisible, setIsVisible] = useState(false);
    const [isLeaving, setIsLeaving] = useState(false);

    useEffect(() => {
        // Trigger enter animation
        setTimeout(() => setIsVisible(true), 10);
    }, []);

    const handleClose = () => {
        setIsLeaving(true);
        setTimeout(() => removeToast(toast.id), 300);
    };

    const getIcon = () => {
        switch (toast.type) {
            case 'success':
                return <FaCheckCircle className="w-5 h-5 text-green-500" />;
            case 'error':
                return <FaTimesCircle className="w-5 h-5 text-red-500" />;
            case 'warning':
                return <FaExclamationTriangle className="w-5 h-5 text-yellow-500" />;
            case 'info':
                return <FaInfoCircle className="w-5 h-5 text-blue-500" />;
            default:
                return <FaBell className="w-5 h-5 text-gray-500" />;
        }
    };

    const getStyles = () => {
        const baseStyles = 'pointer-events-auto relative overflow-hidden rounded-lg shadow-lg max-w-sm w-full';

        switch (toast.type) {
            case 'success':
                return `${baseStyles} bg-white border-l-4 border-green-500`;
            case 'error':
                return `${baseStyles} bg-white border-l-4 border-red-500`;
            case 'warning':
                return `${baseStyles} bg-white border-l-4 border-yellow-500`;
            case 'info':
                return `${baseStyles} bg-white border-l-4 border-blue-500`;
            default:
                return `${baseStyles} bg-white border-l-4 border-gray-500`;
        }
    };

    const getProgressBarColor = () => {
        switch (toast.type) {
            case 'success':
                return 'bg-green-500';
            case 'error':
                return 'bg-red-500';
            case 'warning':
                return 'bg-yellow-500';
            case 'info':
                return 'bg-blue-500';
            default:
                return 'bg-gray-500';
        }
    };

    return (
        <div
            className={cn(
                getStyles(),
                'transform transition-all duration-300 ease-in-out',
                isVisible && !isLeaving
                    ? 'translate-x-0 opacity-100'
                    : 'translate-x-full opacity-0'
            )}
        >
            {/* Progress bar */}
            {toast.duration && toast.duration > 0 && (
                <div className="absolute bottom-0 left-0 h-1 bg-gray-200 w-full">
                    <div
                        className={cn('h-full', getProgressBarColor())}
                        style={{
                            animation: `shrink ${toast.duration || 5000}ms linear forwards`
                        }}
                    />
                </div>
            )}

            <div className="p-4">
                <div className="flex items-start">
                    <div className="flex-shrink-0">
                        {getIcon()}
                    </div>
                    <div className="ml-3 w-0 flex-1">
                        {toast.title && (
                            <p className="text-sm font-medium text-gray-900">
                                {toast.title}
                            </p>
                        )}
                        {toast.message && (
                            <p className={cn(
                                'text-sm text-gray-500',
                                toast.title ? 'mt-1' : ''
                            )}>
                                {toast.message}
                            </p>
                        )}
                        {toast.action && (
                            <div className="mt-3">
                                <button
                                    className="text-sm font-medium text-blue-600 hover:text-blue-500"
                                    onClick={toast.action.onClick}
                                >
                                    {toast.action.label}
                                </button>
                            </div>
                        )}
                    </div>
                    <div className="ml-4 flex-shrink-0 flex">
                        <button
                            className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            onClick={handleClose}
                        >
                            <span className="sr-only">Close</span>
                            <FaTimes className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Predefined toast functions
export const toast = {
    success: (message, options = {}) => {
        const { addToast } = useToast();
        addToast({
            type: 'success',
            message,
            ...options
        });
    },
    error: (message, options = {}) => {
        const { addToast } = useToast();
        addToast({
            type: 'error',
            message,
            ...options
        });
    },
    warning: (message, options = {}) => {
        const { addToast } = useToast();
        addToast({
            type: 'warning',
            message,
            ...options
        });
    },
    info: (message, options = {}) => {
        const { addToast } = useToast();
        addToast({
            type: 'info',
            message,
            ...options
        });
    },
    custom: (options) => {
        const { addToast } = useToast();
        addToast(options);
    }
};

// Simple Toast Components for direct use
export const SuccessToast = ({ title, message, onClose, action }) => (
    <div className="bg-white border-l-4 border-green-500 rounded-lg shadow-lg max-w-sm w-full p-4">
        <div className="flex items-start">
            <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
            <div className="ml-3 w-0 flex-1">
                {title && <p className="text-sm font-medium text-gray-900">{title}</p>}
                {message && <p className="text-sm text-gray-500 mt-1">{message}</p>}
                {action && (
                    <div className="mt-3">
                        <button
                            className="text-sm font-medium text-blue-600 hover:text-blue-500"
                            onClick={action.onClick}
                        >
                            {action.label}
                        </button>
                    </div>
                )}
            </div>
            {onClose && (
                <button
                    className="ml-4 flex-shrink-0 text-gray-400 hover:text-gray-500"
                    onClick={onClose}
                >
                    <FaTimes className="w-4 h-4" />
                </button>
            )}
        </div>
    </div>
);

export const ErrorToast = ({ title, message, onClose, action }) => (
    <div className="bg-white border-l-4 border-red-500 rounded-lg shadow-lg max-w-sm w-full p-4">
        <div className="flex items-start">
            <FaTimesCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
            <div className="ml-3 w-0 flex-1">
                {title && <p className="text-sm font-medium text-gray-900">{title}</p>}
                {message && <p className="text-sm text-gray-500 mt-1">{message}</p>}
                {action && (
                    <div className="mt-3">
                        <button
                            className="text-sm font-medium text-blue-600 hover:text-blue-500"
                            onClick={action.onClick}
                        >
                            {action.label}
                        </button>
                    </div>
                )}
            </div>
            {onClose && (
                <button
                    className="ml-4 flex-shrink-0 text-gray-400 hover:text-gray-500"
                    onClick={onClose}
                >
                    <FaTimes className="w-4 h-4" />
                </button>
            )}
        </div>
    </div>
);

export const WarningToast = ({ title, message, onClose, action }) => (
    <div className="bg-white border-l-4 border-yellow-500 rounded-lg shadow-lg max-w-sm w-full p-4">
        <div className="flex items-start">
            <FaExclamationTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0" />
            <div className="ml-3 w-0 flex-1">
                {title && <p className="text-sm font-medium text-gray-900">{title}</p>}
                {message && <p className="text-sm text-gray-500 mt-1">{message}</p>}
                {action && (
                    <div className="mt-3">
                        <button
                            className="text-sm font-medium text-blue-600 hover:text-blue-500"
                            onClick={action.onClick}
                        >
                            {action.label}
                        </button>
                    </div>
                )}
            </div>
            {onClose && (
                <button
                    className="ml-4 flex-shrink-0 text-gray-400 hover:text-gray-500"
                    onClick={onClose}
                >
                    <FaTimes className="w-4 h-4" />
                </button>
            )}
        </div>
    </div>
);

export const InfoToast = ({ title, message, onClose, action }) => (
    <div className="bg-white border-l-4 border-blue-500 rounded-lg shadow-lg max-w-sm w-full p-4">
        <div className="flex items-start">
            <FaInfoCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
            <div className="ml-3 w-0 flex-1">
                {title && <p className="text-sm font-medium text-gray-900">{title}</p>}
                {message && <p className="text-sm text-gray-500 mt-1">{message}</p>}
                {action && (
                    <div className="mt-3">
                        <button
                            className="text-sm font-medium text-blue-600 hover:text-blue-500"
                            onClick={action.onClick}
                        >
                            {action.label}
                        </button>
                    </div>
                )}
            </div>
            {onClose && (
                <button
                    className="ml-4 flex-shrink-0 text-gray-400 hover:text-gray-500"
                    onClick={onClose}
                >
                    <FaTimes className="w-4 h-4" />
                </button>
            )}
        </div>
    </div>
);

// Add CSS animation for progress bar
const style = document.createElement('style');
style.textContent = `
    @keyframes shrink {
        from { width: 100%; }
        to { width: 0%; }
    }
`;
document.head.appendChild(style);

export default {
    ToastProvider,
    useToast,
    toast,
    SuccessToast,
    ErrorToast,
    WarningToast,
    InfoToast
};