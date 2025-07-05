import React, { useState } from 'react';
import { DefaultAlert } from '@components/ui/alerts/Alert';

const DefaultPreview = ({ handleDismiss }) => {
    const [alerts, setAlerts] = useState({
        default: true,
        defaultSecondary: true,
        defaultSuccess: true,
        defaultDanger: true,
        defaultWarning: true,
        defaultInfo: true,
        defaultLight: true,
        defaultDark: true,
    });


    const dismissAlert = handleDismiss || ((alertKey) => {
        setAlerts(prev => ({
            ...prev,
            [alertKey]: false
        }));
    });

    return (
        <div className="space-y-4">
            {
                alerts.default && (
                    <DefaultAlert
                        message="A simple primary alert—check it out!"
                        variant="primary"
                        onDismiss={() => dismissAlert('default')}
                    />
                )
            }
            {
                alerts.defaultSecondary && (
                    <DefaultAlert
                        message="A simple secondary alert—check it out!"
                        variant="secondary"
                        onDismiss={() => dismissAlert('defaultSecondary')}
                    />
                )
            }
            {
                alerts.defaultSuccess && (
                    <DefaultAlert
                        message="A simple success alert—check it out!"
                        variant="success"
                        onDismiss={() => dismissAlert('defaultSuccess')}
                    />
                )
            }
            {
                alerts.defaultDanger && (
                    <DefaultAlert
                        message="A simple danger alert—check it out!"
                        variant="danger"
                        onDismiss={() => dismissAlert('defaultDanger')}
                    />
                )
            }
            {
                alerts.defaultWarning && (
                    <DefaultAlert
                        message="A simple warning alert—check it out!"
                        variant="warning"
                        onDismiss={() => dismissAlert('defaultWarning')}
                    />
                )
            }
            {
                alerts.defaultInfo && (
                    <DefaultAlert
                        message="A simple info alert—check it out!"
                        variant="info"
                        onDismiss={() => dismissAlert('defaultInfo')}
                    />
                )
            }
            {
                alerts.defaultLight && (
                    <DefaultAlert
                        message="A simple light alert—check it out!"
                        variant="light"
                        onDismiss={() => dismissAlert('defaultLight')}
                    />
                )
            }
            {
                alerts.defaultDark && (
                    <DefaultAlert
                        message="A simple dark alert—check it out!"
                        variant="dark"
                        onDismiss={() => dismissAlert('defaultDark')}
                    />
                )
            }
        </div>
    );
};

export default DefaultPreview;