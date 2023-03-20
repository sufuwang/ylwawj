import { Carousel } from 'antd';
import Images from './images';
import styles from './index.module.less';

export default () => {
  const [data, setData] = useState([Images[0]]);

  useState(() => {
    const id = setTimeout(() => {
      setData(Images);
    }, 1000);
    return () => {
      clearTimeout(id);
    };
  });

  return (
    <Carousel autoplay className={styles.carousel}>
      {data.map(src => (
        <img className={styles.img} src={src} key={src} />
      ))}
    </Carousel>
  );
};
