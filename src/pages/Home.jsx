import About from '../components/About'
import Services from '../components/Services'
import Projects from '../components/Projects'
import Team from '../components/Team'
import Testimonial from '../components/Testimonial'
import GetInTouch from '../components/GetInTouch'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'

function Home() {
  document.body.style.backgroundColor = '#0F0F0F';
  useEffect(()=>{
    AOS.init({
      once: true
    })
  },[])
  return (
    <>
      <section id='home'>
        <Hero />
      </section>

      <section id='about'>
        <About />
      </section>

      <section id='services'>
        <Services />
      </section>

      <section id='projects'>
        <Projects />
      </section>

      <section id='team'>
        <Team />
      </section>

      <section id='testimonial'>
        <Testimonial />
      </section>

      <section id="getInTouch">
        <GetInTouch />
      </section>

      {/* <section id='explore'>
        <ExploreBanner />
      </section> */}

      <section id='contact' className='contact'>
        <Contact />
      </section>
    
    </>
  )
}

export default Home