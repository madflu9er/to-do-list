import React from "react";
import PropTypes from "prop-types";

class PureComponent extends React.PureComponent {
  static propTypes = {
    text: PropTypes.string
  };

  static defaultProps = {
    text: "Pure"
  };


  render() {
    const { text } = this.props;

    return (
      <div>{text}</div>
    );
  }
}

export default PureComponent;
