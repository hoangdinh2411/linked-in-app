import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import ScaffoldLayout from 'components/shared/layouts/ScaffoldLayout'
import { APP_ROUTER } from 'utils/constants'
import theme from 'styles/theme'
import avatarImage from 'assets/images/avatar.jpg'
import backgroundImage from 'assets/images/background-photo.jpg'
import Avatar from 'components/ui/Avatar'

function Identity() {
  return (
    <ScaffoldLayout>
      <Card
        sx={{
          borderRadius: 0,
          border: 'none',
          boxShadow: 'none',
        }}
      >
        <CardMedia
          component='img'
          image={backgroundImage}
          alt='background-photo'
        />
        <CardContent
          sx={{
            '&:last-child': {
              padding: 0,
              paddingBottom: '12px ',
            },
          }}
        >
          <Box component='aside' className='text-center'>
            <Link
              className='hover:underline hover:decoration-blue-700 decoration-[1.5px]'
              to={APP_ROUTER.PROFILE}
            >
              <Box component='div' className='relative h-[52px]'>
                <Avatar
                  src={avatarImage}
                  width='72'
                  height='72'
                  className=' border-2 border-solid border-white m-0 absolute top-[-36px] left-[50%] translate-x-[-50%]'
                />
              </Box>
              <Typography
                gutterBottom
                variant='body1'
                component='p'
                className='text-center m-0 text-md font-semibold text-black-900'
              >
                William Dinh
              </Typography>
            </Link>
            <Typography
              variant='subtitle1'
              component='span'
              className='text-xs text-center text-black-600 mt-1 '
            >
              Mỗi ngày cố gắng 1 chút !
            </Typography>
          </Box>
        </CardContent>
      </Card>
      <Box
        component='aside'
        className='border-t border-solid py-3 border-black-100'
      >
        <Link
          className='hover:bg-black-200 block py-1  px-3'
          to={APP_ROUTER.MY_NETWORK}
        >
          <Typography
            variant='subtitle1'
            component='span'
            className='text-xs w-full flex justify-between font-semibold  text-black-600 '
          >
            Connection
            <span className='text-blue-700 font-semibold'>12</span>
          </Typography>
          <Typography
            variant='caption'
            component='p'
            className=' text-md font-semibold  text-black-600'
          >
            Grow your network
          </Typography>
        </Link>
      </Box>

      <Box
        component='aside'
        className='border-t border-solid hover:bg-black-200 py-3 border-black-100'
        sx={{
          '&:hover': {
            '& .premium-text': {
              color: theme.action_text,
            },
          },
        }}
      >
        <Link
          to={APP_ROUTER.PREMIUM}
          className=' block px-3 hover:text-blue-700'
        >
          <Typography
            component='span'
            className='text-xs w-full flex justify-between   text-black-600 '
          >
            Access exclusive tools & insights
          </Typography>
          <Typography component='span' className='text-xs underline  flex '>
            <Icon
              icon='fluent:premium-28-regular'
              className='h-4 w-4 text-premium'
            />
            <span className=' font-semibold ml-2'>Try Premium for free</span>
          </Typography>
        </Link>
      </Box>
      <Box
        component='aside'
        className='border-t border-solid hover:bg-black-200 py-3 border-black-100'
        sx={{
          '&:hover': {
            '& .premium-text': {
              color: theme.action_text,
            },
          },
        }}
      >
        <Link to={APP_ROUTER.MY_ITEMS} className=' block px-3'>
          <Typography
            variant='caption'
            component='p'
            className='text-md  text-black-600 flex font-semibold hover:text-black-900'
          >
            <Icon icon='fontisto:favorite' className='h-4 w-4 mr-2' />
            My Items
          </Typography>
        </Link>
      </Box>
    </ScaffoldLayout>
  )
}

export default Identity
