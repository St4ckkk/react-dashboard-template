import React, { useState } from 'react';
import DashboardLayout from '@components/DashboardLayout';
import Container from '@components/ui/container/Container';
import HeaderText from '@components/HeaderText';
import CodePreviewToggle from '@components/CodePreviewToggle';
import ToastGuidelines from '@components/ToastGuidelines';
import {
    ToastProvider,
    useToast,
    ToastTemplates,
    SuccessToast,
    ErrorToast
} from '@components/ui/toast/Toast';
import {
    FaCheckCircle,
    FaTimesCircle,
    FaExclamationTriangle,
    FaInfoCircle,
    FaDownload,
    FaUpload,
    FaHeart,
    FaStar,
    FaShieldAlt,
    FaRocket,
    FaGift,
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
    FaDatabase,
    FaBolt,
    FaSync
} from 'react-icons/fa';

const ToastPageContent = () => {
    const { addToast, removeAllToasts } = useToast();
    const [showStaticExample, setShowStaticExample] = useState('success');

    // Basic Toast Handlers
    const handleBasicToast = (type) => {
        const messages = {
            success: 'Operation completed successfully!',
            error: 'An error occurred while processing your request.',
            warning: 'Please review your input before continuing.',
            info: 'New updates are available for download.',
            loading: 'Processing your request...'
        };

        addToast({
            type,
            message: messages[type],
            duration: type === 'loading' ? 0 : 5000
        });
    };

    // Enhanced Toast Handlers
    const handleEnhancedToast = (type) => {
        const configs = {
            upload: {
                title: 'Upload Complete',
                message: 'Your file has been uploaded successfully.',
                duration: 4000
            },
            download: {
                title: 'Download Ready',
                message: 'Your download is ready and saved to Downloads folder.',
                duration: 4000
            },
            like: {
                title: 'Liked!',
                message: 'Added to your favorites.',
                duration: 3000
            },
            star: {
                title: 'Starred!',
                message: 'Bookmarked for later viewing.',
                duration: 3000
            },
            security: {
                title: 'Security Alert',
                message: 'New login detected from unknown device.',
                duration: 8000,
                action: {
                    label: 'Review',
                    onClick: () => addToast({ type: 'info', message: 'Redirecting to security settings...', duration: 3000 })
                }
            },
            rocket: {
                title: 'Deployment Successful!',
                message: 'Your application is now live.',
                duration: 5000
            },
            gift: {
                title: 'Surprise!',
                message: 'You\'ve received a special gift.',
                duration: 4000
            },
            magic: {
                title: 'Magic Happened!',
                message: 'Something amazing just occurred.',
                duration: 4000
            },
            fire: {
                title: 'Hot Topic!',
                message: 'This content is trending right now.',
                duration: 4000
            },
            gem: {
                title: 'Premium Feature',
                message: 'Unlock exclusive content with premium.',
                duration: 5000
            },
            crown: {
                title: 'VIP Access',
                message: 'Welcome to our exclusive VIP area.',
                duration: 4000
            },
            thumbs: {
                title: 'Great Job!',
                message: 'Your feedback has been submitted.',
                duration: 3000
            },
            idea: {
                title: 'New Suggestion',
                message: 'AI has generated a recommendation for you.',
                duration: 5000
            },
            trophy: {
                title: 'Achievement Unlocked!',
                message: 'You\'ve completed all daily tasks.',
                duration: 6000
            },
            music: {
                title: 'Now Playing',
                message: 'Your playlist has started.',
                duration: 4000
            },
            camera: {
                title: 'Photo Saved',
                message: 'Image captured and saved to gallery.',
                duration: 3000
            },
            wifi: {
                title: 'Connected',
                message: 'Internet connection restored.',
                duration: 3000
            },
            battery: {
                title: 'Low Battery',
                message: 'Please charge your device soon.',
                duration: 0,
                action: {
                    label: 'Dismiss',
                    onClick: () => { }
                }
            },
            code: {
                title: 'Code Compiled',
                message: 'Build completed successfully.',
                duration: 4000
            },
            database: {
                title: 'Backup Complete',
                message: 'Database backup has been created.',
                duration: 4000
            },
            bolt: {
                title: 'Performance Boost',
                message: 'Application speed improved by 40%.',
                duration: 4000
            }
        };

        addToast({
            type,
            ...configs[type]
        });
    };

    // Template Toast Handlers
    const handleTemplateToast = (template) => {
        const templates = {
            fileUpload: () => addToast(ToastTemplates.fileUploadSuccess('document.pdf')),
            fileDownload: () => addToast(ToastTemplates.fileDownloadSuccess('report.xlsx')),
            likeAdded: () => addToast(ToastTemplates.likeAdded('Amazing Article')),
            starAdded: () => addToast(ToastTemplates.starAdded()),
            securityAlert: () => addToast(ToastTemplates.securityAlert('Suspicious login attempt detected')),
            achievement: () => addToast(ToastTemplates.achievementUnlocked('Master Contributor')),
            idea: () => addToast(ToastTemplates.ideaGenerated()),
            magic: () => addToast(ToastTemplates.magicHappened()),
            connection: () => addToast(ToastTemplates.connectionRestored()),
            battery: () => addToast(ToastTemplates.lowBattery()),
            deploy: () => addToast(ToastTemplates.codeDeployed()),
            backup: () => addToast(ToastTemplates.databaseBackup())
        };

        templates[template]?.();
    };

    const handleMultipleToasts = () => {
        const toastTypes = ['info', 'success', 'warning', 'magic', 'star'];
        toastTypes.forEach((type, index) => {
            setTimeout(() => {
                addToast({
                    type,
                    message: `${type.charAt(0).toUpperCase() + type.slice(1)} toast #${index + 1}`,
                    duration: 4000
                });
            }, index * 800);
        });
    };

    const basicToastCode = `import { useToast } from '@components/ui/toast/Toast';

const { addToast } = useToast();

// Basic toasts
addToast({
    type: 'success',
    message: 'Operation completed successfully!',
    duration: 5000
});

addToast({
    type: 'loading',
    message: 'Processing your request...',
    duration: 0 // Persistent until manually closed
});`;

    const enhancedToastCode = `// Enhanced toast types with special styling
addToast({
    type: 'magic',
    title: 'Magic Happened!',
    message: 'Something amazing just occurred.',
    duration: 4000
});

addToast({
    type: 'rocket',
    title: 'Deployment Successful!',
    message: 'Your application is now live.',
    duration: 5000
});

addToast({
    type: 'security',
    title: 'Security Alert',
    message: 'New login detected from unknown device.',
    duration: 8000,
    action: {
        label: 'Review',
        onClick: () => console.log('Review clicked')
    }
});`;

    const templateToastCode = `import { ToastTemplates } from '@components/ui/toast/Toast';

// Using predefined templates
addToast(ToastTemplates.fileUploadSuccess('document.pdf'));
addToast(ToastTemplates.achievementUnlocked('Master Contributor'));
addToast(ToastTemplates.securityAlert('Suspicious login attempt'));
addToast(ToastTemplates.codeDeployed());`;

    const providerSetupCode = `// App.jsx - Wrap your app with ToastProvider
import { ToastProvider } from '@components/ui/toast/Toast';

function App() {
    return (
        <ToastProvider>
            <YourAppContent />
        </ToastProvider>
    );
}`;

    return (
        <DashboardLayout
            title="Enhanced Toast Notifications"
            breadcrumb={[
                { name: 'Home', href: '/' },
                { name: 'Components' },
                { name: 'Toast', href: '/components/toast' }
            ]}
        >
            {/* Setup Instructions */}
            <Container className="p-6 mb-8">
                <HeaderText
                    TitleHeader="Setup"
                    title="Getting Started with Enhanced Toast"
                />
                <CodePreviewToggle
                    previewContent={
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4">
                            <h4 className="font-semibold text-blue-900 mb-2">Provider Setup</h4>
                            <p className="text-sm text-blue-700 mb-4">
                                Wrap your app with ToastProvider to enable enhanced toast notifications with beautiful animations and unique styles.
                            </p>
                            <div className="bg-white rounded border p-3">
                                <code className="text-sm text-gray-800">
                                    &lt;ToastProvider&gt;<br />
                                    &nbsp;&nbsp;&lt;YourApp /&gt;<br />
                                    &lt;/ToastProvider&gt;
                                </code>
                            </div>
                        </div>
                    }
                    codeContent={providerSetupCode}
                />
            </Container>

            {/* Basic Toast Types */}
            <Container className="p-6 mb-8">
                <HeaderText
                    TitleHeader="Basic Types"
                    title="Essential Toast Notifications"
                />
                <CodePreviewToggle
                    previewContent={
                        <div className="space-y-4">
                            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                                <button
                                    onClick={() => handleBasicToast('success')}
                                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center justify-center space-x-2 transition-colors"
                                >
                                    <FaCheckCircle className="w-4 h-4" />
                                    <span>Success</span>
                                </button>
                                <button
                                    onClick={() => handleBasicToast('error')}
                                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 flex items-center justify-center space-x-2 transition-colors"
                                >
                                    <FaTimesCircle className="w-4 h-4" />
                                    <span>Error</span>
                                </button>
                                <button
                                    onClick={() => handleBasicToast('warning')}
                                    className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 flex items-center justify-center space-x-2 transition-colors"
                                >
                                    <FaExclamationTriangle className="w-4 h-4" />
                                    <span>Warning</span>
                                </button>
                                <button
                                    onClick={() => handleBasicToast('info')}
                                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center space-x-2 transition-colors"
                                >
                                    <FaInfoCircle className="w-4 h-4" />
                                    <span>Info</span>
                                </button>
                                <button
                                    onClick={() => handleBasicToast('loading')}
                                    className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center justify-center space-x-2 transition-colors"
                                >
                                    <FaSync className="w-4 h-4" />
                                    <span>Loading</span>
                                </button>
                            </div>
                        </div>
                    }
                    codeContent={basicToastCode}
                />
            </Container>

            {/* Enhanced Toast Types */}
            <Container className="p-6 mb-8">
                <HeaderText
                    TitleHeader="Enhanced Types"
                    title="Unique Toast Styles & Animations"
                />
                <CodePreviewToggle
                    previewContent={
                        <div className="space-y-6">
                            {/* File Operations */}
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 mb-3">File Operations</h4>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                    <button
                                        onClick={() => handleEnhancedToast('upload')}
                                        className="px-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center space-x-2 transition-colors"
                                    >
                                        <FaUpload className="w-4 h-4" />
                                        <span>Upload</span>
                                    </button>
                                    <button
                                        onClick={() => handleEnhancedToast('download')}
                                        className="px-3 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center space-x-2 transition-colors"
                                    >
                                        <FaDownload className="w-4 h-4" />
                                        <span>Download</span>
                                    </button>
                                    <button
                                        onClick={() => handleEnhancedToast('camera')}
                                        className="px-3 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 flex items-center space-x-2 transition-colors"
                                    >
                                        <FaCamera className="w-4 h-4" />
                                        <span>Photo</span>
                                    </button>
                                    <button
                                        onClick={() => handleEnhancedToast('music')}
                                        className="px-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center space-x-2 transition-colors"
                                    >
                                        <FaMusic className="w-4 h-4" />
                                        <span>Music</span>
                                    </button>
                                </div>
                            </div>

                            {/* Social & Engagement */}
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 mb-3">Social & Engagement</h4>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                    <button
                                        onClick={() => handleEnhancedToast('like')}
                                        className="px-3 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 flex items-center space-x-2 transition-colors"
                                    >
                                        <FaHeart className="w-4 h-4" />
                                        <span>Like</span>
                                    </button>
                                    <button
                                        onClick={() => handleEnhancedToast('star')}
                                        className="px-3 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 flex items-center space-x-2 transition-colors"
                                    >
                                        <FaStar className="w-4 h-4" />
                                        <span>Star</span>
                                    </button>
                                    <button
                                        onClick={() => handleEnhancedToast('thumbs')}
                                        className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2 transition-colors"
                                    >
                                        <FaThumbsUp className="w-4 h-4" />
                                        <span>Thumbs</span>
                                    </button>
                                    <button
                                        onClick={() => handleEnhancedToast('fire')}
                                        className="px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 flex items-center space-x-2 transition-colors"
                                    >
                                        <FaFire className="w-4 h-4" />
                                        <span>Hot</span>
                                    </button>
                                </div>
                            </div>

                            {/* Special & Premium */}
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 mb-3">Special & Premium</h4>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                    <button
                                        onClick={() => handleEnhancedToast('magic')}
                                        className="px-3 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 flex items-center space-x-2 transition-all"
                                    >
                                        <FaMagic className="w-4 h-4" />
                                        <span>Magic</span>
                                    </button>
                                    <button
                                        onClick={() => handleEnhancedToast('gem')}
                                        className="px-3 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg hover:from-cyan-700 hover:to-blue-700 flex items-center space-x-2 transition-all"
                                    >
                                        <FaGem className="w-4 h-4" />
                                        <span>Gem</span>
                                    </button>
                                    <button
                                        onClick={() => handleEnhancedToast('crown')}
                                        className="px-3 py-2 bg-gradient-to-r from-yellow-600 to-orange-600 text-white rounded-lg hover:from-yellow-700 hover:to-orange-700 flex items-center space-x-2 transition-all"
                                    >
                                        <FaCrown className="w-4 h-4" />
                                        <span>VIP</span>
                                    </button>
                                    <button
                                        onClick={() => handleEnhancedToast('gift')}
                                        className="px-3 py-2 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-lg hover:from-red-700 hover:to-pink-700 flex items-center space-x-2 transition-all"
                                    >
                                        <FaGift className="w-4 h-4" />
                                        <span>Gift</span>
                                    </button>
                                </div>
                            </div>

                            {/* System & Dev */}
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 mb-3">System & Development</h4>
                                <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
                                    <button
                                        onClick={() => handleEnhancedToast('rocket')}
                                        className="px-3 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 flex items-center space-x-2 transition-colors"
                                    >
                                        <FaRocket className="w-4 h-4" />
                                        <span>Deploy</span>
                                    </button>
                                    <button
                                        onClick={() => handleEnhancedToast('code')}
                                        className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2 transition-colors"
                                    >
                                        <FaCode className="w-4 h-4" />
                                        <span>Code</span>
                                    </button>
                                    <button
                                        onClick={() => handleEnhancedToast('database')}
                                        className="px-3 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 flex items-center space-x-2 transition-colors"
                                    >
                                        <FaDatabase className="w-4 h-4" />
                                        <span>Database</span>
                                    </button>
                                    <button
                                        onClick={() => handleEnhancedToast('security')}
                                        className="px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center space-x-2 transition-colors"
                                    >
                                        <FaShieldAlt className="w-4 h-4" />
                                        <span>Security</span>
                                    </button>
                                    <button
                                        onClick={() => handleEnhancedToast('wifi')}
                                        className="px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center space-x-2 transition-colors"
                                    >
                                        <FaWifi className="w-4 h-4" />
                                        <span>WiFi</span>
                                    </button>
                                    <button
                                        onClick={() => handleEnhancedToast('battery')}
                                        className="px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 flex items-center space-x-2 transition-colors"
                                    >
                                        <FaBatteryHalf className="w-4 h-4" />
                                        <span>Battery</span>
                                    </button>
                                </div>
                            </div>

                            {/* Achievement & Ideas */}
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 mb-3">Achievement & Ideas</h4>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                    <button
                                        onClick={() => handleEnhancedToast('trophy')}
                                        className="px-3 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 flex items-center space-x-2 transition-colors"
                                    >
                                        <FaTrophy className="w-4 h-4" />
                                        <span>Trophy</span>
                                    </button>
                                    <button
                                        onClick={() => handleEnhancedToast('idea')}
                                        className="px-3 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 flex items-center space-x-2 transition-colors"
                                    >
                                        <FaLightbulb className="w-4 h-4" />
                                        <span>Idea</span>
                                    </button>
                                    <button
                                        onClick={() => handleEnhancedToast('bolt')}
                                        className="px-3 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 flex items-center space-x-2 transition-colors"
                                    >
                                        <FaBolt className="w-4 h-4" />
                                        <span>Boost</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    }
                    codeContent={enhancedToastCode}
                />
            </Container>

            {/* Toast Templates */}
            <Container className="p-6 mb-8">
                <HeaderText
                    TitleHeader="Toast Templates"
                    title="Predefined Toast Configurations"
                />
                <CodePreviewToggle
                    previewContent={
                        <div className="space-y-4">
                            <p className="text-sm text-gray-600 mb-4">
                                Use predefined templates for common scenarios with optimized messages and durations.
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                                <button
                                    onClick={() => handleTemplateToast('fileUpload')}
                                    className="px-3 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 text-sm transition-colors"
                                >
                                    File Upload
                                </button>
                                <button
                                    onClick={() => handleTemplateToast('fileDownload')}
                                    className="px-3 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 text-sm transition-colors"
                                >
                                    File Download
                                </button>
                                <button
                                    onClick={() => handleTemplateToast('likeAdded')}
                                    className="px-3 py-2 bg-pink-100 text-pink-700 rounded-lg hover:bg-pink-200 text-sm transition-colors"
                                >
                                    Like Added
                                </button>
                                <button
                                    onClick={() => handleTemplateToast('starAdded')}
                                    className="px-3 py-2 bg-yellow-100 text-yellow-700 rounded-lg hover:bg-yellow-200 text-sm transition-colors"
                                >
                                    Star Added
                                </button>
                                <button
                                    onClick={() => handleTemplateToast('securityAlert')}
                                    className="px-3 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 text-sm transition-colors"
                                >
                                    Security Alert
                                </button>
                                <button
                                    onClick={() => handleTemplateToast('achievement')}
                                    className="px-3 py-2 bg-yellow-100 text-yellow-700 rounded-lg hover:bg-yellow-200 text-sm transition-colors"
                                >
                                    Achievement
                                </button>
                                <button
                                    onClick={() => handleTemplateToast('idea')}
                                    className="px-3 py-2 bg-yellow-100 text-yellow-700 rounded-lg hover:bg-yellow-200 text-sm transition-colors"
                                >
                                    AI Idea
                                </button>
                                <button
                                    onClick={() => handleTemplateToast('magic')}
                                    className="px-3 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 text-sm transition-colors"
                                >
                                    Magic Event
                                </button>
                                <button
                                    onClick={() => handleTemplateToast('connection')}
                                    className="px-3 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 text-sm transition-colors"
                                >
                                    Connection
                                </button>
                                <button
                                    onClick={() => handleTemplateToast('battery')}
                                    className="px-3 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 text-sm transition-colors"
                                >
                                    Low Battery
                                </button>
                                <button
                                    onClick={() => handleTemplateToast('deploy')}
                                    className="px-3 py-2 bg-orange-100 text-orange-700 rounded-lg hover:bg-orange-200 text-sm transition-colors"
                                >
                                    Deployment
                                </button>
                                <button
                                    onClick={() => handleTemplateToast('backup')}
                                    className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 text-sm transition-colors"
                                >
                                    Backup
                                </button>
                            </div>
                        </div>
                    }
                    codeContent={templateToastCode}
                />
            </Container>

            {/* Multiple Toasts & Controls */}
            <Container className="p-6 mb-8">
                <HeaderText
                    TitleHeader="Advanced Features"
                    title="Multiple Toasts & Management"
                />
                <CodePreviewToggle
                    previewContent={
                        <div className="space-y-4">
                            <div className="flex flex-wrap gap-3">
                                <button
                                    onClick={handleMultipleToasts}
                                    className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all"
                                >
                                    Show Multiple Toasts
                                </button>
                                <button
                                    onClick={removeAllToasts}
                                    className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                                >
                                    Clear All Toasts
                                </button>
                            </div>
                        </div>
                    }
                    codeContent={`// Show multiple toasts with staggered timing
const toastTypes = ['info', 'success', 'warning', 'magic', 'star'];
toastTypes.forEach((type, index) => {
    setTimeout(() => {
        addToast({
            type,
            message: \`\${type.charAt(0).toUpperCase() + type.slice(1)} toast #\${index + 1}\`,
            duration: 4000
        });
    }, index * 800);
});

// Clear all toasts
removeAllToasts();`}
                />
            </Container>

            {/* Static Components */}
            <Container className="p-6 mb-8">
                <HeaderText
                    TitleHeader="Static Components"
                    title="Direct Toast Components"
                />
                <CodePreviewToggle
                    previewContent={
                        <div className="space-y-4">
                            <div className="flex space-x-3 mb-4">
                                <button
                                    onClick={() => setShowStaticExample('success')}
                                    className={`px-3 py-1 rounded-lg text-sm transition-colors ${showStaticExample === 'success' ? 'bg-green-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                                >
                                    Success
                                </button>
                                <button
                                    onClick={() => setShowStaticExample('error')}
                                    className={`px-3 py-1 rounded-lg text-sm transition-colors ${showStaticExample === 'error' ? 'bg-red-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                                >
                                    Error
                                </button>
                            </div>

                            <div className="max-w-sm">
                                {showStaticExample === 'success' && (
                                    <SuccessToast
                                        title="Success!"
                                        message="Your profile has been updated successfully."
                                        onClose={() => console.log('Success toast closed')}
                                        action={{
                                            label: 'View Profile',
                                            onClick: () => console.log('View profile clicked')
                                        }}
                                    />
                                )}
                                {showStaticExample === 'error' && (
                                    <ErrorToast
                                        title="Error!"
                                        message="Failed to save changes. Please try again."
                                        onClose={() => console.log('Error toast closed')}
                                        action={{
                                            label: 'Retry',
                                            onClick: () => console.log('Retry clicked')
                                        }}
                                    />
                                )}
                            </div>
                        </div>
                    }
                    codeContent={`import { SuccessToast, ErrorToast } from '@components/ui/toast/Toast';

// Enhanced static components with actions
<SuccessToast 
    title="Success!" 
    message="Your profile has been updated successfully." 
    onClose={() => console.log('Closed')}
    action={{
        label: 'View Profile',
        onClick: () => console.log('Action clicked')
    }}
/>

<ErrorToast 
    title="Error!" 
    message="Failed to save changes. Please try again." 
    onClose={() => console.log('Closed')}
    action={{
        label: 'Retry',
        onClick: () => console.log('Retry clicked')
    }}
/>`}
                />
            </Container>

            {/* Toast Guidelines */}
            <ToastGuidelines />
        </DashboardLayout>
    );
};

const ToastPage = () => {
    return (
        <ToastProvider>
            <ToastPageContent />
        </ToastProvider>
    );
};

export default ToastPage;