import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Nav, Modal, Navbar } from 'react-bootstrap';

// 
import companyLogo from '../images/logo.svg';

// const location = useLocation();
// const isHomePage = location.pathname === '/' || location.pathname === '';
const Header = () => {
    const [modalShowExportView, setModalShowExportView] = React.useState(false);
    return (
        <>
            <header className='header'>
                <Col xl={'9'} lg={'10'} className='mx-auto col-11'>
                    {/* <Navbar expand="lg" className={`py-3 fixed-top ${isHomePage ? 'header' : 'header-bg'}`}></Navbar> */}
                    <Navbar expand="lg" className={`py-3`}>
                        <Link className={'navbar-brand'} to="/" style={{ width: '50px' }}><img src={companyLogo} alt="lime" /></Link>
                        <Navbar.Toggle className='' aria-controls="basic-navbar-nav" />
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
        </>
    )
}

export default Header;

// ExportView
function MyVerticallyCenteredModalExportView(props) {
    return (
        <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Body>
                <h6 className="fontsize18 mb-3">Export this View?</h6>
                <p>Records from this view will be exported in the background. Once the export is complete, you'll be notified along with a link to download the exported .csv file.</p>
            </Modal.Body>
            <Modal.Footer className="">Footer</Modal.Footer>
        </Modal>
    );
}