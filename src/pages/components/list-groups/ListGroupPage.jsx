import React from 'react';
import DashboardLayout from '@components/DashboardLayout';
import Container from '@components/ui/container/Container';
import CodePreviewToggle from '@components/CodePreviewToggle';
import HeaderText from '@components/HeaderText';
import {
    FaHome,
    FaUser,
    FaCog,
    FaInbox,
    FaBell,
    FaHeart,
    FaCheckCircle,
    FaTimesCircle,
    FaExclamationTriangle,
    FaInfoCircle,
    FaDesktop,
    FaMobile,
    FaList,
    FaTable,
    FaShoppingCart,
    FaUsers,
    FaFileAlt,
    FaChartBar,
    FaSearch,
    FaFilter,
    FaSort,
    FaPlus,
    FaEye,
    FaAccessibleIcon,
    FaKeyboard,
    FaPalette,
    FaCode
} from 'react-icons/fa';

import ListGroup, {
    SimpleListGroup,
    ActiveListGroup,
    LinksListGroup,
    ButtonsListGroup,
    FlushListGroup,
    NumberedListGroup,
    HorizontalListGroup,
    ContextualListGroup,
    BadgesListGroup,
    IconsListGroup,
    CustomContentListGroup,
    CheckboxListGroup,
    ListGroupItem
} from '@components/ui/list-groups/ListGroups';

