import { useEffect, useState } from 'react'
import { AddTodoForm } from './components/AddTodoForm/AddTodoForm'
import { EmptyState } from './components/EmptyState/EmptyState'
import { Header } from './components/Header/Header'
import { TodoList } from './components/Todos/TodoList'
const todosLs = JSON.parse(localStorage.getItem('todos')) ?? []

export const App = () => {
  const [todos, setTodos] = useState(todosLs)
  const [searchTodo, setSearchTodo] = useState('')
  const [sortButton, setSortButton] = useState('all')
  const [errorState, setErrorState] = useState(null)

  const searchHandler = (event) => {
    setSearchTodo(event.target.value)
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [JSON.stringify(todos)])

  return (
    <div className='container mx-auto p-2'>
      <h1 className='text-4xl text-center mb-2'>TodoList</h1>
      <Header
        todos={todos}
        sortButton={sortButton}
        setSortButton={setSortButton}
        searchHandler={searchHandler}
      />
      <TodoList todos={todos} setTodos={setTodos} searchTodo={searchTodo} sortButton={sortButton} />
      <EmptyState todos={todos} sortButton={sortButton} />
      <AddTodoForm
        todos={todos}
        setTodos={setTodos}
        errorState={errorState}
        setErrorState={setErrorState}
      />
      <p className='pl-4 pt-2 text-red-500'>{errorState}</p>
    </div>
  )
}
