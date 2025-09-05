import { useState, useEffect } from "react";
import "./header.css";
import { Link } from "react-router";
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
  return (
    <header className="flex justify-between pb-0 mb-[-25px] p-6">
      <Link to={"/"} className="flex flex-col justify-center items-center">
        <img
          style={{ width: "200px" }}
          src="/public/mahmoud-high-resolution-logo-transparent.png"
          alt=""
        />
      </Link>
      <button
        onClick={() => {
          setshowModel(true);
        }}
        className="menu icon-menu"
      ></button>
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
        className="mode"
      >
        {Theme === "dark" ? (
          <span className="icon-moon-o icon"> </span>
        ) : (
          <span className="icon-sun icon"> </span>
        )}
      </button>
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
              <a href="/">Home</a>
            </li>
            <li>
              <a href="artical">Article</a>
            </li>
            <li>
              <a href="projects">Projects</a>
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
