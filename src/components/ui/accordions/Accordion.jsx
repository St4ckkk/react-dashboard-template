import React, { useState } from 'react';
import AccordionItem from './AccordionItem';
import HeaderText from '@components/HeaderText';

const Accordion = ({
    items,
    defaultOpen = 0,
    allowMultiple = false,
    variant = 'default',
    title = '',
    titleHeader = ''
}) => {
    const [openItems, setOpenItems] = useState(
        defaultOpen !== null ?
            (Array.isArray(defaultOpen) ? defaultOpen : [defaultOpen])
            : []
    );

    const toggleItem = (index) => {
        if (allowMultiple) {
            setOpenItems(prev =>
                prev.includes(index)
                    ? prev.filter(i => i !== index)
                    : [...prev, index]
            );
        } else {
            setOpenItems(prev =>
                prev.includes(index) ? [] : [index]
            );
        }
    };

    const isItemOpen = (index) => openItems.includes(index);

    // Add classes based on variant
    const accordionClasses = variant === 'default'
        ? "border border-gray-200 rounded-lg overflow-hidden"
        : "overflow-hidden";

    return (
        <div>
            {(title || titleHeader) && (
                <HeaderText
                    title={title}
                    TitleHeader={titleHeader}
                />
            )}
            <div className={accordionClasses}>
                {items.map((item, index) => (
                    <AccordionItem
                        key={index}
                        title={item.title}
                        isOpen={isItemOpen(index)}
                        toggleItem={() => toggleItem(index)}
                        isLast={index === items.length - 1}
                        variant={variant}
                    >
                        {item.content}
                    </AccordionItem>
                ))}
            </div>
        </div>
    );
};

export default Accordion;