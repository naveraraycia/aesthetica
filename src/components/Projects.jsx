import Project from './Project'
import Title from './Title'
import img1 from '../assets/img/project1.webp'
import img2 from '../assets/img/aboutImg2.webp'
import img3 from '../assets/img/project3.webp'
import img4 from '../assets/img/project4.webp'

function Projects() {
 
  return (
    <>
    <div className="container mb-5">
      <Title subTitle={'our projects'} mainTitle={'Here are our latest designs'} />
    </div>
    <div className="row">
      <div className="col-md-3" data-aos="fade-right" data-aos-delay="250" data-aos-duration="700">
        <Project bgImg={img1} name={'velvet architecture'} number={1} redirect={'velvet-architecture-model'} />
      </div>
      <div className="col-md-3" data-aos="fade-right" data-aos-delay="400" data-aos-duration="700">
        <Project bgImg={img2} name={'deluxe architecture'} number={2} redirect={'deluxe-architecture-model'} />
      </div>
      <div className="col-md-3" data-aos="fade-right" data-aos-delay="600" data-aos-duration="700">
        <Project bgImg={img3} name={'mono architecture'} number={3} redirect={'mono-architecture-model'} />
      </div>
      <div className="col-md-3" data-aos="fade-right" data-aos-delay="800" data-aos-duration="700">
        <Project bgImg={img4} name={'box architecture'} number={4} redirect={'box-architecture-model'} />
      </div>
      
    </div>
    </>
  )
}

export default Projects