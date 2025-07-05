import React, { useState } from 'react';
import { SolidAlert } from '@components/ui/alerts/Alert';

const SolidPreview = ({ handleDismiss }) => {
    const [alerts, setAlerts] = useState({
        solid: true,
        solidSecondary: true,
        solidSuccess: true,
        solidDanger: true,
        solidWarning: true,
        solidInfo: true,
        solidLight: true,
        solidDark: true,
    });

    const dismissAlert = handleDismiss || ((alertKey) => {
        setAlerts(prev => ({
            ...prev,
            [alertKey]: false
        }));
    });

    return (
        <div className="space-y-4">
            {alerts.solid && (
                <SolidAlert
                    message="A simple primary alert with solid color—check it out!"
                    variant="primary"
                    onDismiss={() => dismissAlert('solid')}
                />
            )}
            {alerts.solidSecondary && (
                <SolidAlert
                    message="A simple secondary alert with solid color—check it out!"
                    variant="secondary"
                    onDismiss={() => dismissAlert('solidSecondary')}
                />
            )}
            {alerts.solidSuccess && (
                <SolidAlert
                    message="A simple success alert with solid color—check it out!"
                    variant="success"
                    onDismiss={() => dismissAlert('solidSuccess')}
                />
            )}
            {alerts.solidDanger && (
                <SolidAlert
                    message="A simple danger alert with solid color—check it out!"
                    variant="danger"
                    onDismiss={() => dismissAlert('solidDanger')}
                />
            )}
            {alerts.solidWarning && (
                <SolidAlert
                    message="A simple warning alert with solid color—check it out!"
                    variant="warning"
                    onDismiss={() => dismissAlert('solidWarning')}
                />
            )}
            {alerts.solidInfo && (
                <SolidAlert
                    message="A simple info alert with solid color—check it out!"
                    variant="info"
                    onDismiss={() => dismissAlert('solidInfo')}
                />
            )}
            {alerts.solidLight && (
                <SolidAlert
                    message="A simple light alert with solid color—check it out!"
                    variant="light"
                    onDismiss={() => dismissAlert('solidLight')}
                />
            )}
            {alerts.solidDark && (
                <SolidAlert
                    message="A simple dark alert with solid color—check it out!"
                    variant="dark"
                    onDismiss={() => dismissAlert('solidDark')}
                />
            )}
        </div>
    );
};

export default SolidPreview;