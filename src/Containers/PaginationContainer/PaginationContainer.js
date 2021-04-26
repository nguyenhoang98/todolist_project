import React, { Component } from "react";
import Pagination from "../../Components/Pagination/Pagination";
import { connect } from "react-redux";
class PaginationContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { lengthTasks, handleChangePage } = this.props;
    return (
      <>
        <Pagination
          lengthTasks={lengthTasks}
          handleChangePage={handleChangePage}
        />
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    lengthTasks: state.lengthTasks,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaginationContainer);
