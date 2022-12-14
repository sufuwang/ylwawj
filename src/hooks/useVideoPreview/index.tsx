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
    if (src.startsWith('/')) {
      ref?.setAttribute('src', src);
      return;
    }
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
      ref.setAttribute('style', `display:block;`);
    } else {
      video.pause();
      ref.setAttribute('style', `display:none;`);
    }
  };

  return {
    getRef,
    setSrc,
    setShow,
    render() {
      return (
        <>
          {ReactDOM.createPortal(
            <div id={VideoContainerId} className={styles.container} onClick={() => setShow(false)}>
              <video id={VideoId} controls onClick={handle => handle.stopPropagation()} />
            </div>,
            document.body,
          )}
        </>
      );
    },
  };
};
