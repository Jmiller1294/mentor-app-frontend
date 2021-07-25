import React from 'react';
import { Nav, NavLink } from './styled/NavBarElements';

 
const NavBar = () => {
  return(
    <>
      <Nav>
        <NavLink to="/mentors">Login</NavLink>
        <NavLink to="/events">Events</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/registration">Signup</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/accounts">Account</NavLink>
      </Nav>
    </>
  )
}
export default NavBar;