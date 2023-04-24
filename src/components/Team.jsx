import Title from "./Title"
import TeamMember from "./TeamMember"
import img1 from '../assets/img/team1.jpg'
import img2 from '../assets/img/team2.jpg'
import img3 from '../assets/img/team3.jpg'
import img4 from '../assets/img/team4.jpg'


function Team() {

  return (
   <>
  <div className="container">
    <Title subTitle={'our team'} mainTitle={'Meet our Team of Experts'} />

    <div className="row">
      <div className="col-md-3" data-aos="fade-right" data-aos-delay="250" data-aos-duration="700">
        <TeamMember img={img1} name={'James Stevenson'} position={'architect'} />
      </div>
      <div className="col-md-3" data-aos="fade-right" data-aos-delay="400" data-aos-duration="700">
        <TeamMember img={img2} name={'Megan Jones'} position={'interior designer'} />
      </div>
      <div className="col-md-3" data-aos="fade-right" data-aos-delay="600" data-aos-duration="700">
        <TeamMember img={img3} name={'Mary Wood'} position={'interior designer'} />
      </div>
      <div className="col-md-3" data-aos="fade-right" data-aos-delay="800" data-aos-duration="700">
        <TeamMember img={img4} name={'Chris Morgan'} position={'engineer'} />
      </div>
    </div>
  </div>
   
   </>
  )
}

export default Team