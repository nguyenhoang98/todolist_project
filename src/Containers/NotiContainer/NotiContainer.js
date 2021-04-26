import React, { Component } from "react";
import Noti from "../../Components/Noti/Noti";
import { connect } from "react-redux";
import { close_noti } from "../../Redux/Actions/Action";
class NotiContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { noti, handleCloseNoti } = this.props;
    return (
      <>
        <Noti noti={noti} handleCloseNoti={handleCloseNoti} />
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    noti: state.Message,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleCloseNoti: () => {
      dispatch(close_noti());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NotiContainer);
