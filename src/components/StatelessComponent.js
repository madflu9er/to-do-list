import React from "react";
import PropTypes from "prop-types";

const StatelessComponent = ({ text }) => <div>{text}</div>;

StatelessComponent.propTypes = {
  text: PropTypes.string
};

StatelessComponent.defaultProps = {
  text: "Stateless"
};

export default StatelessComponent;
