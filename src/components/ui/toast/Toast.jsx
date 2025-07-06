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
    FaExclamationCircle,
    FaDownload,
    FaUpload,
    FaSync,
    FaHeart,
    FaStar,
    FaShieldAlt,
    FaRocket,
    FaGift,
    FaBolt,
    FaMagic,
    FaFire,
    FaGem,
    FaCrown,
    FaThumbsUp,
    FaLightbulb,
    FaTrophy,
    FaMusic,
    FaCamera,
    FaWifi,
    FaBatteryHalf,
    FaCode,
    FaDatabase
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
        setTimeout(() => setIsVisible(true), 50);
    }, []);

    const handleClose = () => {
        setIsLeaving(true);
        setTimeout(() => removeToast(toast.id), 300);
    };

    const getIcon = () => {
        const iconProps = "w-5 h-5 flex-shrink-0";

        switch (toast.type) {
            case 'success':
                return <FaCheckCircle className={`${iconProps} text-green-500`} />;
            case 'error':
                return <FaTimesCircle className={`${iconProps} text-red-500`} />;
            case 'warning':
                return <FaExclamationTriangle className={`${iconProps} text-yellow-500`} />;
            case 'info':
                return <FaInfoCircle className={`${iconProps} text-blue-500`} />;

            // Enhanced toast types
            case 'loading':
                return <FaSync className={`${iconProps} text-blue-500 animate-spin`} />;
            case 'upload':
                return <FaUpload className={`${iconProps} text-purple-500`} />;
            case 'download':
                return <FaDownload className={`${iconProps} text-indigo-500`} />;
            case 'like':
                return <FaHeart className={`${iconProps} text-pink-500 animate-pulse`} />;
            case 'star':
                return <FaStar className={`${iconProps} text-yellow-400`} />;
            case 'security':
                return <FaShieldAlt className={`${iconProps} text-green-600`} />;
            case 'rocket':
                return <FaRocket className={`${iconProps} text-orange-500`} />;
            case 'gift':
                return <FaGift className={`${iconProps} text-red-400`} />;
            case 'magic':
                return <FaMagic className={`${iconProps} text-purple-600`} />;
            case 'fire':
                return <FaFire className={`${iconProps} text-red-500 animate-pulse`} />;
            case 'gem':
                return <FaGem className={`${iconProps} text-cyan-500`} />;
            case 'crown':
                return <FaCrown className={`${iconProps} text-yellow-500`} />;
            case 'thumbs':
                return <FaThumbsUp className={`${iconProps} text-blue-500`} />;
            case 'idea':
                return <FaLightbulb className={`${iconProps} text-yellow-500 animate-pulse`} />;
            case 'trophy':
                return <FaTrophy className={`${iconProps} text-yellow-600`} />;
            case 'music':
                return <FaMusic className={`${iconProps} text-purple-500`} />;
            case 'camera':
                return <FaCamera className={`${iconProps} text-gray-600`} />;
            case 'wifi':
                return <FaWifi className={`${iconProps} text-green-500`} />;
            case 'battery':
                return <FaBatteryHalf className={`${iconProps} text-green-500`} />;
            case 'code':
                return <FaCode className={`${iconProps} text-blue-600`} />;
            case 'database':
                return <FaDatabase className={`${iconProps} text-gray-600`} />;
            case 'bolt':
                return <FaBolt className={`${iconProps} text-yellow-500`} />;

            default:
                return <FaBell className={`${iconProps} text-gray-500`} />;
        }
    };

    const getToastStyles = () => {
        const baseStyles = 'pointer-events-auto relative overflow-hidden rounded-xl shadow-lg backdrop-blur-sm max-w-sm w-full border';

        switch (toast.type) {
            case 'success':
                return `${baseStyles} bg-white/95 border-green-200 shadow-green-100`;
            case 'error':
                return `${baseStyles} bg-white/95 border-red-200 shadow-red-100`;
            case 'warning':
                return `${baseStyles} bg-white/95 border-yellow-200 shadow-yellow-100`;
            case 'info':
                return `${baseStyles} bg-white/95 border-blue-200 shadow-blue-100`;
            case 'loading':
                return `${baseStyles} bg-white/95 border-blue-200 shadow-blue-100`;
            case 'upload':
                return `${baseStyles} bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200`;
            case 'download':
                return `${baseStyles} bg-gradient-to-r from-indigo-50 to-blue-50 border-indigo-200`;
            case 'like':
                return `${baseStyles} bg-gradient-to-r from-pink-50 to-rose-50 border-pink-200`;
            case 'star':
                return `${baseStyles} bg-gradient-to-r from-yellow-50 to-amber-50 border-yellow-200`;
            case 'security':
                return `${baseStyles} bg-gradient-to-r from-green-50 to-emerald-50 border-green-200`;
            case 'rocket':
                return `${baseStyles} bg-gradient-to-r from-orange-50 to-red-50 border-orange-200`;
            case 'gift':
                return `${baseStyles} bg-gradient-to-r from-red-50 to-pink-50 border-red-200`;
            case 'magic':
                return `${baseStyles} bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200`;
            case 'fire':
                return `${baseStyles} bg-gradient-to-r from-red-50 to-orange-50 border-red-200`;
            case 'gem':
                return `${baseStyles} bg-gradient-to-r from-cyan-50 to-teal-50 border-cyan-200`;
            case 'crown':
                return `${baseStyles} bg-gradient-to-r from-yellow-50 to-gold-50 border-yellow-200`;
            case 'thumbs':
                return `${baseStyles} bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200`;
            case 'idea':
                return `${baseStyles} bg-gradient-to-r from-yellow-50 to-amber-50 border-yellow-200`;
            case 'trophy':
                return `${baseStyles} bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200`;
            case 'music':
                return `${baseStyles} bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200`;
            case 'camera':
                return `${baseStyles} bg-gradient-to-r from-gray-50 to-slate-50 border-gray-200`;
            case 'wifi':
                return `${baseStyles} bg-gradient-to-r from-green-50 to-teal-50 border-green-200`;
            case 'battery':
                return `${baseStyles} bg-gradient-to-r from-green-50 to-lime-50 border-green-200`;
            case 'code':
                return `${baseStyles} bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200`;
            case 'database':
                return `${baseStyles} bg-gradient-to-r from-gray-50 to-blue-50 border-gray-200`;
            case 'bolt':
                return `${baseStyles} bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200`;
            default:
                return `${baseStyles} bg-white/95 border-gray-200 shadow-gray-100`;
        }
    };

    const getProgressBarConfig = () => {
        switch (toast.type) {
            case 'success':
                return {
                    color: 'bg-gradient-to-r from-green-400 to-green-600',
                    style: 'linear',
                    height: 'h-1'
                };
            case 'error':
                return {
                    color: 'bg-gradient-to-r from-red-400 to-red-600',
                    style: 'pulse',
                    height: 'h-1'
                };
            case 'warning':
                return {
                    color: 'bg-gradient-to-r from-yellow-400 to-orange-500',
                    style: 'striped',
                    height: 'h-1'
                };
            case 'info':
                return {
                    color: 'bg-gradient-to-r from-blue-400 to-blue-600',
                    style: 'linear',
                    height: 'h-1'
                };
            case 'loading':
                return {
                    color: 'bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600',
                    style: 'wave',
                    height: 'h-1'
                };
            case 'upload':
                return {
                    color: 'bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600',
                    style: 'dots',
                    height: 'h-1.5'
                };
            case 'download':
                return {
                    color: 'bg-gradient-to-r from-indigo-400 to-blue-600',
                    style: 'blocks',
                    height: 'h-1'
                };
            case 'like':
                return {
                    color: 'bg-gradient-to-r from-pink-400 via-rose-500 to-pink-600',
                    style: 'heartbeat',
                    height: 'h-1'
                };
            case 'star':
                return {
                    color: 'bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600',
                    style: 'sparkle',
                    height: 'h-1'
                };
            case 'security':
                return {
                    color: 'bg-gradient-to-r from-green-400 to-emerald-600',
                    style: 'secure',
                    height: 'h-1'
                };
            case 'rocket':
                return {
                    color: 'bg-gradient-to-r from-orange-400 via-red-500 to-orange-600',
                    style: 'rocket',
                    height: 'h-1.5'
                };
            case 'gift':
                return {
                    color: 'bg-gradient-to-r from-red-400 via-pink-500 to-red-600',
                    style: 'celebration',
                    height: 'h-1'
                };
            case 'magic':
                return {
                    color: 'bg-gradient-to-r from-purple-400 via-indigo-500 to-purple-600',
                    style: 'magic',
                    height: 'h-1.5'
                };
            case 'fire':
                return {
                    color: 'bg-gradient-to-r from-red-500 via-orange-500 to-red-600',
                    style: 'flame',
                    height: 'h-1.5'
                };
            case 'gem':
                return {
                    color: 'bg-gradient-to-r from-cyan-400 via-teal-500 to-cyan-600',
                    style: 'shimmer',
                    height: 'h-1'
                };
            case 'crown':
                return {
                    color: 'bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600',
                    style: 'royal',
                    height: 'h-1.5'
                };
            case 'thumbs':
                return {
                    color: 'bg-gradient-to-r from-blue-400 to-indigo-600',
                    style: 'thumbs',
                    height: 'h-1'
                };
            case 'idea':
                return {
                    color: 'bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600',
                    style: 'bulb',
                    height: 'h-1'
                };
            case 'trophy':
                return {
                    color: 'bg-gradient-to-r from-yellow-400 via-gold-500 to-yellow-600',
                    style: 'victory',
                    height: 'h-1.5'
                };
            case 'music':
                return {
                    color: 'bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600',
                    style: 'sound-wave',
                    height: 'h-1'
                };
            case 'camera':
                return {
                    color: 'bg-gradient-to-r from-gray-400 to-gray-600',
                    style: 'camera-flash',
                    height: 'h-1'
                };
            case 'wifi':
                return {
                    color: 'bg-gradient-to-r from-green-400 to-teal-600',
                    style: 'signal',
                    height: 'h-1'
                };
            case 'battery':
                return {
                    color: 'bg-gradient-to-r from-green-400 to-lime-600',
                    style: 'battery-charge',
                    height: 'h-1'
                };
            case 'code':
                return {
                    color: 'bg-gradient-to-r from-blue-400 to-indigo-600',
                    style: 'code-compile',
                    height: 'h-1'
                };
            case 'database':
                return {
                    color: 'bg-gradient-to-r from-gray-400 to-blue-600',
                    style: 'data-flow',
                    height: 'h-1'
                };
            case 'bolt':
                return {
                    color: 'bg-gradient-to-r from-yellow-400 to-orange-600',
                    style: 'electric',
                    height: 'h-1.5'
                };
            default:
                return {
                    color: 'bg-gradient-to-r from-gray-400 to-gray-600',
                    style: 'linear',
                    height: 'h-1'
                };
        }
    };

    const renderProgressBar = () => {
        if (!toast.duration || toast.duration <= 0) return null;

        const config = getProgressBarConfig();
        const baseClasses = `absolute bottom-0 left-0 w-full rounded-b-xl overflow-hidden ${config.height}`;
        const animationClass = `progress-${config.style}`;

        return (
            <div className={`${baseClasses} bg-gray-100`}>
                <div
                    className={cn(config.color, 'h-full', animationClass)}
                    style={{
                        animation: `shrinkProgress ${toast.duration}ms linear forwards`
                    }}
                />
                {/* Add overlay effects for special progress types */}
                {config.style === 'striped' && (
                    <div className="absolute inset-0 bg-stripe-pattern opacity-30" />
                )}
                {config.style === 'dots' && (
                    <div className="absolute inset-0 flex items-center justify-center space-x-1">
                        <div className="w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <div className="w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <div className="w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                )}
                {config.style === 'sparkle' && (
                    <div className="absolute inset-0">
                        <div className="absolute top-0 left-1/4 w-0.5 h-0.5 bg-white rounded-full animate-ping" />
                        <div className="absolute top-0 right-1/3 w-0.5 h-0.5 bg-white rounded-full animate-ping" style={{ animationDelay: '200ms' }} />
                        <div className="absolute top-0 right-1/4 w-0.5 h-0.5 bg-white rounded-full animate-ping" style={{ animationDelay: '400ms' }} />
                    </div>
                )}
                {config.style === 'flame' && (
                    <div className="absolute inset-0">
                        <div className="w-full h-full bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-60 animate-pulse" />
                    </div>
                )}
                {config.style === 'electric' && (
                    <div className="absolute inset-0 bg-yellow-300 opacity-50 animate-pulse" />
                )}
            </div>
        );
    };

    return (
        <div
            className={cn(
                getToastStyles(),
                'transform transition-all duration-500 ease-out',
                isVisible && !isLeaving
                    ? 'translate-x-0 opacity-100 scale-100'
                    : 'translate-x-full opacity-0 scale-95'
            )}
        >
            <div className="p-4">
                <div className="flex items-start gap-3">
                    <div className="mt-0.5">
                        {getIcon()}
                    </div>
                    <div className="flex-1 min-w-0">
                        {toast.title && (
                            <p className="text-sm font-semibold text-gray-900 mb-1">
                                {toast.title}
                            </p>
                        )}
                        {toast.message && (
                            <p className="text-sm text-gray-600 leading-relaxed">
                                {toast.message}
                            </p>
                        )}
                        {toast.action && (
                            <div className="mt-3 flex gap-2">
                                <button
                                    className="text-sm font-medium px-3 py-1 rounded-md bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors duration-200"
                                    onClick={toast.action.onClick}
                                >
                                    {toast.action.label}
                                </button>
                                {toast.action.secondary && (
                                    <button
                                        className="text-sm font-medium px-3 py-1 rounded-md text-gray-600 hover:text-gray-800 transition-colors duration-200"
                                        onClick={toast.action.secondary.onClick}
                                    >
                                        {toast.action.secondary.label}
                                    </button>
                                )}
                            </div>
                        )}
                    </div>
                    <button
                        className="flex-shrink-0 p-1 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-all duration-200"
                        onClick={handleClose}
                    >
                        <span className="sr-only">Close</span>
                        <FaTimes className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Enhanced Progress bar with different styles */}
            {renderProgressBar()}

            {/* Special effects for certain toast types */}
            {(toast.type === 'magic' || toast.type === 'star' || toast.type === 'crown') && (
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-2 right-2 w-1 h-1 bg-yellow-400 rounded-full animate-ping"></div>
                    <div className="absolute top-3 right-6 w-1 h-1 bg-yellow-300 rounded-full animate-ping animation-delay-300"></div>
                    <div className="absolute top-6 right-4 w-1 h-1 bg-yellow-500 rounded-full animate-ping animation-delay-600"></div>
                </div>
            )}
        </div>
    );
};

