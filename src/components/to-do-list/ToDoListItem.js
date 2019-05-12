import React, { Component } from "react";
import PropTypes from "prop-types";

import Button from "./Button";

class ToDoListItem extends Component {
  static propTypes = {
    text: PropTypes.string,
    filterState: PropTypes.string,
    index: PropTypes.string,
    id: PropTypes.string,
    onEdit: PropTypes.func,
    onRemove: PropTypes.func,
    onDone: PropTypes.func
  };

  static defaultProps = {
    text: "New item",
    filterState: "active",
    index: "0",
    id: "",
    onEdit: () => {},
    onRemove: () => {},
    onDone: () => {}
  };

  constructor(props) {
    super(props);
    this.state = {
      editable: false,
      stateText: props.text,
      filterState: props.filterState,
      saveFocus: false
    };
  }

  handleEdit = () => {
    this.setState({
      editable: true
    });
  };

  onEditMode = (value) => {
    this.setState({
      stateText: value,
      saveFocus: true
    });
  };

  handleSave = () => {
    const { filterState, stateText } = this.state;
    const { onEdit, id } = this.props;

    this.setState({
      editable: false
    });
    onEdit(id, stateText);
    if (filterState === "done") {
      this.handleDone();
    }
    if (stateText.length === 0) {
      this.handleRemove();
    }
  };

  handleRemove = () => {
    const { onRemove, id } = this.props;

    onRemove(id);
  };

  handleDone = () => {
    let { filterState } = this.state;
    const { onDone, id } = this.props;


    if (filterState === "active") {
      filterState = "done";
      this.setState({ filterState });
    } else {
      filterState = "active";
      this.setState({ filterState });
    }
    onDone(id, filterState);
  };

  handleKeyPress = (e) => {
    const { saveFocus } = this.state;

    if (saveFocus && e.key === "Enter") {
      this.handleSave();
      this.setState({
        saveFocus: false
      });
    }
  };

  onFocus = () => {
    this.setState({
      saveFocus: true
    });
  };

  onBlur = () => {
    this.setState({
      saveFocus: false
    });
    this.handleSave();
  };

  render() {
    const { filterState, editable, stateText } = this.state;
    const { index, text } = this.props;
    return (
      <div className="to-do-item-full">
        <div className={filterState === "done" ? "to-do-item-text to-do-item-text-done" : "to-do-item-text"}>
          <div className="to-do-item-id">{index}</div>
          {editable ? (
            <div className="edit-block">
              <textarea
                className="edit-block-input"
                onFocus={this.onFocus}
                onBlur={this.onBlur}
                onKeyPress={this.handleKeyPress}
                onChange={e => this.onEditMode(e.target.value)}
                value={stateText}
              />
              <Button className="edit-block-button" name="Save" id="editField" onClick={this.handleSave} />
            </div>
          )
            : (
              <button
                type="submit"
                onClick={() => this.setState({ editable: true })}
                className={filterState === "done" ? "to-do-item-default-text todo-done"
                  : "to-do-item-default-text"}
              >
                {text}
              </button>
            )}
        </div>
        <div className="to-do-item-buttons">
          <Button name="Done" onClick={this.handleDone} className="done-button" />
          <Button name="Edit" onClick={this.handleEdit} className="edit-button" />
          <Button name="Delete" onClick={this.handleRemove} className="delete-button" />
        </div>
      </div>
    );
  }
}

export default ToDoListItem;
