import React, { useState } from 'react';
import DashboardLayout from '@components/DashboardLayout';
import Container from '@components/ui/container/Container';
import HeaderText from '@components/HeaderText';
import CodePreviewToggle from '@components/CodePreviewToggle';
import SpinnerGuidelines from '@components/SpinnerGuidelines';
import {
    BorderSpinner,
    GrowingSpinner,
    DotsSpinner,
    PulseSpinner,
    WaveSpinner,
    RingSpinner,
    OrbitSpinner,
    SquareSpinner,
    HeartbeatSpinner,
    ButtonSpinner,
    GradientSpinner,
    LoadingBarSpinner
} from '@components/ui/spinners/Spinners';

const SpinnerPage = () => {
    const [loading, setLoading] = useState({});

    const handleButtonClick = (buttonKey) => {
        setLoading(prev => ({ ...prev, [buttonKey]: true }));
        setTimeout(() => {
            setLoading(prev => ({ ...prev, [buttonKey]: false }));
        }, 2000);
    };

    const borderSpinnerCode = `// Border Spinner
<BorderSpinner size="md" color="primary" />

// Different sizes and colors
<BorderSpinner size="sm" color="success" />
<BorderSpinner size="lg" color="danger" />`;

    const growingSpinnerCode = `// Growing Spinner
<GrowingSpinner size="md" color="primary" />

// Different variants
<GrowingSpinner size="sm" color="info" />
<GrowingSpinner size="lg" color="warning" />`;

    const dotsSpinnerCode = `// Dots Spinner
<DotsSpinner size="md" color="primary" />

// Different configurations
<DotsSpinner size="sm" color="success" />
<DotsSpinner size="lg" color="secondary" />`;

    const uniqueSpinnersCode = `// Unique Spinner Variants
<PulseSpinner size="md" color="primary" />
<WaveSpinner size="md" color="success" />
<RingSpinner size="md" color="info" />
<OrbitSpinner size="md" color="warning" />
<SquareSpinner size="md" color="danger" />
<HeartbeatSpinner size="md" color="primary" />`;

    const newSpinnersCode = `// New Enhanced Spinners
<GradientSpinner size="md" />
<LoadingBarSpinner size="md" color="primary" />

// Different variants
<GradientSpinner size="lg" />
<LoadingBarSpinner size="lg" color="success" />`;

    const buttonSpinnerCode = `// Button with Spinner
<button 
  className="btn btn-primary"
  onClick={() => handleButtonClick('primary')}
  disabled={loading.primary}
>
  {loading.primary ? (
    <>
      <ButtonSpinner size="sm" color="white" className="mr-2" />
      Loading...
    </>
  ) : (
    'Click Me'
  )}
</button>`;

    const sizesCode = `// Different Sizes
<BorderSpinner size="xs" color="primary" />
<BorderSpinner size="sm" color="primary" />
<BorderSpinner size="md" color="primary" />
<BorderSpinner size="lg" color="primary" />
<BorderSpinner size="xl" color="primary" />
<BorderSpinner size="2xl" color="primary" />`;

    const colorsCode = `// Different Colors
<BorderSpinner size="md" color="primary" />
<BorderSpinner size="md" color="secondary" />
<BorderSpinner size="md" color="success" />
<BorderSpinner size="md" color="danger" />
<BorderSpinner size="md" color="warning" />
<BorderSpinner size="md" color="info" />
<BorderSpinner size="md" color="light" />
<BorderSpinner size="md" color="dark" />`;

    const allSpinnersShowcaseCode = `// Complete Spinner Collection
<div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
  <BorderSpinner size="lg" color="primary" />
  <GrowingSpinner size="lg" color="success" />
  <DotsSpinner size="lg" color="info" />
  <PulseSpinner size="lg" color="warning" />
  <WaveSpinner size="lg" color="danger" />
  <RingSpinner size="lg" color="secondary" />
  <OrbitSpinner size="lg" color="primary" />
  <SquareSpinner size="lg" color="success" />
  <HeartbeatSpinner size="lg" color="danger" />
  <GradientSpinner size="lg" />
  <LoadingBarSpinner size="lg" color="info" />
  <ButtonSpinner size="lg" color="primary" />
</div>`;

    return (
        <DashboardLayout
            title="Spinners"
            breadcrumb={[
                { name: 'Home', href: '/' },
                { name: 'Components' },
                { name: 'Spinners', href: '/components/spinners' }
            ]}
        >
            {/* Complete Spinner Collection Showcase */}
            <Container className="p-6 mb-8">
                <HeaderText
                    TitleHeader="Complete Collection"
                    title="All Available Spinners"
                />
                <CodePreviewToggle
                    previewContent={
                        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 py-6">
                            <div className="flex flex-col items-center space-y-2">
                                <BorderSpinner size="lg" color="primary" />
                                <span className="text-xs text-gray-500">Border</span>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <GrowingSpinner size="lg" color="success" />
                                <span className="text-xs text-gray-500">Growing</span>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <DotsSpinner size="lg" color="info" />
                                <span className="text-xs text-gray-500">Dots</span>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <PulseSpinner size="lg" color="warning" />
                                <span className="text-xs text-gray-500">Pulse</span>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <WaveSpinner size="lg" color="danger" />
                                <span className="text-xs text-gray-500">Wave</span>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <RingSpinner size="lg" color="secondary" />
                                <span className="text-xs text-gray-500">Ring</span>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <OrbitSpinner size="lg" color="primary" />
                                <span className="text-xs text-gray-500">Orbit</span>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <SquareSpinner size="lg" color="success" />
                                <span className="text-xs text-gray-500">Square</span>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <HeartbeatSpinner size="lg" color="danger" />
                                <span className="text-xs text-gray-500">Heartbeat</span>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <GradientSpinner size="lg" />
                                <span className="text-xs text-gray-500">Gradient</span>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <LoadingBarSpinner size="lg" color="info" />
                                <span className="text-xs text-gray-500">Loading Bar</span>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <ButtonSpinner size="lg" color="primary" />
                                <span className="text-xs text-gray-500">Button</span>
                            </div>
                        </div>
                    }
                    codeContent={allSpinnersShowcaseCode}
                />
            </Container>

            {/* Basic Spinners */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <Container className="p-6">
                    <HeaderText
                        TitleHeader="Border"
                        title="Spinner"
                    />
                    <CodePreviewToggle
                        previewContent={
                            <div className="flex items-center justify-center h-20">
                                <BorderSpinner size="lg" color="primary" />
                            </div>
                        }
                        codeContent={borderSpinnerCode}
                    />
                </Container>

                <Container className="p-6">
                    <HeaderText
                        TitleHeader="Growing"
                        title="Spinner"
                    />
                    <CodePreviewToggle
                        previewContent={
                            <div className="flex items-center justify-center h-20">
                                <GrowingSpinner size="lg" color="success" />
                            </div>
                        }
                        codeContent={growingSpinnerCode}
                    />
                </Container>

                <Container className="p-6">
                    <HeaderText
                        TitleHeader="Dots"
                        title="Spinner"
                    />
                    <CodePreviewToggle
                        previewContent={
                            <div className="flex items-center justify-center h-20">
                                <DotsSpinner size="lg" color="info" />
                            </div>
                        }
                        codeContent={dotsSpinnerCode}
                    />
                </Container>
            </div>

            {/* Advanced Spinners */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <Container className="p-6">
                    <HeaderText
                        TitleHeader="Pulse"
                        title="Spinner"
                    />
                    <CodePreviewToggle
                        previewContent={
                            <div className="flex items-center justify-center h-20">
                                <PulseSpinner size="lg" color="warning" />
                            </div>
                        }
                        codeContent={uniqueSpinnersCode}
                    />
                </Container>

                <Container className="p-6">
                    <HeaderText
                        TitleHeader="Wave"
                        title="Spinner"
                    />
                    <CodePreviewToggle
                        previewContent={
                            <div className="flex items-center justify-center h-20">
                                <WaveSpinner size="lg" color="success" />
                            </div>
                        }
                        codeContent={uniqueSpinnersCode}
                    />
                </Container>

                <Container className="p-6">
                    <HeaderText
                        TitleHeader="Ring"
                        title="Spinner"
                    />
                    <CodePreviewToggle
                        previewContent={
                            <div className="flex items-center justify-center h-20">
                                <RingSpinner size="lg" color="danger" />
                            </div>
                        }
                        codeContent={uniqueSpinnersCode}
                    />
                </Container>

                <Container className="p-6">
                    <HeaderText
                        TitleHeader="Orbit"
                        title="Spinner"
                    />
                    <CodePreviewToggle
                        previewContent={
                            <div className="flex items-center justify-center h-20">
                                <OrbitSpinner size="lg" color="info" />
                            </div>
                        }
                        codeContent={uniqueSpinnersCode}
                    />
                </Container>

                <Container className="p-6">
                    <HeaderText
                        TitleHeader="Square"
                        title="Spinner"
                    />
                    <CodePreviewToggle
                        previewContent={
                            <div className="flex items-center justify-center h-20">
                                <SquareSpinner size="lg" color="secondary" />
                            </div>
                        }
                        codeContent={uniqueSpinnersCode}
                    />
                </Container>

                <Container className="p-6">
                    <HeaderText
                        TitleHeader="Heartbeat"
                        title="Spinner"
                    />
                    <CodePreviewToggle
                        previewContent={
                            <div className="flex items-center justify-center h-20">
                                <HeartbeatSpinner size="lg" color="danger" />
                            </div>
                        }
                        codeContent={uniqueSpinnersCode}
                    />
                </Container>
            </div>

            {/* New Enhanced Spinners */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Container className="p-6">
                    <HeaderText
                        TitleHeader="Gradient"
                        title="Spinner"
                    />
                    <CodePreviewToggle
                        previewContent={
                            <div className="flex items-center justify-center h-20">
                                <GradientSpinner size="xl" />
                            </div>
                        }
                        codeContent={newSpinnersCode}
                    />
                </Container>

                <Container className="p-6">
                    <HeaderText
                        TitleHeader="Loading Bar"
                        title="Spinner"
                    />
                    <CodePreviewToggle
                        previewContent={
                            <div className="flex items-center justify-center h-20">
                                <LoadingBarSpinner size="xl" color="primary" />
                            </div>
                        }
                        codeContent={newSpinnersCode}
                    />
                </Container>
            </div>

            {/* Sizes Demo */}
            <Container className="p-6 mb-8">
                <HeaderText
                    TitleHeader="Sizes"
                    title="Different Spinner Sizes"
                />
                <CodePreviewToggle
                    previewContent={
                        <div className="flex items-center justify-center space-x-4 h-20">
                            <BorderSpinner size="xs" color="primary" />
                            <BorderSpinner size="sm" color="primary" />
                            <BorderSpinner size="md" color="primary" />
                            <BorderSpinner size="lg" color="primary" />
                            <BorderSpinner size="xl" color="primary" />
                            <BorderSpinner size="2xl" color="primary" />
                        </div>
                    }
                    codeContent={sizesCode}
                />
            </Container>

            {/* Colors Demo */}
            <Container className="p-6 mb-8">
                <HeaderText
                    TitleHeader="Colors"
                    title="Different Spinner Colors"
                />
                <CodePreviewToggle
                    previewContent={
                        <div className="flex items-center justify-center space-x-4 h-20 flex-wrap gap-4">
                            <BorderSpinner size="lg" color="primary" />
                            <BorderSpinner size="lg" color="secondary" />
                            <BorderSpinner size="lg" color="success" />
                            <BorderSpinner size="lg" color="danger" />
                            <BorderSpinner size="lg" color="warning" />
                            <BorderSpinner size="lg" color="info" />
                            <div className="bg-gray-800 p-2 rounded">
                                <BorderSpinner size="lg" color="light" />
                            </div>
                            <BorderSpinner size="lg" color="dark" />
                        </div>
                    }
                    codeContent={colorsCode}
                />
            </Container>

            {/* Different Spinner Types with Same Color */}
            <Container className="p-6 mb-8">
                <HeaderText
                    TitleHeader="Variations"
                    title="Same Color, Different Animations"
                />
                <CodePreviewToggle
                    previewContent={
                        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 py-4">
                            <BorderSpinner size="lg" color="primary" />
                            <GrowingSpinner size="lg" color="primary" />
                            <DotsSpinner size="lg" color="primary" />
                            <PulseSpinner size="lg" color="primary" />
                            <WaveSpinner size="lg" color="primary" />
                            <RingSpinner size="lg" color="primary" />
                            <OrbitSpinner size="lg" color="primary" />
                            <SquareSpinner size="lg" color="primary" />
                            <HeartbeatSpinner size="lg" color="primary" />
                            <ButtonSpinner size="lg" color="primary" />
                            <GradientSpinner size="lg" />
                            <LoadingBarSpinner size="lg" color="primary" />
                        </div>
                    }
                    codeContent={`// All spinners with primary color
<BorderSpinner size="lg" color="primary" />
<GrowingSpinner size="lg" color="primary" />
<DotsSpinner size="lg" color="primary" />
<PulseSpinner size="lg" color="primary" />
<WaveSpinner size="lg" color="primary" />
<RingSpinner size="lg" color="primary" />
<OrbitSpinner size="lg" color="primary" />
<SquareSpinner size="lg" color="primary" />
<HeartbeatSpinner size="lg" color="primary" />
<ButtonSpinner size="lg" color="primary" />
<GradientSpinner size="lg" />
<LoadingBarSpinner size="lg" color="primary" />`}
                />
            </Container>

            {/* Button Examples */}
            <Container className="p-6 mb-8">
                <HeaderText
                    TitleHeader="Buttons"
                    title="Spinners in Buttons"
                />
                <CodePreviewToggle
                    previewContent={
                        <div className="flex flex-wrap gap-4">
                            <button
                                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 flex items-center"
                                onClick={() => handleButtonClick('primary')}
                                disabled={loading.primary}
                            >
                                {loading.primary ? (
                                    <>
                                        <ButtonSpinner size="sm" color="white" className="mr-2" />
                                        Loading...
                                    </>
                                ) : (
                                    'Border Spinner'
                                )}
                            </button>

                            <button
                                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50 flex items-center"
                                onClick={() => handleButtonClick('success')}
                                disabled={loading.success}
                            >
                                {loading.success ? (
                                    <>
                                        <DotsSpinner size="sm" color="light" className="mr-2" />
                                        Processing...
                                    </>
                                ) : (
                                    'Dots Spinner'
                                )}
                            </button>

                            <button
                                className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 disabled:opacity-50 flex items-center"
                                onClick={() => handleButtonClick('pulse')}
                                disabled={loading.pulse}
                            >
                                {loading.pulse ? (
                                    <>
                                        <PulseSpinner size="sm" color="light" className="mr-2" />
                                        Pulsing...
                                    </>
                                ) : (
                                    'Pulse Spinner'
                                )}
                            </button>

                            <button
                                className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 disabled:opacity-50 flex items-center"
                                onClick={() => handleButtonClick('outline')}
                                disabled={loading.outline}
                            >
                                {loading.outline ? (
                                    <>
                                        <HeartbeatSpinner size="sm" color="primary" className="mr-2" />
                                        Beating...
                                    </>
                                ) : (
                                    'Heartbeat Spinner'
                                )}
                            </button>

                            <button
                                className="px-4 py-2 bg-gradient-to-r from-pink-500 to-violet-500 text-white rounded hover:from-pink-600 hover:to-violet-600 disabled:opacity-50 flex items-center"
                                onClick={() => handleButtonClick('gradient')}
                                disabled={loading.gradient}
                            >
                                {loading.gradient ? (
                                    <>
                                        <GradientSpinner size="sm" className="mr-2" />
                                        Gradient...
                                    </>
                                ) : (
                                    'Gradient Spinner'
                                )}
                            </button>
                        </div>
                    }
                    codeContent={buttonSpinnerCode}
                />
            </Container>

            {/* Real-world Usage Examples */}
            <Container className="p-6 mb-8">
                <HeaderText
                    TitleHeader="Real-world Examples"
                    title="Practical Usage Scenarios"
                />
                <CodePreviewToggle
                    previewContent={
                        <div className="space-y-6">
                            {/* Form Loading */}
                            <div className="p-4 border rounded-lg">
                                <h4 className="font-semibold mb-2">Form Submission</h4>
                                <div className="flex items-center space-x-2">
                                    <DotsSpinner size="sm" color="success" />
                                    <span className="text-sm text-gray-600">Saving your data...</span>
                                </div>
                            </div>

                            {/* Page Loading */}
                            <div className="p-4 border rounded-lg">
                                <h4 className="font-semibold mb-2">Page Loading</h4>
                                <div className="flex items-center justify-center py-8">
                                    <div className="text-center">
                                        <BorderSpinner size="xl" color="primary" />
                                        <p className="mt-2 text-gray-600">Loading content...</p>
                                    </div>
                                </div>
                            </div>

                            {/* File Upload */}
                            <div className="p-4 border rounded-lg">
                                <h4 className="font-semibold mb-2">File Upload Progress</h4>
                                <div className="flex items-center space-x-3">
                                    <LoadingBarSpinner size="lg" color="info" />
                                    <span className="text-sm text-gray-600">Uploading file... 67%</span>
                                </div>
                            </div>

                            {/* Search Results */}
                            <div className="p-4 border rounded-lg">
                                <h4 className="font-semibold mb-2">Search Results</h4>
                                <div className="flex items-center space-x-2">
                                    <WaveSpinner size="sm" color="warning" />
                                    <span className="text-sm text-gray-600">Searching for "React spinners"...</span>
                                </div>
                            </div>
                        </div>
                    }
                    codeContent={`// Real-world usage examples
<div className="flex items-center space-x-2">
  <DotsSpinner size="sm" color="success" />
  <span>Saving your data...</span>
</div>

<div className="text-center">
  <BorderSpinner size="xl" color="primary" />
  <p>Loading content...</p>
</div>

<div className="flex items-center space-x-3">
  <LoadingBarSpinner size="lg" color="info" />
  <span>Uploading file... 67%</span>
</div>

<div className="flex items-center space-x-2">
  <WaveSpinner size="sm" color="warning" />
  <span>Searching for "React spinners"...</span>
</div>`}
                />
            </Container>

            {/* Usage Guidelines */}
            <SpinnerGuidelines />
        </DashboardLayout>
    );
};

export default SpinnerPage;