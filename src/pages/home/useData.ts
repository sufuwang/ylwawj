import request from '@util/request';

interface TypeCommonData {
  id: number;
  isActive: boolean;
  title: string;
  desc: string;
  createTime: string;
  updateTime: string;
}

export interface TypeVideo extends TypeCommonData {
  video: string; // 直接预览
  videoMask: string;
}
export interface TypeExample extends TypeCommonData {
  album: string; // 相册的跳转 path
  albumMask: string;
}
export type TypeDetail = TypeVideo | TypeExample;

interface TypeData {
  video: TypeVideo[];
}

const type = 'video';

export default () => {
  const [data, setData] = useState<TypeData>({ video: [] });

  const getData = async () => {
    const video = await request(`/admin/get?type=${type}`);
    setData({ ...data, video });
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    data,
    refreshData: getData,
  };
};