// Enhanced Toast Helper Functions
const createToastFunction = (type) => (message, options = {}) => {
    const context = React.useContext(ToastContext);
    if (!context) {
        console.warn('Toast function called outside of ToastProvider');
        return;
    }

    context.addToast({
        type,
        message,
        ...options
    });
};

// Create all toast type functions
export const toast = {
    // Basic types
    success: createToastFunction('success'),
    error: createToastFunction('error'),
    warning: createToastFunction('warning'),
    info: createToastFunction('info'),

    // Enhanced types
    loading: createToastFunction('loading'),
    upload: createToastFunction('upload'),
    download: createToastFunction('download'),
    like: createToastFunction('like'),
    star: createToastFunction('star'),
    security: createToastFunction('security'),
    rocket: createToastFunction('rocket'),
    gift: createToastFunction('gift'),
    magic: createToastFunction('magic'),
    fire: createToastFunction('fire'),
    gem: createToastFunction('gem'),
    crown: createToastFunction('crown'),
    thumbs: createToastFunction('thumbs'),
    idea: createToastFunction('idea'),
    trophy: createToastFunction('trophy'),
    music: createToastFunction('music'),
    camera: createToastFunction('camera'),
    wifi: createToastFunction('wifi'),
    battery: createToastFunction('battery'),
    code: createToastFunction('code'),
    database: createToastFunction('database'),
    bolt: createToastFunction('bolt'),

    // Custom function
    custom: (options) => {
        const context = React.useContext(ToastContext);
        if (!context) {
            console.warn('Toast function called outside of ToastProvider');
            return;
        }
        context.addToast(options);
    }
};

