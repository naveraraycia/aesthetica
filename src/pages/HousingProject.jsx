import Bedroom from "../components/Bedroom";
import Bathroom from "../components/Bathroom";
import LivingRoom from "../components/LivingRoom";
import Navbar from "../components/Navbar"
import ProjectCarousel from "../components/ProjectCarousel";
import Kitchen from "../components/Kitchen";
import ClientEngagementBanner from "../components/ClientEngagementBanner";
import Contact from "../components/Contact";
import { useParams } from "react-router-dom";
import {useState, useEffect} from 'react'
import ProjectData from "../data/ProjectData";
import Spinner from "../components/Spinner";
import HouseDetails from "../components/HouseDetails";

function HousingProject() {
  document.body.style.backgroundColor = '#172024';
  const [projectData, setProjectData] = useState({})
  const params = useParams()

  useEffect(()=> {
    ProjectData.map((item)=>{
     if(item.id == params.id){
      setProjectData(item)
     }
    })


  },[params.id])

  if(!projectData.landingImgs) {
    return <Spinner />
  }

  return (
    <>
      <section id="house-landing">
        <Navbar navColor={'white'} />
        <div className="container">
            <ProjectCarousel data={projectData} imgs={projectData.landingImgs} variant={'with-caption'} /> 
        </div>
      </section>

      <section id="house-details" className="d-flex d-lg-none">
        <HouseDetails data={projectData} />
      </section>

      <section id="living-rooms">
        <LivingRoom data={projectData} />
      </section>

      <section id='kitchen'>
        <Kitchen data={projectData} />
      </section>

      <section id="bedrooms">
        <Bedroom data={projectData} />
      </section>

      <section id="bathrooms">
        <Bathroom data={projectData} />
      </section>

      <section id="client-engagement" style={{
        backgroundImage: `url(${projectData.landingImgs[0]})`
      }}>
        <ClientEngagementBanner data={projectData} />
      </section>

      <section id="housing-contact" className="contact">
        <Contact />
      </section>
    </>
  )
}

export default HousingProject