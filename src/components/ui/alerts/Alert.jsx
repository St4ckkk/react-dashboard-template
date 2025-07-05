import React from 'react';
import Button from '@buttons/Button';

const Alert = ({
    children,
    variant = 'primary',
    dismissible = true,
    onDismiss,
    className = '',
    solid = false
}) => {
    const baseClass = solid ? 'alert-solid' : 'alert';
    const variantClass = solid ? `alert-solid-${variant}` : `alert-${variant}`;

    return (
        <div className={`${baseClass} ${variantClass} ${className}`}>
            <div>{children}</div>
            {dismissible && (
                <Button
                    type="button"
                    className={`alert-dismiss-btn ${solid ? 'text-white' : ''}`}
                    onClick={onDismiss}
                    aria-label="Close"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </Button>
            )}
        </div>
    );
};

export default Alert;

const DefaultAlert = ({ message, variant = 'primary', dismissible = true, onDismiss }) => {
    return (
        <Alert variant={variant} dismissible={dismissible} onDismiss={onDismiss}>
            {message}
        </Alert>
    );
};

export { DefaultAlert };

const SolidAlert = ({ message, variant = 'primary', dismissible = true, onDismiss }) => {
    return (
        <Alert
            variant={variant}
            dismissible={dismissible}
            onDismiss={onDismiss}
            solid={true}
        >
            {message}
        </Alert>
    );
};

export { SolidAlert };


const AlertWithIcon = ({
    message,
    variant = 'primary',
    dismissible = true,
    onDismiss,
    solid = false,
    icon
}) => {
    return (
        <Alert
            variant={variant}
            dismissible={dismissible}
            onDismiss={onDismiss}
            solid={solid}
            className="flex items-center"
        >
            <div className="flex items-center">
                <span className={`alert-icon ${solid ? 'text-lg mr-3' : 'text-lg'}`}>{icon}</span>
                {message}
            </div>
        </Alert>
    );
};

export { AlertWithIcon };


const OutlineAlert = ({ message, variant = 'primary', dismissible = true, onDismiss }) => {
    return (
        <div className={`alert-outline alert-outline-${variant} flex items-center justify-between p-3 rounded-md`}>
            <div>{message}</div>
            {dismissible && (
                <Button
                    type="button"
                    className="alert-dismiss-btn"
                    onClick={onDismiss}
                    aria-label="Close"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </Button>
            )}
        </div>
    );
};

export { OutlineAlert };


const WithHeadingSeparatorAlert = ({
    heading,
    message,
    description,
    variant = 'primary',
    dismissible = true,
    onDismiss
}) => {
    const baseClass = `alert-${variant} border rounded-md overflow-hidden`;
    const headingClass = `font-bold text-sm mb-1`;
    
    return (
        <div className={baseClass}>
            <div className="flex items-center justify-between p-3">
                <h4 className={headingClass}>{heading}</h4>
                {dismissible && (
                    <Button
                        type="button"
                        className="alert-dismiss-btn"
                        onClick={onDismiss}
                        aria-label="Close"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </Button>
                )}
            </div>
            <hr className={`border-t opacity-20 mx-3 ${variant !== 'light' ? 'border-current' : 'border-gray-300'}`} />
            <div className="p-3 pt-2">
                <p className="text-sm mb-2">{message}</p>
                {description && <p className="text-xs opacity-80">{description}</p>}
            </div>
        </div>
    );
};

export { WithHeadingSeparatorAlert };