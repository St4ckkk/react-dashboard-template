import React from 'react';
import { FaEllipsisV } from 'react-icons/fa';

// Base Card component
const Card = ({
    children,
    title,
    subtitle,
    header,
    footer,
    variant = 'default',
    elevation = 'md',
    className = '',
    bodyClassName = '',
    noPadding = false,
    bordered = false,
    actions,
    ...props
}) => {
    // Elevation classes
    const elevationClasses = {
        none: '',
        sm: 'shadow-sm',
        md: 'shadow',
        lg: 'shadow-lg',
        xl: 'shadow-xl'
    };

    // Variant classes
    const variantClasses = {
        default: 'bg-white',
        primary: 'bg-blue-50 border-blue-200',
        secondary: 'bg-gray-50 border-gray-200',
        success: 'bg-green-50 border-green-200',
        danger: 'bg-red-50 border-red-200',
        warning: 'bg-yellow-50 border-yellow-200',
        info: 'bg-cyan-50 border-cyan-200',
        dark: 'bg-gray-800 text-white border-gray-700',
        'light-blue': 'bg-[color:var(--color-light-blue)] text-white',
        'deep-blue': 'bg-[color:var(--color-deep-blue)] text-white',
    };

    // Border classes
    const borderClass = bordered ? 'border' : '';

    return (
        <div
            className={`
                ${elevationClasses[elevation]}
                ${variantClasses[variant]}
                ${borderClass}
                rounded-lg overflow-hidden
                ${className}
            `}
            {...props}
        >
            {/* Custom Header or Title+Subtitle Header */}
            {(header || title) && (
                <div className={`${variant === 'default' ? 'border-b border-gray-200' : ''} ${variant.includes('blue') ? 'border-b border-gray-700' : ''} p-4 flex justify-between items-center`}>
                    {header || (
                        <div>
                            <h3 className={`text-lg font-medium ${variant === 'dark' || variant.includes('blue') ? 'text-white' : 'text-gray-900'}`}>
                                {title}
                            </h3>
                            {subtitle && (
                                <p className={`mt-1 text-sm ${variant === 'dark' || variant.includes('blue') ? 'text-gray-300' : 'text-gray-500'}`}>
                                    {subtitle}
                                </p>
                            )}
                        </div>
                    )}
                    {actions && (
                        <div className="flex space-x-2">
                            {actions}
                        </div>
                    )}
                </div>
            )}

            {/* Card Body */}
            <div className={`${noPadding ? '' : 'p-4'} ${bodyClassName}`}>
                {children}
            </div>

            {/* Card Footer */}
            {footer && (
                <div className={`${variant === 'default' ? 'border-t border-gray-200' : ''} ${variant.includes('blue') ? 'border-t border-gray-700' : ''} p-4`}>
                    {footer}
                </div>
            )}
        </div>
    );
};

// Media Card with image
export const MediaCard = ({
    image,
    imagePosition = 'top',
    imageAlt = '',
    imageHeight = 'h-48',
    title,
    subtitle,
    children,
    footer,
    actions,
    ...props
}) => {
    const imageContent = (
        <div className={`${imageHeight} overflow-hidden`}>
            <img
                src={image}
                alt={imageAlt}
                className="w-full h-full object-cover"
            />
        </div>
    );

    return (
        <Card
            title={title}
            subtitle={subtitle}
            footer={footer}
            actions={actions}
            noPadding={true}
            {...props}
        >
            {/* Image positioning */}
            {imagePosition === 'top' && imageContent}
            
            <div className="p-4">
                {children}
            </div>
            
            {imagePosition === 'bottom' && imageContent}
        </Card>
    );
};

