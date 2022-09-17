import styles from './index.module.less';

interface TypeProps {
  id?: string;
  title: string;
  className?: string;
  children: React.ReactNode;
}

export default ({ id, title, className, children }: TypeProps) => {
  return (
    <>
      <div id={id} className={[styles.container, className].join(' ')}>
        <span className={styles.title}>{title}</span>
        {children}
      </div>
    </>
  );
};
