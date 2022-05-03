import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";

const goals = document.querySelector("body > header > div > ul > li:nth-child(1) > a")
console.log(goals)

const MyGoals = () => {
    const API= "https://api.jsonbin.io/v3/b/627127ce25069545a32cc2d2";
    const API_KEY = "$2b$10$R2s3uL4sTOJnPNamDYg0ZO5KKEItNjxoUllaom0HdkZ9nCdDvG7kK"
    const [isHide, setHide] = useState(true)
    const [isHideSub, setHideSub] = useState(false)
    const [isHideNewGoal, setHideNewGoal] = useState(true)
    const [weight, setWeight] = useState("");
    const [exerciseName, setExerciseName] = useState("");
    const [exerciseWeight, setExerciseWeight] = useState("");

    const handleChangeGoal = (e, newState) => {
        e.preventDefault();
        setHide(newState)
    }

    const hideInputs = (e, newState) => {
        e.preventDefault();
        setHideSub(newState)
    }

    const hideNewGoal = (e, newState) => {
        e.preventDefault();
        setHideNewGoal(newState)
    }

    const changeExerciseName = (e, newState) => {
        e.preventDefault();
        setExerciseName(newState)
    }

    const data = {
        name: `${exerciseName}`,
        brand: `${exerciseWeight}`
    };

    const addExercise = (e) => {
        e.preventDefault();
        fetch(`${API}/stats/`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Authorization": API_KEY,
                "Content-Type": "application/json",
                'X-Master-Key': API_KEY
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            });
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
                    <li><a className="menu__item" href="#" onClick={e => handleChangeGoal(e, false)}>Goals! </a></li>
                    <li><a className="menu__item" href="#">Status!</a></li>
                    <li><a className="menu__item" href="#">Weight!</a></li>
                </ul>
            </div>

            <section className="info">
                <div className="info_weight">
                    <div className="goals_item main_title">Your dream weight:
                    <div className="weight_score">{weight}kg</div>
                    </div>
                    <div className="weight_current">
                        Your current weight:
                        <div className="weight_current_score">kg</div>
                    </div>
                </div>

                <div className="info_goals">

                </div>

            </section>

            <div className={isHide ? "hide" : "" || "components overlay popup"}>
                <div className={"container"}>
                    <ul className="goals_menu">
                        <div className="logo">
                            <div className="menu_title_one">your</div>
                            <div className="menu_title_two">Goals!</div>
                        </div>
                        <li className="goals_item main_title">Your dream weight:
                            <div className="weight_score">{weight}kg</div>
                            <form className="main_title">
                                <input type="number" step="0.01" placeholder="Type the weight you want to reach" value={weight} onChange={e => setWeight(e.target.value)} className={isHideSub ? "hide_sub" : "input_goal"}/>
                                <input type="submit" onClick={e => hideInputs(e, true)} className={isHideSub ? "hide_sub" : "bn632-hover bn22 input_goal_button"} value="Set your dream weight!"/>
                            </form>

                        </li>
                        <button className="goal_button" onClick={e => hideNewGoal(e, false)}>Set your own new goal!</button>
                        <button className="bn632-hover bn22" onClick={e => handleChangeGoal(e, true)}>Close</button>
                    </ul>

            </div>
            </div>
            <div className={isHideNewGoal ? "hide_goal" : "new_goal"}>
                <li className="new_goals">
                    <div className="logo">
                        <div className="menu_title_one">yourOWN</div>
                        <div className="menu_title_two">Goals!</div>
                    </div>
                    <p>Gym exercise</p>
                    <div className="weight_score">{exerciseName}</div>
                    <p>Exercise weight</p>
                    <div className="weight_score">{exerciseWeight}kg</div>
                    <form className="set_new_goal">
                        <input type="text"  className={"new_goal_input"}
                               placeholder="Type the name of your goal"
                               onFocus={(e) => e.target.placeholder = ""}
                               onBlur={(e) => e.target.placeholder = "Type the name of your goal"}
                               value={exerciseName}
                               onChange={e => setExerciseName(e.target.value)}/>
                        <input type="number" className={"new_goal_input"}
                               step="0.01"
                               placeholder="How much do you want to bench at the gym?"
                               onFocus={(e) => e.target.placeholder = ""}
                               onBlur={(e) => e.target.placeholder = "How much do you want to bench at the gym?"}
                               value={exerciseWeight} onChange={e => setExerciseWeight(e.target.value)} />
                        <input type="submit"
                               onClick={e => addExercise(e)}
                               className={"bn632-hover bn22 input_goal_button"}
                               value="Add exercise"/>
                    </form>

                </li>
                <button className="bn632-hover bn22 btn_close_new_goal" onClick={e => hideNewGoal(e, true)}>Close</button>
            </div>

        </>
)

};


export default MyGoals