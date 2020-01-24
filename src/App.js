// https://www.youtube.com/watch?v=hQAHSlTtcmY

import React, { useState, useRef, useEffect } from 'react'; //useState useRef useEffect 'react hooks'
import TodoList from './TodoList';
import uuidv4 from 'uuid/v4' //npm library that creates unique id's

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id){
    const newTodos = [...todos]
    const todo = newTodos.find(todo=> todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleAddTodo(e){
    const name = todoNameRef.current.value
    if (name === '') return // if empty exit function
    console.log(name)
    setTodos(prevTodos => {
      return [...prevTodos, { id:uuidv4(), name: name, complete: false }]
    })
    todoNameRef.current.value = null
  }

  function clearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }
  return (
    //<>This is a fragment (just an empty element that allows us to return  more than one thing as JS function can only return once)</>
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <input ref={todoNameRef} type="text"/>
      <button onClick={handleAddTodo}> Add Todo</button>
      <button onClick={clearTodos}>Clear Todos</button>
  <div>{todos.filter(todo => !todo.complete).length} left to do</div>
    </>
  )
}

export default App;
