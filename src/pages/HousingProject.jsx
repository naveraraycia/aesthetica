import Bedroom from "../components/Bedroom";
import Bathroom from "../components/Bathroom";
import LivingRoom from "../components/LivingRoom";
import HouseHero from "../components/HouseHero";
import ProjectCarousel from "../components/ProjectCarousel";
import Kitchen from "../components/Kitchen";
import ClientEngagementBanner from "../components/ClientEngagementBanner";
import Contact from "../components/Contact";
import { useParams } from "react-router-dom";
import {useState, useEffect} from 'react'
import ProjectData from "../data/ProjectData";
import Spinner from "../components/Spinner";
import HouseDetails from "../components/HouseDetails";
import AOS from 'aos';
import 'aos/dist/aos.css'

function HousingProject() {
  document.body.style.backgroundColor = '#0F0F0F';
  const [projectData, setProjectData] = useState({})
  const params = useParams()

  useEffect(()=> {
    ProjectData.map((item)=>{
     if(item.id == params.id){
      setProjectData(item)
     }
    })
  },[params.id])

  useEffect(()=>{
    AOS.init({
      offset: 200,
      once: true
    })
  },[])

  if(!projectData.landingImgs) {
    return <Spinner />
  }

  return (
    <>
      <section id="house-landing">
       <HouseHero inquired={projectData.inquired} rating={projectData.rating} chosen={projectData.chosen} designTitle={projectData.name} heroImgs={projectData.landingImgs} />
      </section>

      <section id="house-details" className="">
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