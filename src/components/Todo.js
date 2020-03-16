import React, { useState, useEffect } from 'react'
import './Todo.css'

export default function Todo({todo, dispatch}) {
    const [dueToday, setDueToday] = useState(false);

    useEffect(() => {
        let today = new Date();
        let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        if (todo.due === date) {
            setDueToday(true);
        }
    }, [todo.due])

    return (
        <div className={dueToday ? "todo overdue" : "todo"} onClick={() => dispatch({type: "TOGGLE_COMPLETION", payload:todo.id})}>
            <div className={todo.completed ? "completed" : ""}>
                <input type="checkbox" id={`todo-${todo.id}`} checked={todo.completed}/>
                <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>
            </div>
            <div className="tags">
                {todo.tags.map(tag => <div className="tag">{tag}</div>)}
            </div>
            {dueToday ? <div>by <span style={{color: "red"}}>today</span></div> : <div>by {todo.due}</div>}
        </div>
    )
}
