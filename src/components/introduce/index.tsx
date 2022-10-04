import { Timeline, Card, Carousel } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import Container from '@comp/container';
import classnames from 'classnames';
import styles from './index.module.less';
import Images from './images';

const data = [
  { key: 'a', label: '2011-02-20', content: '公司搬迁至建材市场', album: Images.ld },
  { key: 'b', label: '2012-06-12', content: '参与朗朗圣诞音乐发布会', album: Images.ll },
  { key: 'c', label: '2012-06-12', content: '参与《秦之声》', album: Images.qzs },
];

type TypeData = typeof data[0];
export default () => {
  const [curKey, setKey] = useState(data[0].key);
  const [curData, setData] = useState<TypeData>(data[0]);

  useEffect(() => {
    setData(data.find(d => d.key === curKey) || data[0]);
  }, [curKey]);

  const renderItem = ({ label, key, content }: TypeData) => {
    const className = classnames({
      [styles.timelineItem]: true,
      [styles.timelineSelectedItem]: key === curKey,
    });
    return (
      <Timeline.Item key={key} label={label}>
        <span className={className} onClick={() => setKey(key)}>
          {content}
        </span>
      </Timeline.Item>
    );
  };

  return (
    <Container id="intro" title="企业简介" className={styles.intro}>
      <div className={styles.container}>
        <Timeline className={styles.timeline} mode="left">
          {data.map(d => renderItem(d))}
          <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>至今</Timeline.Item>
        </Timeline>
        <Card className={styles.card} bordered={false} title={curData.content || 'qw'}>
          <Carousel className={styles.carousel} autoplay dotPosition="right">
            {curData.album.map(data => {
              return <img className={styles.img} src={data} key={data} />;
            })}
          </Carousel>
        </Card>
      </div>
    </Container>
  );
};
