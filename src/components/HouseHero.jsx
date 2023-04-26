import PropTypes from 'prop-types'
import { useState } from "react";
import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram, AiOutlineMenu } from "react-icons/ai";

function HouseHero({designTitle, heroImgs, chosen, inquired, rating}) {
  const [openNav, setOpenNav] = useState(false)
  const nameArr = designTitle.split(' ')

  return (
    <>
    {openNav && (
      <div className="collapse-navigation d-flex flex-column justify-content-center align-content-center">
        <ul className="navbar-nav">
          <li>
            <a href="#living-rooms" className={`nav-link`}>Living Room</a>
          </li>
          <li>
            <a href="#kitchen" className={`nav-link`}>Kitchen</a>
          </li>
          <li>
            <a href="#bedrooms" className={`nav-link`}>Bedroom</a>
          </li>
          <li>
            <a href="#bathrooms" className={`nav-link`}>Bathroom</a>
          </li>
          <li>
            <a href="#housing-contact" className={`nav-link`}>Contact us</a>
          </li>
        </ul>
      </div>
    )}

    <div className='hero-container'>
      <div className="sub-photos">
        <img src={heroImgs[1]} alt="house 2" />
        <img src={heroImgs[2]} alt="house 3" />
      </div>
      <div className="row house-hero-landing">
        <div className="col-lg-8" style={{background: `url(${heroImgs[0]})`}}>
          <div className="hero-overlay">
            <h1>{nameArr[0]} <span className="text-lowercase">{nameArr[1]}</span></h1>
          </div>
        </div>
        <div className="col-lg-4">
          <div>
            <div className="client-interactions">
              <h5>{inquired}</h5>
              <h6>Clients inquired about this design</h6>
            </div>
            <div className="client-interactions">
              <h5>{rating}/5</h5>
              <h6>Client Rating</h6>
            </div>
            <div className="client-interactions">
              <h5>{chosen}</h5>
              <h6>Clients chose this design</h6>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="socials-overlay">
      <div className="container">
        <div className="branding">
            <a href="/" className="text-uppercase">Aesthetica</a>
        </div>
        <div>
          <a href="https://www.facebook.com/" target={'_blank'} rel="noreferrer">
            <AiFillFacebook color="#838383" size={25} />
          </a>
          <a href="https://www.instagram.com/" target={'_blank'} rel="noreferrer">
          <AiFillInstagram color="#838383" size={25} />
          </a>
          <a href="https://twitter.com/" target={'_blank'} rel="noreferrer">
          <AiFillTwitterSquare color="#838383" size={25} />
          </a>
        </div>
        <div className="menu-icon" onClick={() => setOpenNav(prevState => !prevState)}>
          <AiOutlineMenu color="#838383" size={25} />
        </div>
      </div>
    </div>
    </>
  )
}

HouseHero.defaultProps = {
  designTitle: 'Design Title',
  heroImgs: [],
  chosen: 0,
  inquired: 0,
  rating: 0
}

HouseHero.propTypes = {
  designTitle: PropTypes.string.isRequired,
  heroImgs: PropTypes.array.isRequired,
  chosen: PropTypes.number.isRequired,
  inquired: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired
}

export default HouseHero