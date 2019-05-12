import React, { Component } from "react";
import Button from "../components/to-do-list/Button";
import ToDoListComponent from "../components/to-do-list/ToDoListComponent";

class ToDoListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoText: "",
      todos: [],
      addFocus: false,
      isDisabled: true,
      sortFilter: "All"
    };
  }

  onToDoChange(value) {
    this.setState({
      todoText: value
    });
    this.setState({ isDisabled: !value.length });
  }

  handleAddClick = () => {
    const { todos, todoText } = this.state;
    const todoItem = {
      id: todos.length + 1,
      text: todoText,
      editable: false,
      filterState: "active"
    };

    this.setState({
      todos: [...todos, todoItem],
      todoText: "",
      isDisabled: true
    });
  };

  handleDone = (id, filterState) => {
    const { todos } = this.state;
    const itemIndex = todos.indexOf(todos.find(item => item.id === id));
    todos[itemIndex].filterState = filterState;
    this.setState({ todos });
  };

  handleEdit = (id, text) => {
    const { todos } = this.state;
    const todo = todos.find(item => item.id === id);

    todo.text = text;
    this.setState({ todos });
  };

  handleRemove = (id) => {
    const { todos } = this.state;
    const itemIndex = todos.indexOf(todos.find(item => item.id === id));

    todos.splice(itemIndex, 1);
    this.setState({ todos });
  };

  handleKeyPress = (e) => {
    const { addFocus, isDisabled } = this.state;

    if (addFocus && !isDisabled) {
      if (e.key === "Enter") {
        this.handleAddClick();
      }
    }
  };


  handleRemoveAllDone = () => {
    const { todos } = this.state;
    let newArray = [];
    newArray = todos.filter(item => item.filterState === "active");
    this.setState({ todos: newArray });
  };

  onFocus = () => {
    this.setState({ addFocus: true });
  };

  onBlur =() => {
    this.setState({ addFocus: false });
  };

  render() {
    const { title, todos, todoText, sortFilter, isDisabled } = this.state;

    return (
      <div className="to-do-list-page">
        <h1 className="welcome">{title}</h1>
        <div id="addblock" className="add-block">
          <input
            className="add-block-input"
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            onKeyPress={this.handleKeyPress}
            type="text"
            onChange={e => this.onToDoChange(e.target.value)}
            value={todoText}
          />
          <Button
            className="add-block-button"
            name="Add"
            onClick={this.handleAddClick}
            isDisable={isDisabled}
          />
        </div>
        <div className="filter-section">
          <Button
            name="All"
            className={sortFilter === "All" ? "filter-button-all on-selected-filter" : "filter-button-all"}
            onClick={() => {
              this.setState({ sortFilter: "All" });
            }}
          />
          <Button
            name="Active"
            className={sortFilter === "active" ? "filter-button-active on-selected-filter" : "filter-button-active"}
            onClick={() => {
              this.setState({ sortFilter: "active" });
            }}
          />
          <Button
            name="Done"
            className={sortFilter === "done" ? "filter-button-done on-selected-filter" : "filter-button-done"}
            onClick={() => {
              this.setState({ sortFilter: "done" });
            }}
          />
        </div>
        <div className="list-wrapper">
          <ToDoListComponent
            todos={todos.filter(item => (sortFilter === "All" ? item : item.filterState === sortFilter))}
            onEdit={this.handleEdit}
            onRemove={this.handleRemove}
            onDone={this.handleDone}
          />
        </div>

        <div className="remove-done-items">
          <Button
            name="X"
            className="remove-done-button"
            onClick={this.handleRemoveAllDone}
          />
        </div>
      </div>
    );
  }
}

export default ToDoListPage;
