import React from 'react';
import DashboardLayout from '@components/DashboardLayout';
import Container from '@components/ui/container/Container';
import CodePreviewToggle from '@components/CodePreviewToggle';
import HeaderText from '@components/HeaderText';
import { FaHome, FaUser, FaCog, FaInbox, FaBell, FaHeart } from 'react-icons/fa';

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
    const basicListCode = `<SimpleListGroup 
  items={[
    { text: 'An item' },
    { text: 'A second item' },
    { text: 'A third item' }
  ]} 
/>`;

    const activeListCode = `<ActiveListGroup 
  items={[
    { text: 'An active item' },
    { text: 'A second item' }
  ]}
  activeIndex={0}
  onItemClick={(index, item) => console.log(index, item)}
/>`;

    const linksListCode = `<LinksListGroup 
  items={[
    { text: 'Current link', href: '#', active: true },
    { text: 'Second link', href: '#' },
    { text: 'Disabled link', href: '#', disabled: true }
  ]} 
/>`;

    const contextualListCode = `<ContextualListGroup 
  items={[
    { text: 'Primary item', variant: 'primary' },
    { text: 'Success item', variant: 'success' },
    { text: 'Danger item', variant: 'danger' }
  ]} 
/>`;

    const badgeListCode = `<BadgesListGroup 
  items={[
    { 
      text: 'Messages', 
      badge: <span className="badge bg-primary rounded-pill">14</span> 
    }
  ]} 
/>`;

    const customContentCode = `<CustomContentListGroup 
  items={[
    {
      title: 'List group item heading',
      description: 'Some placeholder content.',
      meta: '3 days ago',
      badge: '12'
    }
  ]} 
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {/* Basic List Group */}
                <Container>
                    <HeaderText
                        TitleHeader="Default"
                        title="List Group"
                    />
                    <p className="text-gray-600 mt-2">The most basic list group is an unordered list with list items and the proper classes.</p>

                    <div className="mt-6">
                        <CodePreviewToggle
                            previewContent={
                                <SimpleListGroup items={basicItems} />
                            }
                            codeContent={basicListCode}
                            defaultView="preview"
                        />
                    </div>
                </Container>

                {/* Active Items */}
                <Container>
                    <HeaderText
                        TitleHeader="With active and disabled items"
                        title="List Group"
                    />
                    <p className="text-gray-600 mt-2">Add <code>.active</code> to a <code>.list-group-item</code> to indicate the current active selection.</p>

                    <div className="mt-6">
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
                    </div>
                </Container>

                {/* Links and Buttons */}
                <Container className="p-5 col-span-1 md:col-span-2">
                    <HeaderText
                        TitleHeader="Actionable"
                        title="List Group Items"
                    />
                    <p className="text-gray-600 mt-2">Use <code>&lt;a&gt;</code>s or <code>&lt;button&gt;</code>s to create <em>actionable</em> list group items with hover, disabled, and active states by adding <code>.list-group-item-action</code>.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
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

                {/* Flush and Numbered */}
                <Container className="p-5 col-span-1 md:col-span-2">
                    <HeaderText
                        TitleHeader="Flush and Numbered"
                        title="Styling Variations"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Flush</h4>
                            <p className="text-gray-600 mb-4">Add <code>.list-group-flush</code> to remove some borders and rounded corners to render list group items edge-to-edge in a parent container (e.g., cards).</p>
                            <FlushListGroup items={basicItems} />
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold mb-4">Numbered</h4>
                            <NumberedListGroup items={basicItems} />
                        </div>
                    </div>
                </Container>

                {/* Horizontal */}
                <Container className="p-5 col-span-1 md:col-span-2">
                    <HeaderText
                        TitleHeader="Horizontal"
                        title="Layout"
                    />
                    <p className="text-gray-600 mt-2">Add <code>.list-group-horizontal</code> to change the layout of list group items from vertical to horizontal across all breakpoints.</p>

                    <div className="mt-6">
                        <HorizontalListGroup items={[
                            { text: 'An item' },
                            { text: 'A second item' },
                            { text: 'A third item' }
                        ]} />
                    </div>
                </Container>

                {/* Contextual Classes */}
                <Container>
                    <HeaderText
                        TitleHeader="Contextual"
                        title="Classes"
                    />
                    <p className="text-gray-600 mt-2">Use contextual classes to style list items with a stateful background and color.</p>

                    <div className="mt-6">
                        <CodePreviewToggle
                            previewContent={
                                <ContextualListGroup items={contextualItems} />
                            }
                            codeContent={contextualListCode}
                            defaultView="preview"
                        />
                    </div>
                </Container>

                {/* With Badges */}
                <Container>
                    <HeaderText
                        TitleHeader="With badges"
                        title="List Items with Count Indicators"
                    />
                    <p className="text-gray-600 mt-2">Add badges to any list group item to show unread counts, activity, and more with the help of some <a href="#" className="text-blue-600 hover:underline">utilities</a>.</p>

                    <div className="mt-6">
                        <CodePreviewToggle
                            previewContent={
                                <BadgesListGroup items={badgeItems} />
                            }
                            codeContent={badgeListCode}
                            defaultView="preview"
                        />
                    </div>
                </Container>

                {/* With Icons */}
                <Container>
                    <HeaderText
                        TitleHeader="With Icons"
                        title="Enhanced Visual Hierarchy"
                    />

                    <div className="mt-6">
                        <IconsListGroup items={iconItems} />
                    </div>
                </Container>

                {/* Custom Content */}
                <Container>
                    <HeaderText
                        TitleHeader="Custom"
                        title="content"
                    />
                    <p className="text-gray-600 mt-2">Add nearly any HTML within, even for linked list groups like the one below, with the help of <a href="#" className="text-blue-600 hover:underline">flexbox utilities</a>.</p>

                    <div className="mt-6">
                        <CodePreviewToggle
                            previewContent={
                                <CustomContentListGroup items={customContentItems} />
                            }
                            codeContent={customContentCode}
                            defaultView="preview"
                        />
                    </div>
                </Container>

                {/* Checkboxes and Radios */}
                <Container>
                    <HeaderText
                        TitleHeader="Checkboxes and radios"
                        title="List Group Items"
                    />
                    <p className="text-gray-600 mt-2">Place Bootstrap's checkboxes and radios within list group items and customize as needed.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Multiple Selection</h4>
                            <CheckboxListGroup
                                items={checkboxItems}
                                multiple={true}
                                onChange={(selected, item) => console.log('Multiple selection:', selected)}
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
                        TitleHeader="Advanced Content"
                        title="Combined Features"
                    />

                    <div className="mt-6">
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
                    </div>
                </Container>
            </div>
        </DashboardLayout>
    );
};

export default ListGroupPage;