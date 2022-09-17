import Carousel from '@comp/carousel';
import CardFeed from '@comp/cardFeed';
import Introduce from '@comp/introduce';
import Contact from '@comp/contact';
import styles from './index.module.less';

export default () => {
  return (
    <div className={styles.container}>
      <Carousel />
      <CardFeed title="工程案例" dataSource={[1, 2, 3, 4, 5, 6]} type="image" />
      <CardFeed title="视频中心" dataSource={[1, 2, 3, 4, 5, 6]} type="video" />
      <Introduce />
      <Contact />
    </div>
  );
};
