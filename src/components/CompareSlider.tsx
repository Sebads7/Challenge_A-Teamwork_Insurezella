import "swiper/swiper-bundle.css";

import { COMPARE_PLANS } from "../constants";

import { Pagination } from "swiper/modules";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import { CompareItems } from "./Items";

const Slide = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const handleDotClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index * 1);
      setActiveIndex(index);
    }
  };

  return (
    <div className="h-full w-full  relative ">
      <div className=" relative   lg:hidden">
        <Swiper
          modules={[Pagination]}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          spaceBetween={1}
          slidesPerView={2}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          // className="w-[25rem] sm:w-[36rem]"
          className="pr-2"
        >
          {COMPARE_PLANS.map((plan, index) => (
            <SwiperSlide>
              <CompareItems plan={plan} key={index} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Dots */}
        <div className="flex justify-center items-center gap-3 pt-10 absolute  w-full lg:hidden ">
          {COMPARE_PLANS.slice(0, 3).map((_, index) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-full cursor-pointer ${
                index === activeIndex ? "bg-blue-600" : "bg-gray-300"
              }`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slide;
