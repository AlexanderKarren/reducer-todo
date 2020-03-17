import React, { useReducer } from 'react'
import { initialState, todoReducer } from '../reducers/todoReducer'
import Todo from './Todo'
import TodoForm from './TodoForm'
import './TodoList.css'

export default function TodoList() {
    const [todos, dispatch] = useReducer(todoReducer, initialState);

    return (
        <div className="todo-list-container">
            {todos.map(todo => <Todo key={todo.id} todo={todo} dispatch={dispatch}/>)}
            <TodoForm dispatch={dispatch}/>
            <button onClick={() => dispatch({type: "CLEAR_COMPLETED"})}>Clear Completed</button>
        </div>
    )
}
