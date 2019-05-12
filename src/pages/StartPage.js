import React, { Component } from "react";

import StatelessComponent from "../components/StatelessComponent";
import PureComponent from "../components/PureComponent";
import Button from "../components/to-do-list/Button";

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
        <Button name="Add" handleClick={() => console.log("test")} />
      </div>
    );
  }
}

export default StartPage;
