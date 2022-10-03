import styles from './index.module.less';

interface TypeProps {
  isShow: boolean;
  title: string;
  desc?: string;
}

export default ({ isShow, title, desc }: TypeProps) => {
  if (!isShow) {
    return null;
  }
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      {desc && <h3>{desc}</h3>}
    </div>
  );
};
