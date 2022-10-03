import { Card, Skeleton } from 'antd';
import Container from '@comp/container';
import Image from './5e4faa19cdcf8.jpg';
import styles from './index.module.less';
import { TypeDetail } from '@page/home/useData';
import useVideoPreview from '@/hooks/useVideoPreview';
import Mask from '../cardMask';

interface TypeProps {
  title: string;
  type: 'album' | 'video';
  dataSource: Array<TypeDetail | any>;
}

export default ({ title, dataSource }: TypeProps) => {
  const { setShow } = useVideoPreview();
  const [curId, setCurId] = useState(null);

  const renderDetail = (data: TypeDetail) => {
    const ds = {
      type: '',
      mask: '',
      src: '',
      isShow: false,
    };
    if ('video' in data) {
      ds.type = 'video';
      ds.mask = data.videoMask;
      ds.src = data.video;
    } else if ('album' in data) {
      ds.type = 'album';
      ds.mask = data.albumMask;
      ds.src = data.album;
    }
    return (
      <div className={styles.detail} onClick={() => setShow(true, ds.src)}>
        <img className={styles.img} alt="" src={ds.mask ? `${import.meta.env.VITE_HOST}${ds.mask}` : Image} />
        <Mask
          isShow={curId === data.id}
          title="测试一个"
          desc="这个是一段不多不少的描述这个是一段不多不少的描述这个是一段不多不少的描述这个是一段不多不少的描述这个是一段不多不少的描述这个是一段不多不少的描述"
        />
      </div>
    );
  };

  return (
    <>
      <Container title={title}>
        <div className={styles.feed}>
          {dataSource.map(item => (
            <Card
              hoverable
              key={item.id || item}
              className={styles.card}
              onMouseEnter={() => setCurId(item.id)}
              onMouseLeave={() => setCurId(null)}
            >
              {renderDetail(item)}
            </Card>
          ))}
          <Card key="lastCard" hoverable className={styles.lastCard} bordered={false}>
            <h1>查看更多</h1>
            <Skeleton active paragraph={{ rows: 6 }} />
          </Card>
        </div>
      </Container>
    </>
  );
};
