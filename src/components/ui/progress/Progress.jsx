import React, { useState, useEffect } from 'react';
import { FaCheck, FaStar, FaFire, FaBolt, FaHeart } from 'react-icons/fa';

// Default Progress Component
const Progress = ({
    value = 0,
    max = 100,
    size = 'medium', // 'small' | 'medium' | 'large'
    variant = 'default', // 'default' | 'success' | 'warning' | 'danger' | 'info'
    showLabel = false,
    label = '',
    className = '',
    animated = false
}) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

    const getSizeClasses = () => {
        switch (size) {
            case 'small':
                return 'h-2';
            case 'large':
                return 'h-4';
            default:
                return 'h-3';
        }
    };

    const getVariantClasses = () => {
        switch (variant) {
            case 'success':
                return 'bg-green-500';
            case 'warning':
                return 'bg-yellow-500';
            case 'danger':
                return 'bg-red-500';
            case 'info':
                return 'bg-cyan-500';
            default:
                return 'bg-blue-500';
        }
    };

    return (
        <div className={`w-full ${className}`}>
            {showLabel && (
                <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">{label}</span>
                    <span className="text-sm text-gray-500">{Math.round(percentage)}%</span>
                </div>
            )}
            <div className={`w-full bg-gray-200 rounded-full overflow-hidden ${getSizeClasses()}`}>
                <div
                    className={`${getVariantClasses()} ${getSizeClasses()} transition-all duration-500 ease-out ${animated ? 'animate-pulse' : ''
                        }`}
                    style={{ width: `${percentage}%` }}
                />
            </div>
        </div>
    );
};

// Striped Progress
export const StripedProgress = ({
    value = 0,
    max = 100,
    variant = 'default',
    animated = false,
    size = 'medium',
    showLabel = false,
    label = ''
}) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

    const getSizeClasses = () => {
        switch (size) {
            case 'small':
                return 'h-2';
            case 'large':
                return 'h-4';
            default:
                return 'h-3';
        }
    };

    const getVariantClasses = () => {
        switch (variant) {
            case 'success':
                return 'bg-green-500';
            case 'warning':
                return 'bg-yellow-500';
            case 'danger':
                return 'bg-red-500';
            case 'info':
                return 'bg-cyan-500';
            default:
                return 'bg-blue-500';
        }
    };

    return (
        <div className="w-full">
            {showLabel && (
                <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">{label}</span>
                    <span className="text-sm text-gray-500">{Math.round(percentage)}%</span>
                </div>
            )}
            <div className={`w-full bg-gray-200 rounded-full overflow-hidden ${getSizeClasses()}`}>
                <div
                    className={`${getVariantClasses()} ${getSizeClasses()} transition-all duration-500 ease-out bg-striped ${animated ? 'animate-striped' : ''
                        }`}
                    style={{
                        width: `${percentage}%`,
                        backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,.15) 50%, rgba(255,255,255,.15) 75%, transparent 75%, transparent)',
                        backgroundSize: '1rem 1rem'
                    }}
                />
            </div>
        </div>
    );
};

// Gradient Progress
export const GradientProgress = ({
    value = 0,
    max = 100,
    gradient = 'blue', // 'blue' | 'green' | 'purple' | 'orange' | 'pink'
    size = 'medium',
    showLabel = false,
    label = '',
    animated = false
}) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

    const getSizeClasses = () => {
        switch (size) {
            case 'small':
                return 'h-2';
            case 'large':
                return 'h-4';
            default:
                return 'h-3';
        }
    };

    const getGradientClasses = () => {
        switch (gradient) {
            case 'green':
                return 'bg-gradient-to-r from-green-400 to-green-600';
            case 'purple':
                return 'bg-gradient-to-r from-purple-400 to-purple-600';
            case 'orange':
                return 'bg-gradient-to-r from-orange-400 to-orange-600';
            case 'pink':
                return 'bg-gradient-to-r from-pink-400 to-pink-600';
            default:
                return 'bg-gradient-to-r from-blue-400 to-blue-600';
        }
    };

    return (
        <div className="w-full">
            {showLabel && (
                <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">{label}</span>
                    <span className="text-sm text-gray-500">{Math.round(percentage)}%</span>
                </div>
            )}
            <div className={`w-full bg-gray-200 rounded-full overflow-hidden ${getSizeClasses()}`}>
                <div
                    className={`${getGradientClasses()} ${getSizeClasses()} transition-all duration-500 ease-out ${animated ? 'animate-pulse' : ''
                        }`}
                    style={{ width: `${percentage}%` }}
                />
            </div>
        </div>
    );
};

