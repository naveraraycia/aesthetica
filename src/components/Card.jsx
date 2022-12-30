import PropTypes from 'prop-types'

function Card({children, variant}) {
  return (
    <div className={`card p-3 ${variant === 'service' ? 'service-card bg-darkGray' : 'comment-card bg-darkerGray'}`}>
      <div className="card-body">
        {children}
      </div>
    </div>
  )
}

Card.defaultProps = {
  variant: 'service'
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string
}

export default Card