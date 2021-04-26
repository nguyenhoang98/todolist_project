import * as typeTask from "../../Constants";

const initialState = [];

const reducer = (state = initialState, action) => {
  if (action.type === typeTask.FETCH_API_TASK_SUCCESS) {
    const { data } = action.payload;
    if (data === null) {
      return null;
    }
    state = data;
    return [...state];
  }
  if (action.type === typeTask.FETCH_API_TASK_ERR) {
    const { err } = action.payload;
    console.log(err);
    // alert(err);
  }

  if (action.type === typeTask.FETCH_API_TASK_WHEN_CHANGE_LENGTH_SUCCESS) {
    const { data } = action.payload;
    console.log(data);
    if (data === null) {
      return null;
    }
    state = data;
    console.log(state);
    return [...state];
  }
  if (action.type === typeTask.FETCH_API_TASK_WHEN_CHANGE_LENGTH_ERR) {
    const { err } = action.payload;
    console.log(err);
  }

  if (action.type === typeTask.POST_API_TASK_SUCCESS) {
    const { data } = action.payload;
    state.unshift(data);
    return [...state];
  }
  if (action.type === typeTask.POST_API_TASK_ERR) {
    const { err } = action.payload;
    console.log(err);
  }
  if (action.type === typeTask.DELETE_API_TASK_SUCCESS) {
    const { data } = action.payload;
    const { id } = data;
    const index = state.findIndex((value) => {
      return value.id === id;
    });
    state.splice(index, 1);
    return [...state];
  }
  if (action.type === typeTask.DELETE_API_TASK_ERR) {
    const { err } = action.payload;
    console.log(err);
  }

  if (action.type === typeTask.UPDATE_API_TASK_SUCCESS) {
    const { data } = action.payload;
    const { id } = data;
    const index = state.findIndex((value) => {
      return value.id === id;
    });
    state[index] = data;
    return [...state];
  }
  if (action.type === typeTask.UPDATE_API_TASK_ERR) {
    const { err } = action.payload;
    console.log(err);
  }

  if (action.type === typeTask.UPDATE_API_TASK_STATUS_SUCCESS) {
    const { data } = action.payload;
    const { id } = data;
    const index = state.findIndex((value) => {
      return value.id === id;
    });
    state[index].status = !state[index].status;
    return [...state];
  }
  if (action.type === typeTask.UPDATE_API_TASK_STATUS_ERR) {
    const { err } = action.payload;
    console.log(err);
  }
  return state;
};
export default reducer;
