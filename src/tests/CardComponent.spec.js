import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import CardComponent from '../components/card_component/CardComponent'

describe('CardComponent />', () => {
  it('renders the card component', () => {
    const { queryByTestId } = render(<CardComponent />)
    expect(queryByTestId).toBeTruthy()
  })

  it('renders the card component and accepts onClick', () => {
    const { queryByTestId } = render(<CardComponent />)

    expect(queryByTestId('action1')).toBeTruthy()
    expect(queryByTestId('action2')).toBeTruthy()
    expect(queryByTestId('like-action')).toBeTruthy()
    expect(queryByTestId('share-action')).toBeTruthy()

    fireEvent.click(queryByTestId('action1'))
    fireEvent.click(queryByTestId('action2'))
    fireEvent.click(queryByTestId('like-action'))
    fireEvent.click(queryByTestId('share-action'))
  })
})
