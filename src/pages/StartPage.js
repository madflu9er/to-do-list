import React, { Component } from "react";

import StatelessComponent from "../components/StatelessComponent";
import PureComponent from "../components/PureComponent";

class StartPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Welcome to Invoice App!"
    };
  }

  render() {
    const { title } = this.state;

    return (
      <div className="start-page">
        <h1 className="welcome">{title}</h1>
        <StatelessComponent text="Stateless Component" />
        <PureComponent text="Pure Component" />
      </div>
    );
  }
}

export default StartPage;
