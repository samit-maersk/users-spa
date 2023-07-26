import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Search from './Search'

const NavBar = () => {

  return (
    <nav className="navbar bg-body-tertiary">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <i className="bi bi-house h2"></i>
          </Link>

          <NavLink className="nav-item" to="/users">all user</NavLink>
          <NavLink className="nav-item" to="/login">login</NavLink>
          <NavLink className="nav-item" to="/logout">logout</NavLink>
          
          <Search />
        </div>
      </nav>
  )
}

export default NavBar