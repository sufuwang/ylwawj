import { Timeline, Card } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import Container from '@comp/container';
import classnames from 'classnames';
import styles from './index.module.less';

const data = [
  { key: 'a', label: '2015-09-01', content: '公司建立' },
  { key: 'b', label: '', content: 'Solve initial network problems1' },
  { key: 'c', label: '', content: 'Technical testing2' },
  { key: 'd', label: '2015-09-01', content: '获得***证书' },
  { key: 'e', label: '', content: 'Solve initial network problems3' },
  { key: 'f', label: '', content: 'Technical testing4' },
  { key: 'g', label: '2015-09-01', content: '参与***活动' },
  { key: 'h', label: '', content: 'Solve initial network problems5' },
  { key: 'i', label: '', content: 'Technical testing6' },
  { key: 'j', label: '2015-09-01', content: '公司迁址' },
  { key: 'k', label: '', content: 'Solve initial network problems7' },
  { key: 'l', label: '', content: 'Technical testing8' },
  { key: 'm', label: '2015-09-01', content: '公司赞助***' },
  { key: 'o', label: '', content: 'Solve initial network problems9' },
  { key: 'p', label: '', content: 'Technical testing11' },
  { key: 'q', label: '2015-09-01', content: '公司赞助***' },
  { key: 'r', label: '', content: 'Solve initial network problems12' },
  { key: 's', label: '', content: 'Technical testing13' },
];
type TypeData = typeof data[0];
export default () => {
  const [curKey, setKey] = useState(data[0].key);

  const renderItem = ({ label, key, content }: TypeData) => {
    const className = classnames({ [styles.timelineItem]: true, [styles.timelineSelectedItem]: key === curKey });
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
        <Card className={styles.card} bordered={false} title={data.find(d => d.key === curKey)?.content || 'qw'}>
          1212
        </Card>
      </div>
    </Container>
  );
};
