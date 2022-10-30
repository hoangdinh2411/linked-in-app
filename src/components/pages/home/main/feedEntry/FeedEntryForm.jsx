import { Box } from '@mui/material'
import Avatar from 'components/ui/Avatar'
import Button from 'components/ui/Button'
import React from 'react'
import { Mention } from 'react-mentions'
import Mentions from 'components/ui/Mention'
import logo from 'assets/images/LinkedIn_icon.png'
import { Icon } from '@iconify/react'

const fakeHashtag = [
  {
    id: 1,
    display: 'hoang',
  },
  {
    id: 2,
    display: 'dinh',
  },
  {
    id: 3,
    display: 'minh',
  },
]
export const FeedEntryForm = (props) => {
  const { setNewFeed, newFeed, changeContent, changeSide } = props
  const textAreaRef = React.useRef(null)

  const addNewHashTag = () => {
    setNewFeed({
      ...newFeed,
      content: newFeed.content + ' #',
    })
    textAreaRef.current.focus()
  }

  const renderHashtagSuggestion = (entry) => {
    return <p>{entry.display}</p>
  }

  const reformAllHashTagOnContent = () => {
    const words = newFeed.content.split(' ')

    return words.map((word) =>
      word.includes('#[') ? word.replaceAll('[', '').replaceAll(']', '') : word
    )
  }

  const StylingHashTags = () => {
    const newContext = reformAllHashTagOnContent()
    setNewFeed({
      ...newFeed,
      content: newContext.join(' '),
    })
  }
  return (
    <>
      <Box component='section' className='feed-entry-form__header'>
        <p>Create a post</p>
      </Box>
      <Box component='section' className='feed-entry-form__entry'>
        <div>
          <Avatar
            alt='logo'
            src={logo}
            width='46'
            height='46'
            className='mr-3'
          />
          <aside className='setting'>
            <p className='setting__user-name'>William Dinh</p>
            <span>
              <Button
                size='small'
                className='setting__visibility'
                onClick={() =>changeSide(1)}
              >
                <Icon icon={newFeed.visibleOnFeed.icon} />
                {newFeed.visibleOnFeed.label}
                <Icon icon='bxs:down-arrow' className='icon-down-arrow' />
              </Button>
            </span>
          </aside>
        </div>

        <Mentions
          inputRef={textAreaRef}
          value={newFeed.content}
          placeholder='What do you want to talk about?'
          onChange={(e) => changeContent(e.target.value)}
          onBlur={StylingHashTags}
          allowSpaceInQuery
          allowSuggestionsAboveCursor
          forceSuggestionsAboveCursor
          customSuggestionsContainer={(children) => (
            <section>{children}</section>
          )}
        >
          <Mention
            markup='#[__display__]'
            displayTransform={(display) => '#' + display}
            trigger='#'
            data={fakeHashtag}
            renderSuggestion={renderHashtagSuggestion}
          />
          <Mention
            markup='@[__display__]'
            displayTransform={(display) => '@' + display}
            trigger='@'
            data={fakeHashtag}
            renderSuggestion={renderHashtagSuggestion}
          />
        </Mentions>

        <Button size='small' variant='outline' onClick={addNewHashTag}>
          Add hashtag
        </Button>
      </Box>
      <Box component='section' className='feed-entry-form__actions'>
        <aside className='feed-entry-form__actions__left'>File</aside>
        <aside className='feed-entry-form__actions__right'>
          <Button size='small' variant='text' onClick={() => changeSide(2)}>
            <Icon icon={newFeed.visibleOnComment.icon} />
            {newFeed.visibleOnComment.label}
          </Button>
          <Button size='small' disabled={!newFeed.content}>
            Post
          </Button>
        </aside>
      </Box>
    </>
  )
}

export default FeedEntryForm