// Profile Card
export const ProfileCard = ({
    avatar,
    name,
    role,
    stats,
    bio,
    socialLinks,
    ...props
}) => {
    return (
        <Card noPadding {...props}>
            <div className="text-center p-6">
                {avatar && (
                    <div className="flex justify-center mb-4">
                        <img
                            src={avatar}
                            alt={name}
                            className="w-24 h-24 rounded-full object-cover border-4 border-white shadow"
                        />
                    </div>
                )}
                <h3 className="text-xl font-semibold">{name}</h3>
                {role && <p className="text-gray-500">{role}</p>}
                
                {bio && (
                    <p className="mt-4 text-gray-600">{bio}</p>
                )}
                
                {socialLinks && (
                    <div className="mt-4 flex justify-center space-x-3">
                        {socialLinks}
                    </div>
                )}
            </div>
            
            {stats && (
                <div className="border-t border-gray-200 grid grid-cols-3 divide-x divide-gray-200">
                    {stats.map((stat, index) => (
                        <div key={index} className="p-4 text-center">
                            <div className="text-lg font-bold">{stat.value}</div>
                            <div className="text-xs text-gray-500 uppercase">{stat.label}</div>
                        </div>
                    ))}
                </div>
            )}
        </Card>
    );
};

// Interactive Card - hover effects, click actions
export const InteractiveCard = ({
    onClick,
    hoverEffect = 'scale',
    children,
    ...props
}) => {
    const hoverClasses = {
        scale: 'hover:scale-105',
        elevate: 'hover:shadow-lg',
        border: 'hover:border-gray-400',
        highlight: 'hover:bg-gray-50'
    };

    return (
        <Card
            className={`transition-all duration-200 cursor-pointer ${hoverClasses[hoverEffect]}`}
            onClick={onClick}
            {...props}
        >
            {children}
        </Card>
    );
};

// Horizontal Card
export const HorizontalCard = ({
    image,
    imageWidth = 'w-1/3',
    imageAlt = '',
    title,
    subtitle,
    children,
    actions,
    ...props
}) => {
    return (
        <Card className="flex overflow-hidden" noPadding {...props}>
            {image && (
                <div className={`${imageWidth} overflow-hidden`}>
                    <img
                        src={image}
                        alt={imageAlt}
                        className="w-full h-full object-cover"
                    />
                </div>
            )}
            <div className="flex-1 p-4">
                {title && <h3 className="text-lg font-medium text-gray-900">{title}</h3>}
                {subtitle && <p className="mt-1 text-sm text-gray-500">{subtitle}</p>}
                <div className="mt-2">{children}</div>
                
                {actions && (
                    <div className="mt-4 flex justify-end space-x-2">
                        {actions}
                    </div>
                )}
            </div>
        </Card>
    );
};

// Stat Card
export const StatCard = ({
    value,
    label,
    icon,
    trend,
    trendValue,
    ...props
}) => {
    // Determine trend color
    let trendColor = '';
    if (trend === 'up') trendColor = 'text-green-500';
    if (trend === 'down') trendColor = 'text-red-500';
    
    return (
        <Card {...props}>
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-sm font-medium text-gray-500">{label}</p>
                    <p className="mt-1 text-2xl font-semibold">{value}</p>
                    
                    {(trend && trendValue) && (
                        <div className={`flex items-center mt-2 ${trendColor}`}>
                            {trend === 'up' ? '↑' : '↓'} {trendValue}
                        </div>
                    )}
                </div>
                {icon && (
                    <div className="bg-blue-50 p-3 rounded-full">
                        {icon}
                    </div>
                )}
            </div>
        </Card>
    );
};

// Pricing Card
export const PricingCard = ({
    plan,
    price,
    period,
    description,
    features,
    buttonText = 'Get Started',
    buttonAction,
    highlighted = false,
    ...props
}) => {
    return (
        <Card 
            className={`${highlighted ? 'border-2 border-blue-500 ring-2 ring-blue-200' : ''}`}
            elevation={highlighted ? 'lg' : 'md'}
            {...props}
        >
            <div className="text-center mb-6">
                <h3 className="text-lg font-semibold text-gray-900">{plan}</h3>
                <div className="mt-4">
                    <span className="text-3xl font-bold">{price}</span>
                    {period && <span className="text-gray-500 ml-2">/{period}</span>}
                </div>
                {description && (
                    <p className="mt-2 text-sm text-gray-500">{description}</p>
                )}
            </div>
            
            {features && (
                <ul className="space-y-3 mb-6">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-600">{feature}</span>
                        </li>
                    ))}
                </ul>
            )}
            
            <button
                onClick={buttonAction}
                className={`w-full py-2 px-4 rounded-md font-medium ${
                    highlighted 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                }`}
            >
                {buttonText}
            </button>
        </Card>
    );
};

export default Card;