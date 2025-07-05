import React, { useState } from 'react';
import { WithHeadingSeparatorAlert } from '@components/ui/alerts/Alert';

const WithHeadingSeparatorPreview = ({ handleDismiss }) => {
    const [alerts, setAlerts] = useState({
        primary: true,
        secondary: true,
        success: true,
        danger: true,
        warning: true,
        info: true,
        light: true,
        dark: true,
    });

    const dismissAlert = handleDismiss || ((alertKey) => {
        setAlerts(prev => ({
            ...prev,
            [alertKey]: false
        }));
    });

    const longText = "Et suscipit deleniti earum itaque dignissimos recusandae dolorem qui. Molestiae rerum perferendis laborum. Occaecati. Illo ad laboriosam rem molestiae sint.";
    const shortText = "Temporibus quia et qui aspernatur laboriosam sit veritatis qui sunt.";

    return (
        <div className="space-y-4">
            {alerts.primary && (
                <WithHeadingSeparatorAlert
                    heading="Primary Heading"
                    message={longText}
                    description={shortText}
                    variant="primary"
                    onDismiss={() => dismissAlert('primary')}
                />
            )}
            {alerts.secondary && (
                <WithHeadingSeparatorAlert
                    heading="Secondary Heading"
                    message={longText}
                    description={shortText}
                    variant="secondary"
                    onDismiss={() => dismissAlert('secondary')}
                />
            )}
            {alerts.success && (
                <WithHeadingSeparatorAlert
                    heading="Success Heading"
                    message={longText}
                    description={shortText}
                    variant="success"
                    onDismiss={() => dismissAlert('success')}
                />
            )}
            {alerts.danger && (
                <WithHeadingSeparatorAlert
                    heading="Danger Heading"
                    message={longText}
                    description={shortText}
                    variant="danger"
                    onDismiss={() => dismissAlert('danger')}
                />
            )}
            {alerts.warning && (
                <WithHeadingSeparatorAlert
                    heading="Warning Heading"
                    message={longText}
                    description={shortText}
                    variant="warning"
                    onDismiss={() => dismissAlert('warning')}
                />
            )}
            {alerts.info && (
                <WithHeadingSeparatorAlert
                    heading="Info Heading"
                    message={longText}
                    description={shortText}
                    variant="info"
                    onDismiss={() => dismissAlert('info')}
                />
            )}
            {alerts.light && (
                <WithHeadingSeparatorAlert
                    heading="Light Heading"
                    message={longText}
                    description={shortText}
                    variant="light"
                    onDismiss={() => dismissAlert('light')}
                />
            )}
            {alerts.dark && (
                <WithHeadingSeparatorAlert
                    heading="Dark Heading"
                    message={longText}
                    description={shortText}
                    variant="dark"
                    onDismiss={() => dismissAlert('dark')}
                />
            )}
        </div>
    );
};

export default WithHeadingSeparatorPreview;