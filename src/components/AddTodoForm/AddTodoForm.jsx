/* eslint-disable react/prop-types */
import { AiOutlinePlus } from 'react-icons/ai'

export const AddTodoForm = ({ errorState }) => {
  return (
    <form className='relative flex items-center'>
      <input
        type='text'
        placeholder='add todo...'
        className={`w-full h-10 pl-2 border border-solid ${
          errorState
            ? 'border-red-500 focus:border-red-600'
            : 'border-purple-600 focus:border-purple-700'
        } outline-none rounded-lg`}
      />
      <button type='submit' className='absolute right-2 text-3xl'>
        <AiOutlinePlus />
      </button>
    </form>
  )
}
