import styled from 'styled-components'
import { Props } from './'

export default styled.p<Props>`
  margin: 0;
  font-size: 16px;
  line-height: 24px;

  ${({ styles }) => ({ ...styles })}
`
