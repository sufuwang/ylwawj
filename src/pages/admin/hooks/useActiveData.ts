import request from '@util/request';

interface TypeBaseDataItem {
  key: string;
}
interface TypeVideoItem {
  id: number;
  title: string;
  desc: string;
  isActive: boolean;
  video: string;
}

export default () => {
  const [type, setType] = useState('video');
  const [data, setData] = useState<(TypeVideoItem & TypeBaseDataItem)[]>([]);
  const [activeData, setActiveData] = useState<string[]>([]);

  const getData = async () => {
    const ds = (await request(`/admin/get?type=${type}`)) as (TypeVideoItem & TypeBaseDataItem)[];
    setData(ds.map(d => ({ ...d, key: d.id.toString() })));
    setActiveData(ds.filter(d => d.isActive).map(d => d.id.toString()));
  };

  useEffect(() => {
    getData();
  }, [type]);

  return {
    data,
    activeData,
    setType,
    setActiveData,
    refreshData: getData,
  };
};
