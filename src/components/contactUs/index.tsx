import { Modal, FloatButton, Form, Input } from 'antd';
import { CustomerServiceOutlined } from '@ant-design/icons';

interface FormData {
  name: string;
  phone: string;
  address: string;
}

export default () => {
  const [form] = Form.useForm();
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<FormData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const onValuesChange = (_: any, d: any) => {
    setData(d);
  };
  const handleOk = () => {
    setIsLoading(true);
    form
      .validateFields()
      .then(async () => {
        console.info(data);
        await fetch('https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=874a5c08-62f9-4209-84e6-3f831a90c454', {
          method: 'post',
          mode: 'no-cors',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({
            msgtype: 'markdown',
            markdown: {
              content: `姓名: ${data?.name}\n电话：${data?.phone}\n地址：${data?.address}`,
            },
          }),
        });
        setIsOpen(false);
      })
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      });
  };

  return (
    <>
      <Modal
        title="您可以填写以下信息，我们将尽快与您取得联系"
        open={isOpen}
        closable={false}
        onOk={handleOk}
        onCancel={() => setIsOpen(false)}
        confirmLoading={isLoading}
      >
        <Form name="basic" form={form} onValuesChange={onValuesChange} labelCol={{ span: 6 }}>
          <Form.Item label="贵姓" name="name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="手机号" name="phone" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="小区/工厂地址" name="address" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
      <FloatButton icon={<CustomerServiceOutlined />} type="primary" onClick={() => setIsOpen(true)} />
    </>
  );
};
