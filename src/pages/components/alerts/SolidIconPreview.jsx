import React, { useState } from 'react';
import { AlertWithIcon } from '@components/ui/alerts/Alert';
import { FiInfo, FiAlertTriangle, FiCheckCircle, FiXCircle } from 'react-icons/fi';

const SolidIconPreview = ({ handleDismiss }) => {
    const [alerts, setAlerts] = useState({
        solidWithIconPrimary: true,
        solidWithIconSecondary: true,
        solidWithIconSuccess: true,
        solidWithIconDanger: true,
        solidWithIconWarning: true,
        solidWithIconInfo: true,
        solidWithIconLight: true,
        solidWithIconDark: true,
    });

    const dismissAlert = handleDismiss || ((alertKey) => {
        setAlerts(prev => ({
            ...prev,
            [alertKey]: false
        }));
    });

    return (
        <div className="space-y-4">
            {alerts.solidWithIconPrimary && (
                <AlertWithIcon
                    message="A simple primary alert with solid background and icon"
                    variant="primary"
                    icon={<FiInfo className="w-5 h-5" />}
                    solid={true}
                    onDismiss={() => dismissAlert('solidWithIconPrimary')}
                />
            )}
            {alerts.solidWithIconSecondary && (
                <AlertWithIcon
                    message="A simple secondary alert with solid background and icon"
                    variant="secondary"
                    icon={<FiInfo className="w-5 h-5" />}
                    solid={true}
                    onDismiss={() => dismissAlert('solidWithIconSecondary')}
                />
            )}
            {alerts.solidWithIconSuccess && (
                <AlertWithIcon
                    message="A simple success alert with solid background and icon"
                    variant="success"
                    icon={<FiCheckCircle className="w-5 h-5" />}
                    solid={true}
                    onDismiss={() => dismissAlert('solidWithIconSuccess')}
                />
            )}
            {alerts.solidWithIconDanger && (
                <AlertWithIcon
                    message="A simple danger alert with solid background and icon"
                    variant="danger"
                    icon={<FiXCircle className="w-5 h-5" />}
                    solid={true}
                    onDismiss={() => dismissAlert('solidWithIconDanger')}
                />
            )}
            {alerts.solidWithIconWarning && (
                <AlertWithIcon
                    message="A simple warning alert with solid background and icon"
                    variant="warning"
                    icon={<FiAlertTriangle className="w-5 h-5" />}
                    solid={true}
                    onDismiss={() => dismissAlert('solidWithIconWarning')}
                />
            )}
            {alerts.solidWithIconInfo && (
                <AlertWithIcon
                    message="A simple info alert with solid background and icon"
                    variant="info"
                    icon={<FiInfo className="w-5 h-5" />}
                    solid={true}
                    onDismiss={() => dismissAlert('solidWithIconInfo')}
                />
            )}
            {alerts.solidWithIconLight && (
                <AlertWithIcon
                    message="A simple light alert with solid background and icon"
                    variant="light"
                    icon={<FiInfo className="w-5 h-5" />}
                    solid={true}
                    onDismiss={() => dismissAlert('solidWithIconLight')}
                />
            )}
            {alerts.solidWithIconDark && (
                <AlertWithIcon
                    message="A simple dark alert with solid background and icon"
                    variant="dark"
                    icon={<FiInfo className="w-5 h-5" />}
                    solid={true}
                    onDismiss={() => dismissAlert('solidWithIconDark')}
                />
            )}
        </div>
    );
};

export default SolidIconPreview;