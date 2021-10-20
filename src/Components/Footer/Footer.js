import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Footer.css';

// Footer is starts from here  
const Footer = () => {
    return (
          <footer>
              <div className="footerWrapper">
                  <div className="row">
                      <div className="col-lg-3 col-md-3 col-sm-12">
                      <Navbar.Brand className="siteLogo"><span className="logo">Skill<span className="fas fa-meteor"></span>Up</span></Navbar.Brand>
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic fugit, accusantium ab perferendis veritatis autem eveniet fuga iure at quae.</p>
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-12">
                            <Nav className="me-auto navBars">
                             <NavLink className="routingLink" to="/home">Home</NavLink>
                             <NavLink className="routingLink" to="/services">Services</NavLink>
                             <NavLink className="routingLink" to="/about">About Us</NavLink>
                             <NavLink className="routingLink" to="/instructors">Instructors</NavLink>
                           </Nav>
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-12">
                            <p> Location : Mirpur - 10, Dhaka </p>
                            <p> Email :  webdevrafix@gmail.com</p>
                            <p> Phone :  01611859722</p>
                            <p> Website :  <a href="https://rafix.netlify.app">https://rafix.neltify.app</a>    </p>
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-12 text-center">
                          <img src="https://png.pngitem.com/pimgs/s/25-255247_google-play-app-store-android-google-logo-hd.png" alt="playstore" width="200" /> <br />
                          <img src="https://1000logos.net/wp-content/uploads/2020/08/apple-app-store-logo.jpg" alt="appstore" width="200" />
                      </div>
                  </div>
              </div>
          </footer>
    );
};

export default Footer;