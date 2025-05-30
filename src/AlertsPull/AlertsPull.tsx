import { FC } from 'react';
import { ToastOptions, toast } from 'react-toastify';
import { TMessage } from '../shared/types/TMessage.ts';

export const AlertsPull: FC = () => {
    const alertProps:  ToastOptions<unknown> = {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: true,
        closeButton: false
    }

    if ('alt' in window) {
        alt.on(
            'c:f:alert',
            (notificationJSON: string) => {
                const notification: TMessage = JSON.parse(notificationJSON)
                const type = notification.type
                switch (type){
                    case 'success': {
                        toast.success(notification.body, alertProps);
                        break
                    }
                    case 'error': {
                        toast.error(notification.body, alertProps)
                        break
                    }
                    case 'info': {
                        toast.info(notification.body, alertProps)
                        break
                    }
                    case 'warning': {
                        toast.warning(notification.body, alertProps)
                        break
                    }
                    default: {
                        toast(notification.body, alertProps);
                        break
                    }
                }
            },
        );
    }

    return (<></>);
};
