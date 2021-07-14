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
  background: #E8E8E8;
  font-size: 18px;

  ${({ styles }) => ({ ...styles })}

  &:hover {
    background: #D9E4EC;
  }

  &:active {
    background: #B7CFDC;
  }
`
