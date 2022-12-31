import PropTypes from 'prop-types'

function Card({children, variant}) {
  return (
    <div className={`card h-100 ${variant === 'service' ? 'p-3 service-card bg-darkGray' : variant === 'house-card' ? 'house-card p-1 bg-darkestGray' : variant === 'comment-card'? 'p-3 comment-card bg-darkerGray': ''} `}>
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