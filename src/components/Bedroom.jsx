import PropTypes from 'prop-types'
import Title from "./Title"
import ProjectCarousel from "./ProjectCarousel"
import Spinner from "./Spinner"

function Bedroom({data}) {
  if(!data || data.length === 0) {
    return <Spinner />
  }

  return (
    <>
      <div className="container d-flex flex-column align-items-end">
        <Title subTitle={'bedrooms'} mainTitle={'Simply Cozy'} />

        <div className="bedroom-carousel w-100">
          <ProjectCarousel data={data} imgs={data.bedroomImgs} />
        </div>
      </div>
    </>
  )
}

Bedroom.defaultProps = {
  data: {}
}

Bedroom.propTypes = {
  data: PropTypes.object.isRequired
}

export default Bedroom