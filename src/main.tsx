import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ToastProvider } from './providers/ToastProvider/ToastProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ToastProvider>
        <App />
    </ToastProvider>
)
