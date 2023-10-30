import { AddTodoForm } from './components/AddTodoForm/AddTodoForm'
import { EmptyState } from './components/EmptyState/EmptyState'
import { Header } from './components/Header/Header'
import { TodoList } from './components/Todos/TodoList'

export const App = () => {
  const todos = []
  const searchTodo = ''
  const sortButton = 'all'
  const errorState = null

  return (
    <div className='container mx-auto p-2'>
      <h1 className='text-4xl text-center mb-2'>TodoList</h1>
      <Header todos={todos} sortButton={sortButton} />
      <TodoList todos={todos} searchTodo={searchTodo} sortButton={sortButton} />
      <EmptyState todos={todos} sortButton={sortButton} />
      <AddTodoForm errorState={errorState} />
      <p className='pl-4 pt-2 text-red-500'>{errorState}</p>
    </div>
  )
}