// Circular Progress
export const CircularProgress = ({
    value = 0,
    max = 100,
    size = 'medium', // 'small' | 'medium' | 'large'
    variant = 'default',
    showLabel = true,
    strokeWidth = 4
}) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

    const getSizes = () => {
        switch (size) {
            case 'small':
                return { width: 60, height: 60, radius: 26 };
            case 'large':
                return { width: 120, height: 120, radius: 54 };
            default:
                return { width: 80, height: 80, radius: 36 };
        }
    };

    const getColor = () => {
        switch (variant) {
            case 'success':
                return '#10b981';
            case 'warning':
                return '#f59e0b';
            case 'danger':
                return '#ef4444';
            case 'info':
                return '#06b6d4';
            default:
                return '#3b82f6';
        }
    };

    const { width, height, radius } = getSizes();
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <div className="relative inline-flex items-center justify-center">
            <svg width={width} height={height} className="transform -rotate-90">
                <circle
                    cx={width / 2}
                    cy={height / 2}
                    r={radius}
                    stroke="rgb(229, 231, 235)"
                    strokeWidth={strokeWidth}
                    fill="transparent"
                />
                <circle
                    cx={width / 2}
                    cy={height / 2}
                    r={radius}
                    stroke={getColor()}
                    strokeWidth={strokeWidth}
                    fill="transparent"
                    strokeDasharray={strokeDasharray}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    className="transition-all duration-500 ease-out"
                />
            </svg>
            {showLabel && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-semibold text-gray-700">
                        {Math.round(percentage)}%
                    </span>
                </div>
            )}
        </div>
    );
};

