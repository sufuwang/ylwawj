import { TypeCommonData, TypeVideo } from '@page/home/useData';
import homeVideo from './videos/index.mp4';

const getCommon = (): TypeCommonData => {
  return {
    id: Date.now(),
    isActive: true,
    title: '',
    desc: '',
    createTime: Date.now().toString(),
    updateTime: Date.now().toString(),
  };
};

const video: TypeVideo[] = [
  { ...getCommon(), video: homeVideo, videoMask: '', title: '公司宣传片', desc: '点击观看' },
].map((item, index) => ({
  ...item,
  id: item.id + index,
}));
const image: any[] = [];

export default {
  video,
  image,
};
