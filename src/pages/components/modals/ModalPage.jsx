import { useState } from 'react';
import {
    BasicModal,
    VerticallyCenteredModal,
    SmallModal,
    LargeModal,
    ExtraLargeModal,
    FullscreenModal,
    DisabledBackdropModal,
    ScrollableModal,
    DisabledAnimationModal,
    ConfirmationModal,
    FormModal,
    LoadingModal,
    ImagePreviewModal,
    VideoModal,
    SettingsModal,
    FileUploadModal,
    SuccessModal,
    ErrorModal
} from '@components/ui/modals/Modalss';
import DashboardLayout from '@components/DashboardLayout';
import Container from '@components/ui/container/Container';
import CodePreviewToggle from '@components/CodePreviewToggle';
import HeaderText from '@components/HeaderText';
import {
    FaCheckCircle,
    FaTimesCircle,
    FaExclamationTriangle,
    FaInfoCircle,
    FaMobile,
    FaDesktop,
    FaEye,
    FaEdit,
    FaTrash,
    FaCog,
    FaUpload,
    FaPlay,
    FaImage,
    FaFileAlt,
    FaBell,
    FaQuestionCircle,
    FaLock,
    FaShieldAlt,
    FaUserCheck,
    FaDatabase,
    FaUniversalAccess,
    FaKeyboard,
    FaSpinner,
    FaClipboardList,
    FaSearch,
    FaFilter,
    FaLayerGroup,
    FaWindowMaximize,
    FaChartLine,
    FaUsers,
    FaShoppingCart,
    FaCalendar,
    FaEnvelope,
    FaGraduationCap,
    FaHeadset,
    FaCreditCard,
    FaBookOpen,
    FaCube
} from 'react-icons/fa';

