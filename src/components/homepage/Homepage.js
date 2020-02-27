import React, { useState, useEffect } from 'react'
import CardComponent from '../card_component/CardComponent'
import './Homepage.scss'
import useCardIndexAPI from '../../hooks/useCardIndexAPI'

const Homepage = () => {
  const { cardIndex, userData } = useCardIndexAPI()

  return (
    <div className='homepage-container'>
      <div className='profile-user-icon'>
        <img src={userData.userIcon} alt={userData.username}></img>
      </div>
      <h2>{userData.username}</h2>
      <div className='user-cards'>
        {cardIndex.map(card => (
          <CardComponent
            key={card.id}
            postId={card.id}
            title={card.title}
            secondaryTitle={card.secondary_title}
            shared={card.shared}
            liked={card.liked}
            image={card.image}
            description={card.description}
            userIcon={card.user.userIcon}
            username={card.user.username}
          />
        ))}
      </div>
    </div>
  )
}

export default Homepage
