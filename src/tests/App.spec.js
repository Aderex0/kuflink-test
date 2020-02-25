import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import App from '../App'

describe('<App />', () => {
  it('renders the App component', () => {
    const { queryByTestId } = render(<App />)
    expect(queryByTestId).toBeTruthy()
  })

  it('renders the App and Header with Content Components', () => {
    const { queryByTestId } = render(<App />)

    expect(queryByTestId).toContain('header-container')
    expect(queryByTestId).toContain('homepage-continer')
  })
})
