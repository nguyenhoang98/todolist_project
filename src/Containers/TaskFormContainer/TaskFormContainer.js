import React, { Component } from "react";
import "./TaskFormContainer.css";
import TaskForm from "../../Components/TaskForm/TaskForm";
import { connect } from "react-redux";
import { post_api_task } from "../../Redux/Actions/Action";
class TaskFormContainer extends Component {
  constructor(props) {
    super(props);
    this.handleAddTask = this.handleAddTask.bind(this);
  }
  handleAddTask(url, data) {
    const { addTask } = this.props;
    addTask(url, data);
  }
  render() {
    return (
      <div>
        <TaskForm handleAddTask={this.handleAddTask} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (url, data) => {
      dispatch(post_api_task(url, data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TaskFormContainer);
