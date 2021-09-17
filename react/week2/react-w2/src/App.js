import React from "react";
import './App.css';


const todos = [
    {
        id: 1,
        description: "Get out of bed",
    },
    {
        id: 2,
        description: "Brush teeth",
    },
    {
        id: 3,
        description: "Eat breakfast",
    },
];

const myTodoList = ["Finish my hyf homework", "Walk the dog", "Do laundry", "Prepare for class"]

function CreateTodo(props) {
    const [todoStatus, setTodoStatus] = React.useState(true);
    function checkState() {
        setTodoStatus(!todoStatus)
    }

    return (
        <div>
          <ul>
        <li style={{ 'textDecoration': todoStatus ? 'none' : 'line-through' }} >{props.description}</li>
                <input type="checkbox" onClick={checkState}></input>
                <button onClick={() => props.deleteMethod(props.id)}> Delete </button>
           </ul>
        </div>
    )
}

function TodoListContainer() {
    return (
        <div>
            <h1>Todo List</h1>
            <TodoList />
        </div>
    )
}

function TodoList() {
    const [todo, setTodo] = React.useState(todos);
    const [id, setId] = React.useState(4);
    function incrementId() {
        setId(prev => prev + 1);
    }
    function addTodo() {
        const randomIndex = Math.floor(Math.random() * myTodoList.length);
        incrementId();
        setTodo(prev => {
            return (
                [...prev, {
                    id: id,
                    description: myTodoList[randomIndex]
                }]
            )
        }

        );
    }
    function deleteTodo(itemID) {
        setTodo((prev) => {
            return prev.filter((item, index) => {
                return item.id !== itemID
            });
        })
    }
    return (
        <div>
            {todo.length === 0 && <p>No items</p>}
            <ul>
                {todo.map((item, index) => <CreateTodo key={item.id} description={item.description} deleteMethod={deleteTodo} id={item.id} />)}
            </ul>
            <div>
                <button onClick={addTodo} className="add-button">Add todo</button>
            </div>
        </div>
    )
}

function Counter() {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        setTimeout(() => setCount(prev => prev += 1), 1000)
    })
    return <p>You have used {count} seconds on this website</p>
}

export default function App() {
    return (
        <div>
            <Counter />
            <TodoListContainer />
        </div>
    );
}
