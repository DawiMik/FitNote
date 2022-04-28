import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";

const goals = document.querySelector("body > header > div > ul > li:nth-child(1) > a")
console.log(goals)

const MyGoals = () => {
    const [isHide, setHide] = useState(true)

    const handleChange = (e, newState) => {
        e.preventDefault();
        setHide(newState)
    }

    return (
        <>
            <div className="hamburger-menu">
                <input id="menu__toggle" type="checkbox"/>
                <label className="menu__btn" htmlFor="menu__toggle">
                    <span></span>
                </label>
                <div className="logo">
                    <div className="logo_part_one">Fit</div>
                    <div className="logo_part_two">Note!</div>
                </div>
                <ul className="menu__box">
                    <li><a className="menu__item" href="#" onClick={e => handleChange(e, false)}>Goals! </a></li>
                    <li><a className="menu__item" href="#">Status!</a></li>
                    <li><a className="menu__item" href="#">Weight!</a></li>
                </ul>
            </div>
            <div className={isHide ? "hide"  : "" || "components"}>
                <div className={"container"}>TEstowo!!!</div>
            </div>
        </>
    )

};


export default MyGoals