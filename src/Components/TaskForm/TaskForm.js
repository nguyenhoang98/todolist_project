import React, { Component } from "react";
import "./TaskForm.css";
class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      status: false,
    };
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnResetForm = this.handleOnResetForm.bind(this);
    this.handleOnchange = this.handleOnchange.bind(this);
  }
  createStringRandom() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  createID() {
    return (
      this.createStringRandom() +
      this.createStringRandom() +
      "-" +
      this.createStringRandom() +
      "-" +
      this.createStringRandom() +
      this.createStringRandom() +
      this.createStringRandom() +
      "-" +
      this.createStringRandom()
    );
  }
  handleOnchange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    const newData = { ...this.state };
    newData[name] = value;
    this.setState(newData);
  }
  handleOnSubmit(e) {
    e.preventDefault();
    const { handleAddTask } = this.props;
    handleAddTask("http://localhost:1234/todolist", {
      ...this.state,
      id: this.createID(),
      time: new Date().getTime(),
    });
    this.handleOnResetForm();
  }
  handleOnResetForm() {
    this.setState({
      id: "",
      name: "",
      status: false,
    });
  }
  render() {
    const { name } = this.state;
    return (
      <div className="taskform">
        <form onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            value={name}
            name="name"
            onChange={this.handleOnchange}
            className="taskform__input"
            placeholder="Thêm công việc"
            required={true}
          />
        </form>
      </div>
    );
  }
}
export default TaskForm;
