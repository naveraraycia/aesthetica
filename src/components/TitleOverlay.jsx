import PropTypes from 'prop-types'

function TitleOverlay({bgImg, mainTitle, subTitle}) {
  return (
    <div className="title-header-container" data-aos="fade-up" data-aos-delay="50" data-aos-duration="800" style={{background: `url(${bgImg})`}}>
      <div className="title-header-overlay flex-column d-flex justify-content-center align-items-center">
        <h1 className="text-uppercase" data-aos="fade-up" data-aos-delay="50" data-aos-duration="800">{mainTitle}</h1>
        <h6 className="text-uppercase" data-aos="fade-up" data-aos-delay="150" data-aos-duration="800">{subTitle}</h6>
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