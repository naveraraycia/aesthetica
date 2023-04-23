import PropTypes from 'prop-types'

function Title({subTitle, mainTitle}) {

  return (
    <div id='title'>
       <h3 data-aos="fade-up" data-aos-delay="100" data-aos-duration="500" className='text-uppercase text-primary'>{subTitle}</h3>
       <h1 data-aos="fade-up" data-aos-delay="150" data-aos-duration="500" className='text-secondary mb-4'>{mainTitle}</h1>
    </div>
  )
}

Title.defaultProps = {
  subTitle: 'Sub Title',
  mainTitle: 'Main Title'
}

Title.propTypes = {
  subTitle: PropTypes.string.isRequired,
  mainTitle: PropTypes.string.isRequired
}

export default Title