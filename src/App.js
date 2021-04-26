import React, { Component } from "react";
import "./App.css";
import configureStore from "./Redux/config";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Clock from "./Components/Clock/Clock";
import Menu from "./Components/Menu/Menu";
import TitleApp from "./Components/TitleApp/TitleApp";
import NotiContainer from "./Containers/NotiContainer/NotiContainer";
import routers from "./routers";
import PropTypes from "prop-types";
const store = configureStore();
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="app">
        <Provider store={store}>
          <Router>
            <Clock />
            <TitleApp />
            <NotiContainer />
            <Menu />
            {routers.map((value, index) => {
              return (
                <Route
                  path={value.path}
                  exact={value.exact}
                  component={value.component}
                  key={index}
                />
              );
            })}
          </Router>
        </Provider>
      </div>
    );
  }
}
export default App;
