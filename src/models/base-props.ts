import { CSSProperties } from 'react'

export interface BaseProps {
  styles?: CSSProperties
  className?: string
  isHidden?: boolean
  testId?: string
}