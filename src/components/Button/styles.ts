import styled from 'styled-components'
import { Props } from './'

export default styled.button<Props>`
  outline: none;
  border: none;
  height: 45px;
  width: 45px;
  padding: 0;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${({ styles }) => ({ ...styles })}
`
