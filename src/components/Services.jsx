import Title from "./Title"
import Card from "./Card"
import { GiPaintBucket, GiClawHammer, GiPalette, GiTalk, GiPencilRuler, GiBed } from "react-icons/gi";

function Services() {
  return (
    <>
      <div className="container">
        <Title subTitle={'our services'} mainTitle={'Here\'s what we offer'} />

        <div className='row service-cards'>
          <div className="col-md-4">
            <Card variant={'service'}>
              <GiPaintBucket color={'#8297A4'} size={60} />
              <h4 className="text-slate mt-4">Architectural Design</h4>
              <p className="text-darkSlate">Lorem ipsum dolor sit amet consectetur. Quam vulputate risus vivamus dui nam neque augue.</p>
            </Card>
          </div>
          <div className="col-md-4">
            <Card variant={'service'}>
                <GiClawHammer color={'#8297A4'} size={60} />
                <h4 className="text-slate mt-4">Construction</h4>
                <p className="text-darkSlate">Lorem ipsum dolor sit amet consectetur. Quam vulputate risus vivamus dui nam neque augue.</p>
              </Card>
          </div>
          <div className="col-md-4">
              <Card variant={'service'}>
                  <GiPalette color={'#8297A4'} size={60} />
                  <h4 className="text-slate mt-4">Interior Design</h4>
                  <p className="text-darkSlate">Lorem ipsum dolor sit amet consectetur. Quam vulputate risus vivamus dui nam neque augue.</p>
                </Card>
          </div>
        </div>
        <div className="row service-cards mt-4">
          <div className="col-md-4">
            <Card variant={'service'}>
              <GiTalk color={'#8297A4'} size={60} />
              <h4 className="text-slate mt-4">Consulting</h4>
              <p className="text-darkSlate">Lorem ipsum dolor sit amet consectetur. Quam vulputate risus vivamus dui nam neque augue.</p>
            </Card>
          </div>
          <div className="col-md-4">
            <Card variant={'service'}>
                <GiPencilRuler color={'#8297A4'} size={60} />
                <h4 className="text-slate mt-4">Planning</h4>
                <p className="text-darkSlate">Lorem ipsum dolor sit amet consectetur. Quam vulputate risus vivamus dui nam neque augue.</p>
              </Card>
          </div>
          <div className="col-md-4">
              <Card variant={'service'}>
                  <GiBed color={'#8297A4'} size={60} />
                  <h4 className="text-slate mt-4">Furniture Design</h4>
                  <p className="text-darkSlate">Lorem ipsum dolor sit amet consectetur. Quam vulputate risus vivamus dui nam neque augue.</p>
                </Card>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services