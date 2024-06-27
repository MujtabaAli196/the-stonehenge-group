import React from 'react'
import { Col, Row } from 'react-bootstrap';
// import image
import animateImg from '../images/animateImg.jpg';

const Home = () => {
  return (
    <>
      <section className='py-5 mt-lg-5'>
        <Col xl={'9'} lg={'9'} className='mx-auto col-11'>
          <Row className='mb-5 pb-5 align-items-center'>
            <Col xl={'6'} lg={'6'} className='text-center mb-4 mb-lg-0'><img className='img-fluid' src={animateImg} alt='icon' /></Col>
            <Col xl={'6'} lg={'6'} className=''>
              <span className='tag'>SSLE</span>
              <div className='mb-5 text-slider'><p className='mb-0'>Stonehenge Group is Asia’s pioneering emergent technologies blockchain fund</p></div>
              <hr />
            </Col>
          </Row>
          <div className='d-md-flex align-items-center justify-content-between'>
            <h5 className='ComTitle'>STONEHENGE</h5>
            <p className='mb-0'>Local time:</p>
          </div>
        </Col>
      </section>
    </>
  )
}

export default Home;