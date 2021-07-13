import { FC } from 'react'
import { BaseProps } from '../../models/base-props'
import Styled from './styles'

export type Props = BaseProps

const Row: FC<Props> = ({ children, className, styles, isHidden }) => {
  if (isHidden) return null

  return (
    <Styled className={className} style={styles}>{children}</Styled>
  )
}

export default Row
