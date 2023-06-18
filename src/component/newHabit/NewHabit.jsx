import { useState } from "react";
import { useHabit } from "../../context/context";
import "../newHabit/style.css";

export const NewHabit = () => {
  const { setShowCreateHabit, dispatch } = useHabit();
  const [newHabitData, setNewHabitData] = useState({
    title: "",
    timeofDay: "",
    goal: "",
    startDay: "",
    repeat: "",
  });
  return (
    <div className="new__habit__container">
      <div className="new__habit__main">
        <h1>Add New Habit</h1>
        <button
          className="cancel__add__habit"
          onClick={() => setShowCreateHabit(false)}
        >
          X
        </button>

        <label className="habit__name__input">
          Name:{" "}
          <input
            type="text"
            placeholder="name"
            onChange={(e) =>
              setNewHabitData({ ...newHabitData, title: e.target.value })
            }
          />
        </label>

        <div className="new__habit__details">
          <section>
            <span>REPEAT</span>
            <select
              onChange={(e) =>
                setNewHabitData({
                  ...newHabitData,
                  repeat: e.target.value,
                })
              }
            >
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
            </select>
          </section>
          <section>
            <span>GOAL</span>
            <select
              onChange={(e) =>
                setNewHabitData({ ...newHabitData, goal: e.target.value })
              }
            >
              <option value="Daily">1 times day</option>
              <option value="Weekly">2 times day</option>
              <option value="Monthly">4 times</option>
            </select>
          </section>
          <section>
            <span>TIME OF DAY</span>
            <select
              onChange={(e) =>
                setNewHabitData({
                  ...newHabitData,
                  timeofDay: e.target.value,
                })
              }
            >
              <option value="Daily">Any Time</option>
              <option value="Weekly">Morning</option>
              <option value="Monthly">Evening</option>
            </select>
          </section>
          <section
            onChange={(e) =>
              setNewHabitData({
                ...newHabitData,
                startDay: e.target.value,
              })
            }
          >
            <span>START DAY</span>
            <select>
              <option value="Daily">Today</option>
              <option value="Weekly">Tommorow</option>
              <option value="Monthly">Day After Tommorow</option>
            </select>
          </section>
        </div>

        <button
          className="save__habit"
          onClick={() => {
            setShowCreateHabit(false);
            dispatch({ type: "ADD__NEW__HABIT", payload: newHabitData });
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};
