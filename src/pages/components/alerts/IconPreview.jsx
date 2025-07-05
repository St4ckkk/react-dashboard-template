import React, { useState } from 'react';
import { AlertWithIcon } from '@components/ui/alerts/Alert';
import { FiInfo, FiAlertTriangle, FiCheckCircle, FiXCircle } from 'react-icons/fi';

const IconPreview = ({ handleDismiss }) => {
    const [alerts, setAlerts] = useState({
        withIconPrimary: true,
        withIconSecondary: true,
        withIconSuccess: true,
        withIconDanger: true,
        withIconWarning: true,
        withIconInfo: true,
        withIconLight: true,
        withIconDark: true,
    });

    const dismissAlert = handleDismiss || ((alertKey) => {
        setAlerts(prev => ({
            ...prev,
            [alertKey]: false
        }));
    });

    return (
        <div className="space-y-4">
            {alerts.withIconPrimary && (
                <AlertWithIcon
                    message="A simple primary alert with icon—check it out!"
                    variant="primary"
                    icon={<FiInfo className="w-5 h-5" />}
                    onDismiss={() => dismissAlert('withIconPrimary')}
                />
            )}
            {alerts.withIconSecondary && (
                <AlertWithIcon
                    message="A simple secondary alert with icon—check it out!"
                    variant="secondary"
                    icon={<FiInfo className="w-5 h-5" />}
                    onDismiss={() => dismissAlert('withIconSecondary')}
                />
            )}
            {alerts.withIconSuccess && (
                <AlertWithIcon
                    message="A simple success alert with icon—check it out!"
                    variant="success"
                    icon={<FiCheckCircle className="w-5 h-5" />}
                    onDismiss={() => dismissAlert('withIconSuccess')}
                />
            )}
            {alerts.withIconDanger && (
                <AlertWithIcon
                    message="A simple danger alert with icon—check it out!"
                    variant="danger"
                    icon={<FiXCircle className="w-5 h-5" />}
                    onDismiss={() => dismissAlert('withIconDanger')}
                />
            )}
            {alerts.withIconWarning && (
                <AlertWithIcon
                    message="A simple warning alert with icon—check it out!"
                    variant="warning"
                    icon={<FiAlertTriangle className="w-5 h-5" />}
                    onDismiss={() => dismissAlert('withIconWarning')}
                />
            )}
            {alerts.withIconInfo && (
                <AlertWithIcon
                    message="A simple info alert with icon—check it out!"
                    variant="info"
                    icon={<FiInfo className="w-5 h-5" />}
                    onDismiss={() => dismissAlert('withIconInfo')}
                />
            )}
            {alerts.withIconLight && (
                <AlertWithIcon
                    message="A simple light alert with icon—check it out!"
                    variant="light"
                    icon={<FiInfo className="w-5 h-5" />}
                    onDismiss={() => dismissAlert('withIconLight')}
                />
            )}
            {alerts.withIconDark && (
                <AlertWithIcon
                    message="A simple dark alert with icon—check it out!"
                    variant="dark"
                    icon={<FiInfo className="w-5 h-5" />}
                    onDismiss={() => dismissAlert('withIconDark')}
                />
            )}
        </div>
    );
};

export default IconPreview;