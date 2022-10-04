import { Button, Form, Input, Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
// import styles from './index.module.less';

interface TypeProps {
  onFinish: () => Promise<void>;
}

export default (props: TypeProps) => {
  const [formRef] = Form.useForm();

  const onFinish = async (values: any) => {
    const [video] = values.video;
    const [videoMask] = values.videoMask;
    if (!['mp4'].some(d => video.name.endsWith(d))) {
      message.error('仅支持上传视频文件');
      return;
    }
    if (!['png', 'jpg', 'jpeg'].some(d => videoMask.name.endsWith(d))) {
      message.error('仅支持上传视频文件');
      return;
    }
    values.video = new File([video.originFileObj], encodeURIComponent(handleFileName(video.name)));
    values.videoMask = new File([videoMask.originFileObj], encodeURIComponent(handleFileName(videoMask.name)));
    // delete values.video;

    const formData = new FormData();
    Object.keys(values).forEach((key: string) => {
      formData.set(key, values[key]);
    });
    formData.set('type', 'video');

    await fetch('http://localhost:3000/admin/create', {
      method: 'POST',
      body: formData,
    });
    setTimeout(async () => {
      await props.onFinish();
      // formRef.resetFields();
      message.success('新建成功');
    }, 100);
  };

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <>
      <Form
        form={formRef}
        name="basic"
        labelCol={{
          span: 4,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
        colon={false}
      >
        <Form.Item label="标题" name="title" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item required label="视频封面" rules={[{ required: true }]}>
          <Form.Item name="videoMask" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
            <Upload.Dragger name="files" maxCount={1} beforeUpload={() => false}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">点击此处或者文件拖拽至此处</p>
              <p className="ant-upload-hint">一次只能上传一段视频文件</p>
            </Upload.Dragger>
          </Form.Item>
        </Form.Item>

        <Form.Item required label="视频" rules={[{ required: true }]}>
          <Form.Item name="video" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
            <Upload.Dragger name="files" maxCount={1} beforeUpload={() => false}>
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

const handleFileName = (name: string) => {
  const names = name.split('.');
  return [...names.slice(0, names.length - 1), '_', Date.now(), '.', names[names.length - 1]].join('');
};
