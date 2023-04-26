import PropTypes from 'prop-types'

function TitleOverlay({bgImg, mainTitle, subTitle}) {
  return (
    <div className="title-header-container" style={{background: `url(${bgImg})`}}>
      <div className="title-header-overlay flex-column d-flex justify-content-center align-items-center">
        <h1 className="text-uppercase">{mainTitle}</h1>
        <h6 className="text-uppercase">{subTitle}</h6>
      </div>
    </div>
  )
}

TitleOverlay.defaultProps = {
  bgImg: '',
  mainTitle: 'Main Title',
  subTitle: "Sub Title"
}

TitleOverlay.propTypes = {
  bgImg: PropTypes.string.isRequired,
  mainTitle: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired
}

export default TitleOverlay