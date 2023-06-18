import { useHabit } from "../../context/context";

import "../singleHabit/style.css";

export const SingleHabit = () => {
  const { state, setShowHabitData, dispatch } = useHabit();

  const { id, title, goal, timeofDay, startDay } = state?.singlehabit;
  return (
    <div className="single__habit">
      <div className="single__habit__box">
        <button
          className="close__habit__box"
          onClick={() => setShowHabitData(false)}
        >
          X
        </button>
        <h1>{title}</h1>

        <p>
          <b>Goal: </b> {goal}
        </p>
        <p>
          <b>Time Of in day:</b>
          {timeofDay}
        </p>
        <p>
          <b>Start day:</b>
          {startDay}
        </p>

        <div className="action__btns">
          <button className="edit__btn">Edit</button>
          <button
            className="archive__btn"
            onClick={() => {
              setShowHabitData(false);
              dispatch({ type: "ARCHIVE_HABIT", payload: id });
            }}
          >
            Archive
          </button>
          <button
            className="delete__btn"
            onClick={() => {
              setShowHabitData(false);
              dispatch({ type: "DELETE_HABIT", payload: id });
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
