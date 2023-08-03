import {
  ADDEDTASK,
  CLEARTASK,
  COMPLETEDTASK,
  SELECTEDCOLOR,
  SINGLEDELETED,
  TOGGELED,
} from "./actionTypes";
import { initlizeState } from "./initiliazeState";

const nextTodoId = (todos) => {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
};
const todoReducer = (state = initlizeState, action) => {
  switch (action.type) {
    case ADDEDTASK:
      return [
        ...state,
        {
          id: nextTodoId(state),
        },
      ];

    case TOGGELED:
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }
        return {
          ...todo,
          completed: !completed,
        };
      });
    case SELECTEDCOLOR:
      const { todoColor, todoId } = action.payload;
      return state.map((todo) => {
        if (todo.id !== todoId) {
          return todoId;
        }
        return {
          ...state,
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
      state;
  }
};

export default todoReducer;
