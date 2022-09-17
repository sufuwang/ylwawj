import {
  ReadOutlined,
  HomeOutlined,
  BarsOutlined,
  VideoCameraOutlined,
  FormatPainterOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu, PageHeader } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './index.module.less';

const items = [
  {
    label: '首页',
    key: 'home',
    path: '/',
    icon: <HomeOutlined />,
  },
  {
    label: '新闻中心',
    key: 'news',
    path: '/news',
    disabled: true,
    icon: <BarsOutlined />,
  },
  {
    label: '工程案例',
    key: 'example',
    path: '/example',
    disabled: true,
    icon: <FormatPainterOutlined />,
  },
  {
    label: '视频中心',
    key: 'video',
    path: '/video',
    disabled: true,
    icon: <VideoCameraOutlined />,
  },
  {
    label: '企业简介',
    key: 'intro',
    path: '#intro',
    icon: <ReadOutlined />,
  },
  {
    label: '联系我们',
    key: 'contact',
    path: '#contact',
    icon: <TeamOutlined />,
  },
];

interface TypeProps {
  children: React.ReactNode;
}
export default ({ children }: TypeProps) => {
  const navigate = useNavigate();
  const pathname = useLocation().pathname.replace('/', '');

  const [current, setCurrent] = useState(pathname.length ? pathname : 'home');

  const onClick: MenuProps['onClick'] = ({ key }) => {
    setCurrent(key);
    const path = items.find(({ key: d }) => d === key)?.path || '/';
    navigate(path);
    if (path.startsWith('#')) {
      setTimeout(() => {
        const element = document.getElementById(path.replace('#', ''));
        if (element) {
          element.scrollIntoView();
        }
      });
    } else {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      });
    }
  };
  console.info(styles);

  return (
    <>
      <PageHeader
        className={styles.header}
        title="陕西杨凌我爱我家装饰装修有限责任公司"
        // subTitle={<h1>12</h1>}
        extra={[
          <Menu
            key="menu"
            className={styles.menu}
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
          />,
        ]}
      />
      <div className={styles.children}>{children}</div>
    </>
  );
};
