import { FC } from 'react'
import { BaseProps } from '../../models/base-props'
import Styled from './styles'

export interface Props extends BaseProps {
  value?: any
}

const Input: FC<Props> = ({ children, className, styles, isHidden, value }) => {
  if (isHidden) return null

  return (
    <Styled className={className} style={styles}>{children}</Styled>
  )
}

export default Input
