import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import App from '../App'

afterAll(cleanup)

describe('<App />', () => {
  it('renders the App component', () => {
    const { queryByTestId } = render(<App />)
    expect(queryByTestId).toBeTruthy()
  })
})
