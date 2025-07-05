import React, { useState } from 'react';
import { FaCheck, FaChevronRight, FaCircle, FaCheckCircle, FaTimes } from 'react-icons/fa';

// Base ListGroup Component
const ListGroup = ({
    children,
    variant = 'default',
    flush = false,
    numbered = false,
    horizontal = false,
    className = '',
    ...props
}) => {
    const baseClasses = 'flex flex-col';
    const variantClasses = flush
        ? ''
        : 'border border-gray-200 rounded-lg overflow-hidden';

    const horizontalClasses = horizontal
        ? 'flex-row border-0'
        : '';

    const classes = `
        ${baseClasses}
        ${variantClasses}
        ${horizontalClasses}
        ${className}
    `.trim().replace(/\s+/g, ' ');

    const content = numbered ? (
        <ol className="list-none m-0 p-0 counter-reset-list">
            {React.Children.map(children, (child, index) =>
                React.cloneElement(child, {
                    ...child.props,
                    numbered: true,
                    index: index + 1
                })
            )}
        </ol>
    ) : children;

    return (
        <div className={classes} {...props}>
            {content}
        </div>
    );
};

// List Group Item Component
export const ListGroupItem = ({
    children,
    active = false,
    disabled = false,
    variant = 'default',
    action = false,
    href,
    onClick,
    className = '',
    badge,
    icon,
    numbered = false,
    index,
    flush = false,
    horizontal = false,
    ...props
}) => {
    // Remove bg-white from baseClasses to allow variant backgrounds to show
    const baseClasses = 'relative block px-4 py-3 transition-colors duration-150';

    // Border classes for regular list groups
    const borderClasses = flush
        ? 'border-b border-gray-200 last:border-b-0'
        : horizontal
            ? 'border-r border-gray-200 last:border-r-0 first:rounded-l-lg last:rounded-r-lg'
            : 'border-b border-gray-200 last:border-b-0 first:rounded-t-lg last:rounded-b-lg';

    const stateClasses = {
        active: active ? 'bg-blue-600 text-white border-blue-600 z-10' : '',
        disabled: disabled ? 'text-gray-400 pointer-events-none bg-gray-50' : '',
        action: (action || href || onClick) && !disabled && !active ? 'cursor-pointer hover:bg-gray-50 hover:text-gray-800 focus:outline-none focus:bg-gray-100' : ''
    };

    const variantClasses = {
        default: 'text-gray-900 bg-white border-gray-200',
        primary: 'text-blue-900 bg-blue-100 border-blue-300',
        secondary: 'text-gray-900 bg-gray-100 border-gray-300',
        success: 'text-green-900 bg-green-100 border-green-300',
        danger: 'text-red-900 bg-red-100 border-red-300',
        warning: 'text-yellow-900 bg-yellow-100 border-yellow-300',
        info: 'text-cyan-900 bg-cyan-100 border-cyan-300',
        light: 'text-gray-900 bg-gray-50 border-gray-200',
        dark: 'text-white bg-gray-800 border-gray-700'
    };

    // Build classes conditionally for proper order
    let classes = baseClasses;

    // Add border classes
    classes += ` ${!flush ? borderClasses : 'border-b border-gray-200 last:border-b-0'}`;

    // Apply styles based on state priority: active > disabled > variant > action
    if (active) {
        classes += ` ${stateClasses.active}`;
    } else if (disabled) {
        classes += ` ${stateClasses.disabled}`;
    } else {
        // Apply variant classes when not active or disabled
        classes += ` ${variantClasses[variant]}`;
        // Add action classes last for hover effects
        classes += ` ${stateClasses.action}`;
    }

    // Add custom className
    classes += ` ${className}`;

    // Clean up extra spaces
    classes = classes.trim().replace(/\s+/g, ' ');

    const Component = href ? 'a' : (action || onClick) ? 'button' : 'div';
    const componentProps = {
        className: classes,
        ...(href && { href }),
        ...(onClick && { onClick }),
        ...(disabled && { disabled }),
        ...props
    };

    return (
        <Component {...componentProps}>
            <div className="flex w-full justify-between items-center">
                <div className="flex items-center flex-1">
                    {numbered && (
                        <span className={`mr-3 font-semibold ${active ? 'text-white' : 'text-gray-600'}`}>
                            {index}.
                        </span>
                    )}
                    {icon && <span className="mr-3 flex-shrink-0">{icon}</span>}
                    <div className="flex-1">{children}</div>
                </div>
                <div className="flex items-center ml-auto">
                    {badge && <span className="ml-3">{badge}</span>}
                    {(action || onClick) && !badge && !numbered && (
                        <FaChevronRight className={`ml-2 ${active ? 'text-white' : 'text-gray-400'}`} size={12} />
                    )}
                </div>
            </div>
        </Component>
    );
};

// Simple List Group
export const SimpleListGroup = ({ items = [], ...props }) => {
    return (
        <ListGroup {...props}>
            {items.map((item, index) => (
                <ListGroupItem key={index} {...item}>
                    {item.text || item.children}
                </ListGroupItem>
            ))}
        </ListGroup>
    );
};

