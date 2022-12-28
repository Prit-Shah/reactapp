import React from 'react'
import {BrowserRouter,NavLink,Link} from 'react-router-dom'

function Navbar() {
    return (
       
            <div className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Hello</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="good">Good</NavLink>
        </li>        
      </ul>
    </div>
  </div>
</div>

    )
}

export default Navbar
