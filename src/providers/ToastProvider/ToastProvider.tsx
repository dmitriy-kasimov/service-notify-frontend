import { ReactNode } from 'react';
import { Bounce, ToastContainer } from 'react-toastify';

export const ToastProvider = ({children}: {children: ReactNode}) => {
    return (
        <>
            {children}
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                pauseOnFocusLoss
                pauseOnHover
                theme="dark"
                transition={Bounce}
            />
        </>

    )
}