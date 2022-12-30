import PropTypes from 'prop-types'
import Title from "./Title"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Spinner from "./Spinner";

function LivingRoom({data}) {
 
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  if(!data || data.length === 0) {
    return <Spinner />
  }

  if(!data.livingroomImgs) {
    return <Spinner />
  }

  return (
    <>
      <div className="container">
        <Title mainTitle={'Modern Interior Design'} subTitle={'living rooms'} />
        <p className="text-secondary">{data.livingrooms} Living Room {data.livingrooms > 1 ? 'Designs' : 'Design'}</p>

        <div className="living-room-photos">
        <Slider {...settings}>
          {data.livingroomImgs.map((item, index)=>(
            <img key={index} src={item} alt="living room" />
          ))}
          </Slider>
        </div>
      </div>
    </>
  )
}

LivingRoom.defaultProps = {
  data: {}
}

LivingRoom.propTypes = {
  data: PropTypes.object.isRequired
}

export default LivingRoom