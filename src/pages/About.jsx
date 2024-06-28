import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// import comonents
import MAUL from '../components/MAUL';
import MetaverseUL from '../components/MetaverseUL';

// import images

import logo104 from '../images/logo-104.png';
import logo105 from '../images/logo-105.png';
import logo106 from '../images/logo-106.png';

import logo110 from '../images/logo-110.png';
import logo111 from '../images/logo-111.png';


// MAULArray
const MAULArray = [
  {
    key: "0",
    linkhref: "https://augur.net/",
    logoIMG: logo104,
    title: 'Augur',
    paragraphText: 'Your global, no-limit betting platform ',
  },
  {
    key: "1",
    linkhref: "https://www.spartangroup.io/advisory",
    logoIMG: logo105,
    title: 'Blockfolio',
    paragraphText: 'The easiest way to trade crypto',
  },
  {
    key: "2",
    linkhref: "https://coins.ph/",
    logoIMG: logo106,
    title: 'BenqiCoins.PH',
    paragraphText: 'My phone is my wallet with Coins.ph',
  },
]

// MetaverseULArray
const MetaverseULArray = [
  {
    key: "0",
    linkhref: "https://alexgo.io/",
    logoIMG: logo110,
    title: 'ALEX',
    paragraphText: 'Finance Layer of Bitcoin ',
  },
  {
    key: "0",
    linkhref: "https://www.mantle.xyz/",
    logoIMG: logo111,
    title: 'BitDAO',
    paragraphText: 'Leading DeFi asset management DAO ',
  },
]


const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <section className='py-5 mt-lg-5'>
        <Col xl={'8'} lg={'9'} className='mx-auto col-11'>
          <div className='mb-5' data-aos-delay="100" ta-aos-duration="600" data-aos="fade-up">
            <h1 className='mb-4 mainTitle' data-aos-delay="100" ta-aos-duration="600" data-aos="fade-up">Advisory</h1>
            <p>Spartan Advisory was founded with a mission to bring together best practices from traditional finance with the innovation and creativity from the wider Web3 community. We have worked with some of the world’s leading Web3 projects, corporates and tech companies to meet their financial and capital market needs.</p>
            <p>We are the most active and innovative dedicated dealmaker in the Web3 industry. Our core services include M&A, restructuring and capital raising.</p>
            <p>We deliver strategic solutions to the best founders in Web3.</p>
          </div>
          <strong className='d-block blackText1 mb-4' style={{ fontSize: '14px' }}>OUR CLIENTS</strong>
          {/*  */}
          <div className='investmentsUL mb-5'>
            <h4 className='topTile mb-3' data-aos-delay="100" ta-aos-duration="600" data-aos="fade-up">M&A</h4>
            <Row className='boxesUL' data-aos-delay="100" ta-aos-duration="600" data-aos="fade-up">
              {MAULArray.map((val) => {
                return (
                  <MAUL
                    key={val.key}
                    linkhref={val.linkhref}
                    logoIMG={val.logoIMG}
                    title={val.title}
                    paragraphText={val.paragraphText}
                  />
                )
              })}
            </Row>
          </div>
          {/*  */}
          <div className='investmentsUL mb-5'>
            <h4 className='topTile mb-3' data-aos-delay="100" ta-aos-duration="600" data-aos="fade-up">Capital Raises</h4>
            <Row className='boxesUL' data-aos-delay="100" ta-aos-duration="600" data-aos="fade-up">
              {MetaverseULArray.map((val) => {
                return (
                  <MetaverseUL
                    key={val.key}
                    linkhref={val.linkhref}
                    logoIMG={val.logoIMG}
                    title={val.title}
                    paragraphText={val.paragraphText}
                  />
                )
              })}
            </Row>
          </div>
          {/*  */}
          <div data-aos-delay="100" ta-aos-duration="600" data-aos="fade-up">
            <p className='mb-2' style={{ fontSize: '10px' }}>Spartan Group (registered entity 99 Duxton Pte. Ltd.) is operating a business that falls within the definition of an “exempt person” pursuant to the requirements under the Securities and Futures (Licensing and Conduct of Business) Regulations (Rg 10) [the ’SFR’]. An “exempt person” means a person exempted from holding a capital markets services licence under paragraph 3(1)(d), 3A(1)(d) 5(1)(d) or 7(1)(b) of the Second Schedule to the SFR. An exempt person providing corporate finance advisory services is only permitted to serve accredited investors, expert investors or institutional investors, and is exempted from licensing and business conduct requirements under the Securities and Futures Act and the relevant regulations.</p>
            <Link className='m-0 pragraphText' style={{ fontSize: '10px' }} to={'https://eservices.mas.gov.sg/fid/institution/detail/221987-99-DUXTON-PTE-LTD'}>https://eservices.mas.gov.sg/fid/institution/detail/221987-99-DUXTON-PTE-LTD</Link>
          </div>
        </Col>
      </section>
    </>
  )
}

export default About;