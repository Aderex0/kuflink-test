import React from 'react'
import Homepage from '../homepage/Homepage'
import { Route } from 'react-router-dom'

const Content = () => {
  return (
    <>
      <Route
        exact
        path='/'
        render={routerProps => <Homepage {...routerProps} />}
      />
    </>
  )
}

export default Content
