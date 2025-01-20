import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import DiscountCart from './DiscountCart';
const DiscountSlider = () => {
  return (
    <div className="pb-10">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <DiscountCart />
        </SwiperSlide>
        <SwiperSlide>
          <DiscountCart />
        </SwiperSlide>
        <SwiperSlide>
          <DiscountCart />
        </SwiperSlide>
        <SwiperSlide>
          <DiscountCart />
        </SwiperSlide>
        <SwiperSlide>
          <DiscountCart />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default DiscountSlider;
