import React, { useState, useEffect } from 'react';
import {
    StripedProgress,
    GradientProgress,
    CircularProgress,
    MultiStepProgress,
    AnimatedProgress,
    GamingProgress,
    HealthProgress,
    EnergyProgress
} from '@components/ui/progress/Progress';
import Progress from '@components/ui/progress/Progress';
import DashboardLayout from '@components/DashboardLayout';
import Container from '@components/ui/container/Container';
import CodePreviewToggle from '@components/CodePreviewToggle';
import HeaderText from '@components/HeaderText';
import {
    FaPlay,
    FaPause,
    FaStop,
    FaStar,
    FaFire,
    FaBolt,
    FaHeart,
    FaCheckCircle,
    FaTimesCircle,
    FaExclamationTriangle,
    FaInfoCircle,
    FaDesktop,
    FaMobile,
    FaGamepad,
    FaTachometerAlt,
    FaChartLine,
    FaUpload,
    FaDownload,
    FaCog,
    FaShoppingCart,
    FaLayerGroup,
    FaEye,
    FaUniversalAccess,
    FaSpinner,
    FaCloudUploadAlt,
    FaChartPie,
    FaStepForward
} from 'react-icons/fa';

const ProgressPage = () => {
    const [progressValues, setProgressValues] = useState({
        basic: 65,
        animated: 45,
        striped: 75,
        gradient: 80,
        circular: 60,
        gaming: 750,
        health: 85,
        energy: 60
    });

    const [isAnimating, setIsAnimating] = useState(false);
    const [currentStep, setCurrentStep] = useState(2);

    // Auto-animate demo values
    useEffect(() => {
        if (!isAnimating) return;

        const interval = setInterval(() => {
            setProgressValues(prev => ({
                basic: Math.min(prev.basic + Math.random() * 10, 100),
                animated: Math.min(prev.animated + Math.random() * 15, 100),
                striped: Math.min(prev.striped + Math.random() * 8, 100),
                gradient: Math.min(prev.gradient + Math.random() * 12, 100),
                circular: Math.min(prev.circular + Math.random() * 10, 100),
                gaming: Math.min(prev.gaming + Math.random() * 50, 1000),
                health: Math.max(prev.health - Math.random() * 5, 0),
                energy: prev.energy > 90 ? 20 : prev.energy + Math.random() * 15
            }));
        }, 1000);

        return () => clearInterval(interval);
    }, [isAnimating]);

    const resetValues = () => {
        setProgressValues({
            basic: 65,
            animated: 45,
            striped: 75,
            gradient: 80,
            circular: 60,
            gaming: 750,
            health: 85,
            energy: 60
        });
    };

    const steps = ['Planning', 'Development', 'Testing', 'Deployment', 'Complete'];

    // Code examples
    const basicProgressCode = `import Progress from '@components/ui/progress/Progress';

<Progress 
  value={65} 
  max={100} 
  variant="default" 
  size="medium"
  showLabel={true}
  label="Basic Progress"
/>

// Different variants
<Progress value={75} variant="success" />
<Progress value={50} variant="warning" />
<Progress value={30} variant="danger" />
<Progress value={80} variant="info" />`;

    const stripedProgressCode = `import { StripedProgress } from '@components/ui/progress/Progress';

<StripedProgress 
  value={75} 
  variant="default"
  animated={true}
  showLabel={true}
  label="Striped Progress"
/>`;

    const gradientProgressCode = `import { GradientProgress } from '@components/ui/progress/Progress';

<GradientProgress 
  value={80} 
  gradient="blue"
  showLabel={true}
  label="Gradient Progress"
/>

// Different gradients
<GradientProgress value={70} gradient="green" />
<GradientProgress value={60} gradient="purple" />
<GradientProgress value={50} gradient="orange" />`;

    const circularProgressCode = `import { CircularProgress } from '@components/ui/progress/Progress';

<CircularProgress 
  value={60} 
  size="medium"
  variant="default"
  showLabel={true}
/>`;

    const multiStepCode = `import { MultiStepProgress } from '@components/ui/progress/Progress';

const steps = ['Planning', 'Development', 'Testing', 'Deployment', 'Complete'];

<MultiStepProgress 
  steps={steps}
  currentStep={2}
  variant="default"
/>`;

    const animatedProgressCode = `import { AnimatedProgress } from '@components/ui/progress/Progress';

<AnimatedProgress 
  value={45} 
  duration={2000}
  variant="default"
  showLabel={true}
  label="Animated Progress"
/>`;

    const gamingProgressCode = `import { GamingProgress } from '@components/ui/progress/Progress';

<GamingProgress 
  value={750} 
  max={1000}
  level={5}
  experience="XP"
  icon={<FaStar />}
/>`;

    const healthProgressCode = `import { HealthProgress } from '@components/ui/progress/Progress';

<HealthProgress 
  value={85} 
  max={100}
  critical={25}
  warning={50}
/>`;

    const energyProgressCode = `import { EnergyProgress } from '@components/ui/progress/Progress';

<EnergyProgress 
  value={60} 
  max={100}
  type="energy"
  recharging={false}
/>

// Mana variant
<EnergyProgress 
  value={80} 
  type="mana"
  recharging={true}
/>`;

    return (
        <DashboardLayout
            title="Progress"
            breadcrumb={[
                { name: "Home", href: "/" },
                { name: "Components" },
                { name: "Progress", href: "/components/progress" }
            ]}
        >
            <div className="space-y-8 mt-6">
                {/* Demo Controls */}
                <Container>
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">Live Demo Controls</h3>
                            <p className="text-sm text-gray-600">Control the progress animations and values</p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <button
                                onClick={() => setIsAnimating(!isAnimating)}
                                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${isAnimating
                                    ? 'bg-red-500 hover:bg-red-600 text-white'
                                    : 'bg-green-500 hover:bg-green-600 text-white'
                                    }`}
                            >
                                {isAnimating ? <FaPause className="w-4 h-4" /> : <FaPlay className="w-4 h-4" />}
                                <span>{isAnimating ? 'Pause' : 'Play'}</span>
                            </button>
                            <button
                                onClick={resetValues}
                                className="flex items-center space-x-2 px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors"
                            >
                                <FaStop className="w-4 h-4" />
                                <span>Reset</span>
                            </button>
                        </div>
                    </div>
                </Container>

                {/* Basic Progress */}
                <Container>
                    <HeaderText
                        TitleHeader="Basic Progress"
                        title="Standard Progress Bars"
                    />
                    <p className="text-gray-600 mt-2 mb-6">
                        Basic progress bars with different variants, sizes, and label options.
                    </p>

                    <div className="space-y-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <h4 className="font-medium text-gray-900">Default Variants</h4>
                                <div className="space-y-4">
                                    <Progress value={progressValues.basic} showLabel={true} label="Default" />
                                    <Progress value={85} variant="success" showLabel={true} label="Success" />
                                    <Progress value={60} variant="warning" showLabel={true} label="Warning" />
                                    <Progress value={35} variant="danger" showLabel={true} label="Danger" />
                                    <Progress value={70} variant="info" showLabel={true} label="Info" />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <h4 className="font-medium text-gray-900">Different Sizes</h4>
                                <div className="space-y-4">
                                    <Progress value={75} size="small" showLabel={true} label="Small" />
                                    <Progress value={75} size="medium" showLabel={true} label="Medium" />
                                    <Progress value={75} size="large" showLabel={true} label="Large" />
                                </div>
                            </div>
                        </div>

                        <CodePreviewToggle
                            previewContent={
                                <div className="space-y-4">
                                    <Progress value={65} showLabel={true} label="Basic Progress" />
                                    <Progress value={75} variant="success" showLabel={true} label="Success Progress" />
                                </div>
                            }
                            codeContent={basicProgressCode}
                            defaultView="preview"
                        />
                    </div>
                </Container>

                {/* Striped Progress */}
                <Container>
                    <HeaderText
                        TitleHeader="Striped Progress"
                        title="Animated Striped Patterns"
                    />
                    <p className="text-gray-600 mt-2 mb-6">
                        Progress bars with striped patterns and optional animations for visual appeal.
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <h4 className="font-medium text-gray-900">Static Stripes</h4>
                            <div className="space-y-3">
                                <StripedProgress value={progressValues.striped} variant="default" />
                                <StripedProgress value={70} variant="success" />
                                <StripedProgress value={50} variant="warning" />
                                <StripedProgress value={30} variant="danger" />
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h4 className="font-medium text-gray-900">Animated Stripes</h4>
                            <div className="space-y-3">
                                <StripedProgress value={progressValues.striped} variant="default" animated={true} />
                                <StripedProgress value={70} variant="success" animated={true} />
                                <StripedProgress value={50} variant="warning" animated={true} />
                                <StripedProgress value={30} variant="danger" animated={true} />
                            </div>
                        </div>
                    </div>

                    <div className="mt-6">
                        <CodePreviewToggle
                            previewContent={
                                <StripedProgress
                                    value={75}
                                    variant="default"
                                    animated={true}
                                    showLabel={true}
                                    label="Striped Progress"
                                />
                            }
                            codeContent={stripedProgressCode}
                            defaultView="preview"
                        />
                    </div>
                </Container>

                {/* Gradient Progress */}
                <Container>
                    <HeaderText
                        TitleHeader="Gradient Progress"
                        title="Beautiful Gradient Effects"
                    />
                    <p className="text-gray-600 mt-2 mb-6">
                        Progress bars with smooth gradient colors for modern interfaces.
                    </p>

                    <div className="space-y-4">
                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
                            <GradientProgress value={progressValues.gradient} gradient="blue" showLabel={true} label="Blue" />
                            <GradientProgress value={75} gradient="green" showLabel={true} label="Green" />
                            <GradientProgress value={85} gradient="purple" showLabel={true} label="Purple" />
                            <GradientProgress value={60} gradient="orange" showLabel={true} label="Orange" />
                            <GradientProgress value={70} gradient="pink" showLabel={true} label="Pink" />
                        </div>

                        <CodePreviewToggle
                            previewContent={
                                <GradientProgress
                                    value={80}
                                    gradient="blue"
                                    showLabel={true}
                                    label="Gradient Progress"
                                />
                            }
                            codeContent={gradientProgressCode}
                            defaultView="preview"
                        />
                    </div>
                </Container>

                {/* Circular Progress */}
                <Container>
                    <HeaderText
                        TitleHeader="Circular Progress"
                        title="Round Progress Indicators"
                    />
                    <p className="text-gray-600 mt-2 mb-6">
                        Circular progress indicators perfect for dashboards and status displays.
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                        <div className="text-center">
                            <h4 className="font-medium text-gray-900 mb-4">Small</h4>
                            <CircularProgress value={progressValues.circular} size="small" />
                        </div>
                        <div className="text-center">
                            <h4 className="font-medium text-gray-900 mb-4">Medium</h4>
                            <CircularProgress value={progressValues.circular} size="medium" />
                        </div>
                        <div className="text-center">
                            <h4 className="font-medium text-gray-900 mb-4">Large</h4>
                            <CircularProgress value={progressValues.circular} size="large" />
                        </div>
                        <div className="text-center">
                            <h4 className="font-medium text-gray-900 mb-4">Success</h4>
                            <CircularProgress value={85} variant="success" />
                        </div>
                    </div>

                    <div className="mt-6">
                        <CodePreviewToggle
                            previewContent={
                                <div className="flex justify-center">
                                    <CircularProgress value={60} size="medium" variant="default" />
                                </div>
                            }
                            codeContent={circularProgressCode}
                            defaultView="preview"
                        />
                    </div>
                </Container>

                {/* Multi-Step Progress */}
                <Container>
                    <HeaderText
                        TitleHeader="Multi-Step Progress"
                        title="Step-by-Step Progress Tracking"
                    />
                    <p className="text-gray-600 mt-2 mb-6">
                        Track progress through multiple steps with visual indicators and labels.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <MultiStepProgress steps={steps} currentStep={currentStep} />
                            <div className="flex space-x-2">
                                <button
                                    onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                                    disabled={currentStep === 0}
                                    className="px-3 py-1 bg-gray-500 text-white rounded disabled:bg-gray-300"
                                >
                                    Previous
                                </button>
                                <button
                                    onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
                                    disabled={currentStep === steps.length - 1}
                                    className="px-3 py-1 bg-blue-500 text-white rounded disabled:bg-gray-300"
                                >
                                    Next
                                </button>
                            </div>
                        </div>

                        <CodePreviewToggle
                            previewContent={
                                <MultiStepProgress steps={steps} currentStep={2} />
                            }
                            codeContent={multiStepCode}
                            defaultView="preview"
                        />
                    </div>
                </Container>

                {/* Animated Progress */}
                <Container>
                    <HeaderText
                        TitleHeader="Animated Progress"
                        title="Smooth Counter Animations"
                    />
                    <p className="text-gray-600 mt-2 mb-6">
                        Progress bars that animate smoothly from one value to another with easing.
                    </p>

                    <CodePreviewToggle
                        previewContent={
                            <AnimatedProgress
                                value={progressValues.animated}
                                duration={2000}
                                showLabel={true}
                                label="Animated Progress"
                            />
                        }
                        codeContent={animatedProgressCode}
                        defaultView="preview"
                    />
                </Container>

                {/* Gaming Progress */}
                <Container>
                    <HeaderText
                        TitleHeader="Gaming Progress"
                        title="RPG-Style Experience Bars"
                    />
                    <p className="text-gray-600 mt-2 mb-6">
                        Gaming-inspired progress bars perfect for gamification and achievement systems.
                    </p>

                    <div className="space-y-4">
                        <GamingProgress
                            value={progressValues.gaming}
                            max={1000}
                            level={5}
                            experience="XP"
                            icon={<FaStar className="w-4 h-4" />}
                        />
                        <GamingProgress
                            value={450}
                            max={800}
                            level={3}
                            experience="Points"
                            icon={<FaFire className="w-4 h-4" />}
                        />

                        <CodePreviewToggle
                            previewContent={
                                <GamingProgress
                                    value={750}
                                    max={1000}
                                    level={5}
                                    experience="XP"
                                    icon={<FaStar className="w-4 h-4" />}
                                />
                            }
                            codeContent={gamingProgressCode}
                            defaultView="preview"
                        />
                    </div>
                </Container>

                {/* Health & Energy Progress */}
                <Container>
                    <HeaderText
                        TitleHeader="Health & Energy Progress"
                        title="Game-Style Resource Bars"
                    />
                    <p className="text-gray-600 mt-2 mb-6">
                        Specialized progress bars for health, energy, and mana with critical state indicators.
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <h4 className="font-medium text-gray-900">Health Bars</h4>
                            <HealthProgress value={progressValues.health} />
                            <HealthProgress value={45} />
                            <HealthProgress value={15} />
                        </div>
                        <div className="space-y-4">
                            <h4 className="font-medium text-gray-900">Energy & Mana</h4>
                            <EnergyProgress value={progressValues.energy} type="energy" recharging={progressValues.energy < 30} />
                            <EnergyProgress value={80} type="mana" recharging={true} />
                            <EnergyProgress value={90} type="energy" />
                        </div>
                    </div>

                    <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <CodePreviewToggle
                            previewContent={<HealthProgress value={85} />}
                            codeContent={healthProgressCode}
                            defaultView="preview"
                        />
                        <CodePreviewToggle
                            previewContent={<EnergyProgress value={60} type="energy" />}
                            codeContent={energyProgressCode}
                            defaultView="preview"
                        />
                    </div>
                </Container>

                {/* Usage Guidelines */}
                <Container>
                    <HeaderText
                        TitleHeader="Usage Guidelines"
                        title="When and How to Use Progress Components"
                    />

                    <div className="mt-6 space-y-8">
                        {/* When to Use */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">When to Use Progress Indicators</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                    <div className="flex items-start space-x-3">
                                        <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-green-900 mb-1">Long-Running Operations</h4>
                                            <p className="text-sm text-green-700">File uploads, downloads, data processing, or any task taking more than 2-3 seconds.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                    <div className="flex items-start space-x-3">
                                        <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-green-900 mb-1">Multi-Step Workflows</h4>
                                            <p className="text-sm text-green-700">Form wizards, setup processes, onboarding flows, or any sequential task.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                    <div className="flex items-start space-x-3">
                                        <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-green-900 mb-1">Status Indicators</h4>
                                            <p className="text-sm text-green-700">Dashboard metrics, goal completion, quota tracking, or skill levels.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                    <div className="flex items-start space-x-3">
                                        <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-green-900 mb-1">Resource Monitoring</h4>
                                            <p className="text-sm text-green-700">Disk usage, memory consumption, battery life, or any finite resource.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* When Not to Use */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">When NOT to Use Progress Indicators</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                    <div className="flex items-start space-x-3">
                                        <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-red-900 mb-1">Quick Operations</h4>
                                            <p className="text-sm text-red-700">Tasks completing in under 1-2 seconds - progress bars can feel jarring for quick actions.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                    <div className="flex items-start space-x-3">
                                        <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-red-900 mb-1">Indeterminate Operations</h4>
                                            <p className="text-sm text-red-700">When you can't estimate completion time - use spinners or skeleton loaders instead.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                    <div className="flex items-start space-x-3">
                                        <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-red-900 mb-1">Decorative Purpose</h4>
                                            <p className="text-sm text-red-700">Don't use progress bars purely for decoration - they should always represent real progress.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                    <div className="flex items-start space-x-3">
                                        <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-red-900 mb-1">Non-Linear Progress</h4>
                                            <p className="text-sm text-red-700">Avoid for processes that can't be measured linearly or jump between values unpredictably.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Progress Type Selection */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Choosing the Right Progress Type</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                                    <div className="flex items-start space-x-3">
                                        <FaUpload className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-blue-900 mb-1">Basic Progress</h4>
                                            <p className="text-sm text-blue-700">File uploads, downloads, loading operations, simple task completion.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                    <div className="flex items-start space-x-3">
                                        <FaStepForward className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-green-900 mb-1">Multi-Step Progress</h4>
                                            <p className="text-sm text-green-700">Form wizards, setup processes, checkout flows, guided tutorials.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                                    <div className="flex items-start space-x-3">
                                        <FaChartPie className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-purple-900 mb-1">Circular Progress</h4>
                                            <p className="text-sm text-purple-700">Dashboard KPIs, metrics, completion rates, compact status displays.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                                    <div className="flex items-start space-x-3">
                                        <FaEye className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-orange-900 mb-1">Gradient/Striped</h4>
                                            <p className="text-sm text-orange-700">Modern interfaces requiring visual appeal, brand-heavy applications.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                    <div className="flex items-start space-x-3">
                                        <FaGamepad className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-red-900 mb-1">Gaming Progress</h4>
                                            <p className="text-sm text-red-700">Experience bars, achievement systems, gamification elements.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                    <div className="flex items-start space-x-3">
                                        <FaSpinner className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-indigo-900 mb-1">Animated Progress</h4>
                                            <p className="text-sm text-indigo-700">Real-time updates, frequently changing values, smooth transitions.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Size and Context Guidelines */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Size and Context Guidelines</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                                    <div className="flex items-start space-x-3">
                                        <FaMobile className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-blue-900 mb-1">Small Size</h4>
                                            <p className="text-sm text-blue-700">Mobile interfaces, compact cards, inline status indicators</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                    <div className="flex items-start space-x-3">
                                        <FaDesktop className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-green-900 mb-1">Medium Size</h4>
                                            <p className="text-sm text-green-700">Standard desktop interfaces, form elements, modal dialogs</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                                    <div className="flex items-start space-x-3">
                                        <FaTachometerAlt className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-orange-900 mb-1">Large Size</h4>
                                            <p className="text-sm text-orange-700">Dashboard headers, main process indicators, prominent status</p>
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
                                            <h4 className="font-semibold text-yellow-900 mb-2">Visual Design & UX</h4>
                                            <ul className="text-sm text-yellow-700 space-y-1">
                                                <li>• Always provide clear labels describing what's progressing</li>
                                                <li>• Show percentage or numeric values when helpful for context</li>
                                                <li>• Use appropriate colors (green for success, red for errors/critical)</li>
                                                <li>• Ensure sufficient contrast for accessibility (WCAG 2.1 AA)</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                                    <div className="flex items-start space-x-3">
                                        <FaInfoCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-blue-900 mb-2">Performance & Animation</h4>
                                            <ul className="text-sm text-blue-700 space-y-1">
                                                <li>• Update progress smoothly, avoid jarring jumps in values</li>
                                                <li>• Use CSS transitions/animations instead of JavaScript when possible</li>
                                                <li>• Respect user's motion preferences (prefers-reduced-motion)</li>
                                                <li>• Throttle updates for frequently changing values to avoid performance issues</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                    <div className="flex items-start space-x-3">
                                        <FaUniversalAccess className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-green-900 mb-2">Accessibility & Data</h4>
                                            <ul className="text-sm text-green-700 space-y-1">
                                                <li>• Include proper ARIA attributes (role="progressbar", aria-valuenow, etc.)</li>
                                                <li>• Provide text alternatives for screen readers</li>
                                                <li>• Handle edge cases (0%, 100%, error states, network failures)</li>
                                                <li>• Allow users to cancel long-running operations when possible</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Common Use Cases */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Common Use Cases by Industry</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                    <FaCloudUploadAlt className="w-6 h-6 text-gray-600 mb-2" />
                                    <h4 className="font-semibold text-gray-900 mb-1">File Management</h4>
                                    <p className="text-sm text-gray-600">Upload progress, download status, sync operations</p>
                                </div>

                                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                    <FaShoppingCart className="w-6 h-6 text-gray-600 mb-2" />
                                    <h4 className="font-semibold text-gray-900 mb-1">E-commerce</h4>
                                    <p className="text-sm text-gray-600">Checkout process, order fulfillment, shipping status</p>
                                </div>

                                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                    <FaChartLine className="w-6 h-6 text-gray-600 mb-2" />
                                    <h4 className="font-semibold text-gray-900 mb-1">Analytics</h4>
                                    <p className="text-sm text-gray-600">KPI tracking, goal completion, performance metrics</p>
                                </div>

                                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                    <FaGamepad className="w-6 h-6 text-gray-600 mb-2" />
                                    <h4 className="font-semibold text-gray-900 mb-1">Gaming</h4>
                                    <p className="text-sm text-gray-600">Experience points, skill levels, achievement progress</p>
                                </div>
                            </div>
                        </div>

                        {/* Alternative Solutions */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Alternative Loading Patterns</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                    <div className="flex items-start space-x-3">
                                        <FaSpinner className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-indigo-900 mb-1">Loading Spinners</h4>
                                            <p className="text-sm text-indigo-700">Better for indeterminate operations or when progress can't be measured.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                    <div className="flex items-start space-x-3">
                                        <FaLayerGroup className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-indigo-900 mb-1">Skeleton Loaders</h4>
                                            <p className="text-sm text-indigo-700">Perfect for content loading, gives users a preview of the layout structure.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                    <div className="flex items-start space-x-3">
                                        <FaCog className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-indigo-900 mb-1">Pulsing Indicators</h4>
                                            <p className="text-sm text-indigo-700">Subtle animations for background processes that don't need user attention.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                    <div className="flex items-start space-x-3">
                                        <FaDownload className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-indigo-900 mb-1">Status Messages</h4>
                                            <p className="text-sm text-indigo-700">Text-based progress updates for complex operations with multiple stages.</p>
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
                        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                            <h4 className="font-semibold text-blue-900 mb-2">File Operations</h4>
                            <p className="text-sm text-blue-700">Use <strong>Basic Progress</strong> with clear labels showing file names and transfer rates.</p>
                        </div>

                        <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                            <h4 className="font-semibold text-green-900 mb-2">Form Wizards</h4>
                            <p className="text-sm text-green-700">Use <strong>Multi-Step Progress</strong> to show current position and remaining steps.</p>
                        </div>

                        <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                            <h4 className="font-semibold text-purple-900 mb-2">Dashboards</h4>
                            <p className="text-sm text-purple-700">Use <strong>Circular Progress</strong> for KPIs and <strong>Gradient</strong> for visual appeal.</p>
                        </div>

                        <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                            <h4 className="font-semibold text-orange-900 mb-2">Gaming/Gamification</h4>
                            <p className="text-sm text-orange-700">Use <strong>Gaming Progress</strong> for XP and <strong>Health/Energy</strong> for resources.</p>
                        </div>

                        <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                            <h4 className="font-semibold text-red-900 mb-2">Real-time Updates</h4>
                            <p className="text-sm text-red-700">Use <strong>Animated Progress</strong> for smooth transitions between changing values.</p>
                        </div>

                        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                            <h4 className="font-semibold text-gray-900 mb-2">Mobile Interfaces</h4>
                            <p className="text-sm text-gray-700">Use <strong>Small Size</strong> variants and avoid overly complex animations.</p>
                        </div>
                    </div>
                </Container>
            </div>
        </DashboardLayout>
    );
};

export default ProgressPage;