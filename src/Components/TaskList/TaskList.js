import React, { Component } from "react";
import "./TaskList.css";

class TaskList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div className="">{this.props.children}</div>;
  }
}
export default TaskList;
