import React from 'react'
import Button from '.'
import '@testing-library/jest-dom'
import { render, cleanup, fireEvent } from '@testing-library/react'

afterEach(cleanup)

describe('Button logic', () => {
  test('should render', () => {
    const { getByTestId } = render(<Button testId="button-test">Testing</Button>)
    expect(getByTestId('button-test')).toBeInTheDocument()
  })

  test('should not render if isHidden prop is set', () => {
    const { queryByTestId } = render(<Button testId="button-test" isHidden>Testing</Button>)
    expect(queryByTestId('button-test')).toBeFalsy()
  })

  test('should render content as children', () => {
    const { getByTestId } = render(<Button testId="button-test">Testing</Button>)
    expect(getByTestId('button-test')).toHaveTextContent('Testing')
  })

  test('should call onClick prop after click', () => {
    const mockFn = jest.fn()
    const { getByTestId } = render(<Button testId="button-test" onClick={mockFn}>Testing</Button>)
    
    fireEvent.click(getByTestId('button-test'))
    expect(mockFn).toHaveBeenCalled()
  })

  test('should not call onClick prop', () => {
    const mockFn = jest.fn()
    const { getByTestId } = render(<Button testId="button-test">Testing</Button>)
    
    fireEvent.click(getByTestId('button-test'))
    expect(mockFn).not.toHaveBeenCalled()
  })
})

describe('Button styles', () => {
  test('should set a custom style', () => {
    const { getByTestId } = render(<Button testId="button-test" styles={{ background: 'pink' }}>Testing</Button>)
    expect(getByTestId('button-test')).toHaveStyle({ background: 'pink' })
  })

  test('should set a custom className', () => {
    const { getByTestId } = render(<Button testId="button-test" className="testing">Testing</Button>)
    expect(getByTestId('button-test')).toHaveClass('testing')
  })
})
