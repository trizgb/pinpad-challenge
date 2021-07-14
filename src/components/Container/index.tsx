import React, { FC } from 'react'
import { BaseProps } from '../../models/base-props'
import Styled from './styles'

export type Props = BaseProps

const Container: FC<Props> = ({ children, className, styles, isHidden, testId }) => {
  if (isHidden) return null

  return (
    <Styled className={className} style={styles} data-testid={testId}>{children}</Styled>
  )
}

export default Container
