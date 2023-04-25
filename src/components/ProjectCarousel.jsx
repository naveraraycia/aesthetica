import PropTypes from 'prop-types'
import Carousel from 'react-bootstrap/Carousel';
import Spinner from './Spinner'

function ProjectCarousel({variant, data, imgs}) {

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
          <a href={item} data-toggle="lightbox" data-gallery="img-gallery">
            <img
              className="d-block w-100"
              src={item}
              alt="First slide"
            />
        </a>

        {variant === 'with-caption' && (
        <Carousel.Caption>
              <div className='carousel-details d-flex justify-content-between align-items-center'>
                <h4 className='mb-1 text-uppercase'>{data.name}</h4>
                <h5 className='mb-0'>{data.stories} stories</h5>
                <div className="d-flex">
                  <h5 className='mr-5'>{data.bedrooms} bedrooms</h5>
                  <h5>{data.bathrooms} bathrooms</h5>
                </div>
              </div>
          </Carousel.Caption>
        )}
      </Carousel.Item>
      ))}
     
    </Carousel>
  )
}

ProjectCarousel.defaultProps = {
  variant: 'no-caption',
  data: {},
  imgs: []
}

ProjectCarousel.propTypes = {
  variant: PropTypes.string,
  data: PropTypes.object.isRequired,
  imgs: PropTypes.array.isRequired
}

export default ProjectCarousel