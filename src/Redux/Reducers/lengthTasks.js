import * as typeTask from "../../Constants";
import * as typeMessage from "../../Constants/message";
const initialState = 0;

const reducer = (state = initialState, action) => {
  if (action.type === typeTask.FETCH_API_TASK_SUCCESS) {
    const { length } = action.payload;
    state = Number(length);
    console.log(state);
    return state;
  }
  if (action.type === typeTask.FETCH_API_TASK_WHEN_CHANGE_LENGTH_SUCCESS) {
    const { length } = action.payload;
    state = Number(length);
    return state;
  }

  if (action.type === typeTask.POST_API_TASK_SUCCESS) {
    const { length } = action.payload;
    state = Number(length);
    return state;
  }
  if (action.type === typeTask.DELETE_API_TASK_SUCCESS) {
    const { length } = action.payload;
    state = Number(length);
    return state;
  }
  return state;
};
export default reducer;
