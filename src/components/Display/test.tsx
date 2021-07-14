import React from 'react'
import Display from '.'
import '@testing-library/jest-dom'
import { render, cleanup } from '@testing-library/react'

afterEach(cleanup)

describe('Display logic', () => {
  test('should render', () => {
    const { getByTestId } = render(<Display testId="display-test">Testing</Display>)
    expect(getByTestId('display-test')).toBeInTheDocument()
  })

  test('should not render if isHidden prop is set', () => {
    const { queryByTestId } = render(<Display testId="display-test" isHidden>Testing</Display>)
    expect(queryByTestId('display-test')).toBeFalsy()
  })

  test('should render content as children', () => {
    const { getByTestId } = render(<Display testId="display-test">Testing</Display>)
    expect(getByTestId('display-test')).toHaveTextContent('Testing')
  })
})

describe('Display styles', () => {
  test('should set a custom style', () => {
    const { getByTestId } = render(<Display testId="display-test" styles={{ background: 'pink' }}>Testing</Display>)
    expect(getByTestId('display-test')).toHaveStyle({ background: 'pink' })
  })

  test('should set a custom className', () => {
    const { getByTestId } = render(<Display testId="display-test" className="testing">Testing</Display>)
    expect(getByTestId('display-test')).toHaveClass('testing')
  })
})
