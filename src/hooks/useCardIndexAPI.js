import { useEffect, useState } from 'react'
import API from '../adapters/API'

const useCardIndexAPI = () => {
  const [cardIndex, setCardIndex] = useState([])
  const [userData, setUserData] = useState({
    userIcon: '',
    username: '',
    userId: ''
  })

  useEffect(() => {
    API.getCardIndex().then(
      posts => (setCardIndex(posts), setUserData(posts[0].user))
    )
  }, [])

  return {
    cardIndex,
    userData,
    API
  }
}

export default useCardIndexAPI
