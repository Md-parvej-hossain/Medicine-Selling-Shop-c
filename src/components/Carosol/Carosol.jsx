// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import img1 from '../../assets/download1.jpg';
import img2 from '../../assets/download2.jpg';
import img3 from '../../assets/download3.jpg';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';
export default function Carosol() {
  return (
    <div className="container w-full py-5 mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide
            image={img1}
            text="Get Your English Learning Course Done in minutes"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={img2}
            text="Get Your French Learning Course Done in minutes"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={img3}
            text="Get Your Japanese Learning Course Done in minutes"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
