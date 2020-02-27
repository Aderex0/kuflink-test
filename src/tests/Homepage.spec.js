import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import Homepage from '../components/homepage/Homepage'

afterAll(cleanup)

describe('<Homepage />', () => {
  it('renders the homepage component', () => {
    const { queryByTestId } = render(<Homepage />)
    expect(queryByTestId).toBeTruthy()
  })
})
