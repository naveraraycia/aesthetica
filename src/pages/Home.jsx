import CarouselComp from '../components/CarouselComp'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Services from '../components/Services'
import Projects from '../components/Projects'
import Team from '../components/Team'
import Testimonial from '../components/Testimonial'
import ExploreBanner from '../components/ExploreBanner'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
// import Title2 from '../components/Title2'

function Home() {
  document.body.style.backgroundColor = '#0F0F0F';
  return (
    <>
      <section id='home'>
        {/* <div id="carousel-component">
          <Navbar navColor={'black'} />
          <CarouselComp imgs={[img1, img2, img3]} />
        </div> */}
        <Hero />
      </section>

      {/* <Title2 mainTitle={'aesthetica'} subTitle={'construction & design solutions'} /> */}

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