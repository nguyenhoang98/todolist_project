import React, { Component } from "react";
import Loading from "../../Components/Loading/Loading";
import { connect } from "react-redux";
class LoadingContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { tasks } = this.props;
    return (
      <>
        <Loading tasks={tasks} />
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    tasks: state.Tasks,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(LoadingContainer);
