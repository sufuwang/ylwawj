import { Button, Result } from 'antd';

export default () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Result
        status="success"
        title={`Hi, Count is ${count}`}
        extra={[
          <Button type="primary" key="console" onClick={() => setCount(count + 1)}>
            Add Count
          </Button>,
          <Button key="buy" disabled={count === 0} onClick={() => setCount(0)}>
            Reset
          </Button>,
        ]}
      />
    </>
  );
};
