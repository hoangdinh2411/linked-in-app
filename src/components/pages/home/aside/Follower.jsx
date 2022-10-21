import styled from '@emotion/styled'
import { Icon } from '@iconify/react'
import { Box, Typography } from '@mui/material'
import Avatar from 'components/ui/Avatar'
import Button from 'components/ui/Button'
import React from 'react'
import theme from 'styles/theme'

const CustomFollower = styled(Box)`
  .follower__title {
    font-size: 14px;
    font-weight: 600;
    color: ${theme.text};
    &:hover {
      color: ${theme.text_hover};
      text-decoration: underline;
    }
  }
  .follower__description {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* after 2 line show ... */
    -webkit-box-orient: vertical;
    width: 220px;
    font-size: 12px;
    color: ${theme.text_low_emphasis};
    margin-bottom:4px;
  }
`
const Follower = (props) => {
  return (
    <aside className='flex items-start mb-4'>
      <Avatar
        alt='logo'
        // src={``}
        width='48'
        height='48'
        className='mr-3'
      />
      <CustomFollower component='article' className='flex flex-col '>
        <Typography variant='body1' component='p' className='follower__title'>
          Friend 1
        </Typography>
        <Typography
          variant='subtitle1'
          component='span'
          className='follower__description'
        >
          Is that really your professional profile photo? Shouldnt you consider
          covering up your tattoos? And perhaps keep it in black and white? You
          know, that look might not be taken serious in a corporate context.
        </Typography>
        <span>
          <Button size='small'>
            <Icon icon='ant-design:plus-outlined' />
            Follow
          </Button>
        </span>
      </CustomFollower>
    </aside>
  )
}

export default Follower
