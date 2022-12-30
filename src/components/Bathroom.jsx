import PropTypes from 'prop-types'
import Title from "./Title"
import ProjectCarousel from "./ProjectCarousel"
import Spinner from "./Spinner"

function Bathroom({data}) {
  if(!data || data.length === 0) {
    return <Spinner />
  }
  
  return (
    <>
      <div className="container d-flex flex-column">
        <Title subTitle={'bathrooms'} mainTitle={'Bathe in Luxury'} />

        <div className="bathroom-carousel w-100">
          <ProjectCarousel data={data} imgs={data.bathroomImgs} />
        </div>
      </div>
    </>
  )
}

Bathroom.defaultProps = {
  data: {}
}

Bathroom.propTypes = {
  data: PropTypes.object.isRequired
}

export default Bathroom