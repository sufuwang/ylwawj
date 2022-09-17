import { Descriptions, Image } from 'antd';
import Container from '@comp/container';
import ImageSrc from './WX20220917-155418@2x.png';
import styles from './index.module.less';

// const renderForm = () => {
//   const onFinish = (values: any) => {
//     console.log('Success:', values);
//   };

//   const onFinishFailed = (errorInfo: any) => {
//     console.log('Failed:', errorInfo);
//   };
//   return (
//     <div className={styles.formContainer}>
//       <span>您也可以登记个人信息, 我们会第一时间与您联系</span>
//       <Form
//         name="basic"
//         labelCol={{ span: 4 }}
//         wrapperCol={{ span: 14 }}
//         initialValues={{ remember: true }}
//         onFinish={onFinish}
//         onFinishFailed={onFinishFailed}
//         autoComplete="off"
//       >
//         <Form.Item label="地址" name="address">
//           <Input placeholder="请输入待装修的小区或者厂房地址" />
//         </Form.Item>
//         <Form.Item label="手机号" name="phone">
//           <Input placeholder="请输入您的手机号码" />
//         </Form.Item>

//         <Form.Item label="验证码" name="code">
//           <Input placeholder="输入手机号码后, 请输入短信验证码" />
//         </Form.Item>

//         <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
//           <Button type="primary" htmlType="submit">
//             提交
//           </Button>
//         </Form.Item>
//       </Form>
//     </div>
//   );
// };

export default () => {
  return (
    <Container id="contact" title="联系我们">
      <Descriptions className={styles.container} bordered column={4}>
        <Descriptions.Item label="公司名称" span={2}>
          陕西杨凌我爱我家装饰装修有限责任公司
        </Descriptions.Item>
        <Descriptions.Item label="联系方式" span={2}>
          137-0022-7622 / 157-7195-7195
        </Descriptions.Item>
        <Descriptions.Item label="地址" span={2}>
          杨凌示范区西农路隆发城市广场北区11楼1101
        </Descriptions.Item>
        <Descriptions.Item label="公司备案号" span={2}>
          <a>陕ICP备16018635号-1</a>
        </Descriptions.Item>
        <Descriptions.Item label="企业微信" span={2}>
          <Image width={200} src={ImageSrc} />
        </Descriptions.Item>
        <Descriptions.Item label="企业资质" span={2}>
          <Image width={200} src={ImageSrc} />
        </Descriptions.Item>
        {/* <Descriptions.Item label="信息登记" span={2}>
          {renderForm()}
        </Descriptions.Item> */}
      </Descriptions>
    </Container>
  );
};
