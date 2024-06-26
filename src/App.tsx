import { AlertsPull } from './AlertsPull/AlertsPull.tsx';
import { NotificationsPull } from './NotificationsPull/NotificationsPull.tsx';
import { ModalInfo } from './Modals/ModalInfo.tsx';

function App() {
    return (
        <>
            <AlertsPull />
            <NotificationsPull />
            <ModalInfo />
        </>
    );
}

export default App;
