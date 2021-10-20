import React from 'react';
import './Profile.css';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Profile = (props) => {
    return (
        <div className="profileInfo">
             <div className="container">
                 <div className="row">
                     <div className="col-lg-12 col-md-12 col-sm-12">
                          <div className="profileCard">
                              <div className="row">
                                  <div className="col-lg-3 col-md-4 col-sm-12">
                                  <Navbar expand="lg">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto navMenus">
        <NavLink className="profileLink" to="" activeClassName="selected">Profile</NavLink>
        <NavLink className="profileLink" to="" activeClassName="selected">Courses</NavLink>
        <NavLink className="profileLink" to="" activeClassName="selected">Setting</NavLink>
      </Nav>
    </Navbar.Collapse>
   </Navbar>
                                  </div>
                                  <div className="col-lg-9 col-md-8 col-sm-12 information">
                                      <h2 className="userName"> Name : {props.name} </h2>
                                      <h2 className="userName"> Email : {props.email} </h2>
                                      <button className="buttonBtn" onClick={props.handleSignOut}>Logout</button>
                                  </div>
                              </div>
                          </div>
                     </div>
                 </div>
             </div>
        </div>
    );
};

export default Profile;