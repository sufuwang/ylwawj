import { message } from 'antd';
import styles from './index.module.less';

interface TypeProps {
  isShow: boolean;
  src: string;
  onHide: () => void;
}
export default ({ isShow, src, onHide }: TypeProps) => {
  useEffect(() => {
    if (isShow) {
      message.success('点击任意区域退出');
    }
  }, [isShow]);
  if (!isShow) {
    return null;
  }
  return (
    <div className={styles.container} onClick={onHide}>
      <video className={styles.video} autoPlay controls src={src} />
    </div>
  );
};
