//rfc - (react function component) acronym is shortcut to create a rfc with the same name of file name with ES7 simple extension plugin. 
import React from 'react'
import Todo from './Todo'

export default function TodoList({ todos ,toggleTodo }) {
    return (
        todos.map(todo => {
            return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo}/>
        })
    )
}
