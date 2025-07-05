
import { useState } from 'react';
import { OutlineAlert } from '@components/ui/alerts/Alert';

const OutlinePreview = ({ handleDismiss }) => {
    const [alerts, setAlerts] = useState({
        outlinePrimary: true,
        outlineSecondary: true,
        outlineSuccess: true,
        outlineDanger: true,
        outlineWarning: true,
        outlineInfo: true,
        outlineLight: true,
        outlineDark: true,
    });

    const dismissAlert = handleDismiss || ((alertKey) => {
        setAlerts(prev => ({
            ...prev,
            [alertKey]: false
        }));
    });

    return (
        <div className="space-y-4">
            {alerts.outlinePrimary && (
                <OutlineAlert
                    message="A simple primary outlined alert—check it out!"
                    variant="primary"
                    onDismiss={() => dismissAlert('outlinePrimary')}
                />
            )}
            {alerts.outlineSecondary && (
                <OutlineAlert
                    message="A simple secondary outlined alert—check it out!"
                    variant="secondary"
                    onDismiss={() => dismissAlert('outlineSecondary')}
                />
            )}
            {alerts.outlineSuccess && (
                <OutlineAlert
                    message="A simple success outlined alert—check it out!"
                    variant="success"
                    onDismiss={() => dismissAlert('outlineSuccess')}
                />
            )}
            {alerts.outlineDanger && (
                <OutlineAlert
                    message="A simple danger outlined alert—check it out!"
                    variant="danger"
                    onDismiss={() => dismissAlert('outlineDanger')}
                />
            )}
            {alerts.outlineWarning && (
                <OutlineAlert
                    message="A simple warning outlined alert—check it out!"
                    variant="warning"
                    onDismiss={() => dismissAlert('outlineWarning')}
                />
            )}
            {alerts.outlineInfo && (
                <OutlineAlert
                    message="A simple info outlined alert—check it out!"
                    variant="info"
                    onDismiss={() => dismissAlert('outlineInfo')}
                />
            )}
            {alerts.outlineLight && (
                <OutlineAlert
                    message="A simple light outlined alert—check it out!"
                    variant="light"
                    onDismiss={() => dismissAlert('outlineLight')}
                />
            )}
            {alerts.outlineDark && (
                <OutlineAlert
                    message="A simple dark outlined alert—check it out!"
                    variant="dark"
                    onDismiss={() => dismissAlert('outlineDark')}
                />
            )}
        </div>
    );
};

export default OutlinePreview;