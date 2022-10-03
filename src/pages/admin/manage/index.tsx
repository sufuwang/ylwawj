import { Transfer } from 'antd';
import styles from './index.module.less';

interface TypeProps {
  activeData: string[];
  data: any[];
  setActiveData: (arg: string[]) => void;
}

const App = ({ data, activeData, setActiveData }: TypeProps) => {
  const handleChange = (newTargetKeys: string[]) => {
    setActiveData(newTargetKeys);
  };

  const renderItem = (item: any) => {
    const customLabel = (
      <span className="custom-item">
        {item.title} - {item.desc}
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
        dataSource={data}
        listStyle={{
          width: '100%',
          height: 'auto',
          maxHeight: 600,
        }}
        titles={['未发布的数据', '已发布的数据']}
        targetKeys={activeData}
        onChange={handleChange}
        render={renderItem}
      />
    </div>
  );
};

export default App;
