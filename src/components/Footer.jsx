import React from 'react';
import { Col, Row,Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import medium from '../images/medium.svg';
import twitter from '../images/twitter.svg';
import linkedin from '../images/linkedin_icon.svg';

const Footer = () => {
    const [modalShowExportView, setModalShowExportView] = React.useState(false);
    return (
        <>
            <footer className='py-4 footer' style={{ borderTop: 'solid 1px #F3F3F3' }}>
                <Col xl={'9'} lg={'10'} className='mx-auto col-11'>
                    <Row className={''}>
                        <Col xl={'6'} lg={'6'} className='mb-3 mb-lg-0'>
                            <h6 className='fTitle'>Interested in meeting? <Link to={'#'} onClick={() => setModalShowExportView(true)} className={'linkF'}>drop us a message</Link></h6>
                        </Col>
                        <Col xl={'6'} lg={'6'} className='text-lg-end'>
                            <div className=''>
                                <Link className='me-2' to={'/'}><img className='img-fluid' style={{width:'30px'}} src={twitter} alt='icon'/></Link>
                                <Link className='' to={'/'}><img className='img-fluid' style={{width:'30px'}} src={linkedin} alt='icon'/></Link>
                            </div>
                            <p className='m-0'>© 2024 The Stonehenge Group™</p>
                        </Col>
                    </Row>
                </Col>
            </footer>
            {/*  */}
            <MyVerticallyCenteredModalExportView
                show={modalShowExportView}
                onHide={() => setModalShowExportView(false)}
            />
        </>
    )
}

export default Footer;

// ExportView
function MyVerticallyCenteredModalExportView(props) {
    return (
        <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title>Information</Modal.Title>
            </Modal.Header>
            <Modal.Body className='px-4 pb-4'>
                <div className='contentModol mb-4'>
                    <small className='d-block' style={{ fontSize: '14px', fontWeight: 'bold', }}>Send Us An Email</small>
                    <Link to={'mailto:info@spartangroup.io'} className='infotext'>info@spartangroup.io</Link>
                </div>
                <div className='contentModol mb-4'>
                    <small className='d-block' style={{ fontSize: '14px', color:'#787878', fontWeight: 'bold', }}>Find Us</small>
                    <p className='infotext m-0'>71 Robinson Road<br/> #14-01 Singapore 028895</p>
                </div>
                <div className='contentModol mb-4'>
                    <p className='infotext m-0'>9F, V-Point, 18 Tang Lung St, Causeway Bay, Hong Kong</p>
                </div>
                <div className='contentModol'>
                    <small className='d-block' style={{ fontSize: '14px', color:'#787878', fontWeight: 'bold', }}>Follow Us</small>
                    <Link to={'/'} className='me-2'><img className='img-fluid' style={{width:'30px'}} src={twitter} alt='icon'/></Link>
                    <Link to={'/'} className='me-2'><img className='img-fluid' style={{width:'30px'}} src={linkedin} alt='icon'/></Link>
                    <Link to={'/'} className=''><img className='img-fluid' style={{width:'30px'}} src={medium} alt='icon'/></Link>
                </div>
            </Modal.Body>
        </Modal>
    );
}