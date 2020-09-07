import React from "react";
import "./Todo.css";
import { List, ListItem, ListItemText } from "@material-ui/core";

function Todo({ todo, timestamp }) {
  return (
    <div className="todo">
      <List>
        <ListItem>
          <ListItemText primary={todo} secondary={timestamp} />
        </ListItem>
      </List>
    </div>
  );
}

export default Todo;
