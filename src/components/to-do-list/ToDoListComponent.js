import React, { Component } from "react";
import PropTypes from "prop-types";

import ToDoListItem from "./ToDoListItem";

class ToDoListComponent extends Component {
  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object),
    onEdit: PropTypes.func,
    onRemove: PropTypes.func,
    onDone: PropTypes.func
  };

  static defaultProps = {
    todos: [],
    onEdit: () => {},
    onRemove: () => {},
    onDone: () => {}
  };

  render() {
    const { todos, onEdit, onRemove, onDone } = this.props;

    return (
      todos.map((item, index) => (
        <ToDoListItem
          key={item.id}
          text={item.text}
          filterState={item.filterState}
          index={index + 1}
          id={item.id}
          onEdit={onEdit}
          onRemove={onRemove}
          onDone={onDone}
        />
      )));
  }
}
export default ToDoListComponent;
