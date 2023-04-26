// Add prop Types

function AreaDescription({heading, description}) {
  return (
    <div className="area-description-container container d-flex justify-content-center flex-column align-items-center">
      <div className="heading-set">
        <span className="text-primary text-uppercase">{heading[0]}</span>
        <span className="text-white text-uppercase">{heading[1]}</span>
        <span className="text-primary text-uppercase">{heading[2]}</span>
      </div>

      <div className="area-description">
        <p className="text-white">{description}</p>
      </div>
    </div>
  )
}

export default AreaDescription