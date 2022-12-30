import PropTypes from 'prop-types'
import Spinner from "./Spinner"

function ClientEngagementBanner({data}) {
  if(!data || data.length === 0) {
    return <Spinner />
  }

  if(!data.landingImgs) {
    return <Spinner />
  }

  return (
    <>
      <div className="dark-overlay row">
        <div className="col-4 d-flex flex-column align-items-center justify-content-center">
          <h2 className="text-secondary">{data.chosen}</h2>
          <h5 className="text-secondary">Clients chose this design</h5>
        </div>
        <div className="col-4 d-flex flex-column align-items-center justify-content-center">
          <h2 className="text-secondary">{data.inquired}</h2>
          <h5 className="text-secondary">Clients inquired about this design</h5>
        </div>
        <div className="col-4 d-flex flex-column align-items-center justify-content-center">
          <h2 className="text-secondary"><span>{data.rating}</span>/5</h2>
          <h5 className="text-secondary">Client Rating</h5>
        </div>
      </div>
    </>
  )
}

ClientEngagementBanner.defaultProps = {
  data: {}
}

ClientEngagementBanner.propTypes = {
  data: PropTypes.object.isRequired
}

export default ClientEngagementBanner