import React from 'react'
import "./Home.scss"
import Featured from '../../components/featured/Featured';
import TrustedBy from '../../components/trustedBy/TrustedBy';
import Slide from '../../components/slide/Slide';
import CatCard from '../../components/catCard/CatCard';
import { cards, projects } from '../../data';
import { Container, Row, Col,  Image } from 'react-bootstrap';
import ProjectCard from '../../components/projectCard/ProjectCard';

const Home = () => {
  return (
    <div className='home'>

      <Featured />
      <TrustedBy/>
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map(card =>(
          <CatCard key={card.id} item={card} />
        ))}
        </Slide>
        <div className="features">

        <Container fluid className='container'>
      <Row>
        <Col xs={12} md={6}>
          <h1>The best part? Everything.</h1>
          <Row className='mt-1' style={{display:"flex",flexDirection:"column",justifyContent:"center", alignItems:"center",columnGap:"5px"}}>
            <Col xs={12} sm={6} lg={12}>
              <div  style={{display: "flex", alignItems: "center"}}>
                <Image src="./images/check.png" alt="Image 1" fluid />
                <div className='mt-5' style={{paddingLeft: "10px"}}>
                  <h4>Stick to your budget</h4>
                  <p>Find the right service for every price point. No hourly rates, just project-based pricing.</p>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={6} lg={12}>
              <div style={{display: "flex", alignItems: "center"}}>
                <Image src="./images/check.png" alt="Image 2" fluid  />
                <div className='mt-5' style={{paddingLeft: "10px"}}>
                  <h4>Get quality work done quickly</h4>
                  <p>Hand your project over to a talented freelancer in minutes, get long-lasting results.</p>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={6} lg={12}>
              <div style={{display: "flex", alignItems: "center"}}>
                <Image src="./images/check.png" alt="Image 3" fluid  />
                <div className='mt-5' style={{paddingLeft: "10px"}}>
                  <h4>Pay when you are happy</h4>
                  <p>Upfront quotes mean no surprises. Payments only get released when you approve.</p>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={6} lg={12}>
              <div style={{display: "flex", alignItems: "center"}}>
                <Image src="./images/check.png" alt="Image 4" fluid   />
                <div className='mt-5' style={{paddingLeft: "2px"}}>
                  <h4>Count on 24/7 support</h4>
                  <p>Our round-the-clock support team is available to help anytime, anywhere.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={6} style={{display: "flex",justifyContent:"center", alignItems: "center",paddingLeft: "60px"}}>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item " style={{width:"600px",height:"400px"}} src="https://www.youtube.com/embed/dQw4w9WgXcQ" allowFullScreen />
          </div>
        </Col>
      </Row>
    </Container>
        </div>

        <div className="explore">
        <div className="container">
          <h1>Explore the marketplace</h1>
          <div className="items">
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Graphics & Design</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg"
                alt=""
              />
              <div className="line"></div>

              <span>Digital Marketing</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Writing & Translation</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Video & Animation</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Music & Audio</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Programming & Tech</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Business</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Lifestyle</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Data</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/photography.01cf943.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Photography</span>
            </div>
          </div>
        </div>
      </div>

        <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>
              liverr <i>business</i>
            </h1>
            <h1>
              A business solution designed for <i>teams</i>
            </h1>
            <p>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses
            </p>
            <div className="title">
              <img src="./images/check.png" alt="" />
              Connect to freelancers with proven business experience
            </div>

            <div className="title">
              <img src="./images/check.png" alt="" />
              Get matched with the perfect talent by a customer success manager
            </div>

            <div className="title">
              <img src="./images/check.png" alt="" />
              Manage teamwork and boost productivity with one powerful workspace
            </div>
            <button>Explore Liverr Business</button>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((card) => (
          <ProjectCard key={card.id} card={card} />
        ))}
      </Slide>

    </div>
  )
}

export default Home
