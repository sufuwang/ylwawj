import { Segmented, Card, Select } from 'antd';
import type { SegmentedLabeledOption, SegmentedValue } from 'antd/lib/Segmented';
import Video from './video';
import Manage from './manage';
import styles from './index.module.less';

const { Option } = Select;

const Options: (SegmentedLabeledOption & { key: string })[] = [
  { key: '新闻', label: '新闻中心', value: 'news', disabled: true },
  { key: '工程案例', label: '工程案例', value: 'example', disabled: true },
  { key: '视频', label: '视频中心', value: 'video', disabled: false },
];
const defaultOption = Options.find(d => d.disabled === false)!;

export default () => {
  const [curKey, setKey] = useState(defaultOption);
  const handleChangeSegment = (value: SegmentedValue) => {
    setKey(Options.find(d => d.value === value) || defaultOption);
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <Segmented defaultValue={defaultOption.value} options={Options} onChange={handleChangeSegment} />
          <Segmented defaultValue={defaultOption.value} options={Options} onChange={handleChangeSegment} />
        </div>
        <div className={styles.content}>
          <Card className={styles.card} size="small" title={<>新建{curKey.key}</>}>
            <Video />
          </Card>
          <Card className={styles.card} size="small" title="更多功能">
            <Manage />
          </Card>
        </div>
      </div>
    </>
  );
};
