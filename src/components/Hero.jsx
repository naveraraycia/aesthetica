import { useState } from "react";
import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram, AiOutlineMenu } from "react-icons/ai";
import Title2 from "./Title2"
import Navbar from "./Navbar";

function Hero() {
  const [openNav, setOpenNav] = useState(false)

  return (
    <>
    {openNav && (
      <div className="collapse-navigation d-flex flex-column justify-content-center align-content-center">
        <ul className="navbar-nav">
          <li>
            <a href="#home" className={`nav-link`}>Home</a>
          </li>
          <li>
            <a href="#about" className={`nav-link`}>About us</a>
          </li>
          <li>
            <a href="#projects" className={`nav-link`}>Houses</a>
          </li>
          <li>
            <a href="#team" className={`nav-link`}>Team</a>
          </li>
          <li>
            <a href="#contact" className={`nav-link`}>Contact us</a>
          </li>
        </ul>
      </div>
    )}

    <div className='hero-overlay'>
      <div className="container justify-content-center d-flex flex-column align-items-center">
        <Title2 mainTitle="aesthetica" subTitle="construction & design solutions" />
        <Navbar />
      </div>
    </div>

    <div className="socials-overlay" data-aos-offset='-100' data-aos="fade-right" data-aos-delay="250" data-aos-duration="500">
      <div className="container">
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

export default Hero