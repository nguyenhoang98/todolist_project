import * as typeTask from "../../Constants";
import * as typeMessage from "../../Constants/message";
import { getApi, postApi, deleteApi, putApi } from "../../Apis/index";
export const fetch_api_task = (url) => {
  // console.log("run");
  return async (dispatch) => {
    dispatch(fetch_api_task_success(null));
    return getApi(url)
      .then((res) => {
        // console("success");
        dispatch(fetch_api_task_success(res));
      })
      .catch((err) => {
        // console.log("err");
        dispatch(fetch_api_task_err(err));
      });
  };
};

export const fetch_api_task_success = (data) => {
  return {
    type: typeTask.FETCH_API_TASK_SUCCESS,
    payload: {
      data: data ? data.data : null,
      length: data ? data.headers["x-total-count"] : 0,
    },
  };
};
export const fetch_api_task_err = (err) => {
  return {
    type: typeTask.FETCH_API_TASK_SUCCESS,
    payload: {
      err: err,
    },
  };
};

//

export const fetch_api_task_when_change_length = (url) => {
  return (dispatch) => {
    return getApi(url)
      .then((res) => {
        console.log(res);
        dispatch(fetch_api_task_when_change_length_success(res));
      })
      .catch((err) => {
        dispatch(fetch_api_task_when_change_length_err(err));
      });
  };
};

export const fetch_api_task_when_change_length_success = (data) => {
  return {
    type: typeTask.FETCH_API_TASK_WHEN_CHANGE_LENGTH_SUCCESS,
    payload: {
      data: data ? data.data : null,
      length: data ? data.headers["x-total-count"] : 0,
    },
  };
};
export const fetch_api_task_when_change_length_err = (err) => {
  return {
    type: typeTask.FETCH_API_TASK_WHEN_CHANGE_LENGTH_ERR,
    payload: {
      err: err,
    },
  };
};

//

export const post_api_task = (url, data) => {
  console.log(url, data);
  return (dispatch) => {
    postApi(url, data)
      .then((res) => {
        dispatch(post_api_task_success(res));
      })
      .catch((err) => {
        dispatch(post_api_task_err(err));
      });
  };
};
export const post_api_task_success = (data) => {
  return {
    type: typeTask.POST_API_TASK_SUCCESS,
    payload: {
      data: data.data,
      length: data.headers["x-total-count"],
    },
  };
};
export const post_api_task_err = (err) => {
  return {
    type: typeTask.POST_API_TASK_ERR,
    payload: {
      err: err,
    },
  };
};

export const delete_api_task = (url, id) => {
  console.log(`${url}/${id}`);
  return (dispatch) => {
    deleteApi(`${url}/${id}`)
      .then((res) => {
        dispatch(delete_api_task_success(res));
      })
      .catch((err) => {
        dispatch(delete_api_task_err(err));
      });
  };
};
export const delete_api_task_success = (data) => {
  return {
    type: typeTask.DELETE_API_TASK_SUCCESS,
    payload: {
      data: data.data,
      length: data.headers["x-total-count"],
    },
  };
};
export const delete_api_task_err = (err) => {
  return {
    type: typeTask.DELETE_API_TASK_ERR,
    payload: {
      err: err,
    },
  };
};

export const update_api_task = (url, data) => {
  return (dispatch) => {
    putApi(`${url}/${data.id}`, data)
      .then((res) => {
        dispatch(update_api_task_success(data));
      })
      .catch((err) => {
        dispatch(update_api_task_err(err));
      });
  };
};
export const update_api_task_success = (data) => {
  return {
    type: typeTask.UPDATE_API_TASK_SUCCESS,
    payload: {
      data: data,
    },
  };
};
export const update_api_task_err = (err) => {
  return {
    type: typeTask.UPDATE_API_TASK_ERR,
    payload: {
      err: err,
    },
  };
};

export const update_api_task_status = (url, data) => {
  return (dispatch) => {
    putApi(`${url}/${data.id}`, { ...data, status: !data.status })
      .then((res) => {
        dispatch(update_api_task_status_success(data));
      })
      .catch((err) => {
        dispatch(update_api_task_status_err(err));
      });
  };
};
export const update_api_task_status_success = (data) => {
  return {
    type: typeTask.UPDATE_API_TASK_STATUS_SUCCESS,
    payload: {
      data: data,
    },
  };
};
export const update_api_task_status_err = (err) => {
  return {
    type: typeTask.UPDATE_API_TASK_STATUS_ERR,
    payload: {
      err: err,
    },
  };
};

export const close_noti = () => {
  return {
    type: typeMessage.SLOSE_NOTI,
  };
};
