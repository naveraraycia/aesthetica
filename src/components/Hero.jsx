import Title2 from "./Title2"
import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram } from "react-icons/ai";
import Navbar from "./Navbar";

function Hero() {
  return (
    <>

    <div className='hero-overlay'>
      <Title2 mainTitle="aesthetica" subTitle="construction & design solutions" />
      <Navbar />

    </div>

    <div className="socials-overlay">
      <a href="https://www.facebook.com/" className="mr-1" target={'_blank'} rel="noreferrer">
        <AiFillFacebook color="#838383" size={25} />
      </a>

      <a href="https://twitter.com/" className="mr-1" target={'_blank'} rel="noreferrer">
       <AiFillTwitterSquare color="#838383" size={25} />
      </a>

      <a href="https://www.instagram.com/" target={'_blank'} rel="noreferrer">
       <AiFillInstagram color="#838383" size={25} />
      </a>
    </div>
    </>
  )
}

export default Hero