// Predefined Toast Templates
export const ToastTemplates = {
    fileUploadSuccess: (filename) => ({
        type: 'upload',
        title: 'Upload Complete',
        message: `${filename} has been uploaded successfully.`,
        duration: 4000
    }),

    fileDownloadSuccess: (filename) => ({
        type: 'download',
        title: 'Download Complete',
        message: `${filename} has been downloaded.`,
        duration: 4000
    }),

    likeAdded: (item) => ({
        type: 'like',
        title: 'Liked!',
        message: `You liked "${item}".`,
        duration: 3000
    }),

    starAdded: () => ({
        type: 'star',
        title: 'Starred!',
        message: 'Added to your favorites.',
        duration: 3000
    }),

    securityAlert: (message) => ({
        type: 'security',
        title: 'Security Alert',
        message,
        duration: 8000
    }),

    achievementUnlocked: (achievement) => ({
        type: 'trophy',
        title: 'Achievement Unlocked!',
        message: achievement,
        duration: 6000
    }),

    ideaGenerated: () => ({
        type: 'idea',
        title: 'New Idea!',
        message: 'AI has generated a suggestion for you.',
        duration: 5000
    }),

    magicHappened: () => ({
        type: 'magic',
        title: 'Magic Happened!',
        message: 'Something amazing just occurred.',
        duration: 4000
    }),

    connectionRestored: () => ({
        type: 'wifi',
        title: 'Connected',
        message: 'Internet connection restored.',
        duration: 3000
    }),

    lowBattery: () => ({
        type: 'battery',
        title: 'Low Battery',
        message: 'Please save your work and charge your device.',
        duration: 0, // Persistent
        action: {
            label: 'Dismiss',
            onClick: () => { }
        }
    }),

    codeDeployed: () => ({
        type: 'rocket',
        title: 'Deployed!',
        message: 'Your code has been successfully deployed.',
        duration: 5000
    }),

    databaseBackup: () => ({
        type: 'database',
        title: 'Backup Complete',
        message: 'Database backup has been created.',
        duration: 4000
    })
};

