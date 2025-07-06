import React from 'react';
import { cn } from '@libs/utils';

// Add custom CSS animations
const style = document.createElement('style');
style.textContent = `
  @keyframes heartbeat {
    0% { transform: scale(1); }
    14% { transform: scale(1.3); }
    28% { transform: scale(1); }
    42% { transform: scale(1.3); }
    70% { transform: scale(1); }
  }
  
  @keyframes wave {
    0%, 40%, 100% { transform: scaleY(0.4); }
    20% { transform: scaleY(1); }
  }
  
  @keyframes ripple {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    100% {
      transform: scale(4);
      opacity: 0;
    }
  }
  
  @keyframes fadeInOut {
    0%, 100% { opacity: 0.2; }
    50% { opacity: 1; }
  }
  
  @keyframes slideIn {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  
  @keyframes orbit {
    from { transform: rotate(0deg) translateX(50px) rotate(0deg); }
    to { transform: rotate(360deg) translateX(50px) rotate(-360deg); }
  }
  
  @keyframes flipSquare {
    0% { transform: perspective(120px) rotateX(0deg) rotateY(0deg); }
    50% { transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg); }
    100% { transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg); }
  }
  
  @keyframes bounceScale {
    0%, 20%, 53%, 80%, 100% {
      transform: scale3d(1, 1, 1);
    }
    40%, 43% {
      transform: scale3d(1.25, 1.25, 1);
    }
    70% {
      transform: scale3d(1.05, 1.05, 1);
    }
    90% {
      transform: scale3d(1.02, 1.02, 1);
    }
  }
  
  @keyframes glow {
    0%, 100% {
      box-shadow: 0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor;
    }
    50% {
      box-shadow: 0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor;
    }
  }
`;
document.head.appendChild(style);

// Base Spinner Component
const Spinner = ({
    size = 'md',
    color = 'primary',
    variant = 'border',
    className,
    ...props
}) => {
    const sizeClasses = {
        xs: 'w-3 h-3',
        sm: 'w-4 h-4',
        md: 'w-6 h-6',
        lg: 'w-8 h-8',
        xl: 'w-12 h-12',
        '2xl': 'w-16 h-16'
    };

    const colorClasses = {
        primary: 'border-blue-600',
        secondary: 'border-gray-600',
        success: 'border-green-600',
        danger: 'border-red-600',
        warning: 'border-yellow-600',
        info: 'border-cyan-600',
        light: 'border-gray-300',
        dark: 'border-gray-800'
    };

    if (variant === 'border') {
        return (
            <div
                className={cn(
                    'animate-spin rounded-full border-2 border-t-transparent',
                    sizeClasses[size],
                    colorClasses[color],
                    className
                )}
                style={{ animationDuration: '1s' }}
                {...props}
            />
        );
    }

    return null;
};

// Border Spinner (Classic) - Enhanced with smooth animation
export const BorderSpinner = ({ size = 'md', color = 'primary', className, ...props }) => (
    <Spinner
        variant="border"
        size={size}
        color={color}
        className={className}
        {...props}
    />
);

// Growing Spinner - Enhanced with ripple effect
export const GrowingSpinner = ({ size = 'md', color = 'primary', className, ...props }) => {
    const sizeClasses = {
        xs: 'w-3 h-3',
        sm: 'w-4 h-4',
        md: 'w-6 h-6',
        lg: 'w-8 h-8',
        xl: 'w-12 h-12',
        '2xl': 'w-16 h-16'
    };

    const colorClasses = {
        primary: 'bg-blue-600',
        secondary: 'bg-gray-600',
        success: 'bg-green-600',
        danger: 'bg-red-600',
        warning: 'bg-yellow-600',
        info: 'bg-cyan-600',
        light: 'bg-gray-300',
        dark: 'bg-gray-800'
    };

    return (
        <div className={cn('relative', sizeClasses[size], className)} {...props}>
            <div
                className={cn(
                    'absolute inset-0 rounded-full',
                    colorClasses[color]
                )}
                style={{
                    animation: 'ripple 1.5s ease-out infinite'
                }}
            />
            <div
                className={cn(
                    'absolute inset-0 rounded-full',
                    colorClasses[color]
                )}
                style={{
                    animation: 'ripple 1.5s ease-out infinite 0.5s'
                }}
            />
        </div>
    );
};

