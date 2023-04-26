import PropTypes from 'prop-types'

function Title2({subTitle, mainTitle}) {
  return (
    <div id='title2'>
      <h1 className='text-uppercase'>{mainTitle}</h1>
      <h3 className='text-uppercase mt-4'>{subTitle}</h3>
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