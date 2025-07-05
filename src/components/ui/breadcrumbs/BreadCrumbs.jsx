import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaChevronRight } from 'react-icons/fa';

const BreadcrumbBase = ({
    items = [],
    divider = <FaChevronRight size={10} />,
    align = "left",
    className = "",
    withPageTitle = false,
    pageTitle = "",
    withHomeIcon = false,
    ...props
}) => {
    const alignClasses = {
        left: "justify-start",
        center: "justify-center",
        right: "justify-end",
    };

    const alignClass = alignClasses[align] || alignClasses.left;

    return (
        <div className={`w-full ${className}`} {...props}>
            {withPageTitle && pageTitle && (
                <h1 className="text-2xl font-semibold text-gray-800 mb-2">{pageTitle}</h1>
            )}
            <nav className={`flex ${alignClass} text-gray-500 text-sm`} aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1">
                    {items.map((item, index) => (
                        <li key={index} className="inline-flex items-center">
                            {index > 0 && (
                                <span className="mx-2 text-gray-400">{divider}</span>
                            )}
                            {item.href ? (
                                <Link
                                    href={item.href}
                                    className="text-blue-600 hover:text-blue-800 inline-flex items-center"
                                >
                                    {withHomeIcon && index === 0 ? (
                                        <FaHome className="mr-1.5 text-blue-600" />
                                    ) : null}
                                    {item.name}
                                </Link>
                            ) : (
                                <span className="text-gray-500 inline-flex items-center">
                                    {withHomeIcon && index === 0 ? (
                                        <FaHome className="mr-1.5 text-gray-500" />
                                    ) : null}
                                    {item.name}
                                </span>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
        </div>
    );
};

const DefaultBreadcrumbs = ({ items = [], className = "", ...props }) => {
    return (
        <BreadcrumbBase
            items={items}
            divider={<FaChevronRight size={10} />}
            align="left"
            className={className}
            {...props}
        />
    );
};

const BreadcrumbsWithPageTitle = ({
    items = [],
    pageTitle = "Page Title",
    className = "",
    ...props
}) => {
    return (
        <BreadcrumbBase
            items={items}
            divider={<FaChevronRight size={10} />}
            align="left"
            withPageTitle={true}
            pageTitle={pageTitle}
            className={className}
            {...props}
        />
    );
};

const CenteredBreadcrumbs = ({ items = [], className = "", ...props }) => {
    return (
        <BreadcrumbBase
            items={items}
            divider={<FaChevronRight size={10} />}
            align="center"
            className={className}
            {...props}
        />
    );
};

const RightBreadcrumbs = ({ items = [], className = "", ...props }) => {
    return (
        <BreadcrumbBase
            items={items}
            divider={<FaChevronRight size={10} />}
            align="right"
            className={className}
            {...props}
        />
    );
};

const CustomDividerBreadcrumbs = ({
    items = [],
    divider = <FaChevronRight size={10} />,
    className = "",
    ...props
}) => {
    return (
        <BreadcrumbBase
            items={items}
            divider={divider}
            align="left"
            className={className}
            {...props}
        />
    );
};

const IconBreadcrumbs = ({
    items = [],
    className = "",
    ...props
}) => {
    return (
        <BreadcrumbBase
            items={items}
            divider={<FaChevronRight size={10} />}
            align="left"
            withHomeIcon={true}
            className={className}
            {...props}
        />
    );
};

export {
    DefaultBreadcrumbs,
    BreadcrumbsWithPageTitle,
    CenteredBreadcrumbs,
    RightBreadcrumbs,
    CustomDividerBreadcrumbs,
    IconBreadcrumbs
};

export default DefaultBreadcrumbs;