// Dots Spinner - Enhanced with better bounce timing
export const DotsSpinner = ({ size = 'md', color = 'primary', className, ...props }) => {
    const dotSizeClasses = {
        xs: 'w-1 h-1',
        sm: 'w-1.5 h-1.5',
        md: 'w-2 h-2',
        lg: 'w-2.5 h-2.5',
        xl: 'w-3 h-3',
        '2xl': 'w-4 h-4'
    };

    const colorClasses = {
        primary: 'bg-blue-600',
        secondary: 'bg-gray-600',
        success: 'bg-green-600',
        danger: 'bg-red-600',
        warning: 'bg-yellow-600',
        info: 'bg-cyan-600',
        light: 'bg-gray-300',
        dark: 'bg-gray-800'
    };

    return (
        <div className={cn('flex space-x-1', className)} {...props}>
            {[0, 1, 2].map((index) => (
                <div
                    key={index}
                    className={cn(
                        'rounded-full',
                        dotSizeClasses[size],
                        colorClasses[color]
                    )}
                    style={{
                        animation: `bounceScale 1.4s ease-in-out infinite both`,
                        animationDelay: `${index * 0.16}s`
                    }}
                />
            ))}
        </div>
    );
};

// Pulse Spinner - Enhanced with glow effect
export const PulseSpinner = ({ size = 'md', color = 'primary', className, ...props }) => {
    const sizeClasses = {
        xs: 'w-3 h-3',
        sm: 'w-4 h-4',
        md: 'w-6 h-6',
        lg: 'w-8 h-8',
        xl: 'w-12 h-12',
        '2xl': 'w-16 h-16'
    };

    const colorClasses = {
        primary: 'bg-blue-600 text-blue-600',
        secondary: 'bg-gray-600 text-gray-600',
        success: 'bg-green-600 text-green-600',
        danger: 'bg-red-600 text-red-600',
        warning: 'bg-yellow-600 text-yellow-600',
        info: 'bg-cyan-600 text-cyan-600',
        light: 'bg-gray-300 text-gray-300',
        dark: 'bg-gray-800 text-gray-800'
    };

    return (
        <div
            className={cn(
                'rounded-full',
                sizeClasses[size],
                colorClasses[color],
                className
            )}
            style={{
                animation: 'glow 2s ease-in-out infinite alternate'
            }}
            {...props}
        />
    );
};

// Wave Spinner - Enhanced with better wave animation
export const WaveSpinner = ({ size = 'md', color = 'primary', className, ...props }) => {
    const barHeightClasses = {
        xs: 'h-4',
        sm: 'h-6',
        md: 'h-8',
        lg: 'h-10',
        xl: 'h-12',
        '2xl': 'h-16'
    };

    const barWidthClasses = {
        xs: 'w-0.5',
        sm: 'w-1',
        md: 'w-1',
        lg: 'w-1.5',
        xl: 'w-2',
        '2xl': 'w-2.5'
    };

    const colorClasses = {
        primary: 'bg-blue-600',
        secondary: 'bg-gray-600',
        success: 'bg-green-600',
        danger: 'bg-red-600',
        warning: 'bg-yellow-600',
        info: 'bg-cyan-600',
        light: 'bg-gray-300',
        dark: 'bg-gray-800'
    };

    return (
        <div className={cn('flex items-end space-x-1', className)} {...props}>
            {[...Array(5)].map((_, i) => (
                <div
                    key={i}
                    className={cn(
                        'rounded-sm',
                        barHeightClasses[size],
                        barWidthClasses[size],
                        colorClasses[color]
                    )}
                    style={{
                        animation: `wave 1.2s ease-in-out infinite`,
                        animationDelay: `${i * 0.1}s`
                    }}
                />
            ))}
        </div>
    );
};

