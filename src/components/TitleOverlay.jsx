// Add propTypes

function TitleOverlay({bgImg, mainTitle, subTitle}) {
  return (
    <div className="title-header-container" style={{background: `url(${bgImg})`}}>
      <div className="title-header-overlay flex-column d-flex justify-content-center align-items-center">
        <h1 className="text-uppercase">{mainTitle}</h1>
        <h6 className="text-uppercase">{subTitle}</h6>
      </div>
    </div>
  )
}

export default TitleOverlay