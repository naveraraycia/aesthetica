import PropTypes from 'prop-types'
import Spinner from "./Spinner"
import TitleOverlay from './TitleOverlay';
import AreaDescription from './AreaDescription';
import ProjectCarousel from './ProjectCarousel';

function Bedroom({data}) {
  if(!data || data.length === 0) {
    return <Spinner />
  }

  return (
    <>
      <TitleOverlay mainTitle={'bedrooms'} subTitle={'comfortable & cozy'} bgImg={data.bedroomImgs[1]} />

      <AreaDescription heading={['minimalist', 'dreamy', 'warm']} description={'Our interior design bedroom is a serene and inviting space that\'s designed to help you relax and unwind. With its thoughtful layout, comfortable furnishings, and soothing color scheme, this bedroom is the perfect retreat after a long day.'} />

      <div className="area-carousel-container container">
        <ProjectCarousel data={data} imgs={data.bedroomImgs} />
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