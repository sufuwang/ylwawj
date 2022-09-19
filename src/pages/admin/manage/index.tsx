import { Transfer } from 'antd';
import styles from './index.module.less';

const App = () => {
  const [mockData, setMockData] = useState([]);
  const [targetKeys, setTargetKeys] = useState([]);

  const getMock = () => {
    const tempTargetKeys = [] as any;
    const tempMockData = [] as any;

    for (let i = 0; i < 20; i++) {
      const data = {
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        chosen: i % 2 === 0,
      };
      if (data.chosen) {
        tempTargetKeys.push(data.key);
      }
      tempMockData.push(data);
    }

    setMockData(tempMockData);
    setTargetKeys(tempTargetKeys);
  };

  useEffect(() => {
    getMock();
  }, []);

  const handleChange = (newTargetKeys: any, direction: any, moveKeys: any) => {
    console.log(newTargetKeys, direction, moveKeys);
    setTargetKeys(newTargetKeys);
  };

  const renderItem = (item: any) => {
    const customLabel = (
      <span className="custom-item">
        {item.title} - {item.description}
      </span>
    );
    return {
      label: customLabel,
      value: item.title,
    };
  };

  return (
    <div className={styles.container}>
      <Transfer
        dataSource={mockData}
        listStyle={{
          width: '100%',
          height: 'auto',
          maxHeight: 600,
        }}
        titles={['未发布的数据', '已发布的数据']}
        targetKeys={targetKeys}
        onChange={handleChange}
        render={renderItem}
      />
    </div>
  );
};

export default App;
