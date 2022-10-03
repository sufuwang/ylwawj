import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from '@/App';
import 'antd/dist/antd.css';

const container = document.getElementById('root');
const root = createRoot(container!);
const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
root.render(app);
