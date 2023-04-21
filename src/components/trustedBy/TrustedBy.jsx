import React from 'react'
import "./TrustedBy.scss";
import { Container, Row, Col } from 'react-bootstrap';

const TrustedBy = () => {
  return (
    <div className='trustedBy '>
          <Container className='container'>
      <Row>
        <Col xs={12} md={10} lg={8} className="mx-auto">
          <Row className="justify-content-between">
          <Col xs={12} sm={6} lg={2} className="mb-3">
            <span >Trusted By </span>
            </Col>
            <Col xs={12} sm={6} lg={2} className="mb-3">
              <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook2x.188a797.png" className="img-fluid" alt="placeholder" />
            </Col>
            <Col xs={12} sm={6} lg={2} className="mb-3">
              <img  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google2x.06d74c8.png" className="img-fluid" alt="placeholder" />
            </Col>
            <Col xs={12} sm={6} lg={2} className="mb-3">
              <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix2x.887e47e.png" className="img-fluid" alt="placeholder" />
            </Col>
            <Col xs={12} sm={6} lg={2} className="mb-3">
              <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg2x.6dc32e4.png" className="img-fluid" alt="placeholder" />
            </Col>
            <Col xs={12} sm={6} lg={2} className="mb-3">
              <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal2x.22728be.png" className="img-fluid" alt="placeholder" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
      
    </div>
  )
}

export default TrustedBy
