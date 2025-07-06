import React from 'react';
import DashboardLayout from '@components/DashboardLayout';
import Container from '@components/ui/container/Container';
import CodePreviewToggle from '@components/CodePreviewToggle';
import HeaderText from '@components/HeaderText';
import Button from '@components/ui/buttons/Button';
import CardGuidelines from '@components/CardGuidelines';
import { FaEllipsisV, FaFacebook, FaTwitter, FaInstagram, FaUsers, FaChartLine, FaShoppingCart } from 'react-icons/fa';

import Card, {
    MediaCard,
    ProfileCard,
    InteractiveCard,
    HorizontalCard,
    StatCard,
    PricingCard
} from '@components/ui/cards/Card';

const CardPage = () => {
    // Base card code example
    const basicCardCode = `<Card 
  title="Card Title" 
  subtitle="Card Subtitle">
  <p>This is a basic card with a title and content.</p>
  <p className="mt-2">You can add any content here.</p>
</Card>`;

    // Card variants code example
    const variantCardCode = `// Primary Variant
<Card 
  variant="primary" 
  title="Primary Card">
  This is a primary card.
</Card>

// Success Variant
<Card 
  variant="success" 
  title="Success Card">
  This is a success card.
</Card>

// Theme Color Variant
<Card 
  variant="deep-blue" 
  title="Deep Blue Card">
  This card uses your theme color variable.
</Card>`;

    // Card with footer code
    const footerCardCode = `<Card 
  title="Card with Footer"
  footer={
    <div className="flex justify-end">
      <Button variant="primary" size="small">Save</Button>
    </div>
  }>
  Card content goes here.
</Card>`;

    // Media card code
    const mediaCardCode = `<MediaCard
  image="/path/to/image.jpg"
  imagePosition="top"
  title="Media Card"
  subtitle="With top image">
  This card displays an image at the top.
</MediaCard>`;

    // Profile card code
    const profileCardCode = `<ProfileCard
  avatar="/path/to/avatar.jpg"
  name="John Doe"
  role="Software Developer"
  bio="Full-stack developer with expertise in React and Laravel."
  stats={[
    { value: '2k', label: 'Followers' },
    { value: '172', label: 'Posts' },
    { value: '47', label: 'Projects' },
  ]}
/>`;

    // Interactive card code
    const interactiveCardCode = `<InteractiveCard
  hoverEffect="scale"
  onClick={() => alert('Card clicked!')}
  title="Interactive Card">
  Click this card to trigger an action.
</InteractiveCard>`;

    // Horizontal card code
    const horizontalCardCode = `<HorizontalCard
  image="/path/to/image.jpg"
  title="Horizontal Card"
  subtitle="Left-aligned image">
  This card has an image on the left and content on the right.
</HorizontalCard>`;

    // Stat card code
    const statCardCode = `<StatCard
  value="2,543"
  label="Total Users"
  icon={<FaUsers className="text-blue-500" />}
  trend="up"
  trendValue="12% from last month"
/>`;

    // Pricing card code
    const pricingCardCode = `<PricingCard
  plan="Pro Plan"
  price="$29"
  period="month"
  description="Perfect for small businesses"
  features={[
    "Unlimited projects",
    "5GB storage",
    "Priority support",
    "Custom domain"
  ]}
  highlighted={true}
/>`;

    return (
        <DashboardLayout
            title="Cards"
            breadcrumb={[
                { name: "Home", href: "/" },
                { name: "Components" },
                { name: "Cards", href: "/components/cards" }
            ]}
        >
            <div className="space-y-6">
                {/* Basic Cards */}
                <Container>
                    <HeaderText
                        TitleHeader="Basic Cards"
                        title="Card Components"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div>
                            <CodePreviewToggle
                                previewContent={
                                    <Card title="Basic Card" subtitle="With header and content">
                                        <p>This is a basic card with a title and content.</p>
                                        <p className="mt-2">You can add any content here.</p>
                                    </Card>
                                }
                                codeContent={basicCardCode}
                                defaultView="preview"
                            />
                        </div>

                        <div>
                            <CodePreviewToggle
                                previewContent={
                                    <div className="space-y-4">
                                        <Card
                                            title="Card with Actions"
                                            subtitle="With header actions"
                                            actions={
                                                <>
                                                    <Button size="small" variant="light">Edit</Button>
                                                    <Button size="small" variant="primary">View</Button>
                                                </>
                                            }
                                        >
                                            <p>This card has action buttons in the header.</p>
                                        </Card>

                                        <Card
                                            title="Card with Footer"
                                            footer={
                                                <div className="flex justify-end">
                                                    <Button variant="primary" size="small">Save</Button>
                                                </div>
                                            }
                                        >
                                            Card content goes here.
                                        </Card>
                                    </div>
                                }
                                codeContent={footerCardCode}
                                defaultView="preview"
                            />
                        </div>
                    </div>
                </Container>

                {/* Card Variants */}
                <Container>
                    <HeaderText
                        TitleHeader="Card Variants"
                        title="Color Variations"
                    />

                    <CodePreviewToggle
                        previewContent={
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                <Card variant="primary" title="Primary Card">
                                    This is a primary variant.
                                </Card>

                                <Card variant="secondary" title="Secondary Card">
                                    This is a secondary variant.
                                </Card>

                                <Card variant="success" title="Success Card">
                                    This is a success variant.
                                </Card>

                                <Card variant="danger" title="Danger Card">
                                    This is a danger variant.
                                </Card>

                                <Card variant="warning" title="Warning Card">
                                    This is a warning variant.
                                </Card>

                                <Card variant="info" title="Info Card">
                                    This is an info variant.
                                </Card>

                                <Card variant="dark" title="Dark Card">
                                    This is a dark variant.
                                </Card>

                                <Card variant="light-blue" title="Light Blue Card">
                                    Using theme color variable.
                                </Card>

                                <Card variant="deep-blue" title="Deep Blue Card">
                                    Using theme color variable.
                                </Card>
                            </div>
                        }
                        codeContent={variantCardCode}
                        defaultView="preview"
                    />
                </Container>

                {/* Media Cards */}
                <Container>
                    <HeaderText
                        TitleHeader="Media Cards"
                        title="Cards with Images"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div>
                            <CodePreviewToggle
                                previewContent={
                                    <MediaCard
                                        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                                        imagePosition="top"
                                        title="Media Card"
                                        subtitle="With top image"
                                    >
                                        This card displays an image at the top.
                                    </MediaCard>
                                }
                                codeContent={mediaCardCode}
                                defaultView="preview"
                            />
                        </div>

                        <div>
                            <CodePreviewToggle
                                previewContent={
                                    <HorizontalCard
                                        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                                        title="Horizontal Card"
                                        subtitle="Left-aligned image"
                                        actions={
                                            <>
                                                <Button size="small" variant="light">Cancel</Button>
                                                <Button size="small" variant="primary">View</Button>
                                            </>
                                        }
                                    >
                                        This card has an image on the left and content on the right.
                                    </HorizontalCard>
                                }
                                codeContent={horizontalCardCode}
                                defaultView="preview"
                            />
                        </div>
                    </div>
                </Container>

                {/* Special Cards */}
                <Container>
                    <HeaderText
                        TitleHeader="Special Purpose Cards"
                        title="Specialized Card Types"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                        <div>
                            <CodePreviewToggle
                                previewContent={
                                    <ProfileCard
                                        avatar="https://randomuser.me/api/portraits/men/32.jpg"
                                        name="John Doe"
                                        role="Software Developer"
                                        bio="Full-stack developer with expertise in React and Laravel."
                                        stats={[
                                            { value: '2k', label: 'Followers' },
                                            { value: '172', label: 'Posts' },
                                            { value: '47', label: 'Projects' },
                                        ]}
                                        socialLinks={
                                            <>
                                                <FaFacebook className="text-blue-600 h-5 w-5" />
                                                <FaTwitter className="text-blue-400 h-5 w-5" />
                                                <FaInstagram className="text-pink-600 h-5 w-5" />
                                            </>
                                        }
                                    />
                                }
                                codeContent={profileCardCode}
                                defaultView="preview"
                            />
                        </div>

                        <div>
                            <CodePreviewToggle
                                previewContent={
                                    <div className="space-y-4">
                                        <InteractiveCard
                                            hoverEffect="scale"
                                            onClick={() => alert('Card clicked!')}
                                            title="Interactive Card"
                                        >
                                            <p>Click this card to trigger an action.</p>
                                            <p className="mt-2 text-sm text-gray-500">Hover to see the scaling effect.</p>
                                        </InteractiveCard>
                                    </div>
                                }
                                codeContent={interactiveCardCode}
                                defaultView="preview"
                            />
                        </div>

                        <div>
                            <CodePreviewToggle
                                previewContent={
                                    <PricingCard
                                        plan="Pro Plan"
                                        price="$29"
                                        period="month"
                                        description="Perfect for small businesses"
                                        features={[
                                            "Unlimited projects",
                                            "5GB storage",
                                            "Priority support",
                                            "Custom domain"
                                        ]}
                                        highlighted={true}
                                        buttonAction={() => alert('Subscription started!')}
                                    />
                                }
                                codeContent={pricingCardCode}
                                defaultView="preview"
                            />
                        </div>
                    </div>
                </Container>

                {/* Stat Cards */}
                <Container>
                    <HeaderText
                        TitleHeader="Statistics Cards"
                        title="Data Display Cards"
                    />

                    <CodePreviewToggle
                        previewContent={
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                <StatCard
                                    value="2,543"
                                    label="Total Users"
                                    icon={<FaUsers className="text-blue-500" />}
                                    trend="up"
                                    trendValue="12%"
                                />

                                <StatCard
                                    value="$12,845"
                                    label="Revenue"
                                    icon={<FaChartLine className="text-green-500" />}
                                    trend="up"
                                    trendValue="8%"
                                />

                                <StatCard
                                    value="384"
                                    label="Orders"
                                    icon={<FaShoppingCart className="text-purple-500" />}
                                    trend="down"
                                    trendValue="3%"
                                />

                                <StatCard
                                    value="92%"
                                    label="Satisfaction"
                                    trend="up"
                                    trendValue="5%"
                                />
                            </div>
                        }
                        codeContent={statCardCode}
                        defaultView="preview"
                    />
                </Container>

                {/* Usage Guidelines */}
                <CardGuidelines />
            </div>
        </DashboardLayout>
    );
};

export default CardPage;