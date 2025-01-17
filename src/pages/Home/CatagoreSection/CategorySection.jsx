import CatagoreCart from './CatagoreCart';

const CategorySection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {/* {categories.map(category => (
        <CatagoreCart
          key={category.id}
          category={category}
         
        />
      ))} */}
      <CatagoreCart />
      <CatagoreCart />
      <CatagoreCart />
      <CatagoreCart />
      <CatagoreCart />
    </div>
  );
};

export default CategorySection;
