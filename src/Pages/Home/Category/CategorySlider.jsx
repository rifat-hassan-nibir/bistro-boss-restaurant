import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";

const CategorySlider = () => {
  return (
    <div>
      <Swiper
        slidesPerView={4}
        spaceBetween={5}
        centeredSlides={true}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} />
          <p className="text-white -mt-10 text-3xl text-center">Salad</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} />
          <p className="text-white -mt-10 text-3xl text-center">Soups</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} />
          <p className="text-white -mt-10 text-3xl text-center">Pizzas</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} />
          <p className="text-white -mt-10 text-3xl text-center">Deserts</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CategorySlider;
