import PropTypes from 'prop-types'

function Card({children, variant}) {
  return (
    <div className={`card h-100 ${variant === 'service' ? 'p-3 service-card bg-secondary' : variant === 'comment-card'? 'p-3 comment-card bg-lightGray': ''} `}>
      <div className="card-body">
        {children}
      </div>
    </div>
  )
}

Card.defaultProps = {
  variant: 'comment-card'
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string
}

export default Card