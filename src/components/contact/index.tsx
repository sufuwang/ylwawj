import { Descriptions, Image } from 'antd';
import Container from '@comp/container';
// import ImageSrc from './WX20220917-155418@2x.png';
import YYZZImageSrc from './yyzz.jpg';
import styles from './index.module.less';

export default () => {
  const [isShow, setShow] = useState(false);
  const [column, setColumn] = useState(4);

  const handle = () => {
    const height = document.documentElement.scrollTop;
    if (height > 1000 && !isShow) {
      setShow(true);
    }
  };
  useEffect(() => {
    if (document.body.clientWidth < 600) {
      setColumn(2);
    }
    document.onscroll = handle;
  }, []);
  useEffect(() => {
    if (isShow) {
      document.onscroll = null;
    }
  }, [isShow]);

  return (
    <Container id="contact" title="联系我们" className={styles.container}>
      <div className={styles.descriptions}>
        <Descriptions bordered column={column}>
          <Descriptions.Item label="公司名称" span={2}>
            陕西杨凌我爱我家装饰装修有限责任公司
          </Descriptions.Item>
          <Descriptions.Item label="联系方式" span={2}>
            137-0022-7622 / 157-7195-7195
          </Descriptions.Item>
          <Descriptions.Item label="地址" span={2}>
            杨凌示范区西农路隆发城市广场北区11楼1101
          </Descriptions.Item>
          <Descriptions.Item label="公司备案号" span={2}>
            <a href="https://beian.miit.gov.cn/" target="window">
              陕ICP备16018635号-1
            </a>
          </Descriptions.Item>
          {/* <Descriptions.Item label="企业微信" span={2}>
          <Image width={200} src={ImageSrc} />
        </Descriptions.Item> */}
          <Descriptions.Item label="企业资质" span={2}>
            {isShow && <Image width={200} src={YYZZImageSrc} />}
          </Descriptions.Item>
        </Descriptions>
      </div>
    </Container>
  );
};
