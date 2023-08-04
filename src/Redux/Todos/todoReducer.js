import initialState from "../Todos/initiliazeState";
import {
  ADDEDTASK,
  CLEARTASK,
  COMPLETEDTASK,
  SELECTEDCOLOR,
  SINGLEDELETED,
  TOGGELED,
} from "./actionTypes";

const nextTodoId = (todos) => {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
};
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDEDTASK:
      return [
        ...state,
        {
          id: nextTodoId(state),
          text: action.payload,
        },
      ];

    case TOGGELED:
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed,
        };
      });
    case SELECTEDCOLOR:
      const { todoId, todoColor } = action.payload;
      return state.map((todo) => {
        if (todo.id !== todoId) {
          return todo;
        }
        return {
          ...todo,
          color: todoColor,
        };
      });
    case SINGLEDELETED:
      return state.filter((todo) => todo.id !== action.payload);
    case COMPLETEDTASK:
      return state.map((todo) => {
        return {
          ...todo,
          completed: true,
        };
      });
    case CLEARTASK:
      return state.filter((todo) => !todo.completed);

    default:
      return state;
  }
};

export default todoReducer;
