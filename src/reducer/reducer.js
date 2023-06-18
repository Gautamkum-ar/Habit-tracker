import { habitData } from "../database/DataBase";

export const habitReducer = (state, { type, payload }) => {
  switch (type) {
    case "SHOW_SINGLE__HABIT": {
      return {
        ...state,
        singlehabit: payload,
      };
    }
    case "ADD__NEW__HABIT": {
      return {
        ...state,
        habitdata: [...habitData, payload],
      };
    }
    case "ARCHIVE_HABIT": {
      return {
        ...state,
        archiveHabit: [
          ...state.archiveHabit,
          state.habitdata.find((item) => item.id === payload),
        ],
        habitdata: state.habitdata.filter((habit) => habit.id !== payload),
      };
    }

    case "DELETE_HABIT": {
      return {
        ...state,
        habitdata: state.habitdata.filter((habit) => habit.id !== payload),
      };
    }
    default:
      return state;
  }
};
