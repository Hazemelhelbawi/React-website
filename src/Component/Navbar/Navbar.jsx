import React from 'react'
import  {Link, NavLink}  from 'react-router-dom'
import './Navbar.css'
export default function () {
  return (
  <>
  <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container-fluid">
    <Link className="navbar-brand text-danger fw-bold fs-3" to="">Welcome</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink   className="nav-link " aria-current="page" to="">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  className="nav-link" to="gallery">Gallery</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  className="nav-link" to="about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  className="nav-link" to="contact">Contact</NavLink>
        </li>
      </ul>

    </div>
  </div>
</nav>
  </>
  )
}
