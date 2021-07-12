import styled from 'styled-components'
import { Props } from './'

export default styled.div<Props>`
  outline: none;
  border: none;
  height: 45px;
  width: 100%;
  background: #FFFFFF;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ styles }) => ({ ...styles })}
`
