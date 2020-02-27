const BASE_URL = 'http://localhost:3001'
const POSTS = `${BASE_URL}/posts`

const configObj = (data, method) => {
  return {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(data)
  }
}

const getCardIndex = () => fetch(POSTS).then(resp => resp.json())

const updateLikeStatus = likeUpdate =>
  fetch(`${POSTS}/${likeUpdate.id}`, configObj(likeUpdate, 'PATCH')).then(
    resp => resp.json()
  )

const updateShareStatus = shareUpdate =>
  fetch(`${POSTS}/${shareUpdate.id}`, configObj(shareUpdate, 'PATCH')).then(
    resp => resp.json()
  )

export default {
  getCardIndex,
  updateLikeStatus,
  updateShareStatus
}
