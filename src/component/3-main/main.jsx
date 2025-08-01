
import "./main.css";
// import { myProjects } from "./myProjects";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import  { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import { AnimatePresence,motion } from "motion/react"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link, useNavigate } from "react-router-dom";










const Main = () => {
    // const [currentActive, setcurrentActive] = useState("all");
    // const [arr, setArr] = useState(myProjects);
    // const handleClick = (buttonCategory) => {
    //     setcurrentActive(buttonCategory);

    //     const newArr = myProjects.filter((item) => {
    //     const ZZZ = item.category.find((myItem) => {
    //         return myItem === buttonCategory;
    //     });

    //     return ZZZ === buttonCategory;
    //     });

    //     setArr(newArr);
    // };

    return (
      <main id="artical" className="fixed">
        <Swiper
          style={{ borderRadius: "15px", width: "100%", height: "100%" }}
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
          className="mySwiper"
        >
          <SwiperSlide>
            <a
              href="https://charming-eclair-8948ea.netlify.app/"
              target="_blank"
            >
              <img
                width={"100%"}
                height={"100%"}
                src=".\images\Screenshot 2025-07-30 162348.png"
                alt=""
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://statuesque-conkies-a26f3f.netlify.app/"
              target="_blank"
            >
              <img
                width={"100%"}
                height={"100%"}
                src=".\images\Screenshot 2025-06-26 160415.png"
                alt=""
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
                src=".\images\Screenshot 2025-07-30 160805.png"
                alt=""
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
        >
          <button className="button">More projects</button>
        </Link>
      </main>
    );
    };

    export default Main; 
        //    <section className="fixed  left-section">
        //   <button
        //     onClick={() => {
        //       setcurrentActive("all");
        //       setArr(myProjects);
        //     }}
        //     className={currentActive === "all" ? "active" : null}
        //   >
        //     all projects
        //   </button>

        //   <button
        //     onClick={() => {
        //       handleClick("Simple");
        //     }}
        //     className={currentActive === "Simple" ? "active" : null}
        //   >
        //     Simple Projects
        //   </button>

        //   <button
        //     onClick={() => {
        //       handleClick("Complex");
        //     }}
        //     className={currentActive === "Complex" ? "active" : null}
        //   >
        //     Complex Projects
        //   </button>
        //   {/* <button
        //     onClick={() => {
        //         handleClick("react");
        //     }}
        //     className={currentActive === "react" ? "active" : null}
        //     >
        //     React & MUI
        //     </button>
        //     <button
        //     onClick={() => {
        //         handleClick("node");
        //     }}
        //     className={currentActive === "node" ? "active" : null}
        //     >
        //     Node & Express
        //     </button> */}
        // </section>

        // <section className=" fixed right-section">
        //   <AnimatePresence>
        //     {arr.map((item) => {
        //       return (
        //         <motion.article
        //           layout
        //           initial={{ transform: "scale(0.1)" }}
        //           animate={{ transform: "scale(1)" }}
        //           transition={{ type: "spring", damping: 8, stiffness: 50 }}
        //           key={item.imgPath}
        //           className="card"
        //         >
        //           <img width={266} src={item?.imgPath} alt="" />

        //           <div style={{ width: "266px" }} className="box">
        //             <h1 className="title">{item.projectTitle}</h1>
        //             <p className="sub-title">{item.desc}</p>

        //             <div className="fixed icons">
        //               <div style={{ gap: "11px" }} className="fixed">
        //                 <div className="icon-link"></div>
        //                 <a
        //                   href={item.href}
        //                   className="icon-github"
        //                 ></a>
        //               </div>

        //               <a className="link fixed" href={item.link}>
        //                 more
        //                 <span
        //                   style={{ alignSelf: "end" }}
        //                   className="icon-arrow_forward"
        //                 ></span>
        //               </a>
        //             </div>
        //           </div>
        //         </motion.article>
        //       );
        //     })}
        //   </AnimatePresence>
        // </section>