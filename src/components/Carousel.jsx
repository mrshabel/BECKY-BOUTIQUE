import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  A11y,
  EffectFade,
  Autoplay,
} from "swiper/modules";
import "swiper/css/bundle";
import "swiper/css/effect-fade";

export default function Carousel({ images }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y, EffectFade, Autoplay]}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      effect="fade"
      loop="true"
      navigation
      pagination={{ clickable: true }}
      spaceBetween={10}
      slidesPerView={1}
      className=""
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            loading="lazy"
            src={image}
            className="h-[50vh] md:h-[65vh] w-full rounded-md"
            alt="women's clothing"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
