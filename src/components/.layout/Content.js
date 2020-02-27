import React from 'react'
import Homepage from '../homepage/Homepage'
import { Route, BrowserRouter as Router } from 'react-router-dom'

const Content = () => {
  return (
    <>
      <Router>
        <Route
          exact
          path='/'
          render={routerProps => <Homepage {...routerProps} />}
        />
      </Router>
    </>
  )
}
export default Content
