import { useState, useEffect } from "react";
import "./header.css";
import { Link } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun } from "lucide-react";
const Header = () => {
  const [showModel, setshowModel] = useState<boolean>(false);
  const [Theme, setTheme] = useState<string | null>(
    localStorage.getItem("currantMode") ?? "dark"
  );
  useEffect(() => {
    if (Theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [Theme]);
  const container = {
    width: 90,
    height: 45,
    borderRadius: 50,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    padding: 6,
    border: "1px solid rgba(255,255,255,0.15)",
    boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
  };

  const handle = {
    width: 35,
    height: 35,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 18,
  };
  return (
    <header>
      <Link to={"/"} className="flex flex-col justify-center items-center">
        <img
          style={{ width: "200px" }}
          src="./mahmoud-high-resolution-logo-transparent.webp"
          alt=""
        />
      </Link>
      <button
        onClick={() => {
          setshowModel(true);
        }}
        className="menu"
      >
        <Menu />
      </button>
      {/* <div /> */}
      <nav>
        <div className="a .flex">
          <Link to="/">Home</Link>
        </div>
        <div className="a .flex">
          <Link to="projects">Projects</Link>
        </div>
        <div className="a .flex">
          <Link to="About">About</Link>
        </div>
        {/* <div className="a .flex">
          <a href="#contact">contact</a>
        </div> */}
      </nav>
      <button
        onClick={() => {
          localStorage.setItem(
            "currantMode",
            Theme === "dark" ? "light" : "dark"
          );
          setTheme(localStorage.getItem("currantMode"));
        }}
        style={{
          ...container,
          justifyContent: Theme === "dark" ? "flex-end" : "flex-start",
          background: "linear-gradient(135deg, #1e1e2f, #34344a)",
        }}
      >
        <motion.div
          layout
          transition={{
            type: "spring",
            duration: 0.3,
            bounce: 0.3,
          }}
          style={{
            ...handle,
            background: "linear-gradient(135deg, #60a5fa, #3b82f6)",
            color: Theme === "dark" ? "#111" : "#fff",
            boxShadow: "0 0 18px #03A9F4",
          }}
        >
          {Theme === "dark" ? <Moon size={20} /> : <Sun size={22} />}
        </motion.div>
      </button>
      {/* <button
        onClick={() => {
          localStorage.setItem(
            "currantMode",
            Theme === "dark" ? "light" : "dark"
          );
          setTheme(localStorage.getItem("currantMode"));
        }}
        className="mode"
      >
        {Theme === "dark" ? (
          <span className="icon-moon-o icon"> </span>
        ) : (
          <span className="icon-sun icon"> </span>
        )}
      </button> */}
      {showModel && (
        <div
          onClick={() => {
            setshowModel(false);
          }}
          className="fixedd"
        >
          <ul className="modal">
            <button
              className="icon-clear"
              onClick={() => {
                setshowModel(false);
              }}
            ></button>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="projects">Projects</Link>
            </li>
            <li>
              <Link to="About">About</Link>
            </li>
            {/* 
            <li>
              <a href="contact">Contact</a>
            </li> */}
          </ul>
        </div>
      )}
    </header>
  );
};
export default Header;
