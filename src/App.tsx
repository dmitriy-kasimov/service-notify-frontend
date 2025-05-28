import { AlertsPull } from './AlertsPull/AlertsPull.tsx';
import { NotificationsPull } from './NotificationsPull/NotificationsPull.tsx';
import { ModalInfo } from './Modals/ModalInfo.tsx';

import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';


function App() {
    const onClick = () => {
        toast('Wow so easy!', {
            position: 'top-center',
            autoClose: 3000,
        });
    }

    return (
        <>
            <button onClick={onClick}>TOAST</button>
            <AlertsPull />
            <NotificationsPull />
            <ModalInfo />
        </>
    );
}

export default App;
