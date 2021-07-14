import React from 'react'
import Container from '.'
import '@testing-library/jest-dom'
import { render, cleanup } from '@testing-library/react'

afterEach(cleanup)

describe('Container logic', () => {
  test('should render', () => {
    const { getByTestId } = render(<Container testId="container-test">Testing</Container>)
    expect(getByTestId('container-test')).toBeInTheDocument()
  })

  test('should not render if isHidden prop is set', () => {
    const { queryByTestId } = render(<Container testId="container-test" isHidden>Testing</Container>)
    expect(queryByTestId('container-test')).toBeFalsy()
  })

  test('should render content as children', () => {
    const { getByTestId } = render(<Container testId="container-test">Testing</Container>)
    expect(getByTestId('container-test')).toHaveTextContent('Testing')
  })
})

describe('Container styles', () => {
  test('should set a custom style', () => {
    const { getByTestId } = render(<Container testId="container-test" styles={{ background: 'pink' }}>Testing</Container>)
    expect(getByTestId('container-test')).toHaveStyle({ background: 'pink' })
  })

  test('should set a custom className', () => {
    const { getByTestId } = render(<Container testId="container-test" className="testing">Testing</Container>)
    expect(getByTestId('container-test')).toHaveClass('testing')
  })
})
