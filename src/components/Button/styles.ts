import styled from 'styled-components'
import { Props } from './'

export default styled.button<Props>`
  outline: none;
  border: none;
  height: 50px;
  width: 50px;
  padding: 0;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: #F5F5F5;

  ${({ styles }) => ({ ...styles })}

  &:hover {
    background: #BABABA;
  }

  &:active {
    background: #E8E8E8;
  }
`
