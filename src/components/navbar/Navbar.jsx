import React from 'react'
import style from './navbar.module.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
  <nav className={`navbar navbar-expand-lg ${style.navbar} d-flex `}>
  <div className={`navbar-info container d-flex p-3 maintext `}>
    <Link className="navbar-brand fs-3" to="/">Start Bootstrap</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon " />
    </button>
    <div className="collapse d-flex" id="navbarSupportedContent">
      <ul className={`navbar-nav me-auto mb-2 mb-lg-0 `}>
      
        <li className="nav-item">
          <Link className="nav-link" to={'/portfolio'}>PORTFOLIO</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/about'}>ABOUT</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/contact'}>CONTACT</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}