// Ring Spinner - Enhanced with counter-rotating rings
export const RingSpinner = ({ size = 'md', color = 'primary', className, ...props }) => {
    const sizeClasses = {
        xs: 'w-3 h-3',
        sm: 'w-4 h-4',
        md: 'w-6 h-6',
        lg: 'w-8 h-8',
        xl: 'w-12 h-12',
        '2xl': 'w-16 h-16'
    };

    const colorClasses = {
        primary: 'border-blue-600',
        secondary: 'border-gray-600',
        success: 'border-green-600',
        danger: 'border-red-600',
        warning: 'border-yellow-600',
        info: 'border-cyan-600',
        light: 'border-gray-300',
        dark: 'border-gray-800'
    };

    return (
        <div className={cn('relative', sizeClasses[size], className)} {...props}>
            <div
                className={cn(
                    'absolute inset-0 rounded-full border-2 border-t-transparent animate-spin',
                    colorClasses[color]
                )}
                style={{ animationDuration: '1s' }}
            />
            <div
                className={cn(
                    'absolute inset-1 rounded-full border-2 border-b-transparent animate-spin',
                    colorClasses[color]
                )}
                style={{
                    animationDirection: 'reverse',
                    animationDuration: '0.75s'
                }}
            />
        </div>
    );
};

// Orbit Spinner - Enhanced with smooth orbital motion
export const OrbitSpinner = ({ size = 'md', color = 'primary', className, ...props }) => {
    const sizeClasses = {
        xs: 'w-6 h-6',
        sm: 'w-8 h-8',
        md: 'w-12 h-12',
        lg: 'w-16 h-16',
        xl: 'w-20 h-20',
        '2xl': 'w-24 h-24'
    };

    const dotSizeClasses = {
        xs: 'w-1 h-1',
        sm: 'w-1.5 h-1.5',
        md: 'w-2 h-2',
        lg: 'w-2.5 h-2.5',
        xl: 'w-3 h-3',
        '2xl': 'w-4 h-4'
    };

    const colorClasses = {
        primary: 'bg-blue-600',
        secondary: 'bg-gray-600',
        success: 'bg-green-600',
        danger: 'bg-red-600',
        warning: 'bg-yellow-600',
        info: 'bg-cyan-600',
        light: 'bg-gray-300',
        dark: 'bg-gray-800'
    };

    return (
        <div className={cn('relative animate-spin', sizeClasses[size], className)}
            style={{ animationDuration: '2s' }}
            {...props}>
            <div
                className={cn(
                    'absolute top-0 left-1/2 transform -translate-x-1/2 rounded-full',
                    dotSizeClasses[size],
                    colorClasses[color]
                )}
                style={{
                    animation: 'fadeInOut 2s ease-in-out infinite'
                }}
            />
            <div
                className={cn(
                    'absolute bottom-0 left-1/2 transform -translate-x-1/2 rounded-full',
                    dotSizeClasses[size],
                    colorClasses[color]
                )}
                style={{
                    animation: 'fadeInOut 2s ease-in-out infinite',
                    animationDelay: '1s'
                }}
            />
            <div
                className={cn(
                    'absolute left-0 top-1/2 transform -translate-y-1/2 rounded-full',
                    dotSizeClasses[size],
                    colorClasses[color]
                )}
                style={{
                    animation: 'fadeInOut 2s ease-in-out infinite',
                    animationDelay: '0.5s'
                }}
            />
            <div
                className={cn(
                    'absolute right-0 top-1/2 transform -translate-y-1/2 rounded-full',
                    dotSizeClasses[size],
                    colorClasses[color]
                )}
                style={{
                    animation: 'fadeInOut 2s ease-in-out infinite',
                    animationDelay: '1.5s'
                }}
            />
        </div>
    );
};

// Square Spinner - Enhanced with 3D flip animation
export const SquareSpinner = ({ size = 'md', color = 'primary', className, ...props }) => {
    const sizeClasses = {
        xs: 'w-3 h-3',
        sm: 'w-4 h-4',
        md: 'w-6 h-6',
        lg: 'w-8 h-8',
        xl: 'w-12 h-12',
        '2xl': 'w-16 h-16'
    };

    const colorClasses = {
        primary: 'bg-blue-600',
        secondary: 'bg-gray-600',
        success: 'bg-green-600',
        danger: 'bg-red-600',
        warning: 'bg-yellow-600',
        info: 'bg-cyan-600',
        light: 'bg-gray-300',
        dark: 'bg-gray-800'
    };

    return (
        <div
            className={cn(
                sizeClasses[size],
                colorClasses[color],
                className
            )}
            style={{
                animation: 'flipSquare 1.2s infinite ease-in-out'
            }}
            {...props}
        />
    );
};

