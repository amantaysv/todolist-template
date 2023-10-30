/* eslint-disable react/prop-types */

import { Search } from './components/Search'
import { SortButton } from './components/SortButton'
import { StatusCounter } from './components/StatusCounter'

export const Header = (props) => {
  const { todos, sortButton } = props

  return (
    <div className='flex justify-between items-center gap-4 mb-4'>
      <div className='flex gap-1'>
        <SortButton value='all' sortButton={sortButton} />
        <SortButton value='active' sortButton={sortButton} />
        <SortButton value='favorite' sortButton={sortButton} />
        <SortButton value='deleted' sortButton={sortButton} />
      </div>
      <div className='flex-1'>
        <Search />
      </div>
      <StatusCounter todos={todos} />
    </div>
  )
}
