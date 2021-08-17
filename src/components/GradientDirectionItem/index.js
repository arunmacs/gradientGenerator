import {Button} from './styledComponents'

const GradientDirectionItem = props => {
  const {buttonData, changeDirection, activeButton} = props
  const {directionId, value, displayText} = buttonData

  const active = activeButton === directionId

  const selectDirection = () => {
    changeDirection(value)
  }

  return (
    <Button value={value} active onClick={selectDirection}>
      {displayText}
    </Button>
  )
}

export default GradientDirectionItem
