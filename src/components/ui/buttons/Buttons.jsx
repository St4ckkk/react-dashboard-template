import React from 'react';
import {
    FaStar,
    FaBriefcase,
    FaCheck,
    FaExclamationCircle,
    FaExclamationTriangle,
    FaInfoCircle,
    FaFolder
} from 'react-icons/fa';

// Base Button component with all options
const Button = ({
    children,
    variant = 'primary',
    outline = false,
    rounded = false,
    size = 'normal',
    disabled = false,
    block = false,
    icon = null,
    iconPosition = 'left',
    className = '',
    onClick,
    ...props
}) => {
    // Theme colors
    const themes = {
        primary: {
            solid: 'bg-blue-600 hover:bg-blue-700 text-white',
            outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50'
        },
        secondary: {
            solid: 'bg-gray-500 hover:bg-gray-600 text-white',
            outline: 'border border-gray-500 text-gray-500 hover:bg-gray-50'
        },
        success: {
            solid: 'bg-green-600 hover:bg-green-700 text-white',
            outline: 'border border-green-600 text-green-600 hover:bg-green-50'
        },
        danger: {
            solid: 'bg-red-600 hover:bg-red-700 text-white',
            outline: 'border border-red-600 text-red-600 hover:bg-red-50'
        },
        warning: {
            solid: 'bg-yellow-500 hover:bg-yellow-600 text-white',
            outline: 'border border-yellow-500 text-yellow-500 hover:bg-yellow-50'
        },
        info: {
            solid: 'bg-cyan-500 hover:bg-cyan-600 text-white',
            outline: 'border border-cyan-500 text-cyan-500 hover:bg-cyan-50'
        },
        light: {
            solid: 'bg-gray-100 hover:bg-gray-200 text-gray-800',
            outline: 'border border-gray-200 text-gray-800 hover:bg-gray-50'
        },
        dark: {
            solid: 'bg-gray-800 hover:bg-gray-900 text-white',
            outline: 'border border-gray-800 text-gray-800 hover:bg-gray-100'
        },
        link: {
            solid: 'text-blue-600 hover:text-blue-800 underline',
            outline: 'text-blue-600 hover:text-blue-800 underline'
        }
    };

    // Size classes
    const sizes = {
        small: 'py-1 px-3 text-sm',
        normal: 'py-2 px-4 text-base',
        large: 'py-3 px-6 text-lg'
    };

    // Border radius based on rounded prop
    const borderRadius = rounded ? 'rounded-full' : 'rounded';

    // Disabled styles
    const disabledClasses = disabled
        ? 'opacity-60 cursor-not-allowed'
        : 'transition-colors duration-200';

    // Block style
    const blockClass = block ? 'w-full flex justify-center' : 'inline-flex';

    // Get theme style based on outline prop
    const themeStyle = outline ? themes[variant].outline : themes[variant].solid;

    // Combine all classes
    const buttonClasses = `
    ${blockClass}
    ${sizes[size]}
    ${themeStyle}
    ${borderRadius}
    ${disabledClasses}
    items-center font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${variant === 'link' ? 'blue' : variant}-500
    ${className}
  `;

    return (
        <button
            type="button"
            className={buttonClasses}
            disabled={disabled}
            onClick={onClick}
            {...props}
        >
            {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
            {children}
            {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
        </button>
    );
};

// Default Buttons
export const PrimaryButton = (props) => <Button variant="primary" {...props} />;
export const SecondaryButton = (props) => <Button variant="secondary" {...props} />;
export const SuccessButton = (props) => <Button variant="success" {...props} />;
export const DangerButton = (props) => <Button variant="danger" {...props} />;
export const WarningButton = (props) => <Button variant="warning" {...props} />;
export const InfoButton = (props) => <Button variant="info" {...props} />;
export const LightButton = (props) => <Button variant="light" {...props} />;
export const DarkButton = (props) => <Button variant="dark" {...props} />;
export const LinkButton = (props) => <Button variant="link" {...props} />;

// Outline Buttons
export const OutlinePrimaryButton = (props) => <Button variant="primary" outline {...props} />;
export const OutlineSecondaryButton = (props) => <Button variant="secondary" outline {...props} />;
export const OutlineSuccessButton = (props) => <Button variant="success" outline {...props} />;
export const OutlineDangerButton = (props) => <Button variant="danger" outline {...props} />;
export const OutlineWarningButton = (props) => <Button variant="warning" outline {...props} />;
export const OutlineInfoButton = (props) => <Button variant="info" outline {...props} />;
export const OutlineDarkButton = (props) => <Button variant="dark" outline {...props} />;

// Rounded Buttons
export const RoundedButton = (props) => <Button rounded {...props} />;

// Size Variants
export const SmallButton = (props) => <Button size="small" {...props} />;
export const NormalButton = (props) => <Button size="normal" {...props} />;
export const LargeButton = (props) => <Button size="large" {...props} />;
export const BlockButton = (props) => <Button block {...props} />;

// Icon Buttons
export const IconButton = ({ icon, ...props }) => <Button icon={icon} {...props} />;

// Button States
export const DisabledButton = (props) => <Button disabled {...props} />;

// Icon Only Button
export const IconOnlyButton = ({ icon, variant = 'primary', ...props }) => (
    <Button variant={variant} className="p-2" {...props}>
        {icon}
    </Button>
);

// Common button with icon and text
export const ButtonWithIcon = ({ icon, children, iconPosition = 'left', ...props }) => (
    <Button icon={icon} iconPosition={iconPosition} {...props}>
        {children}
    </Button>
);

export default Button;