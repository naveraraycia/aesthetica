import about1 from '../assets/img/aboutImg1.jpg'
import about2 from '../assets/img/aboutImg2.jpg'
import Title from './Title'

function About() {
  return (
   <>
    <div className="container">
      <div className="row">
        <div className="d-none d-md-flex col-md-6 justify-content-center">
          <div className="row" id="about-img">
            <div className="col-6">
              <img src={about1} alt='about' className="img-fluid" />
            </div>
            <div className="col-6">
            <img src={about2} alt='about' className="img-fluid" id="aboutImg2" />
            </div>
          </div>
        </div>

        <div className="col-md-6 d-flex flex-column" id='about-paragraph'>
          <div className="align-self-end mt-5">
            <Title subTitle={'who we are'} mainTitle={'Architectural blurb'} />

            <p className='text-secondary'><span className='text-primary'>Aesthetica</span> is a group of outstanding architects and engineers that specialize in modern home designs to suit the clients’ lifestyle needs.</p>

            <p className='text-secondary'>We specialize in minimalist yet modern house designs that focus on quality and detail. Think clean lines and expert craftsmanship - a home you'll be proud of for years to come.</p>

          </div>
            
        </div>
      </div>
    </div>
   </>
  )
}

export default About