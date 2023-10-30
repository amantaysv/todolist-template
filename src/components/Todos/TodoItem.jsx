/* eslint-disable react/prop-types */
import {
  AiFillCheckCircle,
  AiFillDelete,
  AiFillStar,
  AiOutlineCheckCircle,
  AiOutlineDelete,
  AiOutlineStar,
} from 'react-icons/ai'

import { FaTrashRestoreAlt } from 'react-icons/fa'
import { RiDeleteBin2Fill } from 'react-icons/ri'

export const TodoItem = ({ id, isCompleted, isFavorite, todoName, searchTodo, isDeleted }) => {
  return (
    <li className='flex justify-between items-center'>
      <span
        className={`${isCompleted ? 'opacity-50 line-through' : ''} ${
          isFavorite ? 'text-red-500' : ''
        }`}
      >
        {getHighlightedText(todoName, searchTodo)}
        <br />
        <span className='opacity-60'>{new Date(id).toLocaleString('ru-ru')}</span>
      </span>
      <div className='flex gap-1'>
        {isDeleted ? (
          <>
            <button className='text-3xl text-green-400'>
              <FaTrashRestoreAlt />
            </button>
            <button className='text-3xl text-red-500 group'>
              <RiDeleteBin2Fill />
            </button>
          </>
        ) : (
          <>
            <button className='text-3xl text-green-500'>
              {isCompleted ? <AiFillCheckCircle /> : <AiOutlineCheckCircle />}
            </button>
            <button className='text-3xl text-yellow-400'>
              {isFavorite ? <AiFillStar /> : <AiOutlineStar />}
            </button>
            <button className='text-3xl text-red-500 group'>
              {isDeleted ? <AiFillDelete /> : <AiOutlineDelete />}
            </button>
          </>
        )}
      </div>
    </li>
  )
}

function getHighlightedText(text, highlight) {
  const parts = text.split(new RegExp(`(${highlight})`, 'gi'))
  return (
    <span>
      {parts.map((part, i) => (
        <span
          key={i}
          style={
            part.toLowerCase() === highlight.toLowerCase() ? { backgroundColor: '#ffff00' } : {}
          }
        >
          {part}
        </span>
      ))}
    </span>
  )
}
