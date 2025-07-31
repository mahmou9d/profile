import { useState, useEffect } from "react";
import "./header.css";
import { Link } from "react-router";
const Header = () => {
  const [showModel, setshowModel] = useState(false);
  const [Theme, setTheme] = useState(
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
    <header className="flex">
      <Link to={"/"} className="logo">
        <h1>My</h1>
        <p>profile</p>
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
          <a href="/">Home</a>
        </div>
        <div className="a .flex">
          <a href="projects">Projects</a>
        </div>
        <div className="a .flex">
          <a href="About">About</a>
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
          className="fixed"
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
