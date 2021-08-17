import {Component} from 'react'
import {
  AppDiv,
  Heading,
  DirectionTitle,
  ButtonsDiv,
  InputColor,
  FormDiv,
  InputLabelDiv,
  InputDiv,
  Label,
  GenerateButton,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    selectedGradientDirection: gradientDirectionsList[0].value,
    selectedColor1: '#8ae323',
    selectedColor2: '#014f7b',
    activeButton: gradientDirectionsList[0].value,
    direction: gradientDirectionsList[0].value,
    inputColor1: '#8ae323',
    inputColor2: '#014f7b',
  }

  changeDirection = value => {
    this.setState({activeButton: value, direction: value})
  }

  changeColor1 = event => {
    this.setState({inputColor1: event.target.value})
  }

  changeColor2 = event => {
    this.setState({inputColor2: event.target.value})
  }

  generateGradientColor = event => {
    event.preventDefault()
    const {inputColor1, inputColor2, direction} = this.state

    this.setState({
      selectedColor1: inputColor1,
      selectedColor2: inputColor2,
      selectedGradientDirection: direction,
    })
  }

  render() {
    const {
      selectedGradientDirection,
      selectedColor1,
      selectedColor2,
      activeButton,
      inputColor1,
      inputColor2,
    } = this.state

    return (
      <AppDiv
        data-testid="gradientGenerator"
        direction={selectedGradientDirection}
        color1={selectedColor1}
        color2={selectedColor2}
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <DirectionTitle as="p">Choose Direction</DirectionTitle>
        <ButtonsDiv as="ul">
          {gradientDirectionsList.map(item => (
            <GradientDirectionItem
              buttonData={item}
              activeButton={activeButton}
              changeDirection={this.changeDirection}
              key={item.directionId}
            />
          ))}
        </ButtonsDiv>
        <DirectionTitle as="p">Pick the Colors</DirectionTitle>
        <FormDiv as="form" onSubmit={this.generateGradientColor}>
          <InputDiv>
            <InputLabelDiv>
              <Label type="color" as="p">
                {inputColor1}
              </Label>
              <InputColor
                type="color"
                id="color1"
                value={inputColor1}
                onChange={this.changeColor1}
              />
            </InputLabelDiv>
            <InputLabelDiv>
              <Label type="color" as="p">
                {inputColor2}
              </Label>
              <InputColor
                type="color"
                id="color2"
                value={inputColor2}
                onChange={this.changeColor2}
              />
            </InputLabelDiv>
          </InputDiv>
          <GenerateButton type="submit">Generate</GenerateButton>
        </FormDiv>
      </AppDiv>
    )
  }
}

export default GradientGenerator
