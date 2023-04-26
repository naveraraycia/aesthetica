import PropTypes from 'prop-types'

function TeamMember({img, name, position}) {
  return (
    <div className="d-flex flex-column align-items-center" id="team-member">
      <img src={img} alt="Team Member" className="img-fluid mb-4" />
      <h4 className="text-capitalize text-white mb-2">{name}</h4>
      <h5 className="text-uppercase text-primary">{position}</h5>
    </div>
  )
}

TeamMember.defaultProps = {
  img: '',
  name: 'Name',
  position: 'Position'
}

TeamMember.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired
}

export default TeamMember