import React, { useState } from 'react'
import { initialState } from '../reducers/todoReducer'
import Todo from './Todo'
import './TodoList.css'

export default function TodoList() {
    const [todos, updateTodos] = useState(initialState)
    return (
        <div className="todo-list-container">
            {todos.map(todo => <Todo todo={todo}/>)}
        </div>
    )
}
