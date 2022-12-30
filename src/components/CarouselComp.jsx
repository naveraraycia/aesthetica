import PropTypes from 'prop-types'
import Carousel from 'react-bootstrap/Carousel';

function CarouselComp({imgs}) {
  return (
    <Carousel indicators={false} interval={5000} nextLabel={''} prevLabel={''}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imgs[0]}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="container">
            <h3>Aesthetic</h3>
            <h2>Design Services</h2>
            <p>If you're looking for a fresh and contemporary approach to residential architecture, Aesthetica is the perfect fit.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imgs[1]}
          alt="Second slide"
        />

        <Carousel.Caption>
          <div className="container d-flex flex-column alignt-items-end" id="secondImg">
            <h3>Inspiring designs</h3>
            <h2>from around the world</h2>
            <p>Aesthetica brings the best of architecture from all over the world to your doorstep.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imgs[2]}
          alt="Third slide"
        />

        <Carousel.Caption>
          <div className="container">
          <h3>Modern</h3>
          <h2>
          minimalist houses
          </h2>
          <p>With our expertise in minimalist yet modern architecture, we will help you turn your dream home into reality.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

CarouselComp.defaultProps = {
  imgs: []
}

CarouselComp.propTypes = {
  imgs: PropTypes.array.isRequired
}

export default CarouselComp