import React from 'react'

export default function Todo({todo, toggleTodo}) {
    function handleCbClick(){
        toggleTodo(todo.id)
    }
    return (
        <div>
            <label>
                <input type="checkbox" checked={todo.complete} onChange={handleCbClick}/>
                {todo.name}
            </label>
        </div>
    )
}
