import { Box, Typography } from '@mui/material'
import React from 'react'
import Follower from './Follower'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import ScaffoldLayout from 'components/shared/layouts/ScaffoldLayout'

const Aside = () => {
  return (
    <ScaffoldLayout
      p={3}
      sx={{
        position: 'sticky',
        top: '70px',
      }}
    >
      <Typography variant='body1' component='p' className='font-medium'>
        Add to your feed
      </Typography>
      <Box component='div' className='mt-4'>
        <ul>
          <li>
            <Link to='#'>
              <Follower />
            </Link>
          </li>
          <li>
            <Link to='#'>
              <Follower />
            </Link>
          </li>
          <li>
            <Link to='#'>
              <Follower />
            </Link>
          </li>
        </ul>
      </Box>
      <Box component='div' className='mt-4'>
        <Link
          to='#'
          className='flex items-center hover:bg-black-100 text-black-600 hover:text-black-900 font-semibold text-sm py-1 px-2 rounded-sm'
        >
          View all recommendations{' '}
          <Icon icon='eva:arrow-forward-fill' className='mt-[2px] ml-1' />
        </Link>
      </Box>
    </ScaffoldLayout>
  )
}

export default Aside
