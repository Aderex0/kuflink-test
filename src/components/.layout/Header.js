import React, { useEffect, useState } from 'react'
import './Header.scss'
import { IoIosMenu } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import darkLogo from '../../images/logodark.png'
import logo from '../../images/kuflink-logo.png'

const Header = () => {
  const [scrollLocation, setScrollLocation] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', event =>
      setScrollLocation(event.path[1].scrollY)
    )
  }, [])

  useEffect(() => {
    const background = document.getElementsByClassName('header-container')
    const menuIcon = document.querySelector('svg')
    const headerLogo = document.querySelector('.header-logo-img')

    if (scrollLocation > 100) {
      background[0].style.background = 'white'
      background[0].style.borderBottom = '1px solid grey'
      menuIcon.style.color = '#0045ff'
      headerLogo.src = darkLogo
    } else {
      background[0].style.background =
        'linear-gradient(to right, #0045ff, #01d2a3)'
      background[0].style.border = 'none'
      menuIcon.style.color = 'white'
      headerLogo.src = logo
    }
  }, [scrollLocation])
  return (
    <Router>
      <div data-testid='header-container' className='header-container'>
        <div className='inner-header'>
          <div className='header-logo'>
            <Link to='/'>
              <img
                data-testid='header-logo-action'
                className='header-logo-img'
                src={logo}
              ></img>
            </Link>
          </div>
          <div className='header-menu'>
            <IoIosMenu color='white' size='inherit' />
          </div>
        </div>
      </div>
    </Router>
  )
}

export default Header
