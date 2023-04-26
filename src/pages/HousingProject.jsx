import HouseHero from "../components/HouseHero";
import Kitchen from "../components/Kitchen";
import TitleOverlay from "../components/TitleOverlay";
import Contact from "../components/Contact";
import { useParams } from "react-router-dom";
import {useState, useEffect} from 'react'
import ProjectData from "../data/ProjectData";
import Spinner from "../components/Spinner";
import HouseDetails from "../components/HouseDetails";
import AOS from 'aos';
import 'aos/dist/aos.css'

import Room from "../components/Room";

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
        <Room data={projectData} room='living room' titleLabels={['living rooms', 'modern interior design']} areaDescriptionHeading={['comfortable', 'welcoming', 'stylish']} areaDescription={'Our interior design living room is a stylish and inviting space that\'s designed to be the heart of your home. With its comfortable furnishings, thoughtful layout, and attention to detail, this living room is the perfect place to relax and entertain.'} />
      </section>

      <section id='kitchen'>
        <Kitchen data={projectData} />
      </section>

      <section id="bedrooms">
        <Room data={projectData} room='bedroom' titleLabels={['bedrooms', 'comfortable & cozy']} areaDescriptionHeading={['minimalist', 'dreamy', 'warm']} areaDescription={'Our interior design bedroom is a serene and inviting space that\'s designed to help you relax and unwind. With its thoughtful layout, comfortable furnishings, and soothing color scheme, this bedroom is the perfect retreat after a long day.'} />
      </section>

      <section id="bathrooms">
        <Room data={projectData} room='bathroom' titleLabels={['bathrooms', 'bathe in luxury']} areaDescriptionHeading={['sleek', 'modern', 'classic']} areaDescription={'From the sleek freestanding tub to the spacious walk-in shower, every element of the bathrooms has been thoughtfully designed to provide a truly indulgent experience.'} />
      </section>

      <TitleOverlay mainTitle={'contact us'} subTitle={'if interested'} bgImg={projectData.landingImgs[0]} />

      <section id="contact" className="contact">
        <Contact />
      </section>
    </>
  )
}

export default HousingProject