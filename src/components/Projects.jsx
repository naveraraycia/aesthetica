import Project from './Project'
import Title from './Title'
import img1 from '../assets/img/project1.jpg'
import img2 from '../assets/img/aboutImg2.jpg'
import img3 from '../assets/img/project3.jpg'
import img4 from '../assets/img/project4.jpg'

function Projects() {
  return (
    <>
    <div className="container mb-5">
      <Title subTitle={'our projects'} mainTitle={'Here are our latest designs'} />
    </div>
    <div className="row">
      <div className="col-md-3">
        <Project bgImg={img1} name={'velvet architecture'} number={1} redirect={'velvet-architecture-model'} />
      </div>
      <div className="col-md-3">
        <Project bgImg={img2} name={'deluxe architecture'} number={2} redirect={'deluxe-architecture-model'} />
      </div>
      <div className="col-md-3">
        <Project bgImg={img3} name={'mono architecture'} number={3} redirect={'mono-architecture-model'} />
      </div>
      <div className="col-md-3">
        <Project bgImg={img4} name={'box architecture'} number={4} redirect={'box-architecture-model'} />
      </div>
      
    </div>
    </>
  )
}

export default Projects