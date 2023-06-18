import { useState } from "react";
import { Navbar } from "../../component/navbar/NavBar";
import { useHabit } from "../../context/context";
import "../landing/style.css";
import { SingleHabit } from "../../component/singleHabit/SingleHabit";
import { NewHabit } from "../../component/newHabit/NewHabit";

export const Landing = () => {
  const {
    state,
    setShowHabitData,
    dispatch,
    showHabitData,
    setShowCreateHabit,
    showCreateHabit,
  } = useHabit();
  console.log(state.singlehabit);
  return (
    <div className="landing__container">
      <Navbar />
      <div className="habit__main">
        {showHabitData && <SingleHabit />}
        {showCreateHabit && <NewHabit />}
        <div className="new__habit" onClick={() => setShowCreateHabit(true)}>
          Add new habit
        </div>
        {state?.habitdata.map((habit) => (
          <div
            key={habit.id}
            className="habit__card__btn"
            onClick={() => {
              setShowHabitData(true);
              dispatch({ type: "SHOW_SINGLE__HABIT", payload: habit });
            }}
          >
            <h2>{habit.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};
