import PropTypes from 'prop-types'
import Spinner from "./Spinner";
import TitleOverlay from './TitleOverlay';
import AreaDescription from './AreaDescription';
import ProjectCarousel from './ProjectCarousel';

function Room({data, room, titleLabels, areaDescriptionHeading, areaDescription}) {
  if(!data || data.length === 0) {
    return <Spinner />
  }

  return (
    <>
      <TitleOverlay mainTitle={titleLabels[0]} subTitle={titleLabels[1]} bgImg={`${room === 'living room' ? data.livingroomImgs[1] : room === 'bedroom' ? data.bedroomImgs[1] : data.bathroomImgs[1]}`} />

      <AreaDescription heading={areaDescriptionHeading} description={areaDescription} />

      <div className="area-carousel-container container">
        <ProjectCarousel data={data} imgs={room === 'living room' ? data.livingroomImgs : room === 'bedroom' ? data.bedroomImgs : data.bathroomImgs} />
      </div>
    </>
  )
}

Room.defaultProps = {
  data: {}
}

Room.propTypes = {
  data: PropTypes.object.isRequired
}

export default Room