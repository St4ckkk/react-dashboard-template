import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = ({
    size = 'md',
    variant = 'default',
    message = 'Loading...',
    showMessage = true,
    className = ''
}) => {
    const getSizeClasses = () => {
        switch (size) {
            case 'sm': return 'h-4 w-4';
            case 'lg': return 'h-12 w-12';
            case 'xl': return 'h-16 w-16';
            default: return 'h-8 w-8';
        }
    };

    const getVariantClasses = () => {
        switch (variant) {
            case 'primary':
                return 'border-blue-600';
            case 'success':
                return 'border-green-600';
            case 'warning':
                return 'border-yellow-600';
            case 'danger':
                return 'border-red-600';
            case 'purple':
                return 'border-purple-600';
            default:
                return 'border-gray-600';
        }
    };

    const spinnerVariants = {
        start: {
            rotate: 0
        },
        end: {
            rotate: 360
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.3
            }
        }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={`flex flex-col items-center justify-center ${className}`}
        >
            <motion.div
                variants={spinnerVariants}
                initial="start"
                animate="end"
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className={`
          inline-block rounded-full border-2 border-solid border-current border-r-transparent 
          ${getSizeClasses()} ${getVariantClasses()}
        `}
                role="status"
                aria-label="Loading"
            />

            {showMessage && (
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-3 text-sm text-gray-600 font-medium"
                >
                    {message}
                </motion.p>
            )}
        </motion.div>
    );
};

// Specialized loading components for different contexts
export const DashboardLoader = () => (
    <div className="min-h-screen bg-layout flex items-center justify-center">
        <LoadingSpinner
            size="lg"
            variant="primary"
            message="Loading Dashboard..."
        />
    </div>
);

export const ComponentLoader = () => (
    <div className="min-h-screen bg-layout flex items-center justify-center">
        <LoadingSpinner
            size="md"
            variant="purple"
            message="Loading Component..."
        />
    </div>
);

export const PageLoader = ({ message = "Loading page..." }) => (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <LoadingSpinner
            size="lg"
            variant="default"
            message={message}
        />
    </div>
);

export const InlineLoader = ({ message = "Loading..." }) => (
    <div className="flex items-center justify-center p-8">
        <LoadingSpinner
            size="sm"
            variant="primary"
            message={message}
            showMessage={false}
        />
    </div>
);

export default LoadingSpinner;