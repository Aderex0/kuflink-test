import React, { useState, useEffect } from 'react'
import './App.scss'
import Header from '../src/components/.layout/Header'
import Content from '../src/components/.layout/Content'

const App = () => {
  return (
    <div className='app-container'>
      <Header />
      <Content />
    </div>
  )
}

export default App
