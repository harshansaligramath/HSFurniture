import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import frequentlypurchased from "./pics/Capture.PNG";
import frequentlypurchased1 from "./pics/Capture1.PNG";
import frequentlypurchased2 from "./pics/Capture2.jpg";
import frequentlypurchased3 from "./pics/Capture3.jpg";
import frequentlypurchased4 from "./pics/Capture4.jpg";
import frequentlypurchased5 from "./pics/Capture5.jpg";
import frequentlypurchased6 from "./pics/Capture6.jpg";
import frequentlypurchased7 from "./pics/Capture7.jpg";
import frequentlypurchased8 from "./pics/Capture8.jpg";
import frequentlypurchased9 from "./pics/Capture9.jpg";
import frequentlypurchased10 from "./pics/Capture10.jpg";

// import { themeContext } from "../../Context";
const Portfolio = () => {
  // const theme = useContext(themeContext);
  // const darkMode = theme.state.darkMode;
  return (
    <>
      <h2 style={{ marginLeft: "50px", marginRight: "50%" }}>
        Frequently purchased
      </h2>

      <div className="portfolio" id="portfolio">
        {/* slider */}
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          grabCursor={true}
          className="portfolio-slider"
        >
          <SwiperSlide>
            <img src={frequentlypurchased} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={frequentlypurchased1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={frequentlypurchased2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={frequentlypurchased3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={frequentlypurchased4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={frequentlypurchased5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={frequentlypurchased6} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={frequentlypurchased7} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={frequentlypurchased8} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={frequentlypurchased9} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={frequentlypurchased10} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Portfolio;
