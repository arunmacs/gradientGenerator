import {Button, ListItem} from './styledComponents'

const GradientDirectionItem = props => {
  const {buttonData, changeDirection, activeButton} = props
  const {value, displayText} = buttonData

  const active = activeButton === value
  console.log(active, activeButton)

  const selectDirection = () => {
    changeDirection(value)
  }

  return (
    <ListItem>
      <Button value={value} active onClick={selectDirection}>
        {displayText}
      </Button>
    </ListItem>
  )
}

export default GradientDirectionItem
