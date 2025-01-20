import { useQuery } from '@tanstack/react-query';
import useAxous from './useAxous';

const useItem = () => {
  const axiousPublic = useAxous();
  const {
    data: allData = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ['items'],
    queryFn: async () => {
      const res = await axiousPublic.get('/medicen');
      return res.data;
    },
  });
  return [allData, loading, refetch];
};

export default useItem;
