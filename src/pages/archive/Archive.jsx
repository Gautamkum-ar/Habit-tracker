import { Navbar } from "../../component/navbar/NavBar";
import { SingleHabit } from "../../component/singleHabit/SingleHabit";
import { useHabit } from "../../context/context";
import "../archive/style.css";

export const Archive = () => {
  const { state, setShowHabitData, showHabitData } = useHabit();

  console.log(state.archiveHabit);
  return (
    <div className="archive__container">
      <Navbar />
      <div className="archive__main">
        {showHabitData && <SingleHabit />}

        {state.archiveHabit.map((habit) => (
          <div
            key={habit.id}
            className="habit__card__btn"
            onClick={() => {
              setShowHabitData(true);
              //   dispatch({ type: "SHOW_SINGLE__HABIT", payload: habit });
            }}
          >
            <h2>{habit.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};
