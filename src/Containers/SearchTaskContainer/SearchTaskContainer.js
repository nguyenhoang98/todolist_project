import React, { Component } from "react";
import SearchTask from "../../Components/SearchTask/SearchTask";

class SearchTaskContainer extends Component {
  constructor(props) {
    super(props);
    this.handleSearchTask = this.handleSearchTask.bind(this);
  }
  handleSearchTask(param) {
    const { searchTask } = this.props;
    searchTask(param);
  }
  render() {
    return (
      <>
        <SearchTask handleSearchTask={this.handleSearchTask} />
      </>
    );
  }
}
export default SearchTaskContainer;
