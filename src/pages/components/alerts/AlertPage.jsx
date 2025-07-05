
import DashboardLayout from '@components/DashboardLayout';
import Container from '@components/ui/container/Container';
import HeaderText from '@components/HeaderText';
import CodePreviewToggle from '@components/CodePreviewToggle';
import DefaultPreview from './DefaultPreview';
import SolidPreview from './SolidPreview';
import IconPreview from './IconPreview';
import OutlinePreview from './OutlinePreview';
import WithHeadingSeparatorPreview from './WithHeadingSeparatorPreview';

const Alerts = () => {


    const handleDismiss = (alertKey) => {
        setAlerts(prev => ({
            ...prev,
            [alertKey]: false
        }));
    };

    const withHeadingSeparatorAlertCode = `// Alert with Heading and Separator Example
<WithHeadingSeparatorAlert
  heading="Primary Heading"
  message="Et suscipit deleniti earum itaque dignissimos recusandae dolorem qui. Molestiae rerum perferendis laborum."
  description="Temporibus quia et qui aspernatur laboriosam sit veritatis qui sunt."
  variant="primary"
  onDismiss={() => handleDismiss('primary')}
/>`;


    const defaultAlertCode = `// Default Alert Example
<DefaultAlert
  message="A simple primary alert—check it out!"
  variant="primary"
  onDismiss={() => handleDismiss('default')}
/>`;

    const solidAlertCode = `// Solid Alert Example
<SolidAlert
  message="A simple primary alert with solid color—check it out!"
  variant="primary"
  onDismiss={() => handleDismiss('solid')}
/>`;

    const iconAlertCode = `// Alert with Icon Example
<AlertWithIcon
  message="A simple primary alert with icon—check it out!"
  variant="primary"
  icon={<FiInfo className="w-5 h-5" />}
  onDismiss={() => handleDismiss('withIconPrimary')}
/>`;

    const solidIconAlertCode = `// Solid Alert with Icon Example
<AlertWithIcon
  message="A simple primary alert with solid background and icon"
  variant="primary"
  icon={<FiInfo className="w-5 h-5" />}
  solid={true}
  onDismiss={() => handleDismiss('solidWithIconPrimary')}
/>`;

    const outlineAlertCode = `// Outline Alert Example
<OutlineAlert
  message="A simple primary outlined alert—check it out!"
  variant="primary"
  onDismiss={() => handleDismiss('outlinePrimary')}
/>`;

    return (
        <DashboardLayout
            title="Alerts"
            breadcrumb={[
                { name: 'Home', href: '/' },
                { name: 'Components' },
                { name: 'Alerts', href: '/components/alerts' }
            ]}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Container className="p-5">
                    <HeaderText
                        TitleHeader="Default"
                        title="Alerts"
                    />
                    <CodePreviewToggle
                        previewContent={<DefaultPreview handleDismiss={handleDismiss} />}
                        codeContent={defaultAlertCode}
                    />
                </Container>

                <Container className="p-5">
                    <HeaderText
                        TitleHeader="Solid"
                        title="Alerts"
                    />
                    <CodePreviewToggle
                        previewContent={<SolidPreview handleDismiss={handleDismiss} />}
                        codeContent={solidAlertCode}
                    />
                </Container>

                <Container className="p-5">
                    <HeaderText
                        TitleHeader="With Icons"
                        title="Alerts"
                    />
                    <CodePreviewToggle
                        previewContent={<IconPreview handleDismiss={handleDismiss} />}
                        codeContent={iconAlertCode}
                    />
                </Container>



                <Container className="p-5 h-170">
                    <HeaderText
                        TitleHeader="Outline"
                        title="Alerts"
                    />
                    <CodePreviewToggle
                        previewContent={<OutlinePreview handleDismiss={handleDismiss} />}
                        codeContent={outlineAlertCode}
                    />
                </Container>

                <Container className="p-5 md:col-span-2">
                    <HeaderText
                        TitleHeader="With Heading & Separator"
                        title="Alerts"
                    />
                    <CodePreviewToggle
                        previewContent={<WithHeadingSeparatorPreview handleDismiss={handleDismiss} />}
                        codeContent={withHeadingSeparatorAlertCode}
                    />
                </Container>
            </div>
        </DashboardLayout>
    );
};

export default Alerts;