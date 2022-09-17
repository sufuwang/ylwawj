import { Card, Skeleton } from 'antd';
import Container from '@comp/container';
import Image from './5e4faa19cdcf8.jpg';
import Video from '@comp/video';
import styles from './index.module.less';

interface TypeProps {
  title: string;
  type: 'image' | 'video';
  dataSource: Array<any>;
}

export default ({ title, type, dataSource }: TypeProps) => {
  const [isShowVideo, setShowVideo] = useState(false);

  const handleClick = () => {
    setShowVideo(true);
  };

  return (
    <>
      <Video isShow={type === 'video' && isShowVideo} src={''} onHide={() => setShowVideo(false)} />
      <Container title={title}>
        <div className={styles.feed}>
          {dataSource.map(d => (
            <Card hoverable key={d} className={styles.card}>
              <div className={styles.child}>
                <img alt={d} src={Image} onClick={handleClick} />
              </div>
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
