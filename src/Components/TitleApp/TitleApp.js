import React, { Component } from "react";
import "./TitleApp.css";

class TitleApp extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="titleapp">
        <marquee>
          Truy cập app cập nhật thông tin và hoàn thành công việc của mình nhé !
          haha :)
        </marquee>
      </div>
    );
  }
}

export default TitleApp;
