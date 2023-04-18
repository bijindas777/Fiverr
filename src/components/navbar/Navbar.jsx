import React, { useEffect } from 'react'
import "./Navbar.scss"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import { Link ,useLocation} from "react-router-dom"


const navbar = () => {
    const [active,setActive] = useState(false);
    const [open,setOpen] = useState(false);

    const {pathname} = useLocation()


    const isActive = ()=>{
      window.scrolly > 0 ? setActive(true):setActive(false)
    };

    useEffect(()=>{
      window.addEventListener("scroll", isActive );

      return ()=>{
        window.removeEventListener("scroll",isActive)
      };
    },[]);

    const currentUser={
      id:1,
      username:"john",
      isSeller:true
    }

  return (
    <Navbar  className={active || pathname !=="/" ? "navbar active" : "navbar"}  expand="lg">
      <Container >
        <Navbar.Brand >
          <Link to="/" className='link'>
           <span className='text' href="#">fiverr </span>
          </Link>
            <span className='dot'>.</span>
            </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="  ml-auto my-2 my-lg-0 links"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Fiverr Busuness</Nav.Link>
            <Nav.Link href="#action2">Explore</Nav.Link>
            <Nav.Link href="#action2">English</Nav.Link>
            <Nav.Link href="#action2">Sign in</Nav.Link>
           {!currentUser?.isSeller && <Nav.Link href="#action2">Become a Seller</Nav.Link>   } 
            {!currentUser &&<Button>Join</Button>}
            {currentUser && (
              <div className='user' onClick={()=>setOpen(!open)}>
                <img src="" alt="" />
                <span>{currentUser?.username}</span>

              { open && <div className='options'>
              {currentUser ?.isSeller && (
                <>
                <Link className='link' to="/mygigs">Gigs</Link>
                <Link className='link' to="/add">Add New Gig</Link>

                </>
              )}
                <Link className='link'  to="/orders">Orders</Link>
                <Link className='link' to="/messages">Messages</Link>
                <Link className='link' >Logout</Link>
                </div>}
              </div>
            ) }
          </Nav>
        </Navbar.Collapse>
      </Container>
      {(active || pathname !=="/") && (
        <>
        <hr />
        <div className="menu ">
          <Link className='link ' to="/">
            Graphics & Design
          </Link>
          <Link className='link ' to="/">
           Video & Animation
          </Link>
          <Link className='link ' to="/">
            Writing & Translation
          </Link>
          <Link className='link ' to="/">
            AI Services
          </Link>
          <Link className='link ' to="/">
            Digital Marketing
          </Link>
          <Link className='link ' to="/">
            Music & Audio
          </Link>
          <Link className='link ' to="/">
            Programming & Tech
          </Link>
          <Link className='link ' to="/">
            Business
          </Link>
          <Link className='link ' to="/">
            Lifestyle
          </Link>
        </div>
        </>
      )}
    </Navbar>
  )
}

export default navbar
