import {
  ADDEDTASK,
  CLEARTASK,
  COMPLETEDTASK,
  SELECTEDCOLOR,
  SINGLEDELETED,
  TOGGELED,
} from "./actionTypes";

export const added = (todoText) => {
  return {
    type: ADDEDTASK,
    payload: todoText,
  };
};

export const toggeled = (todoId) => {
  return {
    type: TOGGELED,
    payload: todoId,
  };
};
export const completedtask = () => {
  return {
    type: COMPLETEDTASK,
  };
};
export const cleartask = () => {
  return {
    type: CLEARTASK,
  };
};
export const deleted = (todoId) => {
  return {
    type: SINGLEDELETED,
    payload: todoId,
  };
};
export const colorSelected = (todoColor, todoId) => {
  return {
    type: SELECTEDCOLOR,
    payload: {
      todoColor,
      todoId,
    },
  };
};
