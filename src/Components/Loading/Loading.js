import React, { Component } from "react";
import "./Loading.css";
import LoadingApp from "../../Assets/loadingapp.gif";
class Loading extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { tasks } = this.props;
    console.log(tasks);
    if (!tasks) {
      return (
        <div className="loading">
          <img src={LoadingApp} className="loading-gif" />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Loading;
