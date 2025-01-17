import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import DiscountCart from './DiscountCart';
const DiscountSlider = () => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
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
        <SwiperSlide>
          <DiscountCart />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default DiscountSlider;
