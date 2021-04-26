import React, { Component } from "react";
import "./TaskPage.css";
import TaskFormContainer from "../../Containers/TaskFormContainer/TaskFormContainer";
import TaskListContainer from "../../Containers/TaskListContainer/TaskListContainer";
import PaginationContainer from "../../Containers/PaginationContainer/PaginationContainer";
import SearchTaskContainer from "../../Containers/SearchTaskContainer/SearchTaskContainer";
class TaskPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      querySearch: {
        q: "",
      },
    };
    this.changePage = this.changePage.bind(this);
    this.searchTask = this.searchTask.bind(this);
  }
  changePage(i) {
    console.log(i);
    this.setState({
      page: i,
    });
  }
  searchTask(param) {
    this.setState({
      querySearch: {
        q: param.q,
      },
    });
  }
  render() {
    const { page, querySearch } = this.state;
    return (
      <div className="taskpage">
        <SearchTaskContainer searchTask={this.searchTask} />
        <TaskFormContainer />
        <TaskListContainer page={page} querySearch={querySearch} />
        <PaginationContainer handleChangePage={this.changePage} />
      </div>
    );
  }
}

export default TaskPage;
