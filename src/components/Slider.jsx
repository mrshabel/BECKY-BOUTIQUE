import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  A11y,
  EffectFade,
  Autoplay,
  EffectCoverflow,
  EffectCards,
} from "swiper/modules";
import "swiper/css/bundle";
import "swiper/css/effect-fade";
import ProductCard from "./products/ProductCard";

export default function Slider({ products, size }) {
  if (size === "small") {
    return (
      <Swiper
        modules={[EffectCards, Autoplay]}
        effect={"cards"}
        grabCursor={true}
        className="select-none "
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={800}
      >
        {products.map((product, index) => (
          <SwiperSlide
            key={index}
            className="bg-white shadow-xl w-full flex justify-center pl-3 pt-8 rounded-lg"
          >
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }
  return (
    <Swiper
      modules={[EffectCoverflow, Pagination, Autoplay]}
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={3}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      speed={1200}
      pagination={true}
      className="select-none "
    >
      {products.map((product, index) => (
        <SwiperSlide key={index}>
          <ProductCard product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
