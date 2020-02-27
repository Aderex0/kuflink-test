import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import CardComponent from '../components/card_component/CardComponent'

afterAll(cleanup)

const cardData = {
  title: 'test title',
  secondaryTitle: 'tecondary test title',
  image: 'http://dummyweb:3000/test_image.jpg',
  description: 'test description',
  userIcon: 'http://dummyweb:3000/test_user_icon.jpg',
  username: 'test username',
  liked: false,
  shared: false
}

describe('<CardComponent />', () => {
  it('renders the card component with correct fields', () => {
    const { queryByTestId } = render(
      <CardComponent
        title={cardData.title}
        secondaryTitle={cardData.secondaryTitle}
        image={cardData.image}
        description={cardData.description}
        userIcon={cardData.userIcon}
        username={cardData.username}
        liked={cardData.liked}
        shared={cardData.shared}
      />
    )
    expect(queryByTestId).toBeTruthy()

    expect(queryByTestId('user_icon').src).toBe(cardData.userIcon)
    expect(queryByTestId('user_icon').alt).toBe(cardData.username)
    expect(queryByTestId('title').innerHTML).toBe(cardData.title)
    expect(queryByTestId('2ndtitle').innerHTML).toBe(cardData.secondaryTitle)
    expect(queryByTestId('image').src).toBe(cardData.image)
    expect(queryByTestId('image').alt).toBe(cardData.description)
    expect(queryByTestId('description').innerHTML).toBe(cardData.description)
    expect(queryByTestId('like-action').style.color).toBe('black')
    expect(queryByTestId('share-action').style.color).toBe('black')
  })

  it('renders the card component and accepts onClick with results', () => {
    window.alert = jest.fn()

    const { queryByTestId } = render(<CardComponent />)

    expect(queryByTestId('action1')).toBeTruthy()
    expect(queryByTestId('action2')).toBeTruthy()
    expect(queryByTestId('like-action')).toBeTruthy()
    expect(queryByTestId('share-action')).toBeTruthy()

    fireEvent.click(queryByTestId('action1'))
    expect(window.alert).toHaveBeenCalledTimes(1)

    fireEvent.click(queryByTestId('action2'))
    expect(window.alert).toHaveBeenCalledTimes(2)

    fireEvent.click(queryByTestId('like-action'))
    // expect(queryByTestId('like-action').style.color).toBe('red')

    fireEvent.click(queryByTestId('share-action'))
    // expect(queryByTestId('share-action').style.color).toBe('lightgreen')
  })
})
