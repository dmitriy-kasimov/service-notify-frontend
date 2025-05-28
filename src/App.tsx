import { AlertsPull } from './AlertsPull/AlertsPull.tsx';
import { NotificationsPull } from './NotificationsPull/NotificationsPull.tsx';

import 'react-toastify/dist/ReactToastify.css';

function App() {

    return (
        <>
            <AlertsPull />
            <NotificationsPull />
        </>
    );
}

export default App;
