import React from 'react'
import Text from '.'
import '@testing-library/jest-dom'
import { render, cleanup } from '@testing-library/react'

afterEach(cleanup)

describe('Text logic', () => {
  test('should render', () => {
    const { getByTestId } = render(<Text testId="text-test">Testing</Text>)
    expect(getByTestId('text-test')).toBeInTheDocument()
  })

  test('should not render if isHidden prop is set', () => {
    const { queryByTestId } = render(<Text testId="text-test" isHidden>Testing</Text>)
    expect(queryByTestId('text-test')).toBeFalsy()
  })

  test('should render content as children', () => {
    const { getByTestId } = render(<Text testId="text-test">Testing</Text>)
    expect(getByTestId('text-test')).toHaveTextContent('Testing')
  })
})

describe('Text styles', () => {
  test('should set a custom style', () => {
    const { getByTestId } = render(<Text testId="text-test" styles={{ background: 'pink' }}>Testing</Text>)
    expect(getByTestId('text-test')).toHaveStyle({ background: 'pink' })
  })

  test('should set a custom className', () => {
    const { getByTestId } = render(<Text testId="text-test" className="testing">Testing</Text>)
    expect(getByTestId('text-test')).toHaveClass('testing')
  })
})
