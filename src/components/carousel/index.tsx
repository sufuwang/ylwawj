import { Carousel } from 'antd';
import Images from './images';
import styles from './index.module.less';

export default () => (
  <Carousel autoplay className={styles.carousel}>
    {Images.map(src => (
      <img src={src} key={src} />
    ))}
  </Carousel>
);
