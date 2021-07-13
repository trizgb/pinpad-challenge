import styled from 'styled-components'
import { Props } from './'

export default styled.div<Props>`
  padding: 30px;
  width: 220px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #DEDEDECC;

  ${({ styles }) => ({ ...styles })}
`
