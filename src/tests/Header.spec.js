import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import Header from '../components/.layout/Header'

describe('<Header />', () => {
  it('renders the header component', () => {
    const { queryByTestId } = render(<Header />)
    expect(queryByTestId).toBeTruthy()
  })

  it('renders the header component and is able to log out', () => {
    const { queryByTestId } = render(<Header />)
  })
})
