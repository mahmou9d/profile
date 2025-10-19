import "./main.css";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa6";
import { PinContainer } from "@/components/ui/3d-pin";
import { myProjects } from "../6-projects/myProjects";

const Main = () => {
  const projects = myProjects.slice(0,3)
  return (
    <main id="artical" className="fixedd">
      <motion.h2
        className="text-5xl font-extrabold text-center mb-16 maintitle border-b-4 border-blue-700 w-fit pb-4"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>
      {/* <Swiper
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
      </Swiper> */}
      <div className="flex flex-wrap items-center justify-center p-4 gap-16">
        {projects.map((item,i) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] "
            key={i}
          >
            <PinContainer
              title="Live Demo"
              href={item.link}
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/images/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.imgPath}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="text font-bold lg:text-2xl md:text-xl text-white text-base line-clamp-1">
                {item.projectTitle}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.desc}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists?.map((icon, index) => (
                    <div
                      key={index}
                      className="  rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-white">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
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
