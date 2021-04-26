import { combineReducers } from "redux";
import Tasks from "../Reducers/task";
import lengthTasks from "./lengthTasks";
import Message from "./Message";
const appReducers = combineReducers({
  Tasks: Tasks,
  lengthTasks: lengthTasks,
  Message: Message,
});
export default appReducers;
