import Carousel from '@comp/carousel';
import CardFeed from '@comp/cardFeed';
import Introduce from '@comp/introduce';
import Contact from '@comp/contact';
import styles from './index.module.less';
import useData from './useData';

export default () => {
  const { data } = useData();
  return (
    <div className={styles.container}>
      <Carousel />
      {/* <CardFeed title="工程案例" dataSource={data.video} type="album" /> */}
      <CardFeed title="视频中心" dataSource={data.video} type="video" />
      <Introduce />
      <Contact />
    </div>
  );
};
