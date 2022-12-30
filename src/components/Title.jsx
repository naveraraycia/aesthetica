import PropTypes from 'prop-types'

function Title({subTitle, mainTitle}) {
  return (
    <div id='title'>
       <h3 className='text-uppercase text-primary'>{subTitle}</h3>
       <h1 className='text-secondary mb-4'>{mainTitle}</h1>
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