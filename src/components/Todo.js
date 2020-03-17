import React, { useState, useEffect } from 'react'
import './Todo.css'

export default function Todo({todo, dispatch}) {
    const [dueToday, setDueToday] = useState(false);

    useEffect(() => dateIsToday(), [])

    const dateIsToday = () => {
        let today = new Date();
        let date = today.getFullYear()+((today.getMonth() <= 9) ? '-0' : "-")+(today.getMonth()+1)+'-'+today.getDate();
        if (todo.due[0] === date) {
            setDueToday(true);
        }
    }

    return (
        <div className={dueToday ? "todo overdue" : "todo"} onClick={() => dispatch({type: "TOGGLE_COMPLETION", payload:todo.id})}>
            <div className={todo.completed ? "completed" : ""}>
                <input type="checkbox" id={`todo-${todo.id}`} checked={todo.completed}/>
                <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>
            </div>
            <div className="tags">
                {todo.tags.map(tag => <div className={(tag !== null) ? "tag" : ""}>{tag}</div>)}
            </div>
            {dueToday ? <div><span style={{color: "red"}}>today</span></div> : <div>{todo.due}</div>}
        </div>
    )
}
