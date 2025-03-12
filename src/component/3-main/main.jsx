import { useState } from "react";
import "./main.css";
import { myProjects } from "./myProjects";

import { AnimatePresence,motion } from "motion/react"









const Main = () => {
    const [currentActive, setcurrentActive] = useState("all");
    const [arr, setArr] = useState(myProjects);

    const handleClick = (buttonCategory) => {
        setcurrentActive(buttonCategory);

        const newArr = myProjects.filter((item) => {
        const ZZZ = item.category.find((myItem) => {
            return myItem === buttonCategory;
        });

        return ZZZ === buttonCategory;
        });

        setArr(newArr);
    };

    return (
        <main id="artical" className="fixed">
        <section className="fixed  left-section">
            <button
            onClick={() => {
                setcurrentActive("all");
                setArr(myProjects);
            }}
            className={currentActive === "all" ? "active" : null}
            >
            all projects
            </button>

            <button
            onClick={() => {
                handleClick("css");
            }}
            className={currentActive === "css" ? "active" : null}
            >
            HTML & CSS
            </button>

            <button
            onClick={() => {
                handleClick("js");
            }}
            className={currentActive === "js" ? "active" : null}
            >
            JavaScript
            </button>
            <button
            onClick={() => {
                handleClick("react");
            }}
            className={currentActive === "react" ? "active" : null}
            >
            React & MUI
            </button>
            <button
            onClick={() => {
                handleClick("node");
            }}
            className={currentActive === "node" ? "active" : null}
            >
            Node & Express
            </button>
        </section>
        
        <section className=" fixed right-section">
            <AnimatePresence>
            {arr.map((item) => {
                return (
                <motion.article
                    layout
                    initial={{ transform: "scale(0.1)" }}
                    animate={{ transform: "scale(1)" }}
                    transition={{ type: "spring", damping: 8, stiffness: 50 }}
                    key={item.imgPath}
                    className="card"
                >
                    <img width={266} src={item.imgPath} alt="" />

                    <div style={{ width: "266px" }} className="box">
                    <h1 className="title">{item.projectTitle}</h1>
                    <p className="sub-title">
                        Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex
                        tempore dolor in, accusantium laudantium accusamus.
                    </p>

                    <div className="fixed icons">
                        <div style={{ gap: "11px" }} className="fixed">
                        <div className="icon-link"></div>
                        <div className="icon-github"></div>
                        </div>

                        <a className="link fixed" href="">
                        more
                        <span
                            style={{ alignSelf: "end" }}
                            className="icon-arrow_forward"
                        ></span>
                        </a>
                    </div>
                    </div>
                </motion.article>
                );
            })}
            </AnimatePresence>
        </section>
        </main>
    );
    };

    export default Main;