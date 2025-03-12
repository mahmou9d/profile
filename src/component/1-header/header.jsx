import { useState,useEffect } from "react";
import './Header.css';
const Header = () => {
    const [showModel, setshowModel] = useState(false)
    const [Theme, setTheme] = useState(localStorage.getItem("currantMode")?? "dark")
    useEffect(() => {
        if(Theme === "light"){
            document.body.classList.remove("dark")
            document.body.classList.add("light")
        }else{
            document.body.classList.remove("light")
            document.body.classList.add("dark")
        }
    }
    ,[Theme])
    return (
        <header className="flex">
            <button onClick={()=> {
                setshowModel(true)
                }} className="menu icon-menu"></button>
            <div />
            <nav>
            <div className="a .flex" >
                    <a href="">About</a>
                </div>
                <div className="a .flex" >
                    <a href="#artical">Article</a>
                </div>
                <div className="a .flex" >
                    <a href="#artical">Projects</a>
                </div>
                
                <div className="a .flex" >
                    <a href="#contact">contact</a>
                </div>
            </nav>
            <button onClick={() => {
                localStorage.setItem("currantMode",Theme === "dark" ? "light" :"dark")
                setTheme(localStorage.getItem("currantMode"))
            }
            } className="mode">
                {Theme === "dark" ? (
            <span className="icon-moon-o"> </span>
            ) : (
            <span className="icon-sun"> </span>
            )}
            </button>

        {showModel && (
        <div onClick={() => {
            setshowModel(false)
        }
        } className="fixed">

            <ul className="modal">
            <button className="icon-clear" onClick={()=> {
                        setshowModel(false)
                    }}></button>
                <li>
                    <a href="">About</a>
                </li>
                <li>
                    <a href="#artical">Article</a>
                </li>
                <li>
                    <a href="#artical">Projects</a>
                </li>
                
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>)}


        </header>
    )
}
export default Header;