// Simple Toast Components for direct use (Enhanced)
export const SuccessToast = ({ title, message, onClose, action, className }) => (
    <div className={cn("bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl shadow-lg max-w-sm w-full p-4", className)}>
        <div className="flex items-start gap-3">
            <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
            <div className="flex-1 min-w-0">
                {title && <p className="text-sm font-semibold text-gray-900 mb-1">{title}</p>}
                {message && <p className="text-sm text-gray-600 leading-relaxed">{message}</p>}
                {action && (
                    <div className="mt-3">
                        <button
                            className="text-sm font-medium px-3 py-1 rounded-md bg-green-50 text-green-700 hover:bg-green-100 transition-colors duration-200"
                            onClick={action.onClick}
                        >
                            {action.label}
                        </button>
                    </div>
                )}
            </div>
            {onClose && (
                <button
                    className="flex-shrink-0 p-1 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-all duration-200"
                    onClick={onClose}
                >
                    <FaTimes className="w-4 h-4" />
                </button>
            )}
        </div>
    </div>
);

export const ErrorToast = ({ title, message, onClose, action, className }) => (
    <div className={cn("bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-xl shadow-lg max-w-sm w-full p-4", className)}>
        <div className="flex items-start gap-3">
            <FaTimesCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <div className="flex-1 min-w-0">
                {title && <p className="text-sm font-semibold text-gray-900 mb-1">{title}</p>}
                {message && <p className="text-sm text-gray-600 leading-relaxed">{message}</p>}
                {action && (
                    <div className="mt-3">
                        <button
                            className="text-sm font-medium px-3 py-1 rounded-md bg-red-50 text-red-700 hover:bg-red-100 transition-colors duration-200"
                            onClick={action.onClick}
                        >
                            {action.label}
                        </button>
                    </div>
                )}
            </div>
            {onClose && (
                <button
                    className="flex-shrink-0 p-1 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-all duration-200"
                    onClick={onClose}
                >
                    <FaTimes className="w-4 h-4" />
                </button>
            )}
        </div>
    </div>
);

// Add enhanced CSS animations for different progress bar styles
const style = document.createElement('style');
style.textContent = `
    @keyframes shrinkProgress {
        from { width: 100%; }
        to { width: 0%; }
    }
    
    @keyframes sparkle {
        0%, 100% { opacity: 0; transform: scale(0); }
        50% { opacity: 1; transform: scale(1); }
    }
    
    @keyframes wave {
        0%, 100% { transform: translateX(-100%); }
        50% { transform: translateX(100%); }
    }
    
    @keyframes pulse-glow {
        0%, 100% { box-shadow: 0 0 5px currentColor; }
        50% { box-shadow: 0 0 20px currentColor; }
    }
    
    @keyframes heartbeat {
        0%, 50%, 100% { transform: scale(1); }
        25%, 75% { transform: scale(1.1); }
    }
    
    @keyframes flame-flicker {
        0%, 100% { opacity: 1; transform: scaleY(1); }
        25% { opacity: 0.8; transform: scaleY(1.1); }
        50% { opacity: 0.9; transform: scaleY(0.9); }
        75% { opacity: 0.7; transform: scaleY(1.05); }
    }
    
    @keyframes shimmer {
        0% { background-position: -200% center; }
        100% { background-position: 200% center; }
    }
    
    @keyframes electric-spark {
        0%, 100% { opacity: 1; }
        25% { opacity: 0.3; }
        50% { opacity: 0.8; }
        75% { opacity: 0.1; }
    }
    
    @keyframes sound-wave {
        0%, 100% { transform: scaleY(1); }
        50% { transform: scaleY(0.5); }
    }
    
    @keyframes signal-bars {
        0% { height: 20%; }
        25% { height: 40%; }
        50% { height: 80%; }
        75% { height: 60%; }
        100% { height: 100%; }
    }
    
    .animation-delay-300 {
        animation-delay: 300ms;
    }
    
    .animation-delay-600 {
        animation-delay: 600ms;
    }
    
    .progress-linear {
        /* Default linear progress */
    }
    
    .progress-pulse {
        animation: pulse-glow 2s infinite;
    }
    
    .progress-striped {
        background-image: linear-gradient(45deg, rgba(255,255,255,.2) 25%, transparent 25%, transparent 50%, rgba(255,255,255,.2) 50%, rgba(255,255,255,.2) 75%, transparent 75%, transparent);
        background-size: 1rem 1rem;
    }
    
    .progress-wave {
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
        animation: wave 2s infinite;
    }
    
    .progress-dots {
        position: relative;
    }
    
    .progress-blocks {
        background-image: repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(255,255,255,0.3) 3px, rgba(255,255,255,0.3) 6px);
    }
    
    .progress-heartbeat {
        animation: heartbeat 1.5s infinite;
    }
    
    .progress-sparkle {
        position: relative;
        overflow: visible;
    }
    
    .progress-secure {
        background: repeating-linear-gradient(90deg, currentColor, currentColor 10px, rgba(255,255,255,0.3) 10px, rgba(255,255,255,0.3) 20px);
    }
    
    .progress-rocket {
        background: linear-gradient(90deg, transparent 0%, currentColor 50%, transparent 100%);
        animation: wave 1s infinite;
    }
    
    .progress-celebration {
        background: radial-gradient(circle, currentColor 30%, transparent 30%);
        background-size: 4px 4px;
        animation: sparkle 1s infinite;
    }
    
    .progress-magic {
        background: linear-gradient(45deg, currentColor 25%, transparent 25%, transparent 75%, currentColor 75%), 
                    linear-gradient(45deg, currentColor 25%, transparent 25%, transparent 75%, currentColor 75%);
        background-size: 8px 8px;
        background-position: 0 0, 4px 4px;
        animation: shimmer 2s infinite;
    }
    
    .progress-flame {
        animation: flame-flicker 0.5s infinite;
    }
    
    .progress-shimmer {
        background: linear-gradient(90deg, currentColor, rgba(255,255,255,0.5), currentColor);
        background-size: 200% 100%;
        animation: shimmer 2s infinite;
    }
    
    .progress-royal {
        background: linear-gradient(90deg, currentColor, gold, currentColor);
        background-size: 200% 100%;
        animation: shimmer 3s infinite;
    }
    
    .progress-thumbs {
        background: repeating-linear-gradient(90deg, currentColor, currentColor 8px, rgba(255,255,255,0.3) 8px, rgba(255,255,255,0.3) 12px);
    }
    
    .progress-bulb {
        animation: pulse-glow 1s infinite;
    }
    
    .progress-victory {
        background: radial-gradient(ellipse, gold 0%, currentColor 50%, gold 100%);
        animation: pulse-glow 1.5s infinite;
    }
    
    .progress-sound-wave {
        background: repeating-linear-gradient(90deg, currentColor, currentColor 2px, transparent 2px, transparent 4px);
        animation: sound-wave 0.5s infinite;
    }
    
    .progress-camera-flash {
        animation: electric-spark 0.3s infinite;
    }
    
    .progress-signal {
        background: repeating-linear-gradient(90deg, currentColor, currentColor 3px, rgba(255,255,255,0.3) 3px, rgba(255,255,255,0.3) 6px);
        animation: signal-bars 1s infinite;
    }
    
    .progress-battery-charge {
        background: linear-gradient(90deg, currentColor 0%, lime 50%, currentColor 100%);
    }
    
    .progress-code-compile {
        background: repeating-linear-gradient(90deg, currentColor, currentColor 1px, rgba(255,255,255,0.3) 1px, rgba(255,255,255,0.3) 2px);
    }
    
    .progress-data-flow {
        background: linear-gradient(90deg, transparent, currentColor, transparent);
        animation: wave 2s infinite;
    }
    
    .progress-electric {
        animation: electric-spark 0.2s infinite;
    }
    
    .bg-stripe-pattern {
        background-image: repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,0.3) 2px, rgba(255,255,255,0.3) 4px);
    }
`;
document.head.appendChild(style);

export default {
    ToastProvider,
    useToast,
    toast,
    ToastTemplates,
    SuccessToast,
    ErrorToast
};