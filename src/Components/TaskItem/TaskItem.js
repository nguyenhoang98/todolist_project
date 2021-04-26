import React, { Component } from "react";
import "./TaskItem.css";

class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenForm: false,
      valueInput: {
        name: "",
      },
    };
    this.handleIsOpenForm = this.handleIsOpenForm.bind(this);
    this.handleIsCloseForm = this.handleIsCloseForm.bind(this);
    this.handleOnBur = this.handleOnBur.bind(this);
    this.handleOnchange = this.handleOnchange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }
  handleIsOpenForm() {
    this.setState({
      isOpenForm: true,
    });
    const { data } = this.props;
    this.setState({
      valueInput: {
        name: data.name,
      },
    });
  }
  handleIsCloseForm() {
    this.setState({
      isOpenForm: false,
    });
  }
  handleOnBur() {
    this.handleIsCloseForm();
  }
  handleOnchange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      valueInput: {
        [name]: value,
      },
    });
  }
  handleOnSubmit(e) {
    e.preventDefault();
    const { data, updateTask } = this.props;
    updateTask("http://localhost:1234/todolist", {
      ...data,
      name: this.state.valueInput.name,
    });
    this.handleIsCloseForm();
  }
  render() {
    const { data, handleDeleteTask, handleUpdateStatus } = this.props;
    const { valueInput, isOpenForm } = this.state;
    const { name } = valueInput;
    const m = Math.floor((new Date().getTime() - data.time) / 1000 / 60);
    const h = Math.floor((new Date().getTime() - data.time) / 1000 / 60 / 60);
    const d = Math.floor(
      (new Date().getTime() - data.time) / 1000 / 60 / 60 / 24
    );
    return (
      <div className="taskitem flex">
        <div className="taskitem__left">
          {isOpenForm === false ? (
            <span onClick={this.handleIsOpenForm} className="taskitem__name">
              {data.name}
            </span>
          ) : (
            <form onSubmit={this.handleOnSubmit}>
              <input
                type="text"
                value={name}
                name="name"
                onChange={this.handleOnchange}
                onBlur={this.handleOnBur}
                className="taskitem__input"
              />
            </form>
          )}
        </div>
        <div className="taskitem__right flex">
          <div className="status">
            <span
              className="time"
              style={{
                marginRight: "20px",
              }}
            >
              {" "}
              {d
                ? d + " ngày"
                : h
                ? h + " giờ"
                : m
                ? m + " phút"
                : "vừa xong"}{" "}
            </span>
            <span
              onClick={() =>
                handleUpdateStatus("http://localhost:1234/todolist", data)
              }
            >
              {data.status ? (
                <span
                  style={{
                    color: "green",
                  }}
                >
                  <i className="fa fa-check-circle-o" aria-hidden="true"></i>
                </span>
              ) : (
                <span
                  style={{
                    color: "red",
                  }}
                >
                  <i className="fa fa-times" aria-hidden="true"></i>
                </span>
              )}
            </span>
          </div>
          <div className="close">
            <span
              onClick={() =>
                handleDeleteTask("http://localhost:1234/todolist", data.id)
              }
            >
              <i className="fa fa-trash-o" aria-hidden="true"></i>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
export default TaskItem;
