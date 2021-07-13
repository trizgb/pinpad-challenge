import styled from 'styled-components'
import { Props } from './'

export default styled.div<Props>`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;

  ${({ styles }) => ({ ...styles })}
`
