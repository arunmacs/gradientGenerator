import styled from 'styled-components'

export const ListItem = styled.li`
  list-style-type: none;
`

export const Button = styled.button`
  color: #2a4a46;
  font-size: 19px;
  font-weight: 500;
  background-color: #ffffff;
  outline: none;
  cursor: pointer;
  border: none;
  border-radius: 6px;
  width: 160px;
  margin: 5px;
  padding: 12px 20px;
  opacity: ${props => (props.active ? 1 : 0.5)};
`
