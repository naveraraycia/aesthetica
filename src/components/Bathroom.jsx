import PropTypes from 'prop-types'
import Spinner from "./Spinner"
import TitleOverlay from './TitleOverlay';
import AreaDescription from './AreaDescription';
import ProjectCarousel from './ProjectCarousel';

function Bathroom({data}) {
  if(!data || data.length === 0) {
    return <Spinner />
  }
  
  return (
    <>
      <TitleOverlay mainTitle={'bathrooms'} subTitle={'bathe in luxury'} bgImg={data.bathroomImgs[1]} />

      <AreaDescription heading={['sleek', 'modern', 'classic']} description={'From the sleek freestanding tub to the spacious walk-in shower, every element of the bathrooms has been thoughtfully designed to provide a truly indulgent experience.'} />

      <div className="area-carousel-container container">
        <ProjectCarousel data={data} imgs={data.bathroomImgs} />
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