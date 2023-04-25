import PropTypes from 'prop-types'
import Spinner from "./Spinner";
import TitleOverlay from './TitleOverlay';
import AreaDescription from './AreaDescription';
import ProjectCarousel from './ProjectCarousel';

function LivingRoom({data}) {
 

  if(!data || data.length === 0) {
    return <Spinner />
  }

  if(!data.livingroomImgs) {
    return <Spinner />
  }

  return (
    <>
      <TitleOverlay mainTitle={'living rooms'} subTitle={'modern interior design'} bgImg={data.livingroomImgs[1]} />

      <AreaDescription heading={['comfortable', 'welcoming', 'stylish']} description={'Our interior design living room is a stylish and inviting space that\'s designed to be the heart of your home. With its comfortable furnishings, thoughtful layout, and attention to detail, this living room is the perfect place to relax and entertain.'} />

      <div className="area-carousel-container container">
        <ProjectCarousel data={data} imgs={data.livingroomImgs} />
      </div>
    </>
  )
}

LivingRoom.defaultProps = {
  data: {}
}

LivingRoom.propTypes = {
  data: PropTypes.object.isRequired
}

export default LivingRoom