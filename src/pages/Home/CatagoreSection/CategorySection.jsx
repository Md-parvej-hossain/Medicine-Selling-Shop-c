import { useEffect, useState } from 'react';
import CatagoreCart1 from './CatagoreCart1';
import useAxous from '../../../hooks/useAxous';

const CategorySection = () => {
  const [items, setItems] = useState([]);
  const axiosPulic = useAxous();
  useEffect(() => {
    userData();
  }, []);
  const userData = async () => {
    await axiosPulic.get('/medicen').then(res => {
      setItems(res.data);
    });
  };

  return (
    <div>
      <div className="text-center text-gray-500">
        <h1 className="text-4xl font-bold">Your Medicine Box</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {items.map(iten => (
          <CatagoreCart1 key={iten.id} item={iten} />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
