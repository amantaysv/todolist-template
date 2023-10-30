/* eslint-disable react/prop-types */

export const SortButton = ({ value, sortButton }) => {
  const sortButtonActiveStyle = 'bg-purple-600 text-white border-transparent hover:text-white'
  const sortButtonCommonStyle = 'bg-transparent text-purple-600 border-purple-600 hover:text-white'

  return (
    <button
      className={`min-w-[80px] h-10 px-2 py-1 ${
        sortButton === value ? sortButtonActiveStyle : sortButtonCommonStyle
      } border border-solid hover:bg-purple-700 rounded-lg capitalize transition-colors duration-300`}
    >
      {value}
    </button>
  )
}
