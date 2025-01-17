import Carosol from '../../components/Carosol/Carosol';
import CategorySection from './CatagoreSection/CategorySection';
import DiscountProducts from './Discount/DiscountProducts';

const Home = () => {
  return (
    <div className="pt-16">
      <Carosol />
      <CategorySection />
      <DiscountProducts />
    </div>
  );
};

export default Home;
