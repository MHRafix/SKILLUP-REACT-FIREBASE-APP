import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useCart from '../../CustomHooks/useCart';
import useService from '../../CustomHooks/useService';
import './Header.css';

// Header is starts from here
const Header = () => {
  const [courses] = useService();
  const [cartAddmission] = useCart(courses);
    return (
    <section>
     <div className="headerWrapper">
     <Navbar expand="lg" sticky="top">
    <Navbar.Brand className="siteLogo"><span className="logo">Skill<span className="fas fa-meteor"></span>Up</span></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto navBars">
        <NavLink className="routingLink" to="/home" activeClassName="selected">Home</NavLink>
        <NavLink className="routingLink" to="/services" activeClassName="selected">Services</NavLink>
        <NavLink className="routingLink" to="/about" activeClassName="selected">About Us</NavLink>
        <NavLink className="routingLink" to="/instructors" activeClassName="selected">Instructors</NavLink>
      </Nav>
      <div className="searchForm">
      {/* <span className="searchIcon fas fa-search"></span><input className="searchField" type="search" placeholder="Search something..."/> */}
      <NavLink className="routingLink" to="/account"><i class="fas fa-user-circle account"></i></NavLink>
      <NavLink className="routingLink" to="/cart"><i class="fas fa-shopping-cart cartIcon"></i></NavLink>
      <span className="cartItemCount">{cartAddmission.length}</span>
      <button className="buttonBtn mx-4">Contact Now</button>
      </div>
    </Navbar.Collapse>
   </Navbar>
 </div>
</section>
    
    );
};

export default Header;