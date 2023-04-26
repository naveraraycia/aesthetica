import PropTypes from 'prop-types'

function Title2({subTitle, mainTitle}) {
  return (
    <div id='title2'>
      <h1 className='text-uppercase' data-aos="fade-right" data-aos-delay="200" data-aos-duration="500">{mainTitle}</h1>
      <h3 className='text-uppercase mt-4' data-aos="fade-right" data-aos-delay="350" data-aos-duration="500">{subTitle}</h3>
    </div>
  )
}

Title2.defaultProps = {
  subTitle: 'Sub Title',
  mainTitle: 'Main Title'
}

Title2.propTypes = {
  subTitle: PropTypes.string.isRequired,
  mainTitle: PropTypes.string.isRequired
}

export default Title2