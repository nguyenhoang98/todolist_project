import React, { Component } from "react";
import "./SearchTask.css";
import ImgSearch from "../../Assets/search.png";
class SearchTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      q: "",
    };
    this.handleOnchange = this.handleOnchange.bind(this);
    this.handleOnsubmit = this.handleOnsubmit.bind(this);
  }
  handleOnchange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
    });
  }
  handleOnsubmit(e) {
    e.preventDefault();
    const { handleSearchTask } = this.props;
    handleSearchTask(this.state);
  }
  render() {
    const { q } = this.state;
    return (
      <div className="searchtask">
        <form onSubmit={this.handleOnsubmit}>
          <input
            type="text"
            className="searchtask__input"
            value={q}
            name="q"
            placeholder="Tìm kiếm"
            onChange={this.handleOnchange}
          />
          <img src={ImgSearch} className="img-search" />
        </form>
      </div>
    );
  }
}
export default SearchTask;
