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
    const basicModalCode = `<BasicModal 
  isOpen={isOpen} 
  onClose={() => setIsOpen(false)} 
  title="Modal title"
>
  <p>Modal content goes here...</p>
</BasicModal>`;

    const centeredModalCode = `<VerticallyCenteredModal 
  isOpen={isOpen} 
  onClose={() => setIsOpen(false)} 
  title="Vertically centered modal"
/>`;

    const sizesCode = `// Small Modal
<SmallModal isOpen={isOpen} onClose={onClose} />

// Large Modal  
<LargeModal isOpen={isOpen} onClose={onClose} />

// Extra Large Modal
<ExtraLargeModal isOpen={isOpen} onClose={onClose} />

// Fullscreen Modal
<FullscreenModal isOpen={isOpen} onClose={onClose} />`;

    const scrollableCode = `<ScrollableModal 
  isOpen={isOpen} 
  onClose={onClose} 
  title="Scrollable modal"
/>`;

    const disabledBackdropCode = `<DisabledBackdropModal 
  isOpen={isOpen} 
  onClose={onClose} 
  backdrop={false}
/>`;

    const confirmationCode = `<ConfirmationModal 
  isOpen={isOpen} 
  onClose={onClose} 
  onConfirm={handleConfirm}
  title="Delete Item"
  message="Are you sure you want to delete this item?"
  variant="danger"
/>`;

    const formModalCode = `<FormModal 
  isOpen={isOpen} 
  onClose={onClose} 
  onSubmit={handleFormSubmit}
  title="Contact Form"
/>`;

    const disabledAnimationCode = `<DisabledAnimationModal 
  isOpen={isOpen} 
  onClose={onClose} 
  fade={false}
/>`;

    const loadingModalCode = `<LoadingModal 
  isOpen={isOpen} 
  title="Processing..." 
  message="Please wait while we process your request."
/>`;

    const imagePreviewCode = `<ImagePreviewModal 
  isOpen={isOpen} 
  onClose={onClose} 
  imageUrl="/path/to/image.jpg"
  title="Image Preview"
/>`;

    const videoModalCode = `<VideoModal 
  isOpen={isOpen} 
  onClose={onClose} 
  videoUrl="/path/to/video.mp4"
  title="Video Player"
/>`;

    const settingsModalCode = `<SettingsModal 
  isOpen={isOpen} 
  onClose={onClose} 
  title="Application Settings"
/>`;

    const fileUploadCode = `<FileUploadModal 
  isOpen={isOpen} 
  onClose={onClose} 
  onFileUpload={handleFileUpload}
  title="Upload Documents"
/>`;

    const successModalCode = `<SuccessModal 
  isOpen={isOpen} 
  onClose={onClose} 
  title="Success!" 
  message="Your operation completed successfully."
/>`;

    const errorModalCode = `<ErrorModal 
  isOpen={isOpen} 
  onClose={onClose} 
  title="Error Occurred" 
  message="Something went wrong. Please try again."
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {/* Basic Modal */}
                <Container >
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
                        Add <code className="bg-gray-100 px-1 rounded">centered</code> prop to <code className="bg-gray-100 px-1 rounded">.modal-dialog</code> to vertically center the modal.
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
                        Modals have multiple optional sizes, available via modifier classes to be placed on a <code className="bg-gray-100 px-1 rounded">.modal-dialog</code>.
                        These sizes kick in at certain breakpoints to avoid horizontal scrollbars on narrower viewports.
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
                        When modals become too long for the user's viewport or device, they scroll independent of the
                        page itself. You can also create a scrollable modal that allows scroll the modal body by adding
                        <code className="bg-gray-100 px-1 rounded ml-1">scrollable</code> prop.
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
                        For modals that simply appear rather than fade in to view, remove the
                        <code className="bg-gray-100 px-1 rounded ml-1">fade</code> prop.
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