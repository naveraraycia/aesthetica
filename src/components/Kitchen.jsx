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

    <div className="kitchen-grid">
      <div className="container">
        <div className="row d-flex">

        <div className="col-md-6 d-flex flex-column text-white">
          <div className="kitchen-description">
            <h3>Aesthetically Designed</h3>
            <p>From the cozy dining area and spacious kitchen to the carefully chosen finishes and fixtures, every element of this space has been carefully curated to create a warm and inviting ambiance</p>
          </div>
          <div className="kitchen-photo1" style={{background: `url(${data.kitchenImgs[1]})`}}></div>
        </div>
        <div className="col-md-6 kitchen-photo2" style={{background: `url(${data.kitchenImgs[0]})`}}>

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