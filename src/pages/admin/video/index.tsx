import { Button, Form, Input, Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import styles from './index.module.less';

const App = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const normFile = (e: any) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <>
      <Form
        name="basic"
        labelCol={{
          span: 2,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        colon={false}
      >
        <Form.Item label="标题" name="title" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item required label="视频" rules={[{ required: true }]}>
          <Form.Item name="video" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
            <Upload.Dragger name="files" accept="video" maxCount={1} beforeUpload={() => false}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">点击此处或者文件拖拽至此处</p>
              <p className="ant-upload-hint">一次只能上传一段视频文件</p>
            </Upload.Dragger>
          </Form.Item>
        </Form.Item>

        <Form.Item label="简介" name="desc">
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 2,
          }}
        >
          <Button type="primary" htmlType="submit">
            新建
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default App;
