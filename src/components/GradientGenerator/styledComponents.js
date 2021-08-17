import styled from 'styled-components'

export const AppDiv = styled.div`
  background-image: linear-gradient(
    to ${props => props.direction},
    ${props => props.color1},
    ${props => props.color2}
  );
  background-size: cover;
  padding: 20px 15px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

export const Heading = styled.h1`
  color: #ffffff;
  font-size: 28px;
  font-weight: bold;
  margin: 15px 0px;
`

export const DirectionTitle = styled(Heading)`
  color: #ebefec;
  font-size: 25px;
  font-weight: 500;
`

export const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 15px 0px;
  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }
`

export const FormDiv = styled(ButtonsDiv)`
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: space-around;
  width: 90%;
`

export const InputDiv = styled(ButtonsDiv)`
  flex-wrap: nowrap;
  justify-content: space-around;
  width: 90%;
  @media (min-width: 768px) {
    width: 50%;
  }
`

export const InputLabelDiv = styled(ButtonsDiv)`
  flex-direction: column;
  margin: 10px 0px;
`

export const InputColor = styled.input`
  border: 1px solid #767a74;
  width: 120px;
  height: 60px;
  margin: 10px 0px;
`
export const Label = styled(DirectionTitle)`
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
  margin: 10px 0px;
`

export const GenerateButton = styled.button`
  color: #2a4a46;
  font-size: 22px;
  font-weight: 600;
  margin: 10px 0px;
  background-color: #41c9b8;
  border: none;
  border-radius: 6px;
  width: 150px;
  padding: 10px 15px;
  cursor: pointer;
  outline: none;
`
