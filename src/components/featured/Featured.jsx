import React from 'react'
import "./Featured.scss"
import { Container, Row, Col } from 'react-bootstrap';

const featured = () => {
  return (
    <div className='featured'>
 <Container>
      <Row>
        <Col>
          <div className="d-flex flex-column align-items-center left">
            <h1 className="text-center">Find the perfect <i>freelance</i>  services for your business</h1>
            <div className="d-flex align-items-center search">
              <div className="searchInput">
        <img src="./images/search.png" alt="" />
              <input type="text" className="form-control" placeholder='Try "building mobile app" ' />
              </div>
              <button className="btn btn ml-2">Search</button>
            </div>
            <div className="d-flex justify-content-between mt-2 popular">
               <span>Popular:</span>
              <button className="btn ">Web Design</button>
              <button className="btn ">Wordpres</button>
              <button className="btn ">Logo Design</button>
              <button className="btn">AI Services</button>
            </div>
          </div>
        </Col>
        <Col>
        <div className='right'>

          <img src="./images/man.png" className="img-fluid" alt="Responsive Image" />
        </div>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default featured
