import PropTypes from 'prop-types'
import { BsHouseDoor } from "react-icons/bs";
import { GiBed, GiBathtub } from "react-icons/gi";
import Spinner from "./Spinner"
import Navbar from './Navbar'

function HouseDetails({data}) {
  if(!data || data.length === 0) {
    return <Spinner />
  }

  return (
    <>
      <div className="row house-info-row pt-5 pb-5 d-flex justify-content-center">
          <div className="container house-info-container">
              <div className="house-info d-flex flex-column justify-content-center align-items-center" data-aos="fade-left" data-aos-delay="250" data-aos-duration="500">
              <GiBed color="#f5f5f5" size={30} />
                  <p className="text-white text-uppercase mt-2">{data.bedrooms} bedrooms</p>
              </div>
              <div className="house-info d-flex flex-column justify-content-center align-items-center" data-aos="fade-left" data-aos-delay="350" data-aos-duration="500">
              <GiBathtub color="#f5f5f5" size={30} />
                  <p className="text-white text-uppercase mt-2">{data.bathrooms} bathrooms</p>
              </div>
              <div className="house-info d-flex flex-column justify-content-center align-items-center" data-aos="fade-left" data-aos-delay="450" data-aos-duration="500">
              <BsHouseDoor color="#f5f5f5" size={30} />
                  <p className="text-white text-uppercase mt-2">{data.stories} stories</p>
              </div>
          </div>
        </div>
        <div className="container nav-container">
          <div className="row d-flex justify-content-center align-items-center">
            <Navbar />
          </div>      
      </div>
    </>
  )
}

HouseDetails.defaultProps = {
  data: {}
}

HouseDetails.propTypes = {
  data: PropTypes.object.isRequired
}


export default HouseDetails