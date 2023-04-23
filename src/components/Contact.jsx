import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
import ContactForm from "./ContactForm"
import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram } from "react-icons/ai";

function Contact() {
  useEffect(()=>{
    AOS.init({
      offset: 200,
      once: true
    })
  },[])
  return (
    <>
      <div className="container">
        <h1 className='text-secondary' data-aos="fade-right" data-aos-delay="50" data-aos-duration="500">Contact Us</h1>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-6" data-aos="fade-right" data-aos-delay="150" data-aos-duration="500">
            <ContactForm />
          </div>
          <div className="col-md-6 d-flex flex-column align-items-center">
            <div>
              <div className="contact-number mb-5">
                <h3 className="text-secondary" data-aos="fade-left" data-aos-delay="350" data-aos-duration="500">+63 917 000 0000</h3>
                <h3 className="text-secondary" data-aos="fade-left" data-aos-delay="450" data-aos-duration="500">+63 917 777 0000</h3>
              </div>

              <div className="details mb-5" data-aos="fade-left" data-aos-delay="550" data-aos-duration="500">
                <h4 className="text-secondary">support@aesthetica.com</h4>
                <h4 className="text-secondary">L11 Main St. Example City</h4>
              </div>

              <div className="social-icons d-flex" data-aos="fade-left" data-aos-delay="650" data-aos-duration="500">
                <a href="https://www.facebook.com/" className="mr-1" target={'_blank'} rel="noreferrer">
                  <AiFillFacebook color="#F5F5F5" size={40} />
                </a>

                <a href="https://twitter.com/" className="mr-1" target={'_blank'} rel="noreferrer">
                  <AiFillTwitterSquare color="#F5F5F5" size={40} />
                </a>

                <a href="https://www.instagram.com/" target={'_blank'} rel="noreferrer">
                  <AiFillInstagram color="#F5F5F5" size={40} />
                </a>
              </div>

            </div>
          </div>
        </div>

        <div className="d-flex justify-content-between footer mt-5">
        <a href={`/`}>
            <h2 className="text-secondary">Aesthetica</h2>
          </a>
          <p className="text-secondary">&copy; 2022 <span>RMFN</span></p>
        </div>
      </div>
    </>
  )
}

export default Contact