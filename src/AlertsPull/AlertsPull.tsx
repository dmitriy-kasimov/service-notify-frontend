import { FC, MutableRefObject, useEffect, useRef, useState } from 'react';
import { Alert, AlertItemType, Text } from '@tr271v0r/ui-tool-kit';
import { AlertType } from '@tr271v0r/ui-tool-kit/build/types/src/ui/utils/Alert/AlertItem/types/AlertItemProps';

export const AlertsPull: FC = () => {
    const [alerts, setAlerts] = useState<AlertItemType[]>([]);

    if ('alt' in window) {
        alt.on(
            'c:f:showAlert',
            (
                title: string,
                body: string,
                type: AlertType,
                showTime: number,
            ) => {
                const alert: AlertItemType = {
                    title,
                    body: <Text size={'m'}>{body}</Text>,
                    type,
                    showTime,
                };

                setAlerts([...alerts, alert]);
            },
        );
    }

    const timerCleanAlerts = useRef() as MutableRefObject<
        ReturnType<typeof setTimeout>
    >;
    useEffect(() => {
        if (alerts.length > 0) {
            clearTimeout(timerCleanAlerts.current);
            timerCleanAlerts.current = setTimeout(() => {
                const array = [...alerts];
                array.shift();
                setAlerts(array);
            }, alerts[0].showTime ?? 1500);
        } else {
            clearTimeout(timerCleanAlerts.current);
        }
    }, [alerts]);

    return (
        <Alert
            portalElement={document.getElementById('root') ?? document.body}
            alert={alerts[0]}
        />
    );
};
