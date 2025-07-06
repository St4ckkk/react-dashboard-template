import React, { useState } from 'react';
import {
    DefaultTabs,
    BorderedTabs,
    PillsTabs,
    UnderlineTabs,
    FilledTabs,
    IconTabs,
    BadgeTabs,
    ClosableTabs,
    SizedTabs,
    CardTabs,
    AnimatedTabs,
    Tabs,
    TabList,
    TabItem,
    TabPanels,
    TabPanel
} from '@components/ui/tabs/Tabs';
import DashboardLayout from '@components/DashboardLayout';
import Container from '@components/ui/container/Container';
import CodePreviewToggle from '@components/CodePreviewToggle';
import HeaderText from '@components/HeaderText';
import {
    FaHome,
    FaUser,
    FaEnvelope,
    FaCog,
    FaBell,
    FaChartBar,
    FaShoppingCart,
    FaCalendar,
    FaFileAlt,
    FaImage,
    FaVideo,
    FaMusic,
    FaCheckCircle,
    FaTimesCircle,
    FaExclamationTriangle,
    FaInfoCircle,
    FaMobile,
    FaDesktop,
    FaPalette,
    FaCode
} from 'react-icons/fa';

const TabPage = () => {
    // Sample tab data
    const basicTabs = [
        { label: 'Home', defaultContent: 'Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus. Tempora libero non est unde veniam est qui dolor. Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit. Fuga sequi sed ea saepe at unde.' },
        { label: 'Profile', defaultContent: 'Profile content goes here with user information and settings.' },
        { label: 'Contact', defaultContent: 'Contact information and form content.' }
    ];

    const iconTabs = [
        {
            label: 'Home',
            icon: <FaHome />,
            defaultContent: 'Home dashboard with overview and statistics.'
        },
        {
            label: 'Profile',
            icon: <FaUser />,
            defaultContent: 'User profile management and preferences.'
        },
        {
            label: 'Messages',
            icon: <FaEnvelope />,
            defaultContent: 'Inbox and message management.'
        },
        {
            label: 'Settings',
            icon: <FaCog />,
            defaultContent: 'Application settings and configuration.'
        }
    ];

    const badgeTabs = [
        { label: 'Home', badge: null },
        { label: 'Messages', badge: '5' },
        { label: 'Notifications', badge: '12' },
        { label: 'Profile', badge: null }
    ];

    const closableTabs = [
        { label: 'Tab 1', closable: true },
        { label: 'Tab 2', closable: true },
        { label: 'Tab 3', closable: false },
        { label: 'Tab 4', closable: true }
    ];

    const sizeTabs = [
        { label: 'Small' },
        { label: 'Medium' },
        { label: 'Large' }
    ];

    // Code examples
    const basicTabsCode = `import { DefaultTabs } from '@components/ui/tabs/Tabs';

const tabs = [
  { label: 'Home', defaultContent: 'Home content...' },
  { label: 'Profile', defaultContent: 'Profile content...' },
  { label: 'Contact', defaultContent: 'Contact content...' }
];

<DefaultTabs 
  tabs={tabs} 
  defaultActiveKey={0}
  onTabChange={(key) => console.log('Tab changed:', key)}
/>`;

    const justifiedTabsCode = `<DefaultTabs 
  tabs={tabs} 
  justified={true}
  defaultActiveKey={0}
/>`;

    const borderedTabsCode = `import { BorderedTabs } from '@components/ui/tabs/Tabs';

<BorderedTabs 
  tabs={tabs} 
  defaultActiveKey={0}
/>`;

    const pillsTabsCode = `import { PillsTabs } from '@components/ui/tabs/Tabs';

// Horizontal Pills
<PillsTabs 
  tabs={tabs} 
  orientation="horizontal"
  defaultActiveKey={0}
/>

// Vertical Pills
<PillsTabs 
  tabs={tabs} 
  orientation="vertical"
  defaultActiveKey={0}
/>`;

    const underlineTabsCode = `import { UnderlineTabs } from '@components/ui/tabs/Tabs';

<UnderlineTabs 
  tabs={tabs} 
  defaultActiveKey={0}
/>`;

    const filledTabsCode = `import { FilledTabs } from '@components/ui/tabs/Tabs';

<FilledTabs 
  tabs={tabs} 
  defaultActiveKey={0}
/>`;

    const iconTabsCode = `import { IconTabs } from '@components/ui/tabs/Tabs';
import { FaHome, FaUser, FaEnvelope } from 'react-icons/fa';

const iconTabs = [
  { label: 'Home', icon: <FaHome /> },
  { label: 'Profile', icon: <FaUser /> },
  { label: 'Messages', icon: <FaEnvelope /> }
];

<IconTabs 
  tabs={iconTabs} 
  variant="pills"
  defaultActiveKey={0}
/>`;

    const badgeTabsCode = `import { BadgeTabs } from '@components/ui/tabs/Tabs';

const badgeTabs = [
  { label: 'Home', badge: null },
  { label: 'Messages', badge: '5' },
  { label: 'Notifications', badge: '12' }
];

<BadgeTabs 
  tabs={badgeTabs} 
  variant="default"
  defaultActiveKey={0}
/>`;

    const closableTabsCode = `import { ClosableTabs } from '@components/ui/tabs/Tabs';

const closableTabs = [
  { label: 'Tab 1', closable: true },
  { label: 'Tab 2', closable: true },
  { label: 'Tab 3', closable: false }
];

<ClosableTabs 
  initialTabs={closableTabs} 
  defaultActiveKey={0}
/>`;

    const sizedTabsCode = `import { SizedTabs } from '@components/ui/tabs/Tabs';

// Small Size
<SizedTabs tabs={tabs} size="small" variant="pills" />

// Medium Size (Default)
<SizedTabs tabs={tabs} size="medium" variant="pills" />

// Large Size
<SizedTabs tabs={tabs} size="large" variant="pills" />`;

    const cardTabsCode = `import { CardTabs } from '@components/ui/tabs/Tabs';

<CardTabs 
  tabs={tabs} 
  defaultActiveKey={0}
/>`;

    const animatedTabsCode = `import { AnimatedTabs } from '@components/ui/tabs/Tabs';

<AnimatedTabs 
  tabs={tabs} 
  defaultActiveKey={0}
/>`;

    const customTabsCode = `import { Tabs, TabList, TabItem, TabPanels, TabPanel } from '@components/ui/tabs/Tabs';

<Tabs defaultActiveKey={0} variant="underline">
  <TabList>
    <TabItem tabKey={0} icon={<FaHome />}>
      Home
    </TabItem>
    <TabItem tabKey={1} badge="5">
      Messages
    </TabItem>
    <TabItem tabKey={2} disabled>
      Disabled
    </TabItem>
  </TabList>
  <TabPanels>
    <TabPanel tabKey={0}>
      <div className="p-4">Home content</div>
    </TabPanel>
    <TabPanel tabKey={1}>
      <div className="p-4">Messages content</div>
    </TabPanel>
    <TabPanel tabKey={2}>
      <div className="p-4">Disabled content</div>
    </TabPanel>
  </TabPanels>
</Tabs>`;

    return (
        <DashboardLayout
            title="Tabs"
            breadcrumb={[
                { name: "Home", href: "/" },
                { name: "Components" },
                { name: "Tabs", href: "/components/tabs" }
            ]}
        >
            <div className="space-y-8 mt-6">
                {/* Basic Tabs Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Basic Tabs */}
                    <Container>
                        <HeaderText
                            TitleHeader="Default Tabs"
                            title="Basic Tab Navigation"
                        />
                        <p className="text-gray-600 mt-2">
                            Basic tabs component with simple navigation between different content sections.
                        </p>

                        <div className="mt-6">
                            <CodePreviewToggle
                                previewContent={
                                    <DefaultTabs
                                        tabs={basicTabs}
                                        defaultActiveKey={0}
                                    />
                                }
                                codeContent={basicTabsCode}
                                defaultView="preview"
                            />
                        </div>
                    </Container>

                    {/* Justified Tabs */}
                    <Container>
                        <HeaderText
                            TitleHeader="Justified Tabs"
                            title="Full Width Tabs"
                        />
                        <p className="text-gray-600 mt-2">
                            Tabs that extend to fill the full width of their container.
                        </p>

                        <div className="mt-6">
                            <CodePreviewToggle
                                previewContent={
                                    <DefaultTabs
                                        tabs={basicTabs}
                                        justified={true}
                                        defaultActiveKey={0}
                                    />
                                }
                                codeContent={justifiedTabsCode}
                                defaultView="preview"
                            />
                        </div>
                    </Container>

                    {/* Bordered Tabs */}
                    <Container>
                        <HeaderText
                            TitleHeader="Bordered Tabs"
                            title="Contained Tab Style"
                        />
                        <p className="text-gray-600 mt-2">
                            Tabs with a border container and active state background.
                        </p>

                        <div className="mt-6">
                            <CodePreviewToggle
                                previewContent={
                                    <BorderedTabs
                                        tabs={basicTabs}
                                        defaultActiveKey={0}
                                    />
                                }
                                codeContent={borderedTabsCode}
                                defaultView="preview"
                            />
                        </div>
                    </Container>

                    {/* Bordered Justified */}
                    <Container>
                        <HeaderText
                            TitleHeader="Bordered Justified"
                            title="Full Width Bordered"
                        />
                        <p className="text-gray-600 mt-2">
                            Bordered tabs that extend to fill the full width.
                        </p>

                        <div className="mt-6">
                            <CodePreviewToggle
                                previewContent={
                                    <BorderedTabs
                                        tabs={basicTabs}
                                        justified={true}
                                        defaultActiveKey={0}
                                    />
                                }
                                codeContent={`<BorderedTabs tabs={tabs} justified={true} />`}
                                defaultView="preview"
                            />
                        </div>
                    </Container>

                    {/* Pills Tabs */}
                    <Container>
                        <HeaderText
                            TitleHeader="Pills Tabs"
                            title="Rounded Button Style"
                        />
                        <p className="text-gray-600 mt-2">
                            Tabs styled as rounded pills/buttons for a modern look.
                        </p>

                        <div className="mt-6">
                            <CodePreviewToggle
                                previewContent={
                                    <PillsTabs
                                        tabs={basicTabs}
                                        orientation="horizontal"
                                        defaultActiveKey={0}
                                    />
                                }
                                codeContent={pillsTabsCode}
                                defaultView="preview"
                            />
                        </div>
                    </Container>

                    {/* Vertical Pills */}
                    <Container>
                        <HeaderText
                            TitleHeader="Vertical Pills"
                            title="Sidebar Navigation"
                        />
                        <p className="text-gray-600 mt-2">
                            Vertically oriented pills tabs perfect for sidebar navigation.
                        </p>

                        <div className="mt-6">
                            <CodePreviewToggle
                                previewContent={
                                    <div className="h-64">
                                        <PillsTabs
                                            tabs={basicTabs}
                                            orientation="vertical"
                                            defaultActiveKey={0}
                                        />
                                    </div>
                                }
                                codeContent={`<PillsTabs tabs={tabs} orientation="vertical" />`}
                                defaultView="preview"
                            />
                        </div>
                    </Container>

                    {/* Underline Tabs */}
                    <Container>
                        <HeaderText
                            TitleHeader="Underline Tabs"
                            title="Minimal Underline Style"
                        />
                        <p className="text-gray-600 mt-2">
                            Clean tabs with animated underline indicator for active state.
                        </p>

                        <div className="mt-6">
                            <CodePreviewToggle
                                previewContent={
                                    <UnderlineTabs
                                        tabs={basicTabs}
                                        defaultActiveKey={0}
                                    />
                                }
                                codeContent={underlineTabsCode}
                                defaultView="preview"
                            />
                        </div>
                    </Container>

                    {/* Filled Tabs */}
                    <Container>
                        <HeaderText
                            TitleHeader="Filled Tabs"
                            title="Background Container Style"
                        />
                        <p className="text-gray-600 mt-2">
                            Tabs with a filled background container and elevated active state.
                        </p>

                        <div className="mt-6">
                            <CodePreviewToggle
                                previewContent={
                                    <FilledTabs
                                        tabs={basicTabs}
                                        defaultActiveKey={0}
                                    />
                                }
                                codeContent={filledTabsCode}
                                defaultView="preview"
                            />
                        </div>
                    </Container>

                    {/* Icon Tabs */}
                    <Container>
                        <HeaderText
                            TitleHeader="Icon Tabs"
                            title="Tabs with Icons"
                        />
                        <p className="text-gray-600 mt-2">
                            Enhance tabs with icons for better visual recognition and navigation.
                        </p>

                        <div className="mt-6">
                            <CodePreviewToggle
                                previewContent={
                                    <IconTabs
                                        tabs={iconTabs}
                                        variant="pills"
                                        defaultActiveKey={0}
                                    />
                                }
                                codeContent={iconTabsCode}
                                defaultView="preview"
                            />
                        </div>
                    </Container>

                    {/* Badge Tabs */}
                    <Container>
                        <HeaderText
                            TitleHeader="Badge Tabs"
                            title="Tabs with Notification Badges"
                        />
                        <p className="text-gray-600 mt-2">
                            Tabs with notification badges to show counts or status indicators.
                        </p>

                        <div className="mt-6">
                            <CodePreviewToggle
                                previewContent={
                                    <BadgeTabs
                                        tabs={badgeTabs}
                                        variant="default"
                                        defaultActiveKey={0}
                                    />
                                }
                                codeContent={badgeTabsCode}
                                defaultView="preview"
                            />
                        </div>
                    </Container>

                    {/* Closable Tabs */}
                    <Container>
                        <HeaderText
                            TitleHeader="Closable Tabs"
                            title="Dynamic Tab Management"
                        />
                        <p className="text-gray-600 mt-2">
                            Tabs that can be closed/removed dynamically. Try closing some tabs!
                        </p>

                        <div className="mt-6">
                            <CodePreviewToggle
                                previewContent={
                                    <ClosableTabs
                                        initialTabs={closableTabs}
                                        defaultActiveKey={0}
                                    />
                                }
                                codeContent={closableTabsCode}
                                defaultView="preview"
                            />
                        </div>
                    </Container>

                    {/* Small Tabs */}
                    <Container>
                        <HeaderText
                            TitleHeader="Small Tabs"
                            title="Compact Size"
                        />
                        <p className="text-gray-600 mt-2">
                            Compact tabs for dense interfaces and limited space.
                        </p>

                        <div className="mt-6">
                            <CodePreviewToggle
                                previewContent={
                                    <SizedTabs
                                        tabs={sizeTabs}
                                        size="small"
                                        variant="pills"
                                        defaultActiveKey={0}
                                    />
                                }
                                codeContent={sizedTabsCode}
                                defaultView="preview"
                            />
                        </div>
                    </Container>

                    {/* Large Tabs */}
                    <Container>
                        <HeaderText
                            TitleHeader="Large Tabs"
                            title="Prominent Size"
                        />
                        <p className="text-gray-600 mt-2">
                            Large tabs for emphasis and better touch targets.
                        </p>

                        <div className="mt-6">
                            <CodePreviewToggle
                                previewContent={
                                    <SizedTabs
                                        tabs={sizeTabs}
                                        size="large"
                                        variant="pills"
                                        defaultActiveKey={0}
                                    />
                                }
                                codeContent={`<SizedTabs tabs={tabs} size="large" variant="pills" />`}
                                defaultView="preview"
                            />
                        </div>
                    </Container>

                    {/* Card Tabs */}
                    <Container>
                        <HeaderText
                            TitleHeader="Card Tabs"
                            title="Card Container Style"
                        />
                        <p className="text-gray-600 mt-2">
                            Tabs integrated within a card layout with shadow and borders.
                        </p>

                        <div className="mt-6">
                            <CodePreviewToggle
                                previewContent={
                                    <CardTabs
                                        tabs={basicTabs}
                                        defaultActiveKey={0}
                                    />
                                }
                                codeContent={cardTabsCode}
                                defaultView="preview"
                            />
                        </div>
                    </Container>

                    {/* Animated Tabs */}
                    <Container>
                        <HeaderText
                            TitleHeader="Animated Tabs"
                            title="Custom Animations"
                        />
                        <p className="text-gray-600 mt-2">
                            Tabs with custom animations and transitions between content.
                        </p>

                        <div className="mt-6">
                            <CodePreviewToggle
                                previewContent={
                                    <AnimatedTabs
                                        tabs={basicTabs}
                                        defaultActiveKey={0}
                                    />
                                }
                                codeContent={animatedTabsCode}
                                defaultView="preview"
                            />
                        </div>
                    </Container>
                </div>

                {/* Custom Composition */}
                <Container className="w-full">
                    <HeaderText
                        TitleHeader="Custom Tab Composition"
                        title="Build Your Own"
                    />
                    <p className="text-gray-600 mt-2">
                        Use the base components to create custom tab layouts with full control over styling and behavior.
                    </p>

                    <div className="mt-6">
                        <CodePreviewToggle
                            previewContent={
                                <Tabs defaultActiveKey={0} variant="underline">
                                    <TabList>
                                        <TabItem tabKey={0} icon={<FaHome />}>
                                            Home
                                        </TabItem>
                                        <TabItem tabKey={1} badge="5">
                                            Messages
                                        </TabItem>
                                        <TabItem tabKey={2} disabled>
                                            Disabled
                                        </TabItem>
                                        <TabItem tabKey={3} icon={<FaCog />}>
                                            Settings
                                        </TabItem>
                                    </TabList>
                                    <TabPanels>
                                        <TabPanel tabKey={0}>
                                            <div className="p-4">
                                                <h3 className="text-lg font-semibold mb-2">Home Dashboard</h3>
                                                <p className="text-gray-600">Welcome to your dashboard. Here you can see an overview of your account and recent activity.</p>
                                            </div>
                                        </TabPanel>
                                        <TabPanel tabKey={1}>
                                            <div className="p-4">
                                                <h3 className="text-lg font-semibold mb-2">Messages (5)</h3>
                                                <p className="text-gray-600">You have 5 unread messages. Click here to view your inbox.</p>
                                            </div>
                                        </TabPanel>
                                        <TabPanel tabKey={2}>
                                            <div className="p-4">
                                                <h3 className="text-lg font-semibold mb-2">Disabled Tab</h3>
                                                <p className="text-gray-600">This tab is disabled and cannot be accessed.</p>
                                            </div>
                                        </TabPanel>
                                        <TabPanel tabKey={3}>
                                            <div className="p-4">
                                                <h3 className="text-lg font-semibold mb-2">Settings</h3>
                                                <p className="text-gray-600">Manage your account settings and preferences.</p>
                                            </div>
                                        </TabPanel>
                                    </TabPanels>
                                </Tabs>
                            }
                            codeContent={customTabsCode}
                            defaultView="preview"
                        />
                    </div>
                </Container>

                {/* Usage Guidelines */}
                <Container>
                    <HeaderText
                        TitleHeader="Usage Guidelines"
                        title="When and How to Use Tabs"
                    />

                    <div className="mt-6 space-y-8">
                        {/* When to Use */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">When to Use Tabs</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                    <div className="flex items-start space-x-3">
                                        <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-green-900 mb-1">Content Organization</h4>
                                            <p className="text-sm text-green-700">When you need to organize related content into logical sections that users can switch between.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                    <div className="flex items-start space-x-3">
                                        <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-green-900 mb-1">Space Optimization</h4>
                                            <p className="text-sm text-green-700">To save vertical space by grouping content that doesn't need to be shown simultaneously.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                    <div className="flex items-start space-x-3">
                                        <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-green-900 mb-1">Navigation Enhancement</h4>
                                            <p className="text-sm text-green-700">For creating secondary navigation within a section or feature of your application.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                    <div className="flex items-start space-x-3">
                                        <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-green-900 mb-1">Dashboard Sections</h4>
                                            <p className="text-sm text-green-700">Perfect for dashboard interfaces where users need quick access to different data views.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* When Not to Use */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">When NOT to Use Tabs</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                    <div className="flex items-start space-x-3">
                                        <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-red-900 mb-1">Sequential Processes</h4>
                                            <p className="text-sm text-red-700">Don't use tabs for step-by-step workflows where users must complete steps in order.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                    <div className="flex items-start space-x-3">
                                        <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-red-900 mb-1">Comparing Content</h4>
                                            <p className="text-sm text-red-700">When users need to compare information side by side, use separate sections instead.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                    <div className="flex items-start space-x-3">
                                        <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-red-900 mb-1">Too Many Tabs</h4>
                                            <p className="text-sm text-red-700">Avoid having more than 7 tabs at the top level. Consider grouping or using a different navigation pattern.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                    <div className="flex items-start space-x-3">
                                        <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-red-900 mb-1">Mobile-First Content</h4>
                                            <p className="text-sm text-red-700">Consider alternatives for primary mobile navigation as tabs can be harder to use on small screens.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tab Style Guidelines */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Choosing the Right Tab Style</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                                    <div className="flex items-start space-x-3">
                                        <FaDesktop className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-blue-900 mb-1">Default/Underline</h4>
                                            <p className="text-sm text-blue-700">Best for professional interfaces and content-heavy applications.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                                    <div className="flex items-start space-x-3">
                                        <FaPalette className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-purple-900 mb-1">Pills/Filled</h4>
                                            <p className="text-sm text-purple-700">Great for modern apps and creative interfaces where visual appeal is important.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                    <div className="flex items-start space-x-3">
                                        <FaCode className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-green-900 mb-1">Bordered</h4>
                                            <p className="text-sm text-green-700">Perfect for settings panels and administrative interfaces where structure is key.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                                    <div className="flex items-start space-x-3">
                                        <FaMobile className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-orange-900 mb-1">Small Size</h4>
                                            <p className="text-sm text-orange-700">Use for mobile interfaces or when space is limited.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                    <div className="flex items-start space-x-3">
                                        <FaBell className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-1">With Badges</h4>
                                            <p className="text-sm text-gray-700">When you need to show notifications, counts, or status indicators.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                    <div className="flex items-start space-x-3">
                                        <FaFileAlt className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-indigo-900 mb-1">Closable</h4>
                                            <p className="text-sm text-indigo-700">For document editors, IDEs, or any interface where users open multiple items.</p>
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
                                            <h4 className="font-semibold text-yellow-900 mb-2">Tab Order & Labels</h4>
                                            <ul className="text-sm text-yellow-700 space-y-1">
                                                <li>• Order tabs logically from most to least important</li>
                                                <li>• Use clear, concise labels (1-2 words when possible)</li>
                                                <li>• Keep tab labels consistent in length and format</li>
                                                <li>• Consider using icons for better recognition</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                                    <div className="flex items-start space-x-3">
                                        <FaInfoCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-blue-900 mb-2">Accessibility & UX</h4>
                                            <ul className="text-sm text-blue-700 space-y-1">
                                                <li>• Ensure tabs are keyboard accessible (Tab, Arrow keys)</li>
                                                <li>• Provide clear visual feedback for active and focus states</li>
                                                <li>• Consider ARIA labels for screen readers</li>
                                                <li>• Test on mobile devices for touch accessibility</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                    <div className="flex items-start space-x-3">
                                        <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-green-900 mb-2">Performance & State</h4>
                                            <ul className="text-sm text-green-700 space-y-1">
                                                <li>• Lazy load tab content when possible</li>
                                                <li>• Preserve form state when switching tabs</li>
                                                <li>• Consider URL routing for shareable tab states</li>
                                                <li>• Animate transitions smoothly but not excessively</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Common Use Cases */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Common Use Cases</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                    <FaChartBar className="w-6 h-6 text-gray-600 mb-2" />
                                    <h4 className="font-semibold text-gray-900 mb-1">Dashboards</h4>
                                    <p className="text-sm text-gray-600">Overview, Analytics, Reports, Settings</p>
                                </div>

                                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                    <FaUser className="w-6 h-6 text-gray-600 mb-2" />
                                    <h4 className="font-semibold text-gray-900 mb-1">User Profiles</h4>
                                    <p className="text-sm text-gray-600">Profile, Security, Preferences, Activity</p>
                                </div>

                                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                    <FaShoppingCart className="w-6 h-6 text-gray-600 mb-2" />
                                    <h4 className="font-semibold text-gray-900 mb-1">E-commerce</h4>
                                    <p className="text-sm text-gray-600">Description, Reviews, Specs, Shipping</p>
                                </div>

                                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                    <FaCog className="w-6 h-6 text-gray-600 mb-2" />
                                    <h4 className="font-semibold text-gray-900 mb-1">Settings</h4>
                                    <p className="text-sm text-gray-600">General, Privacy, Notifications, Account</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </DashboardLayout>
    );
};

export default TabPage;