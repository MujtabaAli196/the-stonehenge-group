import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Nav, Button, Offcanvas, Modal, Navbar } from 'react-bootstrap';

// 
import companyLogo from '../images/logo.svg';
import medium from '../images/medium.svg';
import twitter from '../images/twitter.svg';
import linkedin from '../images/linkedin_icon.svg';
import menudots from '../images/menu-dots.svg';

// const location = useLocation();
// const isHomePage = location.pathname === '/' || location.pathname === '';
const Header = (props) => {
    const [modalShowExportView, setModalShowExportView] = React.useState(false);
    // Companies Offcanvas
    const [showCompanies, setShowCompanies] = useState(false);
    const handleShowCompanies = () => setShowCompanies(true);
    const handleCloseCompanies = () => setShowCompanies(false);
    return (
        <>
            <header className='header'>
                <Col xl={'9'} lg={'10'} className='mx-auto col-11'>
                    {/* <Navbar expand="lg" className={`py-3 fixed-top ${isHomePage ? 'header' : 'header-bg'}`}></Navbar> */}
                    <Navbar expand="lg" className={`py-3`}>
                        <Link className={'navbar-brand'} to="/" style={{ width: '50px' }}><img src={companyLogo} alt="lime" /></Link>
                        <Navbar.Toggle className='d-none d-lg-none' aria-controls="basic-navbar-nav" />
                        <Button variant={''} style={{ width: '60px' }} onClick={handleShowCompanies} className='d-flex d-lg-none'><img className='img-fluid' src={menudots} alt='icon' /></Button>
                        <Navbar.Collapse id="basic-navbar-nav d-none d-lg-flex">
                            <Nav className="ms-auto align-items-center">
                                <Link className="nav-link" to="/about-us">About Us</Link>
                                <Link className="nav-link" to="/philosophy">Philosophy</Link>
                                <Link className="nav-link" to="/portfolio">Portfolio</Link>
                                <Link className="nav-link" to="#" onClick={() => setModalShowExportView(true)}>Contact</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
            </header>
            {/*  */}
            <MyVerticallyCenteredModalExportView
                show={modalShowExportView}
                onHide={() => setModalShowExportView(false)}
            />
            {/* Companies Offcanvas */}
            <Offcanvas className="headeroffcanvas" show={showCompanies} placement='end' onHide={handleCloseCompanies} {...props}>
                <Offcanvas.Header closeButton className="">
                    <Offcanvas.Title className="w-100">Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="">
                    <Navbar expand="lg" className={`p-0`}>
                        <Nav className="d-block">
                            <Link className="nav-link" to="/about-us">About Us</Link>
                            <Link className="nav-link" to="/philosophy">Philosophy</Link>
                            <Link className="nav-link" to="/portfolio">Portfolio</Link>
                            <Link className="nav-link" to="#" onClick={() => setModalShowExportView(true)}>Contact</Link>
                        </Nav>
                    </Navbar>
                </Offcanvas.Body>
                <div className="offcanvas-footer d-flex align-items-center">
                    {/* <NavLink to="/setting" className="offcanvas-link">Field Settings</NavLink> */}
                </div>
            </Offcanvas>
        </>
    )
}

export default Header;

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
                    <small className='d-block' style={{ fontSize: '14px', color: '#787878', fontWeight: 'bold', }}>Find Us</small>
                    <p className='infotext m-0'>71 Robinson Road<br /> #14-01 Singapore 028895</p>
                </div>
                <div className='contentModol mb-4'>
                    <p className='infotext m-0'>9F, V-Point, 18 Tang Lung St, Causeway Bay, Hong Kong</p>
                </div>
                <div className='contentModol'>
                    <small className='d-block' style={{ fontSize: '14px', color: '#787878', fontWeight: 'bold', }}>Follow Us</small>
                    <Link to={'/'} className='me-2'><img className='img-fluid' style={{ width: '30px' }} src={twitter} alt='icon' /></Link>
                    <Link to={'/'} className='me-2'><img className='img-fluid' style={{ width: '30px' }} src={linkedin} alt='icon' /></Link>
                    <Link to={'/'} className=''><img className='img-fluid' style={{ width: '30px' }} src={medium} alt='icon' /></Link>
                </div>
            </Modal.Body>
        </Modal>
    );
}