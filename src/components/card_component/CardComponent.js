import React from 'react'
import './CardComponent.scss'
import { IoMdHeart, IoMdShare } from 'react-icons/io'

const CardComponent = () => {
  return (
    <div className='card-container'>
      <div className='cc-card-header'>
        <div className='cc-inner-header'>
          <img
            src='http://moneybulldog.co.uk/wp-content/uploads/2019/03/kuflink_logo.jpg'
            alt='username'
          ></img>
          <h4>Title</h4>
          <h6>Secondary Text</h6>
        </div>
      </div>
      <div className='cc-image'>
        <img
          src='https://specials-images.forbesimg.com/imageserve/5dd414882c886a0007ec7e79/960x0.jpg?fit=scale'
          alt='description'
        />
      </div>
      <span className='cc-description'>Weekend away to the worlds end.</span>
      <div className='cc-actions'>
        <div className='cc-actions-left'>
          <p data-testid='action1'>LOGIN</p>
          <p data-testid='action2'>REGISTER</p>
        </div>
        <div className='cc-actions-right'>
          <IoMdHeart data-testid='like-action' />
          <IoMdShare data-testid='share-action' />
        </div>
      </div>
    </div>
  )
}

export default CardComponent
