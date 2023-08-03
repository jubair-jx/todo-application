import { combineReducers } from "redux";
import todoReducer from "./Todos/todoReducer";
import filterReducers from "./Filter/filterReducers";

const rootReducer = combineReducers({
  todos: todoReducer,
  filters: filterReducers,
});
export default rootReducer;
