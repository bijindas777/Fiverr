import React from 'react'
import "./Featured.scss"
import { Container, Row, Col } from 'react-bootstrap';

const featured = () => {
  return (
    <div className='featured'>
 <Container>
      <Row>
        <Col>
          <div className="d-flex flex-column align-items-center">
            <h1 className="text-center">Find the perfect freelance services for your business</h1>
            <div className="d-flex align-items-center">
              <input type="text" className="form-control" placeholder='Try "building mobile app" ' />
              <button className="btn btn-primary ml-2">Search</button>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <button className="btn btn-link">Web Design</button>
              <button className="btn btn-link">Wordpres</button>
              <button className="btn btn-link">Logo Design</button>
              <button className="btn btn-link">AI Services</button>
            </div>
          </div>
        </Col>
        <Col>
          <img src="your-image-src" className="img-fluid" alt="Responsive Image" />
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default featured
