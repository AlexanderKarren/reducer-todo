import React, { useState } from 'react'
import './TodoForm.css'

export default function TodoForm({dispatch}) {
    const [values, setValues] = useState({
        task: "",
        tags: "",
        due: "",
    })

    const handleChange = event => {
        setValues({
            ...values,
            [event.target.name]:[event.target.value]
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        dispatch({
            type: "ADD_TO_LIST",
            payload: values,
        })
        setValues({
            task: "",
            tags: "",
            due: "",
        })
    }

    return (
        <div className="todo-form">
            <form>
                <div>
                    <label htmlFor="task">Task:</label>
                    <input type="text" name="task" id="task" value={values.task} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="tags">Tags:</label>
                    <input type="text" name="tags" id="tags" value={values.tags} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="due">Due:</label>
                    <input type="date" name="due" id="due" value={values.due} onChange={handleChange}/>
                </div>
                <button type="submit" onClick={handleSubmit}><div>+</div></button>
            </form>
        </div>
    )
}
