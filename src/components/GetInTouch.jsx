import Title from "./Title"

function GetInTouch() {
  return (
    <div className="row">
      <div className="col-md-7 d-flex flex-column" data-aos="fade-right" data-aos-delay="150" data-aos-duration="800">
        <div className="row">
          <div className="col-6 p1"></div>
          <div className="col-6 p2"></div>
        </div>
        <div className="row">
          <div className="col-6 p3"></div>
          <div className="col-6 p4"></div>
        </div>
      </div>
      <div className="col-md-5 get-in-touch bg-secondary" data-aos="fade-left" data-aos-delay="150" data-aos-duration="800">
        <div className="d-flex flex-column align-items-center justify-content-center">
          <div>
            <Title subTitle="get in touch" mainTitle="With our experienced team" />
            <div className="description">
              <p data-aos="fade-up" data-aos-delay="150" data-aos-duration="500">Contacting our firm is easy, and we are always happy to answer any questions you may have about our services.</p>
              <p data-aos="fade-up" data-aos-delay="250" data-aos-duration="500">So why wait? Contact us today to learn more about how we can help you achieve your construction and design goals.</p>
            </div>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default GetInTouch