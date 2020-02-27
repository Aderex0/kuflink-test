import React, { useEffect, useState } from 'react'
import './CardComponent.scss'
import { IoMdHeart, IoMdShare } from 'react-icons/io'
import API from '../../adapters/API'

const CardComponent = props => {
  const {
    title,
    secondaryTitle,
    shared,
    liked,
    image,
    description,
    userIcon,
    username,
    postId
  } = props

  const action1 = 'LOGIN'
  const action2 = 'REGISTER'

  const [heartStatus, setHeartStatus] = useState(liked)
  const [heartColor, setHeartColor] = useState()
  const [shareStatus, setShareStatus] = useState(shared)
  const [shareColor, setShareColor] = useState()

  useEffect(() => {
    heartStatus ? setHeartColor('red') : setHeartColor('black')
    shareStatus ? setShareColor('lightgreen') : setShareColor('black')
  }, [heartStatus, shareStatus])

  const handleLike = () => {
    const likeUpdate = {
      id: postId,
      liked: !heartStatus
    }
    API.updateLikeStatus(likeUpdate).then(resp => setHeartStatus(resp.liked))
  }

  const handleShare = () => {
    const shareUpdate = {
      id: postId,
      shared: !shareStatus
    }
    API.updateShareStatus(shareUpdate).then(resp => setShareStatus(resp.shared))
  }

  return (
    <div className='card-container'>
      <div className='cc-card-header'>
        <div className='cc-inner-header'>
          <img data-testid='user_icon' src={userIcon} alt={username}></img>
          <h4 data-testid='title'>{title}</h4>
          <h6 data-testid='2ndtitle'>{secondaryTitle}</h6>
        </div>
      </div>
      <div className='cc-image'>
        <img data-testid='image' src={image} alt={description} />
      </div>
      <span data-testid='description' className='cc-description'>
        {description}
      </span>
      <div className='cc-actions'>
        <div className='cc-actions-left'>
          <p data-testid='action1' onClick={() => alert('Login clicked')}>
            {action1}
          </p>
          <p data-testid='action2' onClick={() => alert('Register clicked')}>
            {action2}
          </p>
        </div>
        <div className='cc-actions-right'>
          <span>
            <IoMdHeart
              size='70%'
              color={heartColor}
              data-testid='like-action'
              onClick={() => handleLike()}
            />
          </span>
          <span>
            <IoMdShare
              size='70%'
              color={shareColor}
              data-testid='share-action'
              onClick={() => handleShare()}
            />
          </span>
        </div>
      </div>
    </div>
  )
}

export default CardComponent
