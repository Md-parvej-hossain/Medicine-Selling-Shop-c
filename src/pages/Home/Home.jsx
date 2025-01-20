import Carosol from '../../components/Carosol/Carosol';
import MoastPopulerSection from '../../components/MoastPopulerSection';
import CategorySection from './CatagoreSection/CategorySection';
import DiscountProducts from './Discount/DiscountProducts';

const Home = () => {
  return (
    <div className="pt-16">
      <Carosol />
      <CategorySection />
      <DiscountProducts />
      <div className=" w-11/12 mx-auto">
        <MoastPopulerSection></MoastPopulerSection>
      </div>
    </div>
  );
};

export default Home;
