import PropTypes from 'prop-types'
import Spinner from "./Spinner"
import TitleOverlay from './TitleOverlay';

function Kitchen({data}) {
  if(!data || data.length === 0) {
    return <Spinner />
  }

  if(!data.kitchenImgs) {
    return <Spinner />
  }

  return (
    <>
    <div className='title-container'>
      <TitleOverlay mainTitle={'kitchen & dining'} subTitle={'minimalist blueprint'} bgImg={data.kitchenImgs[0]} />
    </div>

    <div className="kitchen-grid" data-aos="fade-up" data-aos-delay="250" data-aos-duration="500">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-4 mb-md-0 text-white">
            <div className="kitchen-description">
              <h3>Aesthetically Designed</h3>
              <p>From the cozy dining area and spacious kitchen to the carefully chosen finishes and fixtures, every element of this space has been carefully curated to create a warm and inviting ambiance</p>
            </div>   
            <img src={data.kitchenImgs[1]} alt="kitchen-1" className='w-100' />     
          </div>    
          <div className="col-md-6">
            <img src={data.kitchenImgs[0]} alt="kitchen-1" className='w-100 h-100' />
        </div>
        </div>
      </div>
    </div>
      
    </>
  )
}

Kitchen.defaultProps = {
  data: {}
}

Kitchen.propTypes = {
  data: PropTypes.object.isRequired
}

export default Kitchen