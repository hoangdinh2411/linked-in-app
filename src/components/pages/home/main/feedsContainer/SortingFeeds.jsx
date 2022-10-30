import { MenuItem, Select } from '@mui/material'
import React from 'react'

const SortingFeeds = () => {
  const [sortingBy, setSortingBy] = React.useState('top')

  const handleSelectSortingBy = (value) => {
    if (value === sortingBy) return
    setSortingBy(value)
  }

  return (
    <div className='filter'>
      <p className='filter__line'></p>
      <span className='filter__by'>
        Sort by:{' '}
        <Select
          value={sortingBy}
          onChange={(e) => handleSelectSortingBy(e.target.value)}
          label='Age'
        >
          <MenuItem value='top'>Top</MenuItem>
          <MenuItem value='recent'>Recent</MenuItem>
        </Select>
      </span>
    </div>
  )
}

export default SortingFeeds