const ModalPage = () => {
    const [modals, setModals] = useState({
        basic: false,
        centered: false,
        small: false,
        large: false,
        xl: false,
        fullscreen: false,
        disabledBackdrop: false,
        scrollable: false,
        disabledAnimation: false,
        confirmation: false,
        form: false,
        loading: false,
        imagePreview: false,
        video: false,
        settings: false,
        fileUpload: false,
        success: false,
        error: false
    });

    const openModal = (modalName) => {
        setModals(prev => ({ ...prev, [modalName]: true }));
    };

    const closeModal = (modalName) => {
        setModals(prev => ({ ...prev, [modalName]: false }));
    };

    const handleFormSubmit = (formData) => {
        console.log('Form submitted:', formData);
        alert('Form submitted successfully!');
    };

    const handleConfirm = () => {
        console.log('Action confirmed');
        alert('Action confirmed!');
    };

    const handleFileUpload = (files) => {
        console.log('Files uploaded:', files);
        // Simulate upload process
        openModal('loading');
        setTimeout(() => {
            closeModal('loading');
            openModal('success');
        }, 2000);
    };

    // Code examples
    const basicModalCode = `import { BasicModal } from '@components/ui/modals/Modals';

<BasicModal 
  isOpen={isOpen} 
  onClose={() => setIsOpen(false)} 
  title="Modal title"
>
  <p>Modal content goes here...</p>
</BasicModal>`;

    const centeredModalCode = `import { VerticallyCenteredModal } from '@components/ui/modals/Modals';

<VerticallyCenteredModal 
  isOpen={isOpen} 
  onClose={() => setIsOpen(false)} 
  title="Vertically centered modal"
  centered={true}
/>`;

    const sizesCode = `import { SmallModal, LargeModal, ExtraLargeModal, FullscreenModal } from '@components/ui/modals/Modals';

// Small Modal (max-width: 300px)
<SmallModal isOpen={isOpen} onClose={onClose} />

// Large Modal (max-width: 800px)  
<LargeModal isOpen={isOpen} onClose={onClose} />

// Extra Large Modal (max-width: 1140px)
<ExtraLargeModal isOpen={isOpen} onClose={onClose} />

// Fullscreen Modal (100% viewport)
<FullscreenModal isOpen={isOpen} onClose={onClose} />`;

    const scrollableCode = `import { ScrollableModal } from '@components/ui/modals/Modals';

<ScrollableModal 
  isOpen={isOpen} 
  onClose={onClose} 
  title="Scrollable modal"
  scrollable={true}
/>`;

    const disabledBackdropCode = `import { DisabledBackdropModal } from '@components/ui/modals/Modals';

<DisabledBackdropModal 
  isOpen={isOpen} 
  onClose={onClose} 
  backdrop={false}
  keyboard={false}
/>`;

    const confirmationCode = `import { ConfirmationModal } from '@components/ui/modals/Modals';

<ConfirmationModal 
  isOpen={isOpen} 
  onClose={onClose} 
  onConfirm={handleConfirm}
  title="Delete Item"
  message="Are you sure you want to delete this item?"
  variant="danger"
  confirmText="Delete"
  cancelText="Cancel"
/>`;

    const formModalCode = `import { FormModal } from '@components/ui/modals/Modals';

<FormModal 
  isOpen={isOpen} 
  onClose={onClose} 
  onSubmit={handleFormSubmit}
  title="Contact Form"
  submitText="Send Message"
/>`;

    const disabledAnimationCode = `import { DisabledAnimationModal } from '@components/ui/modals/Modals';

<DisabledAnimationModal 
  isOpen={isOpen} 
  onClose={onClose} 
  fade={false}
  animation={false}
/>`;

    const loadingModalCode = `import { LoadingModal } from '@components/ui/modals/Modals';

<LoadingModal 
  isOpen={isOpen} 
  title="Processing..." 
  message="Please wait while we process your request."
  spinner={true}
/>`;

    const imagePreviewCode = `import { ImagePreviewModal } from '@components/ui/modals/Modals';

<ImagePreviewModal 
  isOpen={isOpen} 
  onClose={onClose} 
  imageUrl="/path/to/image.jpg"
  title="Image Preview"
  allowDownload={true}
/>`;

    const videoModalCode = `import { VideoModal } from '@components/ui/modals/Modals';

<VideoModal 
  isOpen={isOpen} 
  onClose={onClose} 
  videoUrl="/path/to/video.mp4"
  title="Video Player"
  autoplay={false}
  controls={true}
/>`;

    const settingsModalCode = `import { SettingsModal } from '@components/ui/modals/Modals';

<SettingsModal 
  isOpen={isOpen} 
  onClose={onClose} 
  title="Application Settings"
  onSave={handleSettingsSave}
/>`;

    const fileUploadCode = `import { FileUploadModal } from '@components/ui/modals/Modals';

<FileUploadModal 
  isOpen={isOpen} 
  onClose={onClose} 
  onFileUpload={handleFileUpload}
  title="Upload Documents"
  acceptedTypes={['.pdf', '.jpg', '.png']}
  maxSize={10} // MB
  multiple={true}
/>`;

    const successModalCode = `import { SuccessModal } from '@components/ui/modals/Modals';

<SuccessModal 
  isOpen={isOpen} 
  onClose={onClose} 
  title="Success!" 
  message="Your operation completed successfully."
  autoClose={3000}
/>`;

    const errorModalCode = `import { ErrorModal } from '@components/ui/modals/Modals';

<ErrorModal 
  isOpen={isOpen} 
  onClose={onClose} 
  title="Error Occurred" 
  message="Something went wrong. Please try again."
  showRetry={true}
  onRetry={handleRetry}
/>`;

    return (
        <DashboardLayout
            title="Modals"
            breadcrumb={[
                { name: "Home", href: "/" },
                { name: "Components" },
                { name: "Modals", href: "/components/modals" }
            ]}
        >
            <div className="space-y-8 mt-6">
                {/* Modal Components Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Basic Modal */}
                    <Container>
                        <HeaderText
                            TitleHeader="Basic Modal"
                            title="Toggle Modal"
                        />
                        <p className="text-gray-600 mt-2">
                            Toggle a working modal demo by clicking the button below. It will slide down and fade in from
                            the top of the page.
                        </p>

                        <div className="mt-6">
                            <CodePreviewToggle
                                previewContent={
                                    <button
                                        onClick={() => openModal('basic')}
                                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                                    >
                                        Basic Modal
                                    </button>
                                }
                                codeContent={basicModalCode}
                                defaultView="preview"
                            />
                        </div>
                    </Container>

                    {/* Vertically Centered */}
                    <Container>
                        <HeaderText
                            TitleHeader="Vertically Centered"
                            title="Modal Positioning"
                        />
                        <p className="text-gray-600 mt-2">
                            Add <code className="bg-gray-100 px-1 rounded">centered</code> prop to vertically center the modal.
                        </p>

                        <div className="mt-6">
                            <CodePreviewToggle
                                previewContent={
                                    <button
                                        onClick={() => openModal('centered')}
                                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                                    >
                                        Vertically centered
                                    </button>
                                }
                                codeContent={centeredModalCode}
                                defaultView="preview"
                            />
                        </div>
                    </Container>

                    {/* Modal Sizes */}
                    <Container>
                        <HeaderText
                            TitleHeader="Modal Sizes"
                            title="Different Size Options"
                        />
                        <p className="text-gray-600 mt-2">
                            Modals have multiple optional sizes. These sizes kick in at certain breakpoints to avoid horizontal scrollbars on narrower viewports.
                        </p>

                        <div className="mt-6">
                            <CodePreviewToggle
                                previewContent={
                                    <div className="flex flex-wrap gap-2">
                                        <button
                                            onClick={() => openModal('small')}
                                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                                        >
                                            Small Modal
                                        </button>
                                        <button
                                            onClick={() => openModal('large')}
                                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                                        >
                                            Large Modal
                                        </button>
                                        <button
                                            onClick={() => openModal('xl')}
                                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                                        >
                                            Extra Large Modal
                                        </button>
                                        <button
                                            onClick={() => openModal('fullscreen')}
                                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                                        >
                                            Full Screen Modal
                                        </button>
                                    </div>
                                }
                                codeContent={sizesCode}
                                defaultView="preview"
                            />
                        </div>
                    </Container>

                    {/* Disabled Backdrop */}
                    <Container>
                        <HeaderText
                            TitleHeader="Disabled Backdrop"
                            title="Modal Behavior"
                        />
                        <p className="text-gray-600 mt-2">
                            You can disable the backdrop by adding <code className="bg-gray-100 px-1 rounded">backdrop={false}</code> prop.
                        </p>

                        <div className="mt-6">
                            <CodePreviewToggle
                                previewContent={
                                    <button
                                        onClick={() => openModal('disabledBackdrop')}
                                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                                    >
                                        Launch Modal
                                    </button>
                                }
                                codeContent={disabledBackdropCode}
                                defaultView="preview"
                            />
                        </div>
                    </Container>

                    {/* Scrolling Long Content */}
                    <Container>
                        <HeaderText
                            TitleHeader="Scrolling long content"
                            title="Modal Content Handling"
                        />
                        <p className="text-gray-600 mt-2">
                            When modals become too long for the user's viewport or device, they scroll independent of the page itself.
                        </p>

                        <div className="mt-6">
                            <CodePreviewToggle
                                previewContent={
                                    <button
                                        onClick={() => openModal('scrollable')}
                                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                                    >
                                        Scrolling Modal
                                    </button>
                                }
                                codeContent={scrollableCode}
                                defaultView="preview"
                            />
                        </div>
                    </Container>

                    {/* Disabled Animation */}
                    <Container>
                        <HeaderText
                            TitleHeader="Disabled Animation"
                            title="Remove Fade Effect"
                        />
                        <p className="text-gray-600 mt-2">
                            For modals that simply appear rather than fade in to view, remove the fade prop.
                        </p>

                        <div className="mt-6">
                            <CodePreviewToggle
                                previewContent={
                                    <button
                                        onClick={() => openModal('disabledAnimation')}
                                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                                    >
                                        Disabled Animation Modal
                                    </button>
                                }
                                codeContent={disabledAnimationCode}
                                defaultView="preview"
                            />
                        </div>
                    </Container>

                    {/* Confirmation Modal */}
                    <Container>
                        <HeaderText
                            TitleHeader="Confirmation Modal"
                            title="User Action Confirmation"
                        />
                        <p className="text-gray-600 mt-2">
                            Use confirmation modals to confirm destructive actions or important decisions.
                        </p>

                        <div className="mt-6">
                            <CodePreviewToggle
                                previewContent={
                                    <button
                                        onClick={() => openModal('confirmation')}
                                        className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                                    >
                                        Delete Item
                                    </button>
                                }
                                codeContent={confirmationCode}
                                defaultView="preview"
                            />
                        </div>
                    </Container>

                    {/* Form Modal */}
                    <Container>
                        <HeaderText
                            TitleHeader="Form Modal"
                            title="Data Collection"
                        />
                        <p className="text-gray-600 mt-2">
                            Modals can contain forms for user input and data collection.
                        </p>

                        <div className="mt-6">
                            <CodePreviewToggle
                                previewContent={
                                    <button
                                        onClick={() => openModal('form')}
                                        className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                                    >
                                        Open Form
                                    </button>
                                }
                                codeContent={formModalCode}
                                defaultView="preview"
                            />
                        </div>
                    </Container>

                    {/* Loading Modal */}
                    <Container>
                        <HeaderText
                            TitleHeader="Loading Modal"
                            title="Processing States"
                        />
                        <p className="text-gray-600 mt-2">
                            Display loading states during asynchronous operations. Cannot be closed by user interaction.
                        </p>

                        <div className="mt-6">
                            <CodePreviewToggle
                                previewContent={
                                    <button
                                        onClick={() => {
                                            openModal('loading');
                                            setTimeout(() => closeModal('loading'), 3000);
                                        }}
                                        className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
                                    >
                                        Show Loading
                                    </button>
                                }
                                codeContent={loadingModalCode}
                                defaultView="preview"
                            />
                        </div>
                    </Container>

                    {/* Image Preview Modal */}
                    <Container>
                        <HeaderText
                            TitleHeader="Image Preview Modal"
                            title="Media Display"
                        />
                        <p className="text-gray-600 mt-2">
                            Preview images in a modal with download functionality and responsive sizing.
                        </p>

                        <div className="mt-6">
                            <CodePreviewToggle
                                previewContent={
                                    <button
                                        onClick={() => openModal('imagePreview')}
                                        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
                                    >
                                        Preview Image
                                    </button>
                                }
                                codeContent={imagePreviewCode}
                                defaultView="preview"
                            />
                        </div>
                    </Container>

                    {/* Video Modal */}
                    <Container>
                        <HeaderText
                            TitleHeader="Video Modal"
                            title="Video Player"
                        />
                        <p className="text-gray-600 mt-2">
                            Play videos in a modal with full video controls and responsive aspect ratio.
                        </p>

                        <div className="mt-6">
                            <CodePreviewToggle
                                previewContent={
                                    <button
                                        onClick={() => openModal('video')}
                                        className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                                    >
                                        Play Video
                                    </button>
                                }
                                codeContent={videoModalCode}
                                defaultView="preview"
                            />
                        </div>
                    </Container>

                    {/* Settings Modal */}
                    <Container>
                        <HeaderText
                            TitleHeader="Settings Modal"
                            title="Configuration Panel"
                        />
                        <p className="text-gray-600 mt-2">
                            Complex settings interface with toggles, dropdowns, and form controls.
                        </p>

                        <div className="mt-6">
                            <CodePreviewToggle
                                previewContent={
                                    <button
                                        onClick={() => openModal('settings')}
                                        className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
                                    >
                                        Open Settings
                                    </button>
                                }
                                codeContent={settingsModalCode}
                                defaultView="preview"
                            />
                        </div>
                    </Container>

                    {/* File Upload Modal */}
                    <Container>
                        <HeaderText
                            TitleHeader="File Upload Modal"
                            title="Drag & Drop Upload"
                        />
                        <p className="text-gray-600 mt-2">
                            Upload files with drag and drop functionality, file preview, and progress indication.
                        </p>

                        <div className="mt-6">
                            <CodePreviewToggle
                                previewContent={
                                    <button
                                        onClick={() => openModal('fileUpload')}
                                        className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
                                    >
                                        Upload Files
                                    </button>
                                }
                                codeContent={fileUploadCode}
                                defaultView="preview"
                            />
                        </div>
                    </Container>

                    {/* Success & Error Modals */}
                    <Container>
                        <HeaderText
                            TitleHeader="Notification Modals"
                            title="Success & Error States"
                        />
                        <p className="text-gray-600 mt-2">
                            Display success and error notifications with different animations and styling.
                        </p>

                        <div className="mt-6">
                            <CodePreviewToggle
                                previewContent={
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => openModal('success')}
                                            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                                        >
                                            Show Success
                                        </button>
                                        <button
                                            onClick={() => openModal('error')}
                                            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                                        >
                                            Show Error
                                        </button>
                                    </div>
                                }
                                codeContent={`${successModalCode}\n\n${errorModalCode}`}
                                defaultView="preview"
                            />
                        </div>
                    </Container>
                </div>

                {/* Usage Guidelines */}
                <Container>
                    <HeaderText
                        TitleHeader="Usage Guidelines"
                        title="When and How to Use Modals"
                    />

                    <div className="mt-6 space-y-8">
                        {/* When to Use */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">When to Use Modals</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                    <div className="flex items-start space-x-3">
                                        <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-green-900 mb-1">Critical Actions</h4>
                                            <p className="text-sm text-green-700">For destructive actions that require user confirmation (delete, logout, etc.)</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                    <div className="flex items-start space-x-3">
                                        <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-green-900 mb-1">Quick Forms</h4>
                                            <p className="text-sm text-green-700">For simple forms that don't require a full page (contact, feedback, quick edit)</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                    <div className="flex items-start space-x-3">
                                        <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-green-900 mb-1">Media Preview</h4>
                                            <p className="text-sm text-green-700">For viewing images, videos, or documents without leaving the current page</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                    <div className="flex items-start space-x-3">
                                        <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-green-900 mb-1">Contextual Information</h4>
                                            <p className="text-sm text-green-700">For additional details or help content that supplements the main page</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                    <div className="flex items-start space-x-3">
                                        <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-green-900 mb-1">Process Feedback</h4>
                                            <p className="text-sm text-green-700">Loading states, success/error notifications, progress updates</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                    <div className="flex items-start space-x-3">
                                        <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-green-900 mb-1">Focused Tasks</h4>
                                            <p className="text-sm text-green-700">Tasks requiring user attention without navigation away from current context</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* When Not to Use */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">When NOT to Use Modals</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                    <div className="flex items-start space-x-3">
                                        <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-red-900 mb-1">Complex Workflows</h4>
                                            <p className="text-sm text-red-700">Avoid modals for multi-step processes or complex forms that require full attention</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                    <div className="flex items-start space-x-3">
                                        <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-red-900 mb-1">Primary Navigation</h4>
                                            <p className="text-sm text-red-700">Don't use modals for main navigation or core functionality</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                    <div className="flex items-start space-x-3">
                                        <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-red-900 mb-1">Frequent Usage</h4>
                                            <p className="text-sm text-red-700">Avoid for features users access frequently - use dedicated pages instead</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                    <div className="flex items-start space-x-3">
                                        <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-red-900 mb-1">Mobile-Heavy Apps</h4>
                                            <p className="text-sm text-red-700">Be cautious on mobile - consider full-screen alternatives for better UX</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                    <div className="flex items-start space-x-3">
                                        <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-red-900 mb-1">Content Comparison</h4>
                                            <p className="text-sm text-red-700">When users need to compare multiple items side by side</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                    <div className="flex items-start space-x-3">
                                        <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-red-900 mb-1">Nested Modals</h4>
                                            <p className="text-sm text-red-700">Avoid stacking modals - it creates confusion and poor user experience</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Modal Types Guide */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Choosing the Right Modal Type</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                                    <div className="flex items-start space-x-3">
                                        <FaInfoCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-blue-900 mb-1">Basic Modal</h4>
                                            <p className="text-sm text-blue-700">General purpose content display and simple interactions</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                    <div className="flex items-start space-x-3">
                                        <FaExclamationTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-red-900 mb-1">Confirmation</h4>
                                            <p className="text-sm text-red-700">For destructive actions and important confirmations</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                    <div className="flex items-start space-x-3">
                                        <FaEdit className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-green-900 mb-1">Form Modal</h4>
                                            <p className="text-sm text-green-700">Data collection and quick editing tasks</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                                    <div className="flex items-start space-x-3">
                                        <FaEye className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-purple-900 mb-1">Media Preview</h4>
                                            <p className="text-sm text-purple-700">Images, videos, and document viewing</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                    <div className="flex items-start space-x-3">
                                        <FaCog className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-1">Settings</h4>
                                            <p className="text-sm text-gray-700">Configuration panels and preference management</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                                    <div className="flex items-start space-x-3">
                                        <FaUpload className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-orange-900 mb-1">File Upload</h4>
                                            <p className="text-sm text-orange-700">Document and media uploading with progress</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                    <div className="flex items-start space-x-3">
                                        <FaSpinner className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-indigo-900 mb-1">Loading</h4>
                                            <p className="text-sm text-indigo-700">Process feedback and blocking operations</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                                    <div className="flex items-start space-x-3">
                                        <FaBell className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-emerald-900 mb-1">Notifications</h4>
                                            <p className="text-sm text-emerald-700">Success, error, warning, and info messages</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-cyan-50 rounded-lg border border-cyan-200">
                                    <div className="flex items-start space-x-3">
                                        <FaQuestionCircle className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-cyan-900 mb-1">Help & Tooltips</h4>
                                            <p className="text-sm text-cyan-700">Contextual help and detailed explanations</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Size Guidelines */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Modal Size Guidelines</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                                    <div className="flex items-start space-x-3">
                                        <FaMobile className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-blue-900 mb-1">Small (300px)</h4>
                                            <p className="text-sm text-blue-700">Confirmations, alerts, simple yes/no dialogs</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                    <div className="flex items-start space-x-3">
                                        <FaDesktop className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-green-900 mb-1">Default (500px)</h4>
                                            <p className="text-sm text-green-700">General content, basic forms, standard dialogs</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                                    <div className="flex items-start space-x-3">
                                        <FaFileAlt className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-orange-900 mb-1">Large (800px)</h4>
                                            <p className="text-sm text-orange-700">Complex forms, detailed content, settings panels</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                                    <div className="flex items-start space-x-3">
                                        <FaWindowMaximize className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-purple-900 mb-1">Fullscreen</h4>
                                            <p className="text-sm text-purple-700">Media viewing, data tables, complex interfaces</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Best Practices */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Best Practices</h3>
                            <div className="space-y-4">
                                <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                                    <div className="flex items-start space-x-3">
                                        <FaExclamationTriangle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-yellow-900 mb-2">User Experience</h4>
                                            <ul className="text-sm text-yellow-700 space-y-1">
                                                <li>• Provide clear ways to close the modal (X button, ESC key, backdrop click)</li>
                                                <li>• Use descriptive titles and clear call-to-action buttons</li>
                                                <li>• Ensure modals are keyboard accessible</li>
                                                <li>• Avoid opening modals from within other modals</li>
                                                <li>• Don't use modals for critical workflow steps</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                                    <div className="flex items-start space-x-3">
                                        <FaInfoCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-blue-900 mb-2">Content & Layout</h4>
                                            <ul className="text-sm text-blue-700 space-y-1">
                                                <li>• Keep content concise and focused on the modal's purpose</li>
                                                <li>• Use scrollable content for long text rather than very tall modals</li>
                                                <li>• Place primary actions on the right, secondary on the left</li>
                                                <li>• Maintain consistent spacing and typography</li>
                                                <li>• Use appropriate modal size for content complexity</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                    <div className="flex items-start space-x-3">
                                        <FaUniversalAccess className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-green-900 mb-2">Accessibility & Usability</h4>
                                            <ul className="text-sm text-green-700 space-y-1">
                                                <li>• Implement proper focus management and ARIA attributes</li>
                                                <li>• Use semantic HTML elements within modal content</li>
                                                <li>• Test with screen readers and keyboard navigation</li>
                                                <li>• Consider animation preferences (prefers-reduced-motion)</li>
                                                <li>• Ensure sufficient color contrast for all modal content</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                                    <div className="flex items-start space-x-3">
                                        <FaSpinner className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-purple-900 mb-2">Performance & State Management</h4>
                                            <ul className="text-sm text-purple-700 space-y-1">
                                                <li>• Lazy load modal content when possible to improve performance</li>
                                                <li>• Preserve form state appropriately during modal interactions</li>
                                                <li>• Handle loading states and error conditions gracefully</li>
                                                <li>• Clean up event listeners and timers when modals close</li>
                                                <li>• Consider using portal patterns for better DOM structure</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Common Use Cases */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Common Use Cases by Context</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                    <FaTrash className="w-6 h-6 text-gray-600 mb-2" />
                                    <h4 className="font-semibold text-gray-900 mb-1">Delete Confirmation</h4>
                                    <p className="text-sm text-gray-600">Confirm destructive actions before execution</p>
                                </div>

                                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                    <FaEdit className="w-6 h-6 text-gray-600 mb-2" />
                                    <h4 className="font-semibold text-gray-900 mb-1">Quick Edit</h4>
                                    <p className="text-sm text-gray-600">Edit item details without page navigation</p>
                                </div>

                                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                    <FaImage className="w-6 h-6 text-gray-600 mb-2" />
                                    <h4 className="font-semibold text-gray-900 mb-1">Media Gallery</h4>
                                    <p className="text-sm text-gray-600">View images and videos in lightbox style</p>
                                </div>

                                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                    <FaUserCheck className="w-6 h-6 text-gray-600 mb-2" />
                                    <h4 className="font-semibold text-gray-900 mb-1">User Onboarding</h4>
                                    <p className="text-sm text-gray-600">Welcome messages and feature introductions</p>
                                </div>

                                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                    <FaShoppingCart className="w-6 h-6 text-gray-600 mb-2" />
                                    <h4 className="font-semibold text-gray-900 mb-1">Shopping Cart</h4>
                                    <p className="text-sm text-gray-600">Quick add to cart and checkout previews</p>
                                </div>

                                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                    <FaEnvelope className="w-6 h-6 text-gray-600 mb-2" />
                                    <h4 className="font-semibold text-gray-900 mb-1">Contact Forms</h4>
                                    <p className="text-sm text-gray-600">Quick contact and feedback collection</p>
                                </div>

                                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                    <FaCalendar className="w-6 h-6 text-gray-600 mb-2" />
                                    <h4 className="font-semibold text-gray-900 mb-1">Event Details</h4>
                                    <p className="text-sm text-gray-600">Calendar event information and actions</p>
                                </div>

                                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                    <FaHeadset className="w-6 h-6 text-gray-600 mb-2" />
                                    <h4 className="font-semibold text-gray-900 mb-1">Support Chat</h4>
                                    <p className="text-sm text-gray-600">Customer support and help interfaces</p>
                                </div>
                            </div>
                        </div>

                        {/* Alternative Patterns */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Alternative UI Patterns</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                    <div className="flex items-start space-x-3">
                                        <FaLayerGroup className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-indigo-900 mb-1">Drawer/Sidebar</h4>
                                            <p className="text-sm text-indigo-700">Slide-in panels for forms, filters, or additional content from screen edges.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                    <div className="flex items-start space-x-3">
                                        <FaChartLine className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-indigo-900 mb-1">Inline Editing</h4>
                                            <p className="text-sm text-indigo-700">Edit content directly within the page context without modal overlays.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                    <div className="flex items-start space-x-3">
                                        <FaSearch className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-indigo-900 mb-1">Dropdown Panels</h4>
                                            <p className="text-sm text-indigo-700">Contextual panels that drop down from triggers for quick actions.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                    <div className="flex items-start space-x-3">
                                        <FaBookOpen className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-indigo-900 mb-1">Page Navigation</h4>
                                            <p className="text-sm text-indigo-700">Dedicated pages for complex forms and workflows requiring full attention.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                    <div className="flex items-start space-x-3">
                                        <FaBell className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-indigo-900 mb-1">Toast Notifications</h4>
                                            <p className="text-sm text-indigo-700">Non-blocking notifications for feedback that don't require user interaction.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                    <div className="flex items-start space-x-3">
                                        <FaCube className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-indigo-900 mb-1">Expandable Cards</h4>
                                            <p className="text-sm text-indigo-700">Cards that expand in place to show additional content and actions.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>

                {/* Quick Reference */}
                <Container>
                    <HeaderText
                        TitleHeader="Quick Reference Guide"
                        title="At a Glance Recommendations"
                    />

                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                            <h4 className="font-semibold text-red-900 mb-2">Critical Actions</h4>
                            <p className="text-sm text-red-700">Use <strong>Confirmation Modals</strong> for destructive actions like delete or logout.</p>
                        </div>

                        <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                            <h4 className="font-semibold text-green-900 mb-2">Quick Data Entry</h4>
                            <p className="text-sm text-green-700">Use <strong>Form Modals</strong> for simple forms that don't require full page focus.</p>
                        </div>

                        <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                            <h4 className="font-semibold text-purple-900 mb-2">Media Preview</h4>
                            <p className="text-sm text-purple-700">Use <strong>Image/Video Modals</strong> for lightbox-style media viewing experiences.</p>
                        </div>

                        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                            <h4 className="font-semibold text-blue-900 mb-2">Process Feedback</h4>
                            <p className="text-sm text-blue-700">Use <strong>Loading/Success/Error Modals</strong> for operation status and feedback.</p>
                        </div>

                        <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                            <h4 className="font-semibold text-orange-900 mb-2">File Operations</h4>
                            <p className="text-sm text-orange-700">Use <strong>File Upload Modals</strong> for drag-and-drop file handling with progress.</p>
                        </div>

                        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                            <h4 className="font-semibold text-gray-900 mb-2">Settings & Config</h4>
                            <p className="text-sm text-gray-700">Use <strong>Settings Modals</strong> for preference panels and configuration options.</p>
                        </div>
                    </div>
                </Container>
            </div>

            {/* All Modal Components */}
            <BasicModal
                isOpen={modals.basic}
                onClose={() => closeModal('basic')}
                title="Basic Modal"
            />

            <VerticallyCenteredModal
                isOpen={modals.centered}
                onClose={() => closeModal('centered')}
            />

            <SmallModal
                isOpen={modals.small}
                onClose={() => closeModal('small')}
            />

            <LargeModal
                isOpen={modals.large}
                onClose={() => closeModal('large')}
            />

            <ExtraLargeModal
                isOpen={modals.xl}
                onClose={() => closeModal('xl')}
            />

            <FullscreenModal
                isOpen={modals.fullscreen}
                onClose={() => closeModal('fullscreen')}
            />

            <DisabledBackdropModal
                isOpen={modals.disabledBackdrop}
                onClose={() => closeModal('disabledBackdrop')}
            />

            <ScrollableModal
                isOpen={modals.scrollable}
                onClose={() => closeModal('scrollable')}
            />

            <DisabledAnimationModal
                isOpen={modals.disabledAnimation}
                onClose={() => closeModal('disabledAnimation')}
            />

            <ConfirmationModal
                isOpen={modals.confirmation}
                onClose={() => closeModal('confirmation')}
                onConfirm={handleConfirm}
                title="Delete Item"
                message="Are you sure you want to delete this item? This action cannot be undone."
                variant="danger"
                confirmText="Delete"
                cancelText="Cancel"
            />

            <FormModal
                isOpen={modals.form}
                onClose={() => closeModal('form')}
                onSubmit={handleFormSubmit}
                title="Contact Form"
            />

            <LoadingModal
                isOpen={modals.loading}
                title="Processing..."
                message="Please wait while we process your request."
            />

            <ImagePreviewModal
                isOpen={modals.imagePreview}
                onClose={() => closeModal('imagePreview')}
                imageUrl="https://picsum.photos/800/600"
                title="Sample Image"
            />

            <VideoModal
                isOpen={modals.video}
                onClose={() => closeModal('video')}
                videoUrl="https://www.w3schools.com/html/mov_bbb.mp4"
                title="Sample Video"
            />

            <SettingsModal
                isOpen={modals.settings}
                onClose={() => closeModal('settings')}
                title="Application Settings"
            />

            <FileUploadModal
                isOpen={modals.fileUpload}
                onClose={() => closeModal('fileUpload')}
                onFileUpload={handleFileUpload}
                title="Upload Documents"
            />

            <SuccessModal
                isOpen={modals.success}
                onClose={() => closeModal('success')}
                title="Upload Successful!"
                message="Your files have been uploaded successfully."
            />

            <ErrorModal
                isOpen={modals.error}
                onClose={() => closeModal('error')}
                title="Upload Failed"
                message="There was an error uploading your files. Please try again."
            />
        </DashboardLayout>
    );
};

export default ModalPage;