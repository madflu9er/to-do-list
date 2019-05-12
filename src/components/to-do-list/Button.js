import React from "react";
import PropTypes from "prop-types";

const Button = ({ name, onClick, className, isDisable }) => <button disabled={isDisable} type="button" className={className} onClick={onClick}>{name}</button>;

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string.isRequired,
  isDisable: PropTypes.bool
};

Button.defaultProps = {
  onClick: () => {
    alert("The is no active function");
  },
  isDisable: false
};
export default Button;
