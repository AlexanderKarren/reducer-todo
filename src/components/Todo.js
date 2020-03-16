import React from 'react'
import './Todo.css'

export default function Todo({todo}) {
    return (
        <div className="todo">
            <input type="checkbox" id={`todo-${todo.id}`}/>
            <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>
        </div>
    )
}