// Heartbeat Spinner - Enhanced heartbeat animation
export const HeartbeatSpinner = ({ size = 'md', color = 'primary', className, ...props }) => {
    const sizeClasses = {
        xs: 'w-3 h-3',
        sm: 'w-4 h-4',
        md: 'w-6 h-6',
        lg: 'w-8 h-8',
        xl: 'w-12 h-12',
        '2xl': 'w-16 h-16'
    };

    const colorClasses = {
        primary: 'bg-blue-600',
        secondary: 'bg-gray-600',
        success: 'bg-green-600',
        danger: 'bg-red-600',
        warning: 'bg-yellow-600',
        info: 'bg-cyan-600',
        light: 'bg-gray-300',
        dark: 'bg-gray-800'
    };

    return (
        <div
            className={cn(
                'rounded-full',
                sizeClasses[size],
                colorClasses[color],
                className
            )}
            style={{
                animation: 'heartbeat 1.5s ease-in-out infinite'
            }}
            {...props}
        />
    );
};

// Button Spinner - Enhanced for button use
export const ButtonSpinner = ({ size = 'sm', color = 'white', className, ...props }) => {
    const sizeClasses = {
        xs: 'w-3 h-3',
        sm: 'w-4 h-4',
        md: 'w-5 h-5',
        lg: 'w-6 h-6'
    };

    const colorClasses = {
        white: 'border-white',
        primary: 'border-blue-600',
        secondary: 'border-gray-600',
        success: 'border-green-600',
        danger: 'border-red-600',
        warning: 'border-yellow-600',
        info: 'border-cyan-600',
        light: 'border-gray-300',
        dark: 'border-gray-800'
    };

    return (
        <div
            className={cn(
                'animate-spin rounded-full border-2 border-t-transparent',
                sizeClasses[size],
                colorClasses[color],
                className
            )}
            style={{ animationDuration: '0.8s' }}
            {...props}
        />
    );
};

// New Enhanced Spinners

// Gradient Spinner - New animated spinner with gradient effect
export const GradientSpinner = ({ size = 'md', className, ...props }) => {
    const sizeClasses = {
        xs: 'w-3 h-3',
        sm: 'w-4 h-4',
        md: 'w-6 h-6',
        lg: 'w-8 h-8',
        xl: 'w-12 h-12',
        '2xl': 'w-16 h-16'
    };

    return (
        <div
            className={cn(
                'rounded-full animate-spin',
                sizeClasses[size],
                className
            )}
            style={{
                background: 'conic-gradient(from 0deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)',
                animationDuration: '1s'
            }}
            {...props}
        >
            <div className="w-full h-full rounded-full bg-white dark:bg-gray-900"
                style={{ transform: 'scale(0.8)' }} />
        </div>
    );
};

// Loading Bar Spinner - New animated loading bar
export const LoadingBarSpinner = ({ size = 'md', color = 'primary', className, ...props }) => {
    const widthClasses = {
        xs: 'w-8',
        sm: 'w-12',
        md: 'w-16',
        lg: 'w-20',
        xl: 'w-24',
        '2xl': 'w-32'
    };

    const heightClasses = {
        xs: 'h-0.5',
        sm: 'h-1',
        md: 'h-1',
        lg: 'h-1.5',
        xl: 'h-2',
        '2xl': 'h-2.5'
    };

    const colorClasses = {
        primary: 'bg-blue-600',
        secondary: 'bg-gray-600',
        success: 'bg-green-600',
        danger: 'bg-red-600',
        warning: 'bg-yellow-600',
        info: 'bg-cyan-600',
        light: 'bg-gray-300',
        dark: 'bg-gray-800'
    };

    return (
        <div className={cn('relative overflow-hidden rounded-full bg-gray-200',
            widthClasses[size], heightClasses[size], className)} {...props}>
            <div
                className={cn('absolute inset-y-0 left-0 rounded-full', colorClasses[color])}
                style={{
                    animation: 'slideIn 1.5s ease-in-out infinite',
                    width: '30%'
                }}
            />
        </div>
    );
};

export default {
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
};