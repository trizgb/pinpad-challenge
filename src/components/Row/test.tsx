import React from 'react'
import Row from '.'
import '@testing-library/jest-dom'
import { render, cleanup } from '@testing-library/react'

afterEach(cleanup)

describe('Row logic', () => {
  test('should render', () => {
    const { getByTestId } = render(<Row testId="row-test">Testing</Row>)
    expect(getByTestId('row-test')).toBeInTheDocument()
  })

  test('should not render if isHidden prop is set', () => {
    const { queryByTestId } = render(<Row testId="row-test" isHidden>Testing</Row>)
    expect(queryByTestId('row-test')).toBeFalsy()
  })

  test('should render content as children', () => {
    const { getByTestId } = render(<Row testId="row-test">Testing</Row>)
    expect(getByTestId('row-test')).toHaveTextContent('Testing')
  })
})

describe('Row styles', () => {
  test('should set a custom style', () => {
    const { getByTestId } = render(<Row testId="row-test" styles={{ background: 'pink' }}>Testing</Row>)
    expect(getByTestId('row-test')).toHaveStyle({ background: 'pink' })
  })

  test('should set a custom className', () => {
    const { getByTestId } = render(<Row testId="row-test" className="testing">Testing</Row>)
    expect(getByTestId('row-test')).toHaveClass('testing')
  })
})
