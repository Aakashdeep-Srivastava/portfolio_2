import {
  RxCrop,
  RxPencil2,
  RxDesktop,

  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const serviceData = [
  {
    Icon: RxCrop,
    title: "Socio-Economic Innovation’23 at Abhyuday (IIT BOMBAY)",
    description: "National Finalist in Socio-Economic Innovation’23 at Abhyuday (IIT BOMBAY) for VriddhiVaatra.",
  },
  {
    Icon: RxPencil2,
    title: "National finalist in the @Vizzhy Inc.",
    description: "Go to Market Case competition organized by IIT Bombay - Shailesh J. Mehta School of Management, where I had the incredible opportunity to pitch my strategy in the final round.",
  },
  {
    Icon: RxDesktop,
    title: "Ranked 8th in TIAA (Insurance Company)",
    description: "AI Hackathon for Retirement Industry.",
  },
  
  {
    Icon: RxRocket,
    title: "Ranked 6th in Prodalytics at TeXLence 2023",
    description: "organised by XLRI, Jamshedpur: Built a Dashboard on Power BI using the data collected from Semrush on Youtube Ads Revenue Country-wise.",
  },
  {
    Icon: RxRocket,
    title: "Ranked 4th in Fork-IT Hackathon",
    description: "organized by IIIT Delhi: Built a Recipe Recommendation System.",
  },
  {
    Icon: RxRocket,
    title: "Secured 1st Position in tech-fest",
    description: "(Equilibrio’19 at GGV) coding challenge.",
  },
  {
    Icon: RxRocket,
    title: "Finalist for IIT Kharagpur Data Science Hackathon 2024:",
    description: "Built a Bitcoin Price Prediction Using Time Series Forecasting.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      freeMode
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
            {/* icon */}
            <div className="text-4xl text-accent mb-4">
              <item.Icon aria-hidden />
            </div>

            {/* title & description */}
            <div className="mb-8">
              <div className="mb-2 text-lg">{item.title}</div>
              <p className="max-w-[350px] leading-normal">{item.description}</p>
            </div>

            {/* arrow */}
            <div className="text-3xl">
              <RxArrowTopRight
                className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"
                aria-hidden
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
