import React, { Component } from "react";
import "./TaskListContainer.css";
import TaskList from "../../Components/TaskList/TaskList";
import TaskItem from "../../Components/TaskItem/TaskItem";
import LoadingContainer from "../../Containers/LoadingContainer/LoadingContainer";
import { connect } from "react-redux";
import {
  fetch_api_task,
  delete_api_task,
  update_api_task,
  update_api_task_status,
  fetch_api_task_when_change_length,
} from "../../Redux/Actions/Action";
import qs from "query-string";
class TaskListContainer extends Component {
  constructor(props) {
    super(props);
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.handleUpdateStatus = this.handleUpdateStatus.bind(this);
  }
  componentDidMount() {
    console.log("did mount");
    const { fetchApiTask, page } = this.props;
    fetchApiTask(
      `http://localhost:1234/todolist?_sort=time&_order=desc&_page=${page}&_limit=8`
    );
  }
  componentDidUpdate(prevProps, prevState) {
    const { lengthTasks, page, querySearch } = this.props;
    if (prevProps.lengthTasks !== lengthTasks && querySearch.q === "") {
      console.log("length");
      console.log("page", page);
      const { fetchApiTaskWhenChangeLength } = this.props;
      fetchApiTaskWhenChangeLength(
        `http://localhost:1234/todolist?_sort=time&_order=desc&_page=${page}&_limit=8`
      );
    }
    if (prevProps.page !== page) {
      console.log("page", page);
      const { fetchApiTask } = this.props;
      fetchApiTask(
        `http://localhost:1234/todolist?_sort=time&_order=desc&_page=${page}&_limit=8`
      );
    }
    if (prevProps.querySearch !== querySearch) {
      console.log("query");
      const queryString = qs.stringify(querySearch);
      console.log(queryString);
      const { fetchApiTask } = this.props;
      fetchApiTask(`http://localhost:1234/todolist?${queryString}`);
    }
  }

  handleDeleteTask(url, id) {
    const { deleteTask } = this.props;
    deleteTask(url, id);
  }
  updateTask(url, data) {
    const { updateTask } = this.props;
    updateTask(url, data);
  }
  handleUpdateStatus(url, data) {
    const { updateStatus } = this.props;
    updateStatus(url, data);
  }
  render() {
    let { data } = this.props;
    if (data === null) {
      data = [];
    }
    console.log("re-render");
    return (
      <div
        style={{
          position: "relative",
          height: 350,
        }}
      >
        <TaskList>
          {data.map((value, index) => {
            return (
              <TaskItem
                data={value}
                key={index}
                handleDeleteTask={this.handleDeleteTask}
                updateTask={this.updateTask}
                handleUpdateStatus={this.handleUpdateStatus}
              />
            );
          })}
        </TaskList>
        <LoadingContainer />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    data: state.Tasks,
    lengthTasks: state.lengthTasks,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchApiTask: (url, data) => {
      return dispatch(fetch_api_task(url));
    },
    fetchApiTaskWhenChangeLength: (url) => {
      return dispatch(fetch_api_task_when_change_length(url));
    },
    deleteTask: (url, id) => {
      return dispatch(delete_api_task(url, id));
    },
    updateTask: (url, data) => {
      return dispatch(update_api_task(url, data));
    },
    updateStatus: (url, data) => {
      return dispatch(update_api_task_status(url, data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TaskListContainer);
