import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import Content from '../components/.layout/Content'

afterAll(cleanup)

describe('<Content />', () => {
  it('renders content component', () => {
    const { queryByTestId } = render(<Content />)
    expect(queryByTestId).toBeTruthy()
  })
})
