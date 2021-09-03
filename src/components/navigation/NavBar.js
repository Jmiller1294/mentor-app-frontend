import React from 'react';
import { logout } from '../../actions/userActions';
import { useSelector, useDispatch } from 'react-redux';
import { Nav, NavLink, NavBtn, NavBtnLink, ScrollLink } from '../styled/NavBarElements';


const NavBar = () => {

  const loggedIn = useSelector(state => state.loggedIn);
  const dispatch = useDispatch();

  const handleLogout = (event) => {
    dispatch(logout());
  }
  return(
    <>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/mentors">Mentors</NavLink>
        <NavLink to="/events">Events</NavLink>
        <NavLink to="/about">About</NavLink>
        <ScrollLink to="contact-form" spy={true} smooth={true} offset={50} duration={500}>Contact</ScrollLink>
        {!loggedIn ? <NavLink to="/registration">Signup</NavLink> : null}
        {loggedIn ? <NavLink to="/accounts">Account</NavLink> : null}
        <NavBtn>
          {loggedIn ? 
          <NavBtnLink 
            to="/" 
            onClick={() => handleLogout()}>
            Logout
          </NavBtnLink> 
          : <NavBtnLink 
              to="/login">
              Login
            </NavBtnLink>}
        </NavBtn>
      </Nav>
    </>
  )
}
export default NavBar;