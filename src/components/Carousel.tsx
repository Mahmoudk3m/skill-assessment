import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import Mountain1 from "../assets/Mountain1.png";
import Mountain2 from "../assets/Mountain2.png";
export default function Carousel() {
  const images = [
    Mountain1,
    Mountain2,
    Mountain1,
    Mountain2,
    Mountain1,
    Mountain2,
    Mountain1,
    Mountain2,
    Mountain1,
    Mountain2,
    Mountain1,
    Mountain2
  ];
  return (
    <Swiper
      pagination={{
        type: "bullets",
        clickable: true
      }}
      modules={[Pagination, Navigation]}
      loop={true}
      spaceBetween={50}
      slidesPerView={3}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50
        }
      }}
    >
      <div>
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index}`}
              style={{
                display: "block",
                objectFit: "cover",
                height: "100%",
                width: "100%",
                minHeight: 200,
                maxHeight: 300
              }}
            />
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
}
