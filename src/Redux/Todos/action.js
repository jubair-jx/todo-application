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
export const colorSelected = (todoId, todoColor) => {
  return {
    type: SELECTEDCOLOR,
    payload: {
      todoId,
      todoColor,
    },
  };
};