// Multi Step Progress
export const MultiStepProgress = ({
    steps = [],
    currentStep = 0,
    variant = 'default'
}) => {
    const getVariantClasses = () => {
        switch (variant) {
            case 'success':
                return 'bg-green-500 border-green-500 text-green-500';
            case 'warning':
                return 'bg-yellow-500 border-yellow-500 text-yellow-500';
            case 'danger':
                return 'bg-red-500 border-red-500 text-red-500';
            default:
                return 'bg-blue-500 border-blue-500 text-blue-500';
        }
    };

    return (
        <div className="w-full">
            <div className="flex items-center">
                {steps.map((step, index) => (
                    <React.Fragment key={index}>
                        <div className="flex flex-col items-center">
                            <div
                                className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-medium transition-all duration-300 ${index <= currentStep
                                        ? `${getVariantClasses()} text-white`
                                        : 'border-gray-300 bg-white text-gray-500'
                                    }`}
                            >
                                {index < currentStep ? (
                                    <FaCheck className="w-3 h-3" />
                                ) : (
                                    index + 1
                                )}
                            </div>
                            <span className="mt-2 text-xs text-gray-600 text-center max-w-20">
                                {step}
                            </span>
                        </div>
                        {index < steps.length - 1 && (
                            <div
                                className={`flex-1 h-0.5 mx-2 transition-all duration-300 ${index < currentStep ? getVariantClasses() : 'bg-gray-300'
                                    }`}
                            />
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

// Animated Counter Progress
export const AnimatedProgress = ({
    value = 0,
    max = 100,
    duration = 2000,
    variant = 'default',
    size = 'medium',
    showLabel = true,
    label = ''
}) => {
    const [currentValue, setCurrentValue] = useState(0);

    useEffect(() => {
        const startTime = Date.now();
        const startValue = currentValue;
        const targetValue = Math.min(Math.max(value, 0), max);

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function for smooth animation
            const easeOutCubic = 1 - Math.pow(1 - progress, 3);
            const newValue = startValue + (targetValue - startValue) * easeOutCubic;

            setCurrentValue(newValue);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [value, max, duration]);

    return (
        <Progress
            value={currentValue}
            max={max}
            variant={variant}
            size={size}
            showLabel={showLabel}
            label={label}
            animated
        />
    );
};

// Gaming Progress (Unique)
export const GamingProgress = ({
    value = 0,
    max = 100,
    level = 1,
    experience = 'XP',
    icon = <FaStar className="w-4 h-4" />
}) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

    return (
        <div className="w-full bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-4 text-white">
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                    <div className="text-yellow-400">{icon}</div>
                    <span className="font-bold text-lg">Level {level}</span>
                </div>
                <span className="text-sm text-gray-300">
                    {Math.round(value)}/{max} {experience}
                </span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                <div
                    className="h-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 transition-all duration-1000 ease-out relative"
                    style={{ width: `${percentage}%` }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse" />
                </div>
            </div>
        </div>
    );
};

// Health Bar Progress (Unique)
export const HealthProgress = ({
    value = 100,
    max = 100,
    critical = 25,
    warning = 50
}) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

    const getHealthColor = () => {
        if (percentage <= critical) return 'from-red-600 to-red-800';
        if (percentage <= warning) return 'from-yellow-500 to-orange-600';
        return 'from-green-500 to-green-700';
    };

    const getIcon = () => {
        if (percentage <= critical) return <FaHeart className="w-4 h-4 text-red-500 animate-pulse" />;
        if (percentage <= warning) return <FaHeart className="w-4 h-4 text-yellow-500" />;
        return <FaHeart className="w-4 h-4 text-green-500" />;
    };

    return (
        <div className="w-full bg-gray-800 rounded-lg p-3 border border-gray-700">
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                    {getIcon()}
                    <span className="text-white font-medium">Health</span>
                </div>
                <span className="text-white text-sm">
                    {Math.round(value)}/{max}
                </span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden border border-gray-600">
                <div
                    className={`h-full bg-gradient-to-r ${getHealthColor()} transition-all duration-300 ease-out relative`}
                    style={{ width: `${percentage}%` }}
                >
                    {percentage <= critical && (
                        <div className="absolute inset-0 bg-red-300 opacity-50 animate-pulse" />
                    )}
                </div>
            </div>
        </div>
    );
};

// Energy/Mana Progress (Unique)
export const EnergyProgress = ({
    value = 75,
    max = 100,
    type = 'energy', // 'energy' | 'mana'
    recharging = false
}) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

    const getConfig = () => {
        if (type === 'mana') {
            return {
                color: 'from-blue-500 to-purple-600',
                icon: <FaBolt className="w-4 h-4 text-blue-400" />,
                label: 'Mana'
            };
        }
        return {
            color: 'from-yellow-400 to-orange-500',
            icon: <FaFire className="w-4 h-4 text-yellow-400" />,
            label: 'Energy'
        };
    };

    const config = getConfig();

    return (
        <div className="w-full bg-gray-900 rounded-lg p-3 border border-gray-700">
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                    <div className={recharging ? 'animate-spin' : ''}>{config.icon}</div>
                    <span className="text-white font-medium">{config.label}</span>
                    {recharging && (
                        <span className="text-xs text-blue-400 animate-pulse">Recharging...</span>
                    )}
                </div>
                <span className="text-white text-sm">
                    {Math.round(value)}/{max}
                </span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                <div
                    className={`h-full bg-gradient-to-r ${config.color} transition-all duration-500 ease-out relative`}
                    style={{ width: `${percentage}%` }}
                >
                    {recharging && (
                        <div className="absolute inset-0 bg-white opacity-30 animate-pulse" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-pulse" />
                </div>
            </div>
        </div>
    );
};

export default Progress;