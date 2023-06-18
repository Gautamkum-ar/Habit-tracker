import { createContext, useContext, useReducer, useState } from "react";

import { habitData } from "../database/DataBase";
import { habitReducer } from "../reducer/reducer";

const initialState = {
  habitdata: habitData,
  singlehabit: {},
  archiveHabit:[]
};

const HabitContext = createContext();

export const HabitContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(habitReducer, initialState);
  const [showHabitData, setShowHabitData] = useState(false);
  const [showCreateHabit, setShowCreateHabit] = useState(false);

  return (
    <HabitContext.Provider
      value={{
        state,
        dispatch,
        setShowHabitData,
        showHabitData,
        setShowCreateHabit,
        showCreateHabit,
      }}
    >
      {children}
    </HabitContext.Provider>
  );
};

export const useHabit = () => useContext(HabitContext);
