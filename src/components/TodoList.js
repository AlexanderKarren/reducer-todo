import React, { useState, useReducer } from 'react'
import { initialState, todoReducer } from '../reducers/todoReducer'
import { ReactSVG } from 'react-svg'
import Todo from './Todo'
import TodoForm from './TodoForm'
import './TodoList.css'

export default function TodoList() {
    const [todos, dispatch] = useReducer(todoReducer, (JSON.parse(localStorage.getItem("todos")) || initialState));
    const [selectedTags, setTags] = useState([]);

    const removeTag = tag => {
        setTags(selectedTags.filter(selectedTag => (selectedTag !== tag)))
    }

    return (
        <div className="todo-list-container">
            <div className={(selectedTags.length > 0) ? "selected-tags-container open" : "selected-tags-container closed"}>
                {(selectedTags.length > 0) && <button onClick={() => setTags([])}>All</button>}
                <div className="selected-tags">
                    {(selectedTags.length > 0) && (selectedTags.map((tag, index) => <div key={`tag-${index}`} className="selected-tag">
                        <ReactSVG src="clear.svg" onClick={() => removeTag(tag)} />
                        <h2 className={((selectedTags.length === 5) ? "small" : "")}>{tag}</h2>
                    </div>))}
                </div>
            </div>
            {todos.map(todo => {
                let displayTodo = false;
                if (selectedTags.length > 0) {
                    todo.tags.forEach(tag => {
                        selectedTags.forEach(selectedTag => {
                            if (selectedTag === tag) {
                                displayTodo = true;
                            }
                        })
                    })
                }
                else {
                    displayTodo = true;
                }
                return (displayTodo && <Todo key={todo.id} todo={todo} dispatch={dispatch} setTags={setTags} selectedTags={selectedTags}/>)
            })}
            <TodoForm dispatch={dispatch}/>
            <button className="todo-list-button" onClick={() => {
                dispatch({type: "CLEAR_COMPLETED"});
                dispatch({type: "SAVE_CHANGES"});
            }}>Clear Completed</button>
        </div>
    )
}