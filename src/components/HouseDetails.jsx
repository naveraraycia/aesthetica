import Spinner from "./Spinner"
import { BsHouseDoor } from "react-icons/bs";
import { GiBed, GiBathtub } from "react-icons/gi";
import Navbar from './Navbar'

function HouseDetails({data}) {
  if(!data || data.length === 0) {
    return <Spinner />
  }

  return (
    <>
      <div className="row house-info-row pt-5 pb-5 d-flex justify-content-center">
          <div className="container house-info-container">
    
              <div className="house-info d-flex flex-column justify-content-center align-items-center">
              <GiBed color="#f5f5f5" size={30} />
                  <p className="text-secondary text-uppercase mt-2">{data.bedrooms} bedrooms</p>
              </div>

              <div className="house-info d-flex flex-column justify-content-center align-items-center">
              <GiBathtub color="#f5f5f5" size={30} />
                  <p className="text-secondary text-uppercase mt-2">{data.bathrooms} bathrooms</p>
              </div>

              <div className="house-info d-flex flex-column justify-content-center align-items-center">
              <BsHouseDoor color="#f5f5f5" size={30} />
                  <p className="text-secondary text-uppercase mt-2">{data.stories} stories</p>
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

export default HouseDetails