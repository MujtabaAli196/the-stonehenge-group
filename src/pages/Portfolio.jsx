
import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';

// import comonents
import DeFiUL from '../components/DeFiUL';
import MetaverseUL from '../components/MetaverseUL';
import InfrastructureUL from '../components/InfrastructureUL';

// import images
import logo1 from '../images/logo-1.webp';
import logo2 from '../images/logo-2.png';
import logo3 from '../images/logo-3.jpg';

import logo32 from '../images/logo-32.png';
import logo33 from '../images/logo-33.png';

import logo73 from '../images/logo-73.png';

// DeFiULArray
const DeFiULArray = [
  {
    key: "0",
    linkhref: "https://1inch.io/",
    logoIMG: logo1,
    title: '1inch',
    paragraphText: 'Leading multichain Dex aggregator ',
  },
  {
    key: "1",
    linkhref: "https://acala.network/",
    logoIMG: logo2,
    title: 'Acala Network',
    paragraphText: 'Polkadot parachain providing a suite of DeFi primitives ',
  },
  {
    key: "2",
    linkhref: "https://acala.network/",
    logoIMG: logo3,
    title: 'Benqi',
    paragraphText: 'Leading lending and liquid staking protocol on the Avalanche Blockchain',
  },
]

// MetaverseULArray
const MetaverseULArray = [
  {
    key: "0",
    linkhref: "https://www.animocabrands.com/",
    logoIMG: logo32,
    title: 'Animoca Brands',
    paragraphText: 'Leading multichain Dex aggregator ',
  },
  {
    key: "0",
    linkhref: "https://www.animocabrands.com/",
    logoIMG: logo33,
    title: 'Apeiron',
    paragraphText: 'A crazy blend of rougelite and RTS card game ',
  },
]
// InfrastructureULArray
const InfrastructureULArray = [
  {
    key: "0",
    linkhref: "https://agoric.com/",
    logoIMG: logo73,
    title: 'Agoric',
    paragraphText: 'DeFi-focused Cosmos appchain for Javascript smart contracts',
  },
]
const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <section className='py-5 mt-lg-5'>
        <Col xl={'8'} lg={'9'} className='mx-auto col-11'>
          <div className='mb-5'>
            <h1 className='mb-4 mainTitle'>Asset Management</h1>
            <p>Spartan Capital is a digital asset management firm that takes a fundamental approach to identify unique investment opportunities in the emergent crypto asset class.</p>
            <p>Our investment team has over 20 years of experience in investment research and capital management for top-tier firms such as Goldman Sachs and Indus Capital</p>
            <p>We combine our deep fundamental approach with rigorous valuation analysis and robust risk management to generate superior risk-adjusted returns.</p>
          </div>
          <strong className='d-block blackText1 mb-4' style={{ fontSize: '14px' }}>SELECT INVESTMENTS</strong>
          {/*  */}
          <div className='investmentsUL mb-5'>
            <h4 className='topTile mb-3'>DeFi</h4>
            <Row className='boxesUL'>
              {DeFiULArray.map((val) => {
                return (
                  <DeFiUL
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
            <h4 className='topTile mb-3'>Gaming & Metaverse</h4>
            <Row className='boxesUL'>
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
          <div className='investmentsUL mb-5'>
            <h4 className='topTile mb-3'>Infrastructure</h4>
            <Row className='boxesUL'>
              {InfrastructureULArray.map((val) => {
                return (
                  <InfrastructureUL
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
        </Col>
      </section>
    </>
  )
}

export default Portfolio;