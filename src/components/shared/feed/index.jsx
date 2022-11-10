import Avatar from 'components/ui/Avatar'
import React from 'react'
import ScaffoldLayout from '../layouts/ScaffoldLayout'
import { Box } from '@mui/material'
import styled from '@emotion/styled'
import theme from 'styles/theme'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import Button from 'components/ui/Button'
import defaultAvatar from 'assets/images/default_avatar_user.png'
import useUserSelectors from 'store/selectors/userSelector'
const CustomFeed = styled(Box)`
  padding: 16px 0;
  .feed__header {
    padding: 0 16px;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .feed-shared-actor {
      display: flex;
      flex: 1;
      flex-direction: column;
      &__title {
        font-size: 14px;
        font-weight: 600;
        height: 18px;
        color: ${theme.text};
        &:hover {
          color: ${theme.text_hover};
          text-decoration: underline;
        }
      }
      &__description,
      &__sub-description {
        text-overflow: ellipsis;
        overflow: hidden;
        width: 350px;
        white-space: nowrap;
        font-size: 12px;
        height: 16px;
        color: ${theme.text_low_emphasis};
      }
    }
  }

  .feed__body {
    padding: 0 16px;

    .feed__content {
      font-size: 14px;
      color: ${theme.text};
      margin: 8px 0;

      &__text {
        display: flex;
        flex-direction: column;
        .see-more {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2; /* after 2 line show ... */
          -webkit-box-orient: vertical;
          width: 100%;
        }
        .see-more__btn {
          margin-left: auto;
          text-align: right;
          cursor: pointer;
          &:hover {
            color: ${theme.text_hover};
            text-decoration: underline;
          }
        }
      }

      &__images {
        cursor: pointer;
        margin: 4px 0;
        img {
          width: 100%;
          height: 450px;
          object-fit: cover;
        }
      }
    }

    .social-counts {
      padding: 4px 8px 12px;
      font-size: 12px;
      color: ${theme.text_low_emphasis};
      border-bottom: 2px solid ${theme.border};
      display: flex;
      justify-content: space-between;

      &__likes {
        &__icon {
          margin-right: 4px;
          padding: 3px;
          border-radius: 50%;
          background-color: ${theme.like_background};
        }
        svg {
          font-size: 14px;
          color: white;
        }
      }
      &__likes,
      &__comments {
        display: flex;
        align-items: center;
        cursor: pointer;
        &:hover {
          color: ${theme.text_hover};
          text-decoration: underline;
        }
      }
    }
  }

  .feed__footer {
    padding: 8px 16px;
    .actions {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      &__items {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
        height: 48px;
        border-radius: 8px;
        cursor: pointer;
        font-weight: 600;
        color: ${theme.button_text};
        font-size: 16px;
        transition: all 0.2s ease;
        &.active {
          color: ${theme.text_hover};
          &:hover {
            color: ${theme.text_hover};
            background-color: ${theme.background_hover};
          }
        }
        &__icons {
          margin-right: 8px;
          svg {
            font-size: 24px;
          }
        }
        &:hover {
          color: ${theme.button_text_hover_focus};
          background-color: ${theme.background_hover};
        }
      }
    }
  }
`
const Feed = () => {
  const [seeMoreContent, setSeeMoreContent] = React.useState(false)
  const { userDetailInStore } = useUserSelectors()

  return (
    <ScaffoldLayout className='py-3'>
      <CustomFeed component='section'>
        <Link to='#'>
          <div className='feed__header'>
            <Avatar
              alt='logo'
              src={
                userDetailInStore.avatar
                  ? userDetailInStore.avatar
                  : defaultAvatar
              }
              width='46'
              height='46'
              className='mr-3'
              variant='square'
            />
            <article className='feed-shared-actor'>
              <p className='feed-shared-actor__title'>Kerstin Potter</p>
              <p className='feed-shared-actor__description'>
                Empowering individuals & teams / VisualEmpowering individuals &
                Empowering individuals & teams / VisualEmpowering individuals &
              </p>
              <p className='feed-shared-actor__sub-description'>1w</p>
            </article>
            <Button variant='outline' size='small'>
              <Icon icon='ant-design:plus-outlined' />
              Follow
            </Button>
          </div>
        </Link>
        <div className='feed__body'>
          <section className='feed__content'>
            <article className='feed__content__text '>
              <p className={`${seeMoreContent ? '' : 'see-more'} `}>
                It is very interesting how when the purpose is there, studying
                on a Saturday evening is completely normal… Passing the CAPM
                exam (Certified Associate Project Manager) at the moment is of a
                great importance to me and recently many evenings have been
                spent watching videos and courses on the topic. My goal is to do
                the exam till New Year, wish me luck!
              </p>
              {!seeMoreContent && (
                <span
                  className='see-more__btn'
                  onClick={() => setSeeMoreContent(!seeMoreContent)}
                >
                  ...see more
                </span>
              )}
            </article>

            {defaultAvatar && (
              <figure className='feed__content__images '>
                <img src={defaultAvatar} alt='' className='feed__content__img' />
              </figure>
            )}
          </section>
          <section className='social-counts'>
            <span className='social-counts__likes'>
              <span className='social-counts__likes__icon'>
                <Icon icon='ant-design:like-outlined' flip='horizontal' />
              </span>
              ABC and 120 others
            </span>
            <span className='social-counts__comments'>4 comments</span>
          </section>
        </div>

        <nav className='feed__footer'>
          <ul className='actions'>
            <li className='actions__items active'>
              <span className='actions__items__icons'>
                <Icon icon='ant-design:like-outlined' flip='horizontal' />
              </span>
              Like
            </li>
            <li className='actions__items'>
              <span className='actions__items__icons'>
                <Icon icon='ant-design:comment-outlined' />
              </span>
              Comment
            </li>
          </ul>
        </nav>
      </CustomFeed>
    </ScaffoldLayout>
  )
}

export default Feed
