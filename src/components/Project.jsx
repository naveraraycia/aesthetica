import PropTypes from 'prop-types'

function Project({bgImg, name, number, redirect}) {
  return (
    <div style={{
      backgroundImage: `url(${bgImg})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      height: '500px'
    }} id="project-item">
      <a href={`/project/${redirect}/${number}`}>
        <div className="dark-overlay d-flex flex-column justify-content-between">
        <h4 className='text-primary text-uppercase'>{name}</h4>
        <h5 className='text-uppercase text-white align-self-center'>view</h5>
        <h2 className='text-primary'>{number}</h2>
        </div>
      </a>
    </div>
  )
}

Project.defaultProps = {
  bgImg: '',
  name: 'Name',
  number: 1,
  redirect: ''
}

Project.propTypes = {
  bgImg: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  redirect: PropTypes.string.isRequired
}

export default Project