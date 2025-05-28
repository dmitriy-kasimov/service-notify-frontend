import { FC} from 'react';
import { toast } from 'react-toastify';
import { TMessage } from '../shared/types/TMessage.ts';

export const NotificationsPull: FC = () => {
    if ('alt' in window) {
        alt.on(
            'c:f:notification',
            (notificationJSON: string) => {
                const notification: TMessage = JSON.parse(notificationJSON)
                const type = notification.type
               switch (type){
                   case 'success': {
                       toast.success(notification.body)
                       break
                   }
                   case 'error': {
                       toast.error(notification.body)
                       break
                   }
                   case 'info': {
                       toast.info(notification.body)
                       break
                   }
                   case 'warning': {
                       toast.warning(notification.body)
                       break
                   }
                   default: {
                       toast(notification.body);
                       break
                   }
               }
            },
        );
    }

    return (
        <>
        </>
    );
};
