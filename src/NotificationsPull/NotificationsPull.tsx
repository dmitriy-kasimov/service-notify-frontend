import { FC, MutableRefObject, useEffect, useRef, useState } from 'react';
import {
    NotificationItemType,
    NotificationList,
    Text,
} from '@tr271v0r/ui-tool-kit';

export const NotificationsPull: FC = () => {
    const [notifications, setNotifications] = useState<NotificationItemType[]>(
        [],
    );

    if ('alt' in window) {
        alt.on(
            'c:f:showNotification',
            (id: string, title: string, body: string, showTime: number) => {
                const notification: NotificationItemType = {
                    id,
                    title,
                    body: <Text size={'m'}>{body}</Text>,
                    showTime,
                };

                setNotifications([...notifications, notification]);
            },
        );
    }

    const timerRef = useRef() as MutableRefObject<
        ReturnType<typeof setTimeout>
    >;
    useEffect(() => {
        if (notifications.length > 0) {
            clearTimeout(timerRef.current);
            timerRef.current = setTimeout(() => {
                const array = [...notifications];
                array.shift();
                setNotifications(array);
            }, notifications[0].showTime ?? 1500);
        } else {
            clearTimeout(timerRef.current);
        }
    }, [notifications]);

    return (
        <>
            <NotificationList
                notifications={notifications}
                shift={() => {
                    const array = [...notifications];
                    array.shift();
                    setNotifications(array);
                }}
            />
        </>
    );
};
