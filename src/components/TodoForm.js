import React from 'react'
import './TodoForm.css'

export default function TodoForm() {
    return (
        <div className="todo-form">
            <form>
                <div>
                    <label htmlFor="task">Task</label>
                    <input type="text" id="task"/>
                </div>
                <div>
                    <label htmlFor="tags">Tags</label>
                    <input type="text" id="tags"/>
                </div>
                <button><div>+</div></button>
            </form>
        </div>
    )
}
