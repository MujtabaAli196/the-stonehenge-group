import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DeFiUL = (props) => {
    return (
        <>
            <Col xl={'4'} lg={'4'} md={'6'} sm={'6'} className={'mb-3'}>
                <Link to={'' + props.linkhref} className='h-100 linkBox d-flex align-items-center p-3'>
                    <div className='me-3'><img className='img-fluid' style={{width:'60px'}} src={props.logoIMG} alt='icon'/></div>
                    <div className='me-auto'>
                        <h5 className='mb-2 nextTitle'>{props.title}</h5>
                        <p className='mb-0' style={{fontSize:'12px', lineHeight:'normal'}}>{props.paragraphText}</p>
                    </div>
                </Link>
            </Col>
        </>
    )
}

export default DeFiUL;