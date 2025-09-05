import "./main.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link, useNavigate } from "react-router-dom";

const Main = () => {
  return (
    <main id="artical" className="fixedd">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        style={{ padding: "4px" }}
        className="mySwiper"
      >
        <SwiperSlide>
          <a
            href="https://benevolent-beignet-116c19.netlify.app/"
            target="_blank"
          >
            <img
              width={"100%"}
              height={"100%"}
              src="./images/Screenshot 2025-09-05 222413.webp"
              alt=""
              style={{ borderRadius: "10px" }}
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://famous-swan-6e1bb4.netlify.app/" target="_blank">
            <img
              width={"100%"}
              height={"100%"}
              src="/images/Screenshot 2025-09-05 222801.webp"
              alt=""
              style={{ borderRadius: "10px" }}
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://guileless-tiramisu-18d615.netlify.app/"
            target="_blank"
          >
            <img
              width={"100%"}
              height={"100%"}
              src="/images/Screenshot 2025-09-05 224742.webp"
              alt=""
              style={{ borderRadius: "10px" }}
            />
          </a>
        </SwiperSlide>
      </Swiper>
      <Link
        to={"projects"}
        onClick={() => {
          setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }, 300);
        }}
        className="button"
      >
        <button className="frontbut">More projects</button>
      </Link>
    </main>
  );
};

export default Main;
