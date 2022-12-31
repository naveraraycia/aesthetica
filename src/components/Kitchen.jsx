import PropTypes from 'prop-types'
import Title from "./Title"
import Spinner from "./Spinner"

function Kitchen({data}) {
  if(!data || data.length === 0) {
    return <Spinner />
  }

  if(!data.kitchenImgs) {
    return <Spinner />
  }

  return (
    <>
      <div className="container d-flex flex-column align-items-end">
        <Title subTitle={'kitchen and dining'} mainTitle={'Minimalist Blueprint'} />

        <div className="row d-flex align-items-center" id="kitchen-description">
          <div className="col-md-4">
            <h1 className="text-secondary">Aesthetically Designed</h1>
            <p className="text-secondary">Built with the best furniture and appliances to compliment the minimalist, modern look</p>
          </div>
          <div className="col-md-8">
          <a href={data.kitchenImgs[0]} data-toggle="lightbox" data-gallery="img-gallery">
            <img src={data.kitchenImgs[0]} alt="kitchen" className="w-100" />
          </a>
          </div>
        </div>

        <div className="row mt-5 align-self-start w-100" id="dining">
          <div className="col-md-8 ">
          <a href={data.kitchenImgs[1]} data-toggle="lightbox" data-gallery="img-gallery">
            <img src={data.kitchenImgs[1]} alt="dining" className="w-100" />
          </a>

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