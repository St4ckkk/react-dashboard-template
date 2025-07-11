import React from "react";
import DashboardLayout from "@components/DashboardLayout";
import Container from "@components/ui/container/Container";
import CodePreviewToggle from "@components/CodePreviewToggle";
import HeaderText from "@components/HeaderText";
import BadgeGuidelines from "@components/BadgeGuidelines";
import { DefaultBadge, BorderBadge, PillBadge, ButtonBadge, IconBadge, StatusBadge } from "@components/ui/badges/Badges";
import { FaStar, FaGlobeAmericas, FaCheckCircle, FaExclamationCircle, FaExclamationTriangle, FaInfoCircle } from "react-icons/fa";

const BadgePage = () => {
    const defaultBadgesCode = `// Default Badges
<DefaultBadge variant="primary">Primary</DefaultBadge>
<DefaultBadge variant="secondary">Secondary</DefaultBadge>
<DefaultBadge variant="success">Success</DefaultBadge>
<DefaultBadge variant="danger">Danger</DefaultBadge>
<DefaultBadge variant="warning">Warning</DefaultBadge>
<DefaultBadge variant="info">Info</DefaultBadge>
<DefaultBadge variant="light">Light</DefaultBadge>
<DefaultBadge variant="dark">Dark</DefaultBadge>`;

    const borderedBadgesCode = `// Bordered Badges
<BorderBadge variant="primary">Primary</BorderBadge>
<BorderBadge variant="secondary">Secondary</BorderBadge>
<BorderBadge variant="success">Success</BorderBadge>
<BorderBadge variant="danger">Danger</BorderBadge>
<BorderBadge variant="warning">Warning</BorderBadge>
<BorderBadge variant="info">Info</BorderBadge>
<BorderBadge variant="light">Light</BorderBadge>
<BorderBadge variant="dark">Dark</BorderBadge>`;

    const pillBadgesCode = `// Pill Badges
<PillBadge variant="primary">Primary</PillBadge>
<PillBadge variant="secondary">Secondary</PillBadge>
<PillBadge variant="success">Success</PillBadge>
<PillBadge variant="danger">Danger</PillBadge>
<PillBadge variant="warning">Warning</PillBadge>
<PillBadge variant="info">Info</PillBadge>
<PillBadge variant="light">Light</PillBadge>
<PillBadge variant="dark">Dark</PillBadge>`;

    const buttonBadgesCode = `// Button Badges
<ButtonBadge variant="primary" count="4">Primary</ButtonBadge>
<ButtonBadge variant="secondary" count="4">Secondary</ButtonBadge>
<ButtonBadge variant="success" count="4">Success</ButtonBadge>
<ButtonBadge variant="danger" count="4">Danger</ButtonBadge>
<ButtonBadge variant="warning" count="4">Warning</ButtonBadge>
<ButtonBadge variant="info" count="4">Info</ButtonBadge>
<ButtonBadge variant="light" count="4">Light</ButtonBadge>
<ButtonBadge variant="dark" count="4">Dark</ButtonBadge>`;

    const iconBadgesCode = `// Icon Badges
import { FaStar, FaGlobeAmericas, FaCheckCircle, FaExclamationCircle, FaExclamationTriangle, FaInfoCircle } from "react-icons/fa";

<IconBadge variant="primary" icon={<FaStar className="w-3.5 h-3.5" />}>Primary</IconBadge>
<IconBadge variant="secondary" icon={<FaGlobeAmericas className="w-3.5 h-3.5" />}>Secondary</IconBadge>
<IconBadge variant="success" icon={<FaCheckCircle className="w-3.5 h-3.5" />}>Success</IconBadge>
<IconBadge variant="danger" icon={<FaExclamationCircle className="w-3.5 h-3.5" />}>Danger</IconBadge>
<IconBadge variant="warning" icon={<FaExclamationTriangle className="w-3.5 h-3.5" />}>Warning</IconBadge>
<IconBadge variant="info" icon={<FaInfoCircle className="w-3.5 h-3.5" />}>Info</IconBadge>
<IconBadge variant="light" icon={<FaStar className="w-3.5 h-3.5" />}>Light</IconBadge>
<IconBadge variant="dark" icon={<FaGlobeAmericas className="w-3.5 h-3.5" />}>Dark</IconBadge>`;

    const statusBadgesCode = `// Status Badges
<StatusBadge variant="primary" status="online">Online</StatusBadge>
<StatusBadge variant="secondary" status="offline">Offline</StatusBadge>
<StatusBadge variant="success" status="online">Available</StatusBadge>
<StatusBadge variant="danger" status="busy">Do Not Disturb</StatusBadge>
<StatusBadge variant="warning" status="away">Away</StatusBadge>
<StatusBadge variant="info" status="online">Active Now</StatusBadge>
<StatusBadge variant="light" status="offline">Inactive</StatusBadge>
<StatusBadge variant="dark" status="away">Idle</StatusBadge>`;


    return (
        <DashboardLayout
            title="Badges"
            breadcrumb={[
                { name: 'Home', href: '/' },
                { name: 'Components' },
                { name: 'Badge', href: '/components/badges' }
            ]}
        >
            <div className="space-y-6">
                {/* Badge Examples */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Container className="p-5">
                        <CodePreviewToggle
                            previewContent={
                                <div>
                                    <HeaderText
                                        TitleHeader="Default"
                                        title="Badges"
                                    />
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        <DefaultBadge variant="primary">Primary</DefaultBadge>
                                        <DefaultBadge variant="secondary">Secondary</DefaultBadge>
                                        <DefaultBadge variant="success">Success</DefaultBadge>
                                        <DefaultBadge variant="danger">Danger</DefaultBadge>
                                        <DefaultBadge variant="warning">Warning</DefaultBadge>
                                        <DefaultBadge variant="info">Info</DefaultBadge>
                                        <DefaultBadge variant="light">Light</DefaultBadge>
                                        <DefaultBadge variant="dark">Dark</DefaultBadge>
                                    </div>
                                </div>
                            }
                            codeContent={defaultBadgesCode}
                        />
                    </Container>

                    <Container className="p-5">
                        <CodePreviewToggle
                            previewContent={
                                <div>
                                    <HeaderText
                                        TitleHeader="Bordered"
                                        title="Badges"
                                    />
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        <BorderBadge variant="primary">Primary</BorderBadge>
                                        <BorderBadge variant="secondary">Secondary</BorderBadge>
                                        <BorderBadge variant="success">Success</BorderBadge>
                                        <BorderBadge variant="danger">Danger</BorderBadge>
                                        <BorderBadge variant="warning">Warning</BorderBadge>
                                        <BorderBadge variant="info">Info</BorderBadge>
                                        <BorderBadge variant="light">Light</BorderBadge>
                                        <BorderBadge variant="dark">Dark</BorderBadge>
                                    </div>
                                </div>
                            }
                            codeContent={borderedBadgesCode}
                        />
                    </Container>

                    <Container className="p-5">
                        <CodePreviewToggle
                            previewContent={
                                <div>
                                    <HeaderText
                                        TitleHeader="Pill"
                                        title="Badges"
                                    />
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        <PillBadge variant="primary">Primary</PillBadge>
                                        <PillBadge variant="secondary">Secondary</PillBadge>
                                        <PillBadge variant="success">Success</PillBadge>
                                        <PillBadge variant="danger">Danger</PillBadge>
                                        <PillBadge variant="warning">Warning</PillBadge>
                                        <PillBadge variant="info">Info</PillBadge>
                                        <PillBadge variant="light">Light</PillBadge>
                                        <PillBadge variant="dark">Dark</PillBadge>
                                    </div>
                                </div>
                            }
                            codeContent={pillBadgesCode}
                        />
                    </Container>

                    <Container className="p-5">
                        <CodePreviewToggle
                            previewContent={
                                <div>
                                    <HeaderText
                                        TitleHeader="Button"
                                        title="Badges"
                                    />
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        <ButtonBadge variant="primary" count="4">Primary</ButtonBadge>
                                        <ButtonBadge variant="secondary" count="4">Secondary</ButtonBadge>
                                        <ButtonBadge variant="success" count="4">Success</ButtonBadge>
                                        <ButtonBadge variant="danger" count="4">Danger</ButtonBadge>
                                        <ButtonBadge variant="warning" count="4">Warning</ButtonBadge>
                                        <ButtonBadge variant="info" count="4">Info</ButtonBadge>
                                        <ButtonBadge variant="light" count="4">Light</ButtonBadge>
                                        <ButtonBadge variant="dark" count="4">Dark</ButtonBadge>
                                    </div>
                                </div>
                            }
                            codeContent={buttonBadgesCode}
                        />
                    </Container>

                    <Container className="p-5">
                        <CodePreviewToggle
                            previewContent={
                                <div>
                                    <HeaderText
                                        TitleHeader="Icon"
                                        title="Badges"
                                    />
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        <IconBadge variant="primary" icon={<FaStar className="w-3.5 h-3.5" />}>Primary</IconBadge>
                                        <IconBadge variant="secondary" icon={<FaGlobeAmericas className="w-3.5 h-3.5" />}>Secondary</IconBadge>
                                        <IconBadge variant="success" icon={<FaCheckCircle className="w-3.5 h-3.5" />}>Success</IconBadge>
                                        <IconBadge variant="danger" icon={<FaExclamationCircle className="w-3.5 h-3.5" />}>Danger</IconBadge>
                                        <IconBadge variant="warning" icon={<FaExclamationTriangle className="w-3.5 h-3.5" />}>Warning</IconBadge>
                                        <IconBadge variant="info" icon={<FaInfoCircle className="w-3.5 h-3.5" />}>Info</IconBadge>
                                        <IconBadge variant="light" icon={<FaStar className="w-3.5 h-3.5" />}>Light</IconBadge>
                                        <IconBadge variant="dark" icon={<FaGlobeAmericas className="w-3.5 h-3.5" />}>Dark</IconBadge>
                                    </div>
                                </div>
                            }
                            codeContent={iconBadgesCode}
                        />
                    </Container>

                    <Container className="p-5">
                        <CodePreviewToggle
                            previewContent={
                                <div>
                                    <HeaderText
                                        TitleHeader="Status"
                                        title="Badges"
                                    />
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        <StatusBadge variant="primary" status="online">Online</StatusBadge>
                                        <StatusBadge variant="secondary" status="offline">Offline</StatusBadge>
                                        <StatusBadge variant="success" status="online">Available</StatusBadge>
                                        <StatusBadge variant="danger" status="busy">Do Not Disturb</StatusBadge>
                                        <StatusBadge variant="warning" status="away">Away</StatusBadge>
                                        <StatusBadge variant="info" status="online">Active Now</StatusBadge>
                                        <StatusBadge variant="light" status="offline">Inactive</StatusBadge>
                                        <StatusBadge variant="dark" status="away">Idle</StatusBadge>
                                    </div>
                                </div>
                            }
                            codeContent={statusBadgesCode}
                        />
                    </Container>
                </div>

                {/* Real-world Examples */}
                <Container className="p-5">
                    <HeaderText
                        TitleHeader="Real-world Examples"
                        title="Common Badge Usage Patterns"
                    />
                    
                    <div className="mt-5 space-y-6">
                        <div>
                            <h4 className="text-sm font-medium text-gray-900 mb-3">E-commerce Product Labels</h4>
                            <div className="flex flex-wrap gap-2">
                                <DefaultBadge variant="danger">Sale</DefaultBadge>
                                <DefaultBadge variant="success">New</DefaultBadge>
                                <BorderBadge variant="warning">Limited Edition</BorderBadge>
                                <PillBadge variant="info">Best Seller</PillBadge>
                                <DefaultBadge variant="dark">Premium</DefaultBadge>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-sm font-medium text-gray-900 mb-3">User Interface Notifications</h4>
                            <div className="flex flex-wrap gap-3 items-center">
                                <ButtonBadge variant="primary" count="3">Messages</ButtonBadge>
                                <ButtonBadge variant="danger" count="12">Notifications</ButtonBadge>
                                <ButtonBadge variant="warning" count="99+">Updates</ButtonBadge>
                                <IconBadge variant="success" icon={<FaCheckCircle className="w-3.5 h-3.5" />}>Verified</IconBadge>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-sm font-medium text-gray-900 mb-3">Content Status Indicators</h4>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <span className="text-sm text-gray-700">Article:</span>
                                    <StatusBadge variant="success" status="online">Published</StatusBadge>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm text-gray-700">Draft:</span>
                                    <StatusBadge variant="warning" status="away">Under Review</StatusBadge>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm text-gray-700">Archive:</span>
                                    <StatusBadge variant="secondary" status="offline">Archived</StatusBadge>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-sm font-medium text-gray-900 mb-3">Priority and Category Tags</h4>
                            <div className="flex flex-wrap gap-2">
                                <PillBadge variant="danger">High Priority</PillBadge>
                                <PillBadge variant="warning">Medium</PillBadge>
                                <PillBadge variant="secondary">Low</PillBadge>
                                <BorderBadge variant="info">Bug</BorderBadge>
                                <BorderBadge variant="success">Feature</BorderBadge>
                                <BorderBadge variant="primary">Enhancement</BorderBadge>
                            </div>
                        </div>
                    </div>
                </Container>

                {/* Usage Guidelines */}
                <BadgeGuidelines />
            </div>
        </DashboardLayout>
    );
};

export default BadgePage;