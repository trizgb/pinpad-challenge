import styled from 'styled-components'
import { Props } from './'

export default styled.section<Props>`
  padding: 30px;
  margin: 0;
  width: 220px;
  min-height: 390px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #F5F5F5;

  ${({ styles }) => ({ ...styles })}
`
