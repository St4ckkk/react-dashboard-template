
import Button from "@components/ui/buttons/Button";

const badgeVariants = {
    primary: {
        default: 'badge-primary',
        outline: 'badge-outline badge-outline-primary'
    },
    secondary: {
        default: 'badge-secondary',
        outline: 'badge-outline badge-outline-secondary'
    },
    success: {
        default: 'badge-success',
        outline: 'badge-outline badge-outline-success'
    },
    danger: {
        default: 'badge-danger',
        outline: 'badge-outline badge-outline-danger'
    },
    warning: {
        default: 'badge-warning',
        outline: 'badge-outline badge-outline-warning'
    },
    info: {
        default: 'badge-info',
        outline: 'badge-outline badge-outline-info'
    },
    light: {
        default: 'badge-light',
        outline: 'badge-outline badge-outline-light'
    },
    dark: {
        default: 'badge-dark',
        outline: 'badge-outline badge-outline-dark'
    }
};


const BadgeBase = ({
    variant = 'primary',
    bordered = false,
    pill = false,
    children,
    className = '',
    ...props
}) => {
    const variantClass = bordered
        ? badgeVariants[variant].outline
        : badgeVariants[variant].default;


    const shapeClass = pill ? 'badge-pill' : '';

    return (
        <span
            className={`badge ${variantClass} ${shapeClass} ${className}`}
            {...props}
        >
            {children}
        </span>
    );
};

/**
 * Default Badge component
 */
const DefaultBadge = ({
    variant = 'primary',
    children,
    className = '',
    ...props
}) => {
    return (
        <BadgeBase
            variant={variant}
            bordered={false}
            pill={false}
            className={className}
            {...props}
        >
            {children}
        </BadgeBase>
    );
};

/**
 * Border Badge component
 */
const BorderBadge = ({
    variant = 'primary',
    children,
    className = '',
    ...props
}) => {
    return (
        <BadgeBase
            variant={variant}
            bordered={true}
            pill={false}
            className={className}
            {...props}
        >
            {children}
        </BadgeBase>
    );
};

/**
 * Combined Badge component
 */
const Badge = ({
    variant = 'primary',
    bordered = false,
    pill = false,
    children,
    className = '',
    ...props
}) => {
    return (
        <BadgeBase
            variant={variant}
            bordered={bordered}
            pill={pill}
            className={className}
            {...props}
        >
            {children}
        </BadgeBase>
    );
};

/**
 * Pill Badge component
 */
const PillBadge = ({
    variant = 'primary',
    bordered = false,
    children,
    className = '',
    ...props
}) => {
    return (
        <BadgeBase
            variant={variant}
            bordered={bordered}
            pill={true}
            className={className}
            {...props}
        >
            {children}
        </BadgeBase>
    );
};


const ButtonBadge = ({
    variant = 'primary',
    children,
    count = "4",
    className = '',
    ...props
}) => {
    const variantClass = badgeVariants[variant].default;

    return (
        <span
            className={`badge-button ${variantClass} ${className}`}
            {...props}
        >
            <span className="badge-button-text">{children}</span>
            <span className="badge-button-counter">{count}</span>
        </span>
    );
};


/* Icon Badges Components */
const IconBadge = ({
    variant = 'primary',
    icon,
    children,
    className = '',
    ...props
}) => {
    return (
        <BadgeBase
            variant={variant}
            bordered={false}
            pill={false}
            className={`icon-badge  ${className}`}
            {...props}
        >
            {icon}
            <span>{children}</span>
        </BadgeBase>
    );
};


/* Status Badge */
const StatusBadge = ({
    variant = 'primary',
    status = 'online',
    children,
    className = '',
    ...props
}) => {
    const variantClass = badgeVariants[variant].default;

    const statusClasses = {
        online: 'bg-green-500',
        offline: 'bg-gray-400',
        busy: 'bg-red-500',
        away: 'bg-yellow-500'
    };

    const pulseClass = status === 'online' ? 'animate-pulse' : '';

    return (
        <span
            className={`inline-flex items-center gap-2  px-2 py-0.5 text-xs font-medium rounded-md ${variantClass} ${className}`}
            {...props}
        >
            <span className={`relative flex h-2 w-2`}>
                <span className={`absolute inline-flex h-full w-full rounded-full ${statusClasses[status]} opacity-75 ${pulseClass}`}></span>
                <span className={`relative inline-flex rounded-full h-2 w-2  ${statusClasses[status]}`}></span>
            </span>
            <span>{children}</span>
        </span>
    );
};





export { Badge, DefaultBadge, BorderBadge, PillBadge, ButtonBadge, IconBadge, StatusBadge };
