
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
    ButtonSpinner
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

    return (
        <DashboardLayout
            title="Spinners"
            breadcrumb={[
                { name: 'Home', href: '/' },
                { name: 'Components' },
                { name: 'Spinners', href: '/components/spinners' }
            ]}
        >
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

            {/* Unique Spinners */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <Container className="p-6">
                    <HeaderText
                        TitleHeader="Pulse"
                        title="Spinner"
                    />
                    <CodePreviewToggle
                        previewContent={
                            <div className="flex items-center justify-center h-20">
                                <PulseSpinner size="lg" color="purple" />
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
                                <WaveSpinner size="lg" color="warning" />
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
                        <div className="flex items-center justify-center space-x-4 h-20 flex-wrap">
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

            {/* Button Examples */}
            <Container className="p-6 mb-8">
                <HeaderText
                    TitleHeader="Buttons"
                    title="Spinners in Buttons"
                />
                <CodePreviewToggle
                    previewContent={
                        <div className="flex space-x-4">
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
                                    'Primary Button'
                                )}
                            </button>

                            <button
                                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50 flex items-center"
                                onClick={() => handleButtonClick('success')}
                                disabled={loading.success}
                            >
                                {loading.success ? (
                                    <>
                                        <DotsSpinner size="sm" color="white" className="mr-2" />
                                        Processing...
                                    </>
                                ) : (
                                    'Success Button'
                                )}
                            </button>

                            <button
                                className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 disabled:opacity-50 flex items-center"
                                onClick={() => handleButtonClick('outline')}
                                disabled={loading.outline}
                            >
                                {loading.outline ? (
                                    <>
                                        <ButtonSpinner size="sm" color="primary" className="mr-2" />
                                        Loading...
                                    </>
                                ) : (
                                    'Outline Button'
                                )}
                            </button>
                        </div>
                    }
                    codeContent={buttonSpinnerCode}
                />
            </Container>

            {/* Usage Guidelines */}
            <SpinnerGuidelines />
        </DashboardLayout>
    );
};

export default SpinnerPage;