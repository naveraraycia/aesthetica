import PropTypes from 'prop-types'
import Spinner from './Spinner'
import Carousel from 'react-bootstrap/Carousel';

function ProjectCarousel({ data, imgs}) {

  if(!data || data.length === 0) {
    return <Spinner />
  }

  if(!data.landingImgs) {
    return <Spinner />
  }


  return (
    <Carousel slide={false} indicators={false} interval={5000} nextLabel={''} prevLabel={''}>
      {imgs.map((item, index)=> (
        <Carousel.Item key={index}>
          <a href={item} data-toggle="lightbox" data-gallery="img-gallery" data-aos="fade-left" data-aos-delay="500" data-aos-duration="500">
            <img
              className="d-block w-100"
              src={item}
              alt="First slide"
              data-aos="fade-left" data-aos-delay="650" data-aos-duration="500"
            />
        </a>
      </Carousel.Item>
      ))}
    </Carousel>
  )
}

ProjectCarousel.defaultProps = {
  data: {},
  imgs: []
}

ProjectCarousel.propTypes = {
  data: PropTypes.object.isRequired,
  imgs: PropTypes.array.isRequired
}

export default ProjectCarousel