import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ToDo from "./App";
import toDOLists from "./toDofile";
const todos = toDOLists();

function ToDoTable(props) {
  return <div>
    <h1>ToDo List:</h1>
    <ul>
      {todos.map((todo) => {
        return <ToDo  key={todo.id} description={todo.description} endDate={todo.endDate} />;
      })}
    </ul>
  </div>;
}

const element = document.getElementById('root');
ReactDOM.render(<ToDoTable />,element);
