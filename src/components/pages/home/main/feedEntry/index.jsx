import { Box, Slide } from '@mui/material'
import ScaffoldLayout from 'components/shared/layouts/ScaffoldLayout'
import Avatar from 'components/ui/Avatar'
import Button from 'components/ui/Button'
import Dialog from 'components/ui/Dialog'
import React from 'react'
import ShareVisibility from './ShareVisibility'
import {
  CSSTransition,
  SwitchTransition,
  Transition,
} from 'react-transition-group'
import FeedEntryForm from './FeedEntryForm'
import CustomFeedEntryForm from './style'
import { optionsForVisibility } from 'utils/constants'
import defaultAvatar from 'assets/images/default_avatar_user.png'
import useUserSelectors from 'store/selectors/userSelector'

const TransitionComponent = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='left' ref={ref} {...props} />
})
const initialNewFeed = {
  hashTags: [],
  content: '',
  file: [],
  visibleOnFeed: optionsForVisibility.feed.alternatives[0],
  visibleOnComment: optionsForVisibility.comment.alternatives[0],
}

const FeedEntry = () => {
  const [open, setOpen] = React.useState(false)
  const [side, setSide] = React.useState(0)
  const [newFeed, setNewFeed] = React.useState(initialNewFeed)
  const { userDetailInStore } = useUserSelectors()

  const entryFormRef = React.useRef(null)
  const visibilityPostRef = React.useRef(null)
  const visibilityCommentRef = React.useRef(null)
  const currentRef =
    side === 0
      ? entryFormRef
      : side === 1
      ? visibilityPostRef
      : visibilityCommentRef
  const handleClickOpen = () => {
    setOpen(!open)
  }
  const changeSide = (sideNumber) => {
    setSide(sideNumber)
  }
  const handleClose = () => {
    setNewFeed(initialNewFeed)
    setOpen(false)
    changeSide(0)
  }

  const changeContent = (value) => {
    setNewFeed({
      ...newFeed,
      content: value,
    })
  }
  const changeVisibility = (key, value) => {
    console.log(key)
    setNewFeed({
      ...newFeed,
      [key]: value,
    })
  }
  return (
    <ScaffoldLayout p={3}>
      <Box component='section' className='flex items-center'>
        <Avatar
          alt='logo'
          src={
            userDetailInStore.avatar ? userDetailInStore.avatar : defaultAvatar
          }
          width='46'
          height='46'
          className='mr-3'
        />
        <Button
          onClick={handleClickOpen}
          textPosition='left'
          className='flex-1 text-sm font-semibold '
        >
          Start a box
        </Button>
        <Dialog
          position='center'
          open={open}
          TransitionComponent={TransitionComponent}
          onClose={handleClose}
        >
          <SwitchTransition mode='out-in'>
            <CSSTransition
              key={side}
              nodeRef={currentRef}
              addEndListener={(done) => {
                currentRef.current.addEventListener(
                  'transitionend',
                  done,
                  false
                )
              }}
              classNames='fade'
            >
              <CustomFeedEntryForm
                ref={currentRef}
                component='form'
                className={`feed-entry-form`}
              >
                <span className='close-icon' onClick={handleClose}>
                  X
                </span>
                {side === 0 ? (
                  <FeedEntryForm
                    changeContent={changeContent}
                    handleClose={handleClose}
                    changeSide={changeSide}
                    newFeed={newFeed}
                    setNewFeed={setNewFeed}
                  />
                ) : (
                  <ShareVisibility
                    changeSide={changeSide}
                    changeContent={changeContent}
                    changeVisibility={changeVisibility}
                    name={side === 1 ? 'visibleOnFeed' : 'visibleOnComment'}
                    detail={
                      side === 1
                        ? optionsForVisibility.feed
                        : optionsForVisibility.comment
                    }
                    currentOption={
                      side === 1
                        ? newFeed.visibleOnFeed
                        : newFeed.visibleOnComment
                    }
                  />
                )}
              </CustomFeedEntryForm>
            </CSSTransition>
          </SwitchTransition>
        </Dialog>
      </Box>
    </ScaffoldLayout>
  )
}

export default FeedEntry
