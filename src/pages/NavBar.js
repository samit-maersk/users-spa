import React, { useContext } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

const NavBar = () => {
  
  const { isAuthenticated, data} = useSelector(state => state.auth)

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
          
          <Link className="navbar-brand" to="/">
            <i className="bi bi-house h2"></i>
          </Link>
          
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/users">all user</NavLink>
              </li>
              <li className="nav-item">
                { isAuthenticated ? <NavLink className="nav-link" to="/logout">logout</NavLink> : <NavLink className="nav-link" to="/login">login</NavLink> }
              </li>
            </ul>
            
          </div>
      </nav>
  )
}

export default NavBar