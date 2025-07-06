import React, { useState } from 'react';
import DashboardLayout from '@components/DashboardLayout';
import Container from '@components/ui/container/Container';
import HeaderText from '@components/HeaderText';
import CodePreviewToggle from '@components/CodePreviewToggle';
import ToastGuidelines from '@components/ToastGuidelines';
import {
    ToastProvider,
    useToast,
    SuccessToast,
    ErrorToast,
    WarningToast,
    InfoToast
} from '@components/ui/toast/Toast';
import { FaCheckCircle, FaTimesCircle, FaExclamationTriangle, FaInfoCircle } from 'react-icons/fa';

const ToastPageContent = () => {
    const { addToast, removeAllToasts } = useToast();
    const [showStaticExample, setShowStaticExample] = useState('success');

    const handleBasicToast = (type) => {
        const messages = {
            success: 'Operation completed successfully!',
            error: 'An error occurred while processing your request.',
            warning: 'Please review your input before continuing.',
            info: 'New updates are available for download.'
        };

        addToast({
            type,
            message: messages[type],
            duration: 5000
        });
    };

    const handleToastWithTitle = (type) => {
        const configs = {
            success: {
                title: 'Success!',
                message: 'Your profile has been updated successfully.',
            },
            error: {
                title: 'Error!',
                message: 'Failed to save changes. Please try again.',
            },
            warning: {
                title: 'Warning!',
                message: 'Your session will expire in 5 minutes.',
            },
            info: {
                title: 'Information',
                message: 'System maintenance scheduled for tonight.',
            }
        };

        addToast({
            type,
            ...configs[type],
            duration: 7000
        });
    };

    const handleToastWithAction = () => {
        addToast({
            type: 'info',
            title: 'New Version Available',
            message: 'Version 2.0 is now available with new features.',
            action: {
                label: 'Update Now',
                onClick: () => {
                    addToast({
                        type: 'success',
                        message: 'Update started successfully!',
                        duration: 3000
                    });
                }
            },
            duration: 10000
        });
    };

    const handlePersistentToast = () => {
        addToast({
            type: 'warning',
            title: 'Persistent Toast',
            message: 'This toast will stay until manually closed.',

        });
    };

    const handleMultipleToasts = () => {
        addToast({
            type: 'info',
            message: 'First toast message',
            duration: 4000
        });

        setTimeout(() => {
            addToast({
                type: 'success',
                message: 'Second toast message',
                duration: 4000
            });
        }, 1000);

        setTimeout(() => {
            addToast({
                type: 'warning',
                message: 'Third toast message',
                duration: 4000
            });
        }, 2000);
    };

    const basicToastCode = `import { useToast } from '@components/ui/toast/Toast';

const { addToast } = useToast();

// Basic success toast
addToast({
    type: 'success',
    message: 'Operation completed successfully!',
    duration: 5000
});

// Basic error toast
addToast({
    type: 'error',
    message: 'An error occurred while processing your request.',
    duration: 5000
});`;

    const titleToastCode = `// Toast with title and message
addToast({
    type: 'success',
    title: 'Success!',
    message: 'Your profile has been updated successfully.',
    duration: 7000
});`;

    const actionToastCode = `// Toast with action button
addToast({
    type: 'info',
    title: 'New Version Available',
    message: 'Version 2.0 is now available with new features.',
    action: {
        label: 'Update Now',
        onClick: () => {
            // Handle action
            console.log('Update clicked');
        }
    },
    duration: 10000
});`;

    const staticToastCode = `import { SuccessToast, ErrorToast, WarningToast, InfoToast } from '@components/ui/toast/Toast';

// Static toast components
<SuccessToast 
    title="Success!" 
    message="Operation completed successfully." 
    onClose={() => console.log('Closed')}
/>

<ErrorToast 
    title="Error!" 
    message="Something went wrong." 
    onClose={() => console.log('Closed')}
/>`;

    const providerSetupCode = `// App.jsx - Wrap your app with ToastProvider
import { ToastProvider } from '@components/ui/toast/Toast';

function App() {
    return (
        <ToastProvider>
            <YourAppContent />
        </ToastProvider>
    );
}`;

    const hookUsageCode = `// Using the toast hook
import { useToast } from '@components/ui/toast/Toast';

function MyComponent() {
    const { addToast, removeAllToasts } = useToast();
    
    const handleSuccess = () => {
        addToast({
            type: 'success',
            message: 'Success message',
            duration: 5000
        });
    };
    
    return (
        <div>
            <button onClick={handleSuccess}>Show Toast</button>
            <button onClick={removeAllToasts}>Clear All</button>
        </div>
    );
}`;

    return (
        <DashboardLayout
            title="Toast Notifications"
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
                    title="Getting Started with Toast"
                />
                <CodePreviewToggle
                    previewContent={
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                            <h4 className="font-semibold text-blue-900 mb-2">Provider Setup</h4>
                            <p className="text-sm text-blue-700 mb-4">
                                Wrap your app with ToastProvider to enable toast notifications throughout your application.
                            </p>
                            <div className="bg-white rounded border p-3">
                                <code className="text-sm">
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

            {/* Basic Usage */}
            <Container className="p-6 mb-8">
                <HeaderText
                    TitleHeader="Basic Usage"
                    title="Simple Toast Notifications"
                />
                <CodePreviewToggle
                    previewContent={
                        <div className="space-y-4">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <button
                                    onClick={() => handleBasicToast('success')}
                                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 flex items-center justify-center space-x-2"
                                >
                                    <FaCheckCircle className="w-4 h-4" />
                                    <span>Success</span>
                                </button>
                                <button
                                    onClick={() => handleBasicToast('error')}
                                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 flex items-center justify-center space-x-2"
                                >
                                    <FaTimesCircle className="w-4 h-4" />
                                    <span>Error</span>
                                </button>
                                <button
                                    onClick={() => handleBasicToast('warning')}
                                    className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 flex items-center justify-center space-x-2"
                                >
                                    <FaExclamationTriangle className="w-4 h-4" />
                                    <span>Warning</span>
                                </button>
                                <button
                                    onClick={() => handleBasicToast('info')}
                                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center justify-center space-x-2"
                                >
                                    <FaInfoCircle className="w-4 h-4" />
                                    <span>Info</span>
                                </button>
                            </div>
                        </div>
                    }
                    codeContent={basicToastCode}
                />
            </Container>

            {/* Advanced Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Container className="p-6">
                    <HeaderText
                        TitleHeader="With Title"
                        title="Toast with Title & Message"
                    />
                    <CodePreviewToggle
                        previewContent={
                            <div className="space-y-3">
                                <button
                                    onClick={() => handleToastWithTitle('success')}
                                    className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                                >
                                    Success with Title
                                </button>
                                <button
                                    onClick={() => handleToastWithTitle('error')}
                                    className="w-full px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                                >
                                    Error with Title
                                </button>
                            </div>
                        }
                        codeContent={titleToastCode}
                    />
                </Container>

                <Container className="p-6">
                    <HeaderText
                        TitleHeader="With Action"
                        title="Interactive Toast"
                    />
                    <CodePreviewToggle
                        previewContent={
                            <div className="space-y-3">
                                <button
                                    onClick={handleToastWithAction}
                                    className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                                >
                                    Toast with Action
                                </button>
                                <button
                                    onClick={handlePersistentToast}
                                    className="w-full px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700"
                                >
                                    Persistent Toast
                                </button>
                            </div>
                        }
                        codeContent={actionToastCode}
                    />
                </Container>
            </div>

            {/* Multiple Toasts */}
            <Container className="p-6 mb-8">
                <HeaderText
                    TitleHeader="Multiple Toasts"
                    title="Stack Multiple Notifications"
                />
                <CodePreviewToggle
                    previewContent={
                        <div className="space-y-4">
                            <div className="flex space-x-4">
                                <button
                                    onClick={handleMultipleToasts}
                                    className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
                                >
                                    Show Multiple Toasts
                                </button>
                                <button
                                    onClick={removeAllToasts}
                                    className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
                                >
                                    Clear All Toasts
                                </button>
                            </div>
                        </div>
                    }
                    codeContent={`// Show multiple toasts with delay
addToast({ type: 'info', message: 'First toast', duration: 4000 });

setTimeout(() => {
    addToast({ type: 'success', message: 'Second toast', duration: 4000 });
}, 1000);

// Clear all toasts
removeAllToasts();`}
                />
            </Container>

            {/* Static Toast Components */}
            <Container className="p-6 mb-8">
                <HeaderText
                    TitleHeader="Static Components"
                    title="Direct Toast Components"
                />
                <CodePreviewToggle
                    previewContent={
                        <div className="space-y-4">
                            <div className="flex space-x-4 mb-4">
                                <button
                                    onClick={() => setShowStaticExample('success')}
                                    className={`px-3 py-1 rounded text-sm ${showStaticExample === 'success' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
                                >
                                    Success
                                </button>
                                <button
                                    onClick={() => setShowStaticExample('error')}
                                    className={`px-3 py-1 rounded text-sm ${showStaticExample === 'error' ? 'bg-red-600 text-white' : 'bg-gray-200'}`}
                                >
                                    Error
                                </button>
                                <button
                                    onClick={() => setShowStaticExample('warning')}
                                    className={`px-3 py-1 rounded text-sm ${showStaticExample === 'warning' ? 'bg-yellow-600 text-white' : 'bg-gray-200'}`}
                                >
                                    Warning
                                </button>
                                <button
                                    onClick={() => setShowStaticExample('info')}
                                    className={`px-3 py-1 rounded text-sm ${showStaticExample === 'info' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                                >
                                    Info
                                </button>
                            </div>

                            <div className="max-w-sm">
                                {showStaticExample === 'success' && (
                                    <SuccessToast
                                        title="Success!"
                                        message="Your profile has been updated successfully."
                                        onClose={() => console.log('Success toast closed')}
                                    />
                                )}
                                {showStaticExample === 'error' && (
                                    <ErrorToast
                                        title="Error!"
                                        message="Failed to save changes. Please try again."
                                        onClose={() => console.log('Error toast closed')}
                                    />
                                )}
                                {showStaticExample === 'warning' && (
                                    <WarningToast
                                        title="Warning!"
                                        message="Your session will expire in 5 minutes."
                                        onClose={() => console.log('Warning toast closed')}
                                    />
                                )}
                                {showStaticExample === 'info' && (
                                    <InfoToast
                                        title="Information"
                                        message="System maintenance scheduled for tonight."
                                        onClose={() => console.log('Info toast closed')}
                                    />
                                )}
                            </div>
                        </div>
                    }
                    codeContent={staticToastCode}
                />
            </Container>

            {/* Hook Usage */}
            <Container className="p-6 mb-8">
                <HeaderText
                    TitleHeader="Hook Usage"
                    title="Using the useToast Hook"
                />
                <CodePreviewToggle
                    previewContent={
                        <div className="bg-gray-50 border rounded-lg p-4">
                            <h4 className="font-semibold text-gray-900 mb-2">Available Methods</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                                <li>• <code className="bg-gray-200 px-1 rounded">addToast(options)</code> - Add a new toast</li>
                                <li>• <code className="bg-gray-200 px-1 rounded">removeToast(id)</code> - Remove specific toast</li>
                                <li>• <code className="bg-gray-200 px-1 rounded">removeAllToasts()</code> - Clear all toasts</li>
                                <li>• <code className="bg-gray-200 px-1 rounded">toasts</code> - Array of current toasts</li>
                            </ul>
                        </div>
                    }
                    codeContent={hookUsageCode}
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