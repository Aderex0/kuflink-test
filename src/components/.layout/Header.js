import React from 'react'
import './Header.scss'
import logo from '../../images/kuflink-logo.png'
import { IoIosMenu } from 'react-icons/io'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div data-testid='header-container' className='header-container'>
      <div data-testid='header-logo-action' className='header-logo'>
        <Link to='/'>
          <img src={logo}></img>
        </Link>
      </div>
      <div className='header-menu'>
        <IoIosMenu color='white' size='70%' />
      </div>
    </div>
  )
}

export default Header
