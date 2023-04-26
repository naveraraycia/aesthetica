import { useLocation } from "react-router-dom"
import PropTypes from 'prop-types'

function Navbar() {
  const location = useLocation()

  return (
    
    <div id="navbar">
      <div className="container mt-3">
        <nav className='navbar d-flex flex-row mb-3' id="main-nav">
            <>
            <div id="navbarNav" className="justify-content-end">
              <ul className="navbar-nav flex-row">
                <li className="nav-item">
                  <a href={location.pathname === '/' ? '#home' : '#living-rooms'} className='nav-link'>{location.pathname === '/' ? 'Home' : 'Living Room'}</a>
                </li>
                <li className="nav-item">
                  <a href={location.pathname === '/' ? '#about' : '#kitchen'} className='nav-link'>{location.pathname === '/' ? 'About us' : 'Kitchen'}</a>
                </li>
                <li className="nav-item">
                  <a href={location.pathname === '/' ? '#projects' : '#bedrooms'} className='nav-link'>{location.pathname === '/' ? 'Houses' : 'Bedroom'}</a>
                </li>
                <li className="nav-item">
                  <a href={location.pathname === '/' ? '#team' : '#bathrooms'} className='nav-link'>{location.pathname === '/' ? 'Team' : 'Bathroom'}</a>
                </li>
                <li className="nav-item">
                  <a href="#contact" className='nav-link'>Contact us</a>
                </li>
              </ul>
            </div>
            </>
        </nav>
      </div>
    </div>
  )
}

Navbar.defaultProps = {
  navColor : 'black'
}

Navbar.propTypes = {
  navColor: PropTypes.string
}

export default Navbar