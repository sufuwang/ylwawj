import routes from '@/routes/index';
import { useRoutes } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

const App = () => {
  const element = useRoutes(routes);
  return <ConfigProvider locale={zhCN}>{element}</ConfigProvider>;
};

export default App;
