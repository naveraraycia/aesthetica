import CarouselComp from '../components/CarouselComp'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Services from '../components/Services'
import img1 from '../assets/img/landing1.jpg'
import img2 from '../assets/img/landing2.jpg'
import img3 from '../assets/img/landing3.jpg'
import Projects from '../components/Projects'
import Team from '../components/Team'
import Testimonial from '../components/Testimonial'
import ExploreBanner from '../components/ExploreBanner'
import Contact from '../components/Contact'


function Home() {
  document.body.style.backgroundColor = '#273237';
  return (
    <>
      <section id='home' className='bg-secondary'>
        <div id="carousel-component">
          <Navbar navColor={'black'} />
          <CarouselComp imgs={[img1, img2, img3]} />
        </div>
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

      <section id='explore'>
        <ExploreBanner />
      </section>

      <section id='contact' className='contact'>
        <Contact />
      </section>
    
    </>
  )
}

export default Home