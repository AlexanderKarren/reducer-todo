import React, { useState, useEffect } from 'react'
import './Todo.css'

export default function Todo({todo, dispatch}) {
    const [overdue, setOverdueStatus] = useState(false);
    const [dueDate, setDueDate] = useState(todo.due);

    useEffect(() => dateIsToday(), [])

    const dateIsToday = () => {
        let today = new Date();
        let date = today.getFullYear()+((today.getMonth() <= 9) ? '-0' : "-")+(today.getMonth()+1)+'-'+today.getDate();
        if ((todo.due === date) || (todo.due[0] === date)) {
            setOverdueStatus(true);
            setDueDate("today");
        }
    }

    return (
        <div className={overdue ? "todo overdue" : "todo"} onClick={() => dispatch({type: "TOGGLE_COMPLETION", payload:todo.id})}>
            <div className={todo.completed ? "completed" : ""}>
                <input type="checkbox" id={`todo-${todo.id}`} checked={todo.completed}/>
                <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>
            </div>
            <div className="tags">
                {todo.tags.map((tag, index) => <div key={`todo-${todo.id}-tag-${index}`} className={(tag !== null) ? "tag" : ""}>{tag}</div>)}
            </div>
            {/* {overdue ? <div><span style={{color: "red"}}>today</span></div> : <div>{dueDate}</div>} */}
            <div style={overdue ? {color: "red"} : {color: "inherit"}}>{dueDate}</div>
        </div>
    )
}
