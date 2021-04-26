import React, { Component } from "react";
import "./Noti.css";
import NotiGif from "../../Assets/bird-gif.gif";
class Noti extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { noti, handleCloseNoti } = this.props;
    if (noti.isOpenNoti) {
      return (
        <div className="noti">
          <img src={NotiGif} className="noti-gif" />
          <div className="noti-content"> {noti.message} </div>
          <div className="noti-close" onClick={handleCloseNoti}>
            <span>
              <i className="fa fa-times" aria-hidden="true"></i>
            </span>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
export default Noti;
