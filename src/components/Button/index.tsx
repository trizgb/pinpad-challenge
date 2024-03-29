import React, { FC } from 'react'
import { BaseProps } from '../../models/base-props'
import Styled from './styles'

export interface Props extends BaseProps {
  onClick?: () => void
}

const Button: FC<Props> = ({ children, className, styles, isHidden, onClick, testId }) => {
  if (isHidden) return null

  const handleClick = () => {
    if (onClick) onClick()
  }

  return (
    <Styled className={className} style={styles} onClick={handleClick} data-testid={testId}>{children}</Styled>
  )
}

export default Button