// Active Items List Group
export const ActiveListGroup = ({ items = [], activeIndex = 0, onItemClick, ...props }) => {
    const [currentActive, setCurrentActive] = useState(activeIndex);

    const handleClick = (index, item) => {
        setCurrentActive(index);
        if (onItemClick) onItemClick(index, item);
    };

    return (
        <ListGroup {...props}>
            {items.map((item, index) => (
                <ListGroupItem
                    key={index}
                    active={currentActive === index}
                    action
                    onClick={() => handleClick(index, item)}
                    {...item}
                >
                    {item.text || item.children}
                </ListGroupItem>
            ))}
        </ListGroup>
    );
};

// Links List Group
export const LinksListGroup = ({ items = [], ...props }) => {
    return (
        <ListGroup {...props}>
            {items.map((item, index) => (
                <ListGroupItem
                    key={index}
                    href={item.href}
                    action
                    {...item}
                >
                    {item.text || item.children}
                </ListGroupItem>
            ))}
        </ListGroup>
    );
};

// Buttons List Group
export const ButtonsListGroup = ({ items = [], onItemClick, ...props }) => {
    return (
        <ListGroup {...props}>
            {items.map((item, index) => (
                <ListGroupItem
                    key={index}
                    action
                    onClick={() => onItemClick && onItemClick(index, item)}
                    {...item}
                >
                    {item.text || item.children}
                </ListGroupItem>
            ))}
        </ListGroup>
    );
};

// Flush List Group
export const FlushListGroup = ({ items = [], ...props }) => {
    return (
        <ListGroup flush {...props}>
            {items.map((item, index) => (
                <ListGroupItem key={index} flush {...item}>
                    {item.text || item.children}
                </ListGroupItem>
            ))}
        </ListGroup>
    );
};

// Numbered List Group
export const NumberedListGroup = ({ items = [], ...props }) => {
    return (
        <ListGroup numbered {...props}>
            {items.map((item, index) => (
                <ListGroupItem key={index} {...item}>
                    {item.text || item.children}
                </ListGroupItem>
            ))}
        </ListGroup>
    );
};

// Horizontal List Group
export const HorizontalListGroup = ({ items = [], breakpoint, ...props }) => {
    return (
        <ListGroup horizontal={breakpoint || true} {...props}>
            {items.map((item, index) => (
                <ListGroupItem key={index} horizontal {...item}>
                    {item.text || item.children}
                </ListGroupItem>
            ))}
        </ListGroup>
    );
};

// Contextual Classes List Group
export const ContextualListGroup = ({ items = [], ...props }) => {
    return (
        <ListGroup {...props}>
            {items.map((item, index) => (
                <ListGroupItem
                    key={index}
                    variant={item.variant || 'default'}
                    {...item}
                >
                    {item.text || item.children}
                </ListGroupItem>
            ))}
        </ListGroup>
    );
};

// With Badges List Group
export const BadgesListGroup = ({ items = [], ...props }) => {
    return (
        <ListGroup {...props}>
            {items.map((item, index) => (
                <ListGroupItem
                    key={index}
                    badge={item.badge}
                    {...item}
                >
                    {item.text || item.children}
                </ListGroupItem>
            ))}
        </ListGroup>
    );
};

// With Icons List Group
export const IconsListGroup = ({ items = [], ...props }) => {
    return (
        <ListGroup {...props}>
            {items.map((item, index) => (
                <ListGroupItem
                    key={index}
                    icon={item.icon}
                    {...item}
                >
                    {item.text || item.children}
                </ListGroupItem>
            ))}
        </ListGroup>
    );
};

// Custom Content List Group
export const CustomContentListGroup = ({ items = [], ...props }) => {
    return (
        <ListGroup {...props}>
            {items.map((item, index) => (
                <ListGroupItem key={index} {...item}>
                    <div className="flex w-full justify-between items-start">
                        <div className="flex-1">
                            <h5 className="text-lg font-semibold mb-1 text-gray-900">{item.title}</h5>
                            {item.description && <p className="text-gray-600 mb-1">{item.description}</p>}
                            {item.meta && <small className="text-gray-500 text-sm">{item.meta}</small>}
                        </div>
                        {item.badge && (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 ml-3">
                                {item.badge}
                            </span>
                        )}
                    </div>
                </ListGroupItem>
            ))}
        </ListGroup>
    );
};

// Checkboxes and Radios List Group
export const CheckboxListGroup = ({ items = [], multiple = true, onChange, ...props }) => {
    const [selected, setSelected] = useState(multiple ? [] : null);

    const handleChange = (index, item) => {
        let newSelected;
        if (multiple) {
            newSelected = selected.includes(index)
                ? selected.filter(i => i !== index)
                : [...selected, index];
        } else {
            newSelected = index;
        }
        setSelected(newSelected);
        if (onChange) onChange(newSelected, item);
    };

    return (
        <ListGroup {...props}>
            {items.map((item, index) => {
                const isSelected = multiple ? selected.includes(index) : selected === index;
                return (
                    <ListGroupItem
                        key={index}
                        action
                        onClick={() => handleChange(index, item)}
                        className={isSelected ? 'bg-blue-50 border-blue-200' : ''}
                        icon={
                            multiple ? (
                                isSelected ? <FaCheckCircle className="text-green-500" /> : <FaCircle className="text-gray-400" />
                            ) : (
                                isSelected ? <FaCheck className="text-green-500" /> : <FaCircle className="text-gray-400" />
                            )
                        }
                        {...item}
                    >
                        {item.text || item.children}
                    </ListGroupItem>
                );
            })}
        </ListGroup>
    );
};

export default ListGroup;