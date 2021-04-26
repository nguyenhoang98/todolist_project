import * as typeTask from "../../Constants";
import * as typeMessage from "../../Constants/message";
const initialState = {
  isOpenNoti: false,
  message: "Chào mừng bạn truy cập app",
};

const reducer = (state = initialState, action) => {
  if (action.type === typeTask.FETCH_API_TASK_SUCCESS) {
    console.log("success");
    const newState = {
      isOpenNoti: true,
      message: typeMessage.WELCOME_APP,
    };
    return { ...newState };
  }
  if (action.type === typeTask.POST_API_TASK_SUCCESS) {
    const newState = {
      isOpenNoti: true,
      message: typeMessage.ADD_TASK_SUCCESS,
    };
    return { ...newState };
  }
  if (action.type === typeTask.DELETE_API_TASK_SUCCESS) {
    const newState = {
      isOpenNoti: true,
      message: typeMessage.DELETE_TASK_SUCCESS,
    };
    return { ...newState };
  }
  if (action.type === typeTask.UPDATE_API_TASK_SUCCESS) {
    const newState = {
      isOpenNoti: true,
      message: typeMessage.UPDATE_TASK_SUCCESS,
    };
    return { ...newState };
  }
  if (action.type === typeTask.UPDATE_API_TASK_STATUS_SUCCESS) {
    const newState = {
      isOpenNoti: true,
      message: typeMessage.UPDATE_TASK_STATUS_SUCCESS,
    };
    return { ...newState };
  }

  if (action.type === typeMessage.SLOSE_NOTI) {
    const newState = {
      isOpenNoti: false,
      message: typeMessage.WELCOME_APP,
    };
    return { ...newState };
  }
  return state;
};

export default reducer;
