import DashboardLayout from '@components/DashboardLayout';
import Container from '@components/ui/container/Container';
import CodeBlock from '@components/CodeBlock';
import CodePreviewToggle from '@components/CodePreviewToggle';
import HeaderText from '@components/HeaderText';
import BreadcrumbGuidelines from '@components/BreadcrumbGuidelines';
import {
    DefaultBreadcrumbs,
    BreadcrumbsWithPageTitle,
    CenteredBreadcrumbs,
    RightBreadcrumbs,
    CustomDividerBreadcrumbs,
    IconBreadcrumbs
} from '@components/ui/breadcrumbs/BreadCrumbs';


const BreadCrumbPage = () => {
    const defaultBreadcrumbsCode = `<DefaultBreadcrumbs
  items={[
    { name: "Home", href: "/" },
    { name: "Library", href: "/library" },
    { name: "Default" }
  ]}
/>`;

    const withPageTitleCode = `<BreadcrumbsWithPageTitle
  pageTitle="Page Title"
  items={[
    { name: "Home", href: "/" },
    { name: "Components", href: "/components" },
    { name: "Breadcrumbs" }
  ]}
/>`;

    const centeredBreadcrumbsCode = `<CenteredBreadcrumbs
  items={[
    { name: "Home", href: "/" },
    { name: "Library", href: "/library" },
    { name: "Centered Position" }
  ]}
/>`;

    const rightBreadcrumbsCode = `<RightBreadcrumbs
  items={[
    { name: "Home", href: "/" },
    { name: "Library", href: "/library" },
    { name: "Right Position" }
  ]}
/>`;

    const customDividersCode = `{/* With > divider */}
<CustomDividerBreadcrumbs
  divider=">"
  items={[
    { name: "Home", href: "/" },
    { name: "Library", href: "/library" },
    { name: "Data" }
  ]}
/>

{/* With | divider */}
<CustomDividerBreadcrumbs
  divider="|"
  items={[
    { name: "Home", href: "/" },
    { name: "Library", href: "/library" },
    { name: "Data" }
  ]}
/>

{/* With - divider */}
<CustomDividerBreadcrumbs
  divider="-"
  items={[
    { name: "Home", href: "/" },
    { name: "Library", href: "/library" },
    { name: "Data" }
  ]}
/>

{/* With • divider */}
<CustomDividerBreadcrumbs
  divider="•"
  items={[
    { name: "Home", href: "/" },
    { name: "Library", href: "/library" },
    { name: "Data" }
  ]}
/>

{/* No divider */}
<CustomDividerBreadcrumbs
  divider=""
  items={[
    { name: "Home", href: "/" },
    { name: "Library", href: "/library" },
    { name: "Data" }
  ]}
/>`;

    const IconBreadcrumbsCode = `<IconBreadcrumbs
  items={[
    { name: "Home", href: "/" },
    { name: "Library", href: "/library" },
    { name: "Default" }
  ]}
/>`;


    return (
        <DashboardLayout
            title="Breadcrumbs"
            breadcrumb={[
                { name: "Home", href: "/" },
                { name: "Components" },
                { name: "Breadcrumbs", href: "/components/breadcrumbs" }
            ]}
        >
            <div className="space-y-6">
                {/* Basic Examples */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Container className="p-5">
                        <div>
                            <HeaderText
                                TitleHeader="Default"
                                title="Breadcrumbs"
                            />
                            <div className="mt-5">
                                <CodePreviewToggle
                                    previewContent={
                                        <DefaultBreadcrumbs
                                            items={[
                                                { name: "Home", href: "/" },
                                                { name: "Library", href: "/library" },
                                                { name: "Default" }
                                            ]}
                                        />
                                    }
                                    codeContent={defaultBreadcrumbsCode}
                                    defaultView="preview"
                                />
                            </div>
                        </div>
                    </Container>

                    <Container className="p-5">
                        <div>
                            <HeaderText
                                TitleHeader="With Page Title"
                                title="Breadcrumbs"
                            />
                            <div className="mt-5">
                                <CodePreviewToggle
                                    previewContent={
                                        <BreadcrumbsWithPageTitle
                                            pageTitle="Page Title"
                                            items={[
                                                { name: "Home", href: "/" },
                                                { name: "Components", href: "/components" },
                                                { name: "Breadcrumbs" }
                                            ]}
                                        />
                                    }
                                    codeContent={withPageTitleCode}
                                    defaultView="preview"
                                />
                            </div>
                        </div>
                    </Container>

                    <Container className="p-5">
                        <div>
                            <HeaderText
                                TitleHeader="Centered"
                                title="Breadcrumbs"
                            />
                            <div className="mt-5">
                                <CodePreviewToggle
                                    previewContent={
                                        <CenteredBreadcrumbs
                                            items={[
                                                { name: "Home", href: "/" },
                                                { name: "Library", href: "/library" },
                                                { name: "Centered Position" }
                                            ]}
                                        />
                                    }
                                    codeContent={centeredBreadcrumbsCode}
                                    defaultView="preview"
                                />
                            </div>
                        </div>
                    </Container>

                    <Container className="p-5">
                        <div>
                            <HeaderText
                                TitleHeader="Right Positioned"
                                title="Breadcrumbs"
                            />
                            <div className="mt-5">
                                <CodePreviewToggle
                                    previewContent={
                                        <RightBreadcrumbs
                                            items={[
                                                { name: "Home", href: "/" },
                                                { name: "Library", href: "/library" },
                                                { name: "Right Position" }
                                            ]}
                                        />
                                    }
                                    codeContent={rightBreadcrumbsCode}
                                    defaultView="preview"
                                />
                            </div>
                        </div>
                    </Container>

                    <Container className="p-5">
                        <div>
                            <HeaderText
                                TitleHeader="With Home Icon"
                                title="Breadcrumbs"
                            />
                            <div className="mt-5">
                                <CodePreviewToggle
                                    previewContent={
                                        <IconBreadcrumbs
                                            items={[
                                                { name: "Home", href: "/" },
                                                { name: "Library", href: "/library" },
                                                { name: "Default" }
                                            ]}
                                        />
                                    }
                                    codeContent={IconBreadcrumbsCode}
                                    defaultView="preview"
                                />
                            </div>
                        </div>
                    </Container>
                </div>

                {/* Custom Dividers */}
                <Container className="p-5">
                    <div>
                        <HeaderText
                            TitleHeader="Custom Dividers"
                            title="Breadcrumbs with Different Separators"
                        />
                        <div className="mt-5 space-y-4">
                            <div>
                                <p className="text-sm text-gray-600 mb-2">Chevron (&gt;) - Most common</p>
                                <CustomDividerBreadcrumbs
                                    divider=">"
                                    items={[
                                        { name: "Home", href: "/" },
                                        { name: "Library", href: "/library" },
                                        { name: "Data" }
                                    ]}
                                />
                            </div>

                            <div>
                                <p className="text-sm text-gray-600 mb-2">Pipe (|) - Clean separation</p>
                                <CustomDividerBreadcrumbs
                                    divider="|"
                                    items={[
                                        { name: "Home", href: "/" },
                                        { name: "Library", href: "/library" },
                                        { name: "Data" }
                                    ]}
                                />
                            </div>

                            <div>
                                <p className="text-sm text-gray-600 mb-2">Slash (/) - File system style</p>
                                <CustomDividerBreadcrumbs
                                    divider="/"
                                    items={[
                                        { name: "Home", href: "/" },
                                        { name: "Library", href: "/library" },
                                        { name: "Data" }
                                    ]}
                                />
                            </div>

                            <div>
                                <p className="text-sm text-gray-600 mb-2">Bullet (•) - Minimalist</p>
                                <CustomDividerBreadcrumbs
                                    divider="•"
                                    items={[
                                        { name: "Home", href: "/" },
                                        { name: "Library", href: "/library" },
                                        { name: "Data" }
                                    ]}
                                />
                            </div>

                            <div>
                                <p className="text-sm text-gray-600 mb-2">No divider - Spaced items</p>
                                <CustomDividerBreadcrumbs
                                    divider=""
                                    items={[
                                        { name: "Home", href: "/" },
                                        { name: "Library", href: "/library" },
                                        { name: "Data" }
                                    ]}
                                />
                            </div>
                        </div>
                        <div className="mt-5">
                            <CodeBlock
                                code={customDividersCode}
                                language="jsx"
                                title="Custom Divider Breadcrumbs"
                            />
                        </div>
                    </div>
                </Container>

                {/* Real-world Examples */}
                <Container className="p-5">
                    <HeaderText
                        TitleHeader="Real-world Examples"
                        title="Common Breadcrumb Patterns"
                    />

                    <div className="mt-5 space-y-6">
                        <div>
                            <h4 className="text-sm font-medium text-gray-900 mb-3">E-commerce Navigation</h4>
                            <IconBreadcrumbs
                                items={[
                                    { name: "Home", href: "/" },
                                    { name: "Electronics", href: "/electronics" },
                                    { name: "Smartphones", href: "/electronics/smartphones" },
                                    { name: "iPhone 15 Pro" }
                                ]}
                            />
                        </div>

                        <div>
                            <h4 className="text-sm font-medium text-gray-900 mb-3">Documentation Site</h4>
                            <DefaultBreadcrumbs
                                items={[
                                    { name: "Docs", href: "/docs" },
                                    { name: "Getting Started", href: "/docs/getting-started" },
                                    { name: "Installation", href: "/docs/getting-started/installation" },
                                    { name: "Configuration" }
                                ]}
                            />
                        </div>

                        <div>
                            <h4 className="text-sm font-medium text-gray-900 mb-3">Admin Dashboard</h4>
                            <BreadcrumbsWithPageTitle
                                pageTitle="User Profile Settings"
                                items={[
                                    { name: "Dashboard", href: "/admin" },
                                    { name: "Users", href: "/admin/users" },
                                    { name: "John Doe", href: "/admin/users/123" },
                                    { name: "Settings" }
                                ]}
                            />
                        </div>

                        <div>
                            <h4 className="text-sm font-medium text-gray-900 mb-3">File System Browser</h4>
                            <CustomDividerBreadcrumbs
                                divider="/"
                                items={[
                                    { name: "Root", href: "/" },
                                    { name: "Documents", href: "/documents" },
                                    { name: "Projects", href: "/documents/projects" },
                                    { name: "2024", href: "/documents/projects/2024" },
                                    { name: "website-redesign" }
                                ]}
                            />
                        </div>
                    </div>
                </Container>

                {/* Usage Guidelines */}
                <BreadcrumbGuidelines />
            </div>
        </DashboardLayout>
    );
};

export default BreadCrumbPage;