const ListGroupPage = () => {
    // Sample data
    const basicItems = [
        { text: 'An item' },
        { text: 'A second item' },
        { text: 'A third item' },
        { text: 'A fourth item' },
        { text: 'And a fifth one' }
    ];

    const activeItems = [
        { text: 'An active item' },
        { text: 'A second item' },
        { text: 'A third item' },
        { text: 'A fourth item' },
        { text: 'And a fifth one' }
    ];

    const linkItems = [
        { text: 'The current link item', href: '#', active: true },
        { text: 'A second link item', href: '#' },
        { text: 'A third link item', href: '#' },
        { text: 'A fourth link item', href: '#' },
        { text: 'A disabled link item', href: '#', disabled: true }
    ];

    const buttonItems = [
        { text: 'The current button' },
        { text: 'A second item' },
        { text: 'A third button item' },
        { text: 'A fourth button item' },
        { text: 'A disabled button item', disabled: true }
    ];

    const contextualItems = [
        { text: 'A simple default list group item', variant: 'default' },
        { text: 'A simple primary list group item', variant: 'primary' },
        { text: 'A simple secondary list group item', variant: 'secondary' },
        { text: 'A simple success list group item', variant: 'success' },
        { text: 'A simple danger list group item', variant: 'danger' },
        { text: 'A simple warning list group item', variant: 'warning' },
        { text: 'A simple info list group item', variant: 'info' },
        { text: 'A simple light list group item', variant: 'light' },
        { text: 'A simple dark list group item', variant: 'dark' }
    ];

    const badgeItems = [
        {
            text: 'A list item',
            badge: <span className="inline-flex items-center justify-center w-6 h-6 text-xs font-medium text-white bg-blue-600 rounded-full">14</span>
        },
        {
            text: 'A second list item',
            badge: <span className="inline-flex items-center justify-center w-6 h-6 text-xs font-medium text-white bg-blue-600 rounded-full">2</span>
        },
        {
            text: 'A third list item',
            badge: <span className="inline-flex items-center justify-center w-6 h-6 text-xs font-medium text-white bg-blue-600 rounded-full">1</span>
        }
    ];

    const iconItems = [
        { text: 'Home', icon: <FaHome className="text-blue-500" /> },
        { text: 'Profile', icon: <FaUser className="text-green-500" /> },
        { text: 'Settings', icon: <FaCog className="text-gray-500" /> },
        { text: 'Messages', icon: <FaInbox className="text-yellow-500" /> },
        { text: 'Notifications', icon: <FaBell className="text-red-500" /> }
    ];

    const customContentItems = [
        {
            title: 'List group item heading',
            description: 'Some placeholder content in a paragraph.',
            meta: '3 days ago',
            badge: '12'
        },
        {
            title: 'List group item heading',
            description: 'Some placeholder content in a paragraph.',
            meta: '3 days ago',
            badge: '5'
        },
        {
            title: 'List group item heading',
            description: 'Some placeholder content in a paragraph.',
            meta: '3 days ago',
            badge: '2'
        }
    ];

    const checkboxItems = [
        { text: 'First checkbox' },
        { text: 'Second checkbox' },
        { text: 'Third checkbox' },
        { text: 'Fourth checkbox' },
        { text: 'Fifth checkbox' }
    ];

    // Code examples
    const basicListCode = `import { SimpleListGroup } from '@components/ui/list-groups/ListGroups';

<SimpleListGroup 
  items={[
    { text: 'An item' },
    { text: 'A second item' },
    { text: 'A third item' }
  ]} 
/>`;

    const activeListCode = `import { ActiveListGroup } from '@components/ui/list-groups/ListGroups';

<ActiveListGroup 
  items={[
    { text: 'An active item' },
    { text: 'A second item' }
  ]}
  activeIndex={0}
  onItemClick={(index, item) => console.log(index, item)}
/>`;

    const linksListCode = `import { LinksListGroup } from '@components/ui/list-groups/ListGroups';

<LinksListGroup 
  items={[
    { text: 'Current link', href: '#', active: true },
    { text: 'Second link', href: '#' },
    { text: 'Disabled link', href: '#', disabled: true }
  ]} 
/>`;

    const contextualListCode = `import { ContextualListGroup } from '@components/ui/list-groups/ListGroups';

<ContextualListGroup 
  items={[
    { text: 'Primary item', variant: 'primary' },
    { text: 'Success item', variant: 'success' },
    { text: 'Danger item', variant: 'danger' }
  ]} 
/>`;

    const badgeListCode = `import { BadgesListGroup } from '@components/ui/list-groups/ListGroups';

<BadgesListGroup 
  items={[
    { 
      text: 'Messages', 
      badge: <span className="badge bg-primary rounded-pill">14</span> 
    }
  ]} 
/>`;

    const customContentCode = `import { CustomContentListGroup } from '@components/ui/list-groups/ListGroups';

<CustomContentListGroup 
  items={[
    {
      title: 'List group item heading',
      description: 'Some placeholder content.',
      meta: '3 days ago',
      badge: '12'
    }
  ]} 
/>`;

    const checkboxListCode = `import { CheckboxListGroup } from '@components/ui/list-groups/ListGroups';

// Multiple selection
<CheckboxListGroup
  items={items}
  multiple={true}
  onChange={(selected, item) => console.log(selected)}
/>

// Single selection (radio behavior)
<CheckboxListGroup
  items={items}
  multiple={false}
  onChange={(selected, item) => console.log(selected)}
/>`;

    return (
        <DashboardLayout
            title="List Groups"
            breadcrumb={[
                { name: "Home", href: "/" },
                { name: "Components" },
                { name: "List Groups", href: "/components/list-groups" }
            ]}
        >
            <div className="space-y-8 mt-6">
                {/* Basic List Group */}
                <Container>
                    <HeaderText
                        TitleHeader="Default"
                        title="List Group"
                    />
                    <p className="text-gray-600 mt-2 mb-6">The most basic list group is an unordered list with list items and the proper classes.</p>

                    <CodePreviewToggle
                        previewContent={
                            <SimpleListGroup items={basicItems} />
                        }
                        codeContent={basicListCode}
                        defaultView="preview"
                    />
                </Container>

                {/* Active Items */}
                <Container>
                    <HeaderText
                        TitleHeader="Active Items"
                        title="Interactive Selection States"
                    />
                    <p className="text-gray-600 mt-2 mb-6">Add active states to indicate current selection and handle click interactions.</p>

                    <CodePreviewToggle
                        previewContent={
                            <ActiveListGroup
                                items={activeItems}
                                activeIndex={0}
                                onItemClick={(index, item) => console.log('Clicked:', index, item)}
                            />
                        }
                        codeContent={activeListCode}
                        defaultView="preview"
                    />
                </Container>

                {/* Links and Buttons */}
                <Container>
                    <HeaderText
                        TitleHeader="Actionable Items"
                        title="Links and Buttons"
                    />
                    <p className="text-gray-600 mt-2 mb-6">Create actionable list items with hover states, disabled states, and navigation behavior.</p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Links</h4>
                            <CodePreviewToggle
                                previewContent={
                                    <LinksListGroup items={linkItems} />
                                }
                                codeContent={linksListCode}
                                defaultView="preview"
                            />
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold mb-4">Buttons</h4>
                            <CodePreviewToggle
                                previewContent={
                                    <ButtonsListGroup
                                        items={buttonItems}
                                        onItemClick={(index, item) => alert(`Clicked: ${item.text}`)}
                                    />
                                }
                                codeContent={linksListCode}
                                defaultView="preview"
                            />
                        </div>
                    </div>
                </Container>

                {/* Layout Variations */}
                <Container>
                    <HeaderText
                        TitleHeader="Layout Variations"
                        title="Flush, Numbered, and Horizontal"
                    />
                    <p className="text-gray-600 mt-2 mb-6">Different layout styles for various design contexts and space constraints.</p>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Flush</h4>
                            <p className="text-sm text-gray-600 mb-4">Edge-to-edge design for card containers</p>
                            <FlushListGroup items={basicItems.slice(0, 3)} />
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold mb-4">Numbered</h4>
                            <p className="text-sm text-gray-600 mb-4">Ordered lists with automatic numbering</p>
                            <NumberedListGroup items={basicItems.slice(0, 3)} />
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold mb-4">Horizontal</h4>
                            <p className="text-sm text-gray-600 mb-4">Side-by-side layout for navigation</p>
                            <HorizontalListGroup items={[
                                { text: 'Home' },
                                { text: 'About' },
                                { text: 'Contact' }
                            ]} />
                        </div>
                    </div>
                </Container>

                {/* Enhanced Features */}
                <Container>
                    <HeaderText
                        TitleHeader="Enhanced Features"
                        title="Contextual Colors, Badges, and Icons"
                    />
                    <p className="text-gray-600 mt-2 mb-6">Add visual context and additional information with colors, badges, and icons.</p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Contextual Colors */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Contextual Colors</h4>
                            <CodePreviewToggle
                                previewContent={
                                    <ContextualListGroup items={contextualItems.slice(0, 5)} />
                                }
                                codeContent={contextualListCode}
                                defaultView="preview"
                            />
                        </div>

                        {/* With Badges */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">With Badges</h4>
                            <CodePreviewToggle
                                previewContent={
                                    <BadgesListGroup items={badgeItems} />
                                }
                                codeContent={badgeListCode}
                                defaultView="preview"
                            />
                        </div>

                        {/* With Icons */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">With Icons</h4>
                            <IconsListGroup items={iconItems} />
                        </div>

                        {/* Custom Content */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Custom Content</h4>
                            <CodePreviewToggle
                                previewContent={
                                    <CustomContentListGroup items={customContentItems} />
                                }
                                codeContent={customContentCode}
                                defaultView="preview"
                            />
                        </div>
                    </div>
                </Container>

                {/* Selection Controls */}
                <Container>
                    <HeaderText
                        TitleHeader="Selection Controls"
                        title="Checkboxes and Radio Buttons"
                    />
                    <p className="text-gray-600 mt-2 mb-6">Enable multiple or single selection with integrated form controls.</p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Multiple Selection</h4>
                            <CodePreviewToggle
                                previewContent={
                                    <CheckboxListGroup
                                        items={checkboxItems}
                                        multiple={true}
                                        onChange={(selected, item) => console.log('Multiple selection:', selected)}
                                    />
                                }
                                codeContent={checkboxListCode}
                                defaultView="preview"
                            />
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold mb-4">Single Selection</h4>
                            <CheckboxListGroup
                                items={checkboxItems}
                                multiple={false}
                                onChange={(selected, item) => console.log('Single selection:', selected)}
                            />
                        </div>
                    </div>
                </Container>

                {/* Advanced Example */}
                <Container>
                    <HeaderText
                        TitleHeader="Advanced Example"
                        title="Combined Features"
                    />
                    <p className="text-gray-600 mt-2 mb-6">Showcase multiple features working together in a real-world scenario.</p>

                    <ListGroup>
                        <ListGroupItem
                            active
                            icon={<FaHome className="text-white" />}
                            badge={<span className="inline-flex items-center justify-center w-6 h-6 text-xs font-medium text-blue-800 bg-white rounded-full">12</span>}
                        >
                            Dashboard Overview
                        </ListGroupItem>
                        <ListGroupItem
                            action
                            icon={<FaUser className="text-blue-500" />}
                            onClick={() => alert('Profile clicked')}
                        >
                            User Profile
                        </ListGroupItem>
                        <ListGroupItem
                            variant="warning"
                            icon={<FaBell className="text-orange-600" />}
                            badge={<span className="inline-flex items-center justify-center w-6 h-6 text-xs font-medium text-white bg-red-600 rounded-full">3</span>}
                        >
                            Notifications
                        </ListGroupItem>
                        <ListGroupItem
                            disabled
                            icon={<FaCog className="text-gray-400" />}
                        >
                            Settings (Disabled)
                        </ListGroupItem>
                    </ListGroup>
                </Container>

                {/* Usage Guidelines */}
                <Container>
                    <HeaderText
                        TitleHeader="Usage Guidelines"
                        title="When and How to Use List Groups"
                    />

                    <div className="mt-6 space-y-8">
                        {/* When to Use */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">When to Use List Groups</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                    <div className="flex items-start space-x-3">
                                        <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-green-900 mb-1">Navigation Menus</h4>
                                            <p className="text-sm text-green-700">Primary navigation, sidebar menus, tab-like interfaces, or breadcrumb alternatives.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                    <div className="flex items-start space-x-3">
                                        <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-green-900 mb-1">Content Lists</h4>
                                            <p className="text-sm text-green-700">Articles, blog posts, search results, product listings, or any structured content.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                    <div className="flex items-start space-x-3">
                                        <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-green-900 mb-1">Settings & Options</h4>
                                            <p className="text-sm text-green-700">Configuration panels, preference lists, feature toggles, or account settings.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                    <div className="flex items-start space-x-3">
                                        <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-green-900 mb-1">Selection Interfaces</h4>
                                            <p className="text-sm text-green-700">Multiple choice forms, filter options, checklist items, or choice confirmations.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* When Not to Use */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">When NOT to Use List Groups</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                    <div className="flex items-start space-x-3">
                                        <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-red-900 mb-1">Complex Data Tables</h4>
                                            <p className="text-sm text-red-700">Use proper data tables for structured data with multiple columns, sorting, and filtering.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                    <div className="flex items-start space-x-3">
                                        <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-red-900 mb-1">Single Items</h4>
                                            <p className="text-sm text-red-700">Don't use list groups for single items - consider cards, panels, or simple text instead.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                    <div className="flex items-start space-x-3">
                                        <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-red-900 mb-1">Rich Media Content</h4>
                                            <p className="text-sm text-red-700">For image galleries, video lists, or media-heavy content, consider card layouts instead.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                    <div className="flex items-start space-x-3">
                                        <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-red-900 mb-1">Form Inputs</h4>
                                            <p className="text-sm text-red-700">Don't replace proper form controls - use list groups to enhance, not replace form elements.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* List Group Type Selection */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Choosing the Right List Group Type</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                                    <div className="flex items-start space-x-3">
                                        <FaList className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-blue-900 mb-1">Simple Lists</h4>
                                            <p className="text-sm text-blue-700">Static content, read-only information, simple categorized lists.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                    <div className="flex items-start space-x-3">
                                        <FaDesktop className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-green-900 mb-1">Interactive Lists</h4>
                                            <p className="text-sm text-green-700">Navigation menus, clickable items, selection interfaces, action triggers.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                                    <div className="flex items-start space-x-3">
                                        <FaEye className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-purple-900 mb-1">Enhanced Lists</h4>
                                            <p className="text-sm text-purple-700">Lists with badges, icons, contextual colors, or rich content.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                                    <div className="flex items-start space-x-3">
                                        <FaMobile className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-orange-900 mb-1">Horizontal Lists</h4>
                                            <p className="text-sm text-orange-700">Navigation bars, tag lists, filter chips, mobile-friendly layouts.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                    <div className="flex items-start space-x-3">
                                        <FaCheckCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-red-900 mb-1">Selection Lists</h4>
                                            <p className="text-sm text-red-700">Multi-select interfaces, checkbox lists, option selection, form enhancements.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                    <div className="flex items-start space-x-3">
                                        <FaCode className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-indigo-900 mb-1">Custom Lists</h4>
                                            <p className="text-sm text-indigo-700">Complex layouts, mixed content types, specialized use cases.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Layout Guidelines */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Layout and Design Guidelines</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                                    <div className="flex items-start space-x-3">
                                        <FaPalette className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-blue-900 mb-1">Visual Hierarchy</h4>
                                            <p className="text-sm text-blue-700">Use contextual colors sparingly, ensure proper contrast, maintain consistent spacing.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                    <div className="flex items-start space-x-3">
                                        <FaSort className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-green-900 mb-1">Content Organization</h4>
                                            <p className="text-sm text-green-700">Group related items, use logical ordering, provide clear item boundaries.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                                    <div className="flex items-start space-x-3">
                                        <FaMobile className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-orange-900 mb-1">Responsive Design</h4>
                                            <p className="text-sm text-orange-700">Consider mobile layouts, touch targets, horizontal scrolling for mobile navigation.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                                    <div className="flex items-start space-x-3">
                                        <FaPlus className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-purple-900 mb-1">Progressive Enhancement</h4>
                                            <p className="text-sm text-purple-700">Start simple, add features progressively, ensure base functionality without JS.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Best Practices */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Best Practices</h3>
                            <div className="space-y-4">
                                <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                                    <div className="flex items-start space-x-3">
                                        <FaExclamationTriangle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-yellow-900 mb-2">Content & Structure</h4>
                                            <ul className="text-sm text-yellow-700 space-y-1">
                                                <li>• Keep item text concise and scannable</li>
                                                <li>• Use consistent formatting for similar content types</li>
                                                <li>• Provide clear visual feedback for interactive states</li>
                                                <li>• Group related items together with appropriate headings</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                                    <div className="flex items-start space-x-3">
                                        <FaInfoCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-blue-900 mb-2">Interaction & Behavior</h4>
                                            <ul className="text-sm text-blue-700 space-y-1">
                                                <li>• Provide immediate feedback for user actions</li>
                                                <li>• Implement proper loading and error states</li>
                                                <li>• Use appropriate cursor styles for different item types</li>
                                                <li>• Consider keyboard navigation and focus management</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                    <div className="flex items-start space-x-3">
                                        <FaAccessibleIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-green-900 mb-2">Accessibility & Usability</h4>
                                            <ul className="text-sm text-green-700 space-y-1">
                                                <li>• Use semantic HTML elements (ul, ol, li) for screen readers</li>
                                                <li>• Provide ARIA labels for complex interactive lists</li>
                                                <li>• Ensure sufficient color contrast and don't rely on color alone</li>
                                                <li>• Make touch targets at least 44px for mobile interfaces</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Common Use Cases */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Common Use Cases by Context</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                    <FaDesktop className="w-6 h-6 text-gray-600 mb-2" />
                                    <h4 className="font-semibold text-gray-900 mb-1">Dashboard Sidebar</h4>
                                    <p className="text-sm text-gray-600">Navigation menus, quick actions, status indicators</p>
                                </div>

                                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                    <FaShoppingCart className="w-6 h-6 text-gray-600 mb-2" />
                                    <h4 className="font-semibold text-gray-900 mb-1">E-commerce</h4>
                                    <p className="text-sm text-gray-600">Product listings, category filters, shopping cart items</p>
                                </div>

                                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                    <FaUsers className="w-6 h-6 text-gray-600 mb-2" />
                                    <h4 className="font-semibold text-gray-900 mb-1">User Management</h4>
                                    <p className="text-sm text-gray-600">User lists, role assignments, permission settings</p>
                                </div>

                                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                    <FaFileAlt className="w-6 h-6 text-gray-600 mb-2" />
                                    <h4 className="font-semibold text-gray-900 mb-1">Content Management</h4>
                                    <p className="text-sm text-gray-600">Article lists, document organization, file browsers</p>
                                </div>
                            </div>
                        </div>

                        {/* Alternative Patterns */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Alternative UI Patterns</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                    <div className="flex items-start space-x-3">
                                        <FaTable className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-indigo-900 mb-1">Data Tables</h4>
                                            <p className="text-sm text-indigo-700">Better for structured data with multiple columns, sorting, and filtering capabilities.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                    <div className="flex items-start space-x-3">
                                        <FaChartBar className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-indigo-900 mb-1">Card Layouts</h4>
                                            <p className="text-sm text-indigo-700">Perfect for rich media content, product showcases, or content previews.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                    <div className="flex items-start space-x-3">
                                        <FaSearch className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-indigo-900 mb-1">Dropdown Menus</h4>
                                            <p className="text-sm text-indigo-700">Space-saving alternative for navigation or selection with many options.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                    <div className="flex items-start space-x-3">
                                        <FaKeyboard className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-indigo-900 mb-1">Form Controls</h4>
                                            <p className="text-sm text-indigo-700">Native select, radio buttons, or checkboxes for form-based selection interfaces.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>

                {/* Quick Reference */}
                <Container>
                    <HeaderText
                        TitleHeader="Quick Reference Guide"
                        title="At a Glance Recommendations"
                    />

                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                            <h4 className="font-semibold text-blue-900 mb-2">Navigation Menus</h4>
                            <p className="text-sm text-blue-700">Use <strong>Links</strong> or <strong>Active Lists</strong> with icons for clear navigation hierarchy.</p>
                        </div>

                        <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                            <h4 className="font-semibold text-green-900 mb-2">Content Lists</h4>
                            <p className="text-sm text-green-700">Use <strong>Custom Content</strong> with badges and meta information for rich content display.</p>
                        </div>

                        <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                            <h4 className="font-semibold text-purple-900 mb-2">Settings & Preferences</h4>
                            <p className="text-sm text-purple-700">Use <strong>Checkbox Lists</strong> for multi-select options or <strong>Simple Lists</strong> for categories.</p>
                        </div>

                        <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                            <h4 className="font-semibold text-orange-900 mb-2">Status & Notifications</h4>
                            <p className="text-sm text-orange-700">Use <strong>Contextual Colors</strong> and <strong>Badges</strong> to show states and counts.</p>
                        </div>

                        <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                            <h4 className="font-semibold text-red-900 mb-2">Mobile Navigation</h4>
                            <p className="text-sm text-red-700">Use <strong>Horizontal Lists</strong> or <strong>Flush Lists</strong> for space-efficient mobile layouts.</p>
                        </div>

                        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                            <h4 className="font-semibold text-gray-900 mb-2">Form Enhancement</h4>
                            <p className="text-sm text-gray-700">Use <strong>Selection Lists</strong> to make form choices more visual and engaging.</p>
                        </div>
                    </div>
                </Container>
            </div>
        </DashboardLayout>
    );
};

export default ListGroupPage;