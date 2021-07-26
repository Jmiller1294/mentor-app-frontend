import React from 'react';
import { Nav, NavLink, NavBtn, NavBtnLink } from './styled/NavBarElements';

 
const NavBar = () => {
  return(
    <>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/mentors">Mentors</NavLink>
        <NavLink to="/events">Events</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/registration">Signup</NavLink>
        <NavLink to="/accounts">Account</NavLink>
        <NavBtn>
          <NavBtnLink to="/login">Login</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  )
}
export default NavBar;