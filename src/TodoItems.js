import React, { Component } from "react";
import "./TodoItems.css";
 
class TodoItems extends Component {
    constructor(props) {
        super(props);
     
        this.createTasks = this.createTasks.bind(this);
      }
     
      delete(key) {
        this.props.delete(key);
      }
      
    createTasks(item) {
        return <li>
          {item.text}
          <button id = "deleteButton" type="submit" onClick={() => this.delete(item.key)} key={item.key}>Delete</button>
          </li>
      }
 
  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
 
    return (
      <ul className="theList">
          {listItems}
      </ul>
    );
  }
};
 
export default TodoItems;
