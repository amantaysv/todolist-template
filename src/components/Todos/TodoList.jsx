import { useState } from 'react'
import { AiOutlineArrowDown } from 'react-icons/ai'
import { TodoItem } from './TodoItem'

export const TodoList = ({ todos, searchTodo, sortButton }) => {
  const [sortBy, setSortBy] = useState('date')
  const [order, setOrder] = useState('ASC')

  if (todos.length === 0) return null

  const sortByHandler = (code) => {
    setSortBy(code)

    if (sortBy === code) {
      if (order === 'ASC') {
        setOrder('DESC')
      } else {
        setOrder('ASC')
      }
    } else {
      setOrder('ASC')
    }
  }

  return (
    <ul className='flex flex-col mb-4'>
      <li className='flex justify-between items-center mb-2'>
        <span className='flex items-center gap-1' onClick={() => sortByHandler('name')}>
          name{' '}
          <span
            className={`${sortBy === 'name' ? 'opacity-100' : 'opacity-50'} text-2xl ${
              sortBy === 'name' && (order === 'ASC' ? '' : 'rotate-180')
            }`}
          >
            <AiOutlineArrowDown />
          </span>{' '}
        </span>
        <div className='flex gap-1'>
          <span
            className={`${sortBy === 'completed' ? 'opacity-100' : 'opacity-50'} text-2xl ${
              sortBy === 'completed' && (order === 'ASC' ? '' : 'rotate-180')
            }`}
            onClick={() => sortByHandler('completed')}
          >
            <AiOutlineArrowDown />
          </span>{' '}
          <span
            className={`${sortBy === 'favorite' ? 'opacity-100' : 'opacity-50'} text-2xl ${
              sortBy === 'favorite' && (order === 'ASC' ? '' : 'rotate-180')
            }`}
            onClick={() => sortByHandler('favorite')}
          >
            <AiOutlineArrowDown />
          </span>{' '}
        </div>
      </li>
      {todos
        .filter((todo) => todo.todoName.toLowerCase().includes(searchTodo.toLowerCase()))
        .filter((todo) => {
          if (sortButton === 'active') {
            return !todo.isCompleted && !todo.isDeleted
          }
          if (sortButton === 'favorite') {
            return todo.isFavorite && !todo.isDeleted
          }
          if (sortButton === 'deleted') {
            return todo.isDeleted
          }
          if (sortButton === 'all') {
            return !todo.isDeleted
          }
          return todo
        })
        .sort((a, b) => {
          if (sortBy === 'name') {
            if (a.todoName > b.todoName) return order === 'ASC' ? 1 : -1
            if (a.todoName < b.todoName) return order === 'ASC' ? -1 : 1
            return 0
          }

          if (sortBy === 'completed') {
            return (b.isCompleted - a.isCompleted) * (order === 'ASC' ? 1 : -1)
          }
          if (sortBy === 'favorite') {
            return (b.isFavorite - a.isFavorite) * (order === 'ASC' ? 1 : -1)
          }
        })
        .map((todo) => (
          <TodoItem key={todo.id} searchTodo={searchTodo} {...todo} />
        ))}
    </ul>
  )
}
