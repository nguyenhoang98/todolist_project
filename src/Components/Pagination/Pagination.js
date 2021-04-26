import React, { Component } from "react";
import "./Pagination.css";
import classNames from "classnames";
class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isColorBtn: 1,
    };
    this.handleChangePage = this.handleChangePage.bind(this);
  }
  handleChangePage(i) {
    const { handleChangePage } = this.props;
    this.setState({
      isColorBtn: i,
    });
    handleChangePage(i);
  }

  render() {
    const { isColorBtn } = this.state;
    console.log(isColorBtn);
    const { lengthTasks } = this.props;
    const sumPage = Math.ceil(lengthTasks / 8);
    const txt = [];
    if (sumPage) {
      for (var i = 1; i <= sumPage; i++) {
        txt.push({ page: i });
      }
    }
    return (
      <div className="pagination">
        {txt.map((value, index) => {
          return (
            <button
              onClick={() => this.handleChangePage(index + 1)}
              key={index}
              className={classNames("btn btn-pagination", {
                red: index + 1 === isColorBtn,
              })}
            >
              {" "}
              {value.page}{" "}
            </button>
          );
        })}
      </div>
    );
  }
}
export default Pagination;
