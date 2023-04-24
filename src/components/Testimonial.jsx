import Title from "./Title"
import Card from "./Card"
import { GiDiamondTrophy } from "react-icons/gi"
import { BsFillEmojiSmileFill } from "react-icons/bs"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from '../assets/img/dp1.jpg'
import img2 from '../assets/img/dp2.jpg'
import img3 from '../assets/img/dp3.jpg'
import img4 from '../assets/img/dp4.jpg'

function Testimonial() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Title subTitle={'testimonial'} mainTitle={'Client Reviews'} />
            <p className="testimonial-description" data-aos="fade-up" data-aos-delay="200" data-aos-duration="550">Lorem ipsum dolor sit amet consectetur. Quam vulputate risus vivamus dui nam neque augue. Fames cras.</p>
            <div className="d-flex mt-2" id="client-reviews">
              <div className="d-flex flex-column mr-5" data-aos="fade-up" data-aos-delay="200" data-aos-duration="550">
                <div className="text-secondary mt-4">
                  <h2 data-aos="fade-up" data-aos-delay="300" data-aos-duration="550">5</h2>
                  <h5 className="text-secondary" data-aos="fade-up" data-aos-delay="400" data-aos-duration="550">Years Experience</h5>
                </div>
              </div>
              <div className="d-flex flex-column" data-aos="fade-up" data-aos-delay="200" data-aos-duration="550">
                  <h2 className="text-secondary mt-4"  data-aos="fade-up" data-aos-delay="300" data-aos-duration="550">75</h2>
                  <h5 className="text-secondary"  data-aos="fade-up" data-aos-delay="400" data-aos-duration="550">Satisfied Customers</h5>
              </div>
            </div>
          </div>
          <div className="col-md-6" id="comment-slider" data-aos="zoom-out-up" data-aos-delay="300" data-aos-duration="800">
          <Slider {...settings}>
            <Card variant={'comment-card'}>
              <div className="d-flex">
                <img src={img1} alt="Avatar" className="rounded-circle" />

                <div className="d-flex flex-column ml-4">
                  <h3 className="text-secondary text-capitalize mb-3 mt-2">Soojin Kang</h3>
                  <h5 className="text-primary mb-2">Project started</h5>
                  <p className="text-secondary">01/25/20</p>
                </div>
              </div>

              <p id="comment" className="text-lighterGray">Lorem ipsum dolor sit amet consectetur. Quam vulputate risus vivamus dui nam neque augu. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eum, rerum ipsa eaque soluta facere.</p>
            </Card>

            <Card variant={'comment-card'}>
            <div className="d-flex">
                <img src={img2} alt="Avatar" className="rounded-circle" />

                <div className="d-flex flex-column ml-4">
                  <h3 className="text-secondary text-capitalize mb-3 mt-2">Stephen Blake</h3>
                  <h5 className="text-primary mb-2">Project started</h5>
                  <p className="text-secondary">03/23/20</p>
                </div>
              </div>

              <p id="comment" className="text-lighterGray">Lorem ipsum dolor sit amet consectetur. Quam vulputate risus vivamus dui nam neque augu. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eum, rerum ipsa eaque soluta facere.</p>
            </Card>
            
            <Card variant={'comment-card'}>
            <div className="d-flex">
                <img src={img3} alt="Avatar" className="rounded-circle" />

                <div className="d-flex flex-column ml-4">
                  <h3 className="text-secondary text-capitalize mb-3 mt-2">Isabela Smith</h3>
                  <h5 className="text-primary mb-2">Project started</h5>
                  <p className="text-secondary">02/16/18</p>
                </div>
              </div>

              <p id="comment" className="text-lighterGray">Lorem ipsum dolor sit amet consectetur. Quam vulputate risus vivamus dui nam neque augu. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eum, rerum ipsa eaque soluta facere.</p>
            </Card>

            <Card variant={'comment-card'}>
            <div className="d-flex">
                <img src={img4} alt="Avatar" className="rounded-circle" />

                <div className="d-flex flex-column ml-4">
                  <h3 className="text-secondary text-capitalize mb-3 mt-2">Millie Evans</h3>
                  <h5 className="text-primary mb-2">Project started</h5>
                  <p className="text-secondary">08/17/19</p>
                </div>
              </div>

              <p id="comment" className="text-lighterGray">Lorem ipsum dolor sit amet consectetur. Quam vulputate risus vivamus dui nam neque augu. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eum, rerum ipsa eaque soluta facere.</p>
            </Card>

          </Slider>
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonial