import PropTypes from 'prop-types'
import { Link, useLocation } from "react-router-dom"
import {AiOutlineMenu} from 'react-icons/ai'

function Navbar({navColor}) {
  const location = useLocation()

  return (
    
    <div id="navbar" style={{
      position: `${navColor === 'white' ? 'relative' : 'absolute'}`
    }}>
      <div className="container mt-3">
        <nav className={`navbar navbar-expand-lg mb-3 ${navColor === 'white' && 'no-border'}`} id="main-nav">
          <Link to={'/'} className={`navbar-brand ${navColor === 'white' && 'white-navbar-brand'}`}>Aesthetica</Link>    

          {location.pathname === '/' ? (
            <>
            
          <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
            {navColor === 'white' ? (
              <AiOutlineMenu color="#f5f5f5" />
            ) : 
            (
              <AiOutlineMenu color="#000" />
            )}
            </button>
 
            <div id="navbarNav" className="collapse navbar-collapse justify-content-end">
              <ul className="navbar-nav">
                <li className={"nav-item"}>
                  <a href="#home" className={`nav-link ${navColor === 'white' && 'white-nav-link'}`}>Home</a>
                </li>
                <li className="nav-item">
                  <a href="#about" className={`nav-link ${navColor === 'white' && 'white-nav-link'}`}>About us</a>
                </li>
                <li className="nav-item">
                  <a href="#projects" className={`nav-link ${navColor === 'white' && 'white-nav-link'}`}>Houses</a>
                </li>
                <li className="nav-item">
                  <a href="#team" className={`nav-link ${navColor === 'white' && 'white-nav-link'}`}>Team</a>
                </li>
                <li className="nav-item">
                  <a href="#contact" className={`nav-link ${navColor === 'white' && 'white-nav-link'}`}>Contact us</a>
                </li>
              </ul>
            </div>
            </>
          ) : (
            <>
              <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
            {navColor === 'white' ? (
              <AiOutlineMenu color="#f5f5f5" />
            ) : 
            (
              <AiOutlineMenu color="#000" />
            )}
            </button>
 
            <div id="navbarNav" className="collapse navbar-collapse justify-content-end">
              <ul className="navbar-nav">
                <li className={"nav-item"}>
                  <a href="#living-rooms" className={`nav-link ${navColor === 'white' && 'white-nav-link'}`}>Living Room</a>
                </li>
                <li className="nav-item">
                  <a href="#kitchen" className={`nav-link ${navColor === 'white' && 'white-nav-link'}`}>Kitchen</a>
  
                </li>
                <li className="nav-item">
                  <a href="#bedrooms" className={`nav-link ${navColor === 'white' && 'white-nav-link'}`}>Bedroom</a>
                </li>
                <li className="nav-item">
                  <a href="#bathrooms" className={`nav-link ${navColor === 'white' && 'white-nav-link'}`}>Bathroom</a>
                </li>
                <li className="nav-item">
                  <a href="#housing-contact" className={`nav-link ${navColor === 'white' && 'white-nav-link'}`}>Contact us</a>
                </li>
              </ul>
            </div>
            </>
          )}
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