import { Icon } from '@iconify/react'
import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material'
import Button from 'components/ui/Button'
import { useState } from 'react'
import { memo } from 'react'

const ShareVisibility = (props) => {
  const { changeVisibility, name, changeSide, currentOption, detail } = props
  const [selectedOption, setSelectedOption] = useState(currentOption)

  const handleSelect = (value) => {
    const optionIndex = detail.alternatives.findIndex(
      (alt) => alt.value === value
    )
    setSelectedOption(detail.alternatives[optionIndex])
  }

  const onSave = () => {
    changeVisibility(name, selectedOption)
    changeSide(0)
  }
  return (
    <>
      <Box component='section' className='feed-entry-form__header'>
        <p className='feed-entry-form__rubric'>{detail.rubric}</p>
      </Box>
      {detail.sub_rubric && (
        <p className='feed-entry-form__sub-rubric'>{detail.sub_rubric}</p>
      )}
      <FormControl className='feed-entry-form__visible-options'>
        <RadioGroup
          value={selectedOption && selectedOption?.value}
          onChange={(e) => {
            handleSelect(e.target.value)
          }}
        >
          {detail.alternatives.map((option) => (
            <FormControlLabel
              labelPlacement='start'
              key={option.id}
              value={option.value}
              control={<Radio />}
              label={
                <>
                  <Icon icon={option.icon} />
                  <aside>
                    <p className='label'>{option.title}</p>
                    <p className='sub-title'>{option.subTitle}</p>
                  </aside>
                </>
              }
            />
          ))}
        </RadioGroup>
      </FormControl>
      <Box component='section' className='feed-entry-form__actions'>
        <aside className='feed-entry-form__actions__right'>
          <Button size='small' variant='text' onClick={() => changeSide(0)}>
            Back
          </Button>
          <Button
            disabled={
              selectedOption && selectedOption.value === currentOption.value
            }
            size='small'
            onClick={onSave}
          >
            Save
          </Button>
        </aside>
      </Box>
    </>
  )
}

export default memo(ShareVisibility)
