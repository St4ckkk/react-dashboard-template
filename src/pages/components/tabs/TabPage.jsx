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
    FaMusic
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
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

                {/* Custom Composition */}
                <Container className="md:col-span-2">
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
            </div>
        </DashboardLayout>
    );
};

export default TabPage;