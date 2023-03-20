import routes from '@/routes/index';
import { useRoutes } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import useVideoPreview from '@hook/useVideoPreview';
import './App.module.less';

const App = () => {
  const element = useRoutes(routes);
  const { render: renderVideo } = useVideoPreview();

  return (
    <ConfigProvider locale={zhCN}>
      {renderVideo()}
      {element}
    </ConfigProvider>
  );
};

export default App;
