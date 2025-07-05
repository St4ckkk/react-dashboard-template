import DashboardLayout from '@components/DashboardLayout';
import Container from '@components/ui/container/Container';
import CodeBlock from '@components/CodeBlock';
import CodePreviewToggle from '@components/CodePreviewToggle';
import HeaderText from '@components/HeaderText';
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

                <Container className="p-5 col-span-1 md:col-span-2">
                    <div>
                        <HeaderText
                            TitleHeader="Breadcrumbs with different dividers"
                            title="Breadcrumbs"
                        />
                        <div className="mt-5 space-y-4">
                            <CustomDividerBreadcrumbs
                                divider=">"
                                items={[
                                    { name: "Home", href: "/" },
                                    { name: "Library", href: "/library" },
                                    { name: "Data" }
                                ]}
                            />

                            <CustomDividerBreadcrumbs
                                divider="|"
                                items={[
                                    { name: "Home", href: "/" },
                                    { name: "Library", href: "/library" },
                                    { name: "Data" }
                                ]}
                            />

                            <CustomDividerBreadcrumbs
                                divider="-"
                                items={[
                                    { name: "Home", href: "/" },
                                    { name: "Library", href: "/library" },
                                    { name: "Data" }
                                ]}
                            />

                            <CustomDividerBreadcrumbs
                                divider="•"
                                items={[
                                    { name: "Home", href: "/" },
                                    { name: "Library", href: "/library" },
                                    { name: "Data" }
                                ]}
                            />

                            <CustomDividerBreadcrumbs
                                divider=""
                                items={[
                                    { name: "Home", href: "/" },
                                    { name: "Library", href: "/library" },
                                    { name: "Data" }
                                ]}
                            />
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
            </div>
        </DashboardLayout>
    );
};

export default BreadCrumbPage;