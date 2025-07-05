import React, { useState, useEffect, useRef } from 'react';
import {
    FaTimes,
    FaExclamationTriangle,
    FaCheck,
    FaInfo,
    FaTrash,
    FaSave,
    FaEdit,
    FaUpload,
    FaDownload,
    FaEye,
    FaCog,
    FaUsers,
    FaBell,
    FaCalendar,
    FaShoppingCart,
    FaCreditCard,
    FaImage,
    FaVideo,
    FaPlay,
    FaSpinner
} from 'react-icons/fa';

// Base Modal Component with improved transitions
export const Modal = ({
    isOpen = false,
    onClose,
    title,
    children,
    size = 'default',
    centered = false,
    backdrop = true,
    keyboard = true,
    fade = true,
    scrollable = false,
    fullscreen = false,
    className = '',
    animationType = 'fade', // 'fade', 'slideDown', 'slideUp', 'scale', 'slideRight', 'slideLeft'
    ...props
}) => {
    const modalRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            setIsAnimating(true);

            const body = document.body;
            const originalOverflow = body.style.overflow;
            const originalPaddingRight = body.style.paddingRight;


            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

            body.style.overflow = 'hidden';
            body.style.paddingRight = `${scrollbarWidth}px`;


            const timer = setTimeout(() => setIsAnimating(false), 150);

            return () => {
                clearTimeout(timer);
                body.style.overflow = originalOverflow;
                body.style.paddingRight = originalPaddingRight;
            };
        } else {
            setIsAnimating(true);
            if (fade) {
                const timer = setTimeout(() => {
                    setIsVisible(false);
                    setIsAnimating(false);
                }, 150);
                return () => clearTimeout(timer);
            } else {
                setIsVisible(false);
                setIsAnimating(false);
            }
        }
    }, [isOpen, fade]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (keyboard && e.key === 'Escape' && isOpen) {
                onClose?.();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, keyboard, onClose]);

    const handleBackdropClick = (e) => {
        if (backdrop && e.target === modalRef.current) {
            onClose?.();
        }
    };

    const sizeClasses = {
        xs: 'max-w-xs',
        small: 'max-w-sm',
        default: 'max-w-lg',
        large: 'max-w-4xl',
        xl: 'max-w-6xl',
        '2xl': 'max-w-7xl',
        fullscreen: 'max-w-none w-full h-full m-0'
    };

    const getAnimationClasses = () => {
        if (!fade) return '';
        const baseTransition = 'transition-all duration-150 ease-out';

        switch (animationType) {
            case 'slideDown':
                return `${baseTransition} ${isOpen && !isAnimating ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`;
            case 'slideUp':
                return `${baseTransition} ${isOpen && !isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`;
            case 'slideRight':
                return `${baseTransition} ${isOpen && !isAnimating ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`;
            case 'slideLeft':
                return `${baseTransition} ${isOpen && !isAnimating ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`;
            case 'scale':
                return `${baseTransition} ${isOpen && !isAnimating ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`;
            case 'fade':
            default:
                return `${baseTransition} ${isOpen && !isAnimating ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`;
        }
    };

    const modalSize = fullscreen ? 'fullscreen' : size;

    if (!isVisible) return null;

    return (
        <div
            ref={modalRef}
            className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${fade ? `transition-opacity duration-150 ${isOpen && !isAnimating ? 'opacity-100' : 'opacity-0'}` : ''
                }`}
            onClick={handleBackdropClick}
        >
            {/* Enhanced Backdrop */}
            <div className={`fixed inset-0 bg-black/50 transition-opacity duration-150 ${isOpen && !isAnimating ? 'bg-opacity-50' : 'bg-opacity-0'
                }`} />

            {/* Modal */}
            <div
                className={`relative bg-white rounded-lg shadow-2xl w-full ${sizeClasses[modalSize]} ${centered ? 'my-auto' : 'my-8'
                    } ${scrollable ? 'max-h-[90vh] flex flex-col' : ''} ${getAnimationClasses()} ${className}`}
                {...props}
            >
                {children}
            </div>
        </div>
    );
};

// Modal Header Component
export const ModalHeader = ({ children, onClose, className = '', variant = 'default' }) => {
    const variantClasses = {
        default: 'border-gray-200',
        primary: 'border-blue-200 bg-blue-50',
        success: 'border-green-200 bg-green-50',
        warning: 'border-yellow-200 bg-yellow-50',
        danger: 'border-red-200 bg-red-50',
        info: 'border-cyan-200 bg-cyan-50'
    };

    return (
        <div className={`flex items-center justify-between p-4 border-b ${variantClasses[variant]} ${className}`}>
            <h3 className="text-lg font-semibold text-gray-900">{children}</h3>
            {onClose && (
                <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-gray-600 focus:outline-none focus:text-gray-600 transition-colors rounded-full p-1 hover:bg-gray-100"
                >
                    <FaTimes size={18} />
                </button>
            )}
        </div>
    );
};

// Modal Body Component
export const ModalBody = ({ children, scrollable = false, className = '' }) => {
    return (
        <div className={`p-4 ${scrollable ? 'overflow-y-auto flex-1' : ''} ${className}`}>
            {children}
        </div>
    );
};

// Modal Footer Component
export const ModalFooter = ({ children, className = '', justify = 'end' }) => {
    const justifyClasses = {
        start: 'justify-start',
        center: 'justify-center',
        end: 'justify-end',
        between: 'justify-between'
    };

    return (
        <div className={`flex items-center ${justifyClasses[justify]} space-x-2 p-4 border-t border-gray-200 bg-gray-50 ${className}`}>
            {children}
        </div>
    );
};

// Basic Modal
export const BasicModal = ({ isOpen, onClose, title = "Modal title", children }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalHeader onClose={onClose}>{title}</ModalHeader>
            <ModalBody>
                {children || (
                    <div>
                        <p className="text-gray-600 mb-4">
                            This is a basic modal dialog. You can add any content here.
                        </p>
                        <p className="text-gray-600">
                            Modal body text goes here.
                        </p>
                    </div>
                )}
            </ModalBody>
            <ModalFooter>
                <button
                    onClick={onClose}
                    className="px-4 py-2 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                >
                    Close
                </button>
                <button className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors">
                    Save changes
                </button>
            </ModalFooter>
        </Modal>
    );
};

// Vertically Centered Modal
export const VerticallyCenteredModal = ({ isOpen, onClose, title = "Vertically centered modal" }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} centered>
            <ModalHeader onClose={onClose}>{title}</ModalHeader>
            <ModalBody>
                <p className="text-gray-600">
                    This is a vertically centered modal. Cras mattis consectetur purus sit amet fermentum.
                    Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                </p>
            </ModalBody>
            <ModalFooter>
                <button
                    onClick={onClose}
                    className="px-4 py-2 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                >
                    Close
                </button>
                <button className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors">
                    Save changes
                </button>
            </ModalFooter>
        </Modal>
    );
};

// Small Modal
export const SmallModal = ({ isOpen, onClose, title = "Small modal" }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} size="small">
            <ModalHeader onClose={onClose}>{title}</ModalHeader>
            <ModalBody>
                <p className="text-gray-600">This is a small modal dialog.</p>
            </ModalBody>
            <ModalFooter>
                <button
                    onClick={onClose}
                    className="px-4 py-2 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                >
                    Close
                </button>
            </ModalFooter>
        </Modal>
    );
};

// Large Modal
export const LargeModal = ({ isOpen, onClose, title = "Large modal" }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} size="large">
            <ModalHeader onClose={onClose}>{title}</ModalHeader>
            <ModalBody>
                <p className="text-gray-600 mb-4">
                    This is a large modal dialog with more space for content.
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded">
                        <h4 className="font-semibold mb-2">Column 1</h4>
                        <p className="text-sm text-gray-600">Content for the first column.</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded">
                        <h4 className="font-semibold mb-2">Column 2</h4>
                        <p className="text-sm text-gray-600">Content for the second column.</p>
                    </div>
                </div>
            </ModalBody>
            <ModalFooter>
                <button
                    onClick={onClose}
                    className="px-4 py-2 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                >
                    Close
                </button>
                <button className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors">
                    Save changes
                </button>
            </ModalFooter>
        </Modal>
    );
};

// Extra Large Modal
export const ExtraLargeModal = ({ isOpen, onClose, title = "Extra large modal" }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
            <ModalHeader onClose={onClose}>{title}</ModalHeader>
            <ModalBody>
                <p className="text-gray-600 mb-6">
                    This is an extra large modal dialog with even more space for complex content.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                    {[1, 2, 3].map((col) => (
                        <div key={col} className="bg-gray-50 p-4 rounded">
                            <h4 className="font-semibold mb-2">Column {col}</h4>
                            <p className="text-sm text-gray-600">Content for column {col}.</p>
                        </div>
                    ))}
                </div>
                <div className="bg-blue-50 p-4 rounded">
                    <p className="text-blue-800">This modal provides plenty of space for complex layouts and multiple sections.</p>
                </div>
            </ModalBody>
            <ModalFooter>
                <button
                    onClick={onClose}
                    className="px-4 py-2 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                >
                    Close
                </button>
                <button className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors">
                    Save changes
                </button>
            </ModalFooter>
        </Modal>
    );
};

// Fullscreen Modal
export const FullscreenModal = ({ isOpen, onClose, title = "Fullscreen modal" }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} fullscreen className="rounded-none">
            <ModalHeader onClose={onClose}>{title}</ModalHeader>
            <ModalBody scrollable>
                <div className="space-y-6">
                    <p className="text-gray-600">
                        This is a fullscreen modal that takes up the entire viewport.
                    </p>
                    {[...Array(20)].map((_, i) => (
                        <div key={i} className="bg-gray-50 p-4 rounded">
                            <h4 className="font-semibold mb-2">Section {i + 1}</h4>
                            <p className="text-gray-600">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris.
                            </p>
                        </div>
                    ))}
                </div>
            </ModalBody>
            <ModalFooter>
                <button
                    onClick={onClose}
                    className="px-4 py-2 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                >
                    Close
                </button>
                <button className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors">
                    Save changes
                </button>
            </ModalFooter>
        </Modal>
    );
};

// Disabled Backdrop Modal
export const DisabledBackdropModal = ({ isOpen, onClose, title = "Disabled backdrop" }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} backdrop={false}>
            <ModalHeader onClose={onClose}>{title}</ModalHeader>
            <ModalBody>
                <p className="text-gray-600">
                    This modal has a disabled backdrop. Clicking outside won't close it.
                    You must use the close button or press Escape.
                </p>
            </ModalBody>
            <ModalFooter>
                <button
                    onClick={onClose}
                    className="px-4 py-2 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                >
                    Close
                </button>
            </ModalFooter>
        </Modal>
    );
};

// Scrollable Modal
export const ScrollableModal = ({ isOpen, onClose, title = "Scrollable modal" }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} scrollable>
            <ModalHeader onClose={onClose}>{title}</ModalHeader>
            <ModalBody scrollable>
                <div className="space-y-4">
                    <p className="text-gray-600">
                        This modal has a scrollable body when content exceeds the viewport height.
                    </p>
                    {[...Array(50)].map((_, i) => (
                        <p key={i} className="text-gray-600">
                            This is paragraph {i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    ))}
                </div>
            </ModalBody>
            <ModalFooter>
                <button
                    onClick={onClose}
                    className="px-4 py-2 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                >
                    Close
                </button>
                <button className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors">
                    Save changes
                </button>
            </ModalFooter>
        </Modal>
    );
};

// Disabled Animation Modal
export const DisabledAnimationModal = ({ isOpen, onClose, title = "No animation" }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} fade={false}>
            <ModalHeader onClose={onClose}>{title}</ModalHeader>
            <ModalBody>
                <p className="text-gray-600">
                    This modal appears without fade animation.
                </p>
            </ModalBody>
            <ModalFooter>
                <button
                    onClick={onClose}
                    className="px-4 py-2 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                >
                    Close
                </button>
            </ModalFooter>
        </Modal>
    );
};

// Confirmation Modal
export const ConfirmationModal = ({
    isOpen,
    onClose,
    onConfirm,
    title = "Confirm Action",
    message = "Are you sure you want to proceed?",
    confirmText = "Confirm",
    cancelText = "Cancel",
    variant = "danger"
}) => {
    const variantClasses = {
        danger: 'bg-red-600 hover:bg-red-700',
        warning: 'bg-yellow-600 hover:bg-yellow-700',
        success: 'bg-green-600 hover:bg-green-700',
        info: 'bg-blue-600 hover:bg-blue-700'
    };

    const icons = {
        danger: <FaExclamationTriangle className="text-red-500" size={24} />,
        warning: <FaExclamationTriangle className="text-yellow-500" size={24} />,
        success: <FaCheck className="text-green-500" size={24} />,
        info: <FaInfo className="text-blue-500" size={24} />
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} size="small" animationType="scale">
            <ModalBody>
                <div className="flex items-center space-x-4">
                    {icons[variant]}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                        <p className="text-gray-600">{message}</p>
                    </div>
                </div>
            </ModalBody>
            <ModalFooter>
                <button
                    onClick={onClose}
                    className="px-4 py-2 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                >
                    {cancelText}
                </button>
                <button
                    onClick={() => {
                        onConfirm?.();
                        onClose();
                    }}
                    className={`px-4 py-2 text-white rounded-md transition-colors ${variantClasses[variant]}`}
                >
                    {confirmText}
                </button>
            </ModalFooter>
        </Modal>
    );
};

// Form Modal
export const FormModal = ({ isOpen, onClose, onSubmit, title = "Form Modal" }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit?.(formData);
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalHeader onClose={onClose}>
                <FaEdit className="inline mr-2" />
                {title}
            </ModalHeader>
            <form onSubmit={handleSubmit}>
                <ModalBody>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Message
                            </label>
                            <textarea
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                rows={4}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                required
                            />
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <button
                        type="button"
                        onClick={onClose}
                        className="px-4 py-2 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors flex items-center"
                    >
                        <FaSave className="mr-2" />
                        Save
                    </button>
                </ModalFooter>
            </form>
        </Modal>
    );
};

// Loading Modal
export const LoadingModal = ({ isOpen, title = "Loading...", message = "Please wait while we process your request." }) => {
    return (
        <Modal isOpen={isOpen} backdrop={false} keyboard={false} size="small">
            <ModalBody>
                <div className="flex items-center space-x-4">
                    <FaSpinner className="text-blue-500 animate-spin" size={24} />
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
                        <p className="text-gray-600">{message}</p>
                    </div>
                </div>
            </ModalBody>
        </Modal>
    );
};

// Image Preview Modal
export const ImagePreviewModal = ({ isOpen, onClose, imageUrl, title = "Image Preview" }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} size="xl" centered animationType="scale">
            <ModalHeader onClose={onClose}>{title}</ModalHeader>
            <ModalBody className="p-0">
                <div className="flex justify-center">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="max-w-full max-h-[70vh] object-contain"
                    />
                </div>
            </ModalBody>
            <ModalFooter>
                <button
                    onClick={onClose}
                    className="px-4 py-2 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                >
                    Close
                </button>
                <button className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors flex items-center">
                    <FaDownload className="mr-2" />
                    Download
                </button>
            </ModalFooter>
        </Modal>
    );
};

// Video Modal
export const VideoModal = ({ isOpen, onClose, videoUrl, title = "Video Player" }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} size="xl" centered>
            <ModalHeader onClose={onClose}>{title}</ModalHeader>
            <ModalBody className="p-0">
                <div className="aspect-video">
                    <video
                        src={videoUrl}
                        controls
                        className="w-full h-full"
                        autoPlay
                    >
                        Your browser does not support the video tag.
                    </video>
                </div>
            </ModalBody>
        </Modal>
    );
};

// Settings Modal
export const SettingsModal = ({ isOpen, onClose, title = "Settings" }) => {
    const [settings, setSettings] = useState({
        notifications: true,
        darkMode: false,
        autoSave: true,
        language: 'en'
    });

    return (
        <Modal isOpen={isOpen} onClose={onClose} size="large">
            <ModalHeader onClose={onClose} variant="primary">
                <FaCog className="inline mr-2" />
                {title}
            </ModalHeader>
            <ModalBody>
                <div className="space-y-6">
                    <div>
                        <h4 className="text-lg font-semibold mb-4">General Settings</h4>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <label className="text-sm font-medium text-gray-700">Enable Notifications</label>
                                <input
                                    type="checkbox"
                                    checked={settings.notifications}
                                    onChange={(e) => setSettings({ ...settings, notifications: e.target.checked })}
                                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <label className="text-sm font-medium text-gray-700">Dark Mode</label>
                                <input
                                    type="checkbox"
                                    checked={settings.darkMode}
                                    onChange={(e) => setSettings({ ...settings, darkMode: e.target.checked })}
                                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <label className="text-sm font-medium text-gray-700">Auto Save</label>
                                <input
                                    type="checkbox"
                                    checked={settings.autoSave}
                                    onChange={(e) => setSettings({ ...settings, autoSave: e.target.checked })}
                                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Language</h4>
                        <select
                            value={settings.language}
                            onChange={(e) => setSettings({ ...settings, language: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="en">English</option>
                            <option value="es">Spanish</option>
                            <option value="fr">French</option>
                            <option value="de">German</option>
                        </select>
                    </div>
                </div>
            </ModalBody>
            <ModalFooter>
                <button
                    onClick={onClose}
                    className="px-4 py-2 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                >
                    Cancel
                </button>
                <button className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors">
                    Save Settings
                </button>
            </ModalFooter>
        </Modal>
    );
};

// File Upload Modal
export const FileUploadModal = ({ isOpen, onClose, onFileUpload, title = "Upload Files" }) => {
    const [dragActive, setDragActive] = useState(false);
    const [files, setFiles] = useState([]);

    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setFiles([...files, ...Array.from(e.dataTransfer.files)]);
        }
    };

    const handleFileSelect = (e) => {
        if (e.target.files && e.target.files[0]) {
            setFiles([...files, ...Array.from(e.target.files)]);
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} size="large">
            <ModalHeader onClose={onClose}>
                <FaUpload className="inline mr-2" />
                {title}
            </ModalHeader>
            <ModalBody>
                <div
                    className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                        }`}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                >
                    <FaUpload className="mx-auto text-gray-400 mb-4" size={48} />
                    <p className="text-gray-600 mb-2">Drag and drop files here, or click to select files</p>
                    <input
                        type="file"
                        multiple
                        onChange={handleFileSelect}
                        className="hidden"
                        id="file-upload"
                    />
                    <label
                        htmlFor="file-upload"
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors cursor-pointer inline-block"
                    >
                        Select Files
                    </label>
                </div>

                {files.length > 0 && (
                    <div className="mt-4">
                        <h4 className="font-semibold mb-2">Selected Files:</h4>
                        <div className="space-y-2">
                            {files.map((file, index) => (
                                <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                                    <span className="text-sm">{file.name}</span>
                                    <button
                                        onClick={() => setFiles(files.filter((_, i) => i !== index))}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        <FaTimes />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </ModalBody>
            <ModalFooter>
                <button
                    onClick={onClose}
                    className="px-4 py-2 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                >
                    Cancel
                </button>
                <button
                    onClick={() => {
                        onFileUpload?.(files);
                        onClose();
                        setFiles([]);
                    }}
                    disabled={files.length === 0}
                    className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Upload {files.length} Files
                </button>
            </ModalFooter>
        </Modal>
    );
};

// Success Modal
export const SuccessModal = ({ isOpen, onClose, title = "Success!", message = "Operation completed successfully." }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} size="small" animationType="slideDown">
            <ModalBody>
                <div className="text-center">
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                        <FaCheck className="text-green-600" size={24} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                    <p className="text-gray-600">{message}</p>
                </div>
            </ModalBody>
            <ModalFooter justify="center">
                <button
                    onClick={onClose}
                    className="px-6 py-2 text-white bg-green-600 rounded-md hover:bg-green-700 transition-colors"
                >
                    Continue
                </button>
            </ModalFooter>
        </Modal>
    );
};

// Error Modal
export const ErrorModal = ({ isOpen, onClose, title = "Error", message = "An error occurred." }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} size="small" animationType="slideUp">
            <ModalBody>
                <div className="text-center">
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
                        <FaTimes className="text-red-600" size={24} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                    <p className="text-gray-600">{message}</p>
                </div>
            </ModalBody>
            <ModalFooter justify="center">
                <button
                    onClick={onClose}
                    className="px-6 py-2 text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors"
                >
                    Close
                </button>
            </ModalFooter>
        </Modal>
    );
};

export default Modal;