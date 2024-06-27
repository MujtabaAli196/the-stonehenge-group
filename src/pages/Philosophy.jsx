import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Philosophy = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <section className='py-5 mt-lg-5'>
        <Col xl={'8'} lg={'9'} className='mx-auto col-11'>
          <Row className={''}>
            <Col xl={'6'} lg={'6'} className='mb-3 mb-lg-0'>
              <h1 className='mainTitle'>Investing is <strong>legacy.</strong></h1>
            </Col>
            <Col xl={'6'} lg={'6'}>
              <p>At Double Peak Group, our guiding philosophy embraces a unique blend of value investing, focused on the pioneering domain of digital assets. Managed by Nyx Holdings, the family office of <Link to={'/'} className={'fw-bold pragraphText'}>Galen Law-Kun</Link>, our strategy is grounded in making meaningful investments during early funding rounds and secondary markets in the digital asset ecosystem. We pinpoint undervalued opportunities that hold the promise of substantial growth over an extended time horizon.</p>
              <p>Our vision, on a global scale, is to create a bridge connecting the innovations in decentralized technologies emerging from China with the broader international markets. This ambitious goal serves a dual purpose: fostering an environment ripe for technological advancement and enabling the diffusion of these technologies across the global landscape. By establishing this link, we aspire to nurture a dynamic and value-oriented digital asset ecosystem.</p>
              <p>In the heart of Double Peak's operations lies a culture and ethics system deeply rooted in our value-oriented investment philosophy. We cultivate and celebrate a set of seven essential skills in our professionals: Organization, Research, Decision-Making, Deal-Structuring, Execution, Maintenance, and Exit. These capabilities equip our team with the necessary tools to navigate and excel in the rapidly evolving landscape of digital assets and decentralized technologies.</p>
              <p>Our commitment to thorough research sets the stage for our strong performance. The investment team at Double Peak conducts comprehensive due diligence, allowing us to gain a deep understanding of the underlying operations of the digital assets we invest in. Our contrarian approach empowers us to challenge commonly held assumptions, marking us as early adopters in promising territories such as APAC’s thriving digital asset ecosystem.</p>
              <p>We envision a future where our work and the work of the founders we back have a tangible, positive impact on society. Our mission is to facilitate change and foster progress in the world by aiding innovative founders to realize their dreams. By aligning with and supporting these visionaries, we seek to shape a future that is enhanced and enriched by the potential of decentralized technologies and digital assets.</p>
            </Col>
          </Row>
        </Col>
      </section>
    </>
  )
}

export default Philosophy;