import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'

const NavBar = () => {
  
  return (
    <nav className="navbar bg-body-tertiary">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <i className="bi bi-house h2"></i>
          </Link>
          
          <Search />
        </div>
      </nav>
  )
}

export default NavBar