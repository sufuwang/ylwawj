import ReactDOM from 'react-dom';
// import { message } from 'antd';
import styles from './index.module.less';

const VideoContainerId = 'globalVideoContainer';
const VideoId = 'globalVideo';

export default () => {
  const getContainerRef = () => document.getElementById(VideoContainerId);
  const getRef = () => document.getElementById(VideoId) as HTMLVideoElement;

  const setSrc = (src: string) => {
    const ref = getRef();
    ref?.setAttribute('src', `${import.meta.env.VITE_HOST}${src}`);
  };

  const setShow = (isShow: boolean, src?: string) => {
    const ref = getContainerRef()!;
    const video = getRef()!;
    if (src) {
      setSrc(src);
    }
    if (isShow) {
      // message.info({ content: '点击任意区域可以退出预览', style: { top: 200 } });
      video.play();
      ref.removeAttribute('style');
    } else {
      video.pause();
      ref.setAttribute('style', `display:none;`);
    }
  };

  useEffect(() => {
    setShow(false);
  }, []);

  return {
    getRef,
    setSrc,
    setShow,
    render() {
      if (document.getElementById(VideoId)) {
        return;
      }
      return (
        <>
          {ReactDOM.createPortal(
            <div id={VideoContainerId} className={styles.container} onClick={() => setShow(false)}>
              <video id={VideoId} controls />
            </div>,
            document.body,
          )}
        </>
      );
    },
  };
};
