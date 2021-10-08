import React from 'react';
import { logout } from '../../actions/userActions';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import { Nav, NavLink, NavBtn, NavBtnLink, ScrollLink } from '../styled/NavBarElements';


const NavBar = (props) => {
  const loggedIn = useSelector(state => state.loggedIn);
  const user = useSelector(state => state.currentUser);
  const dispatch = useDispatch();
  const location = useLocation();

  const handleLogout = (event) => {
    dispatch(logout());
  }
  return(
    <>
      <Nav {...props}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/mentors">Mentors</NavLink>
        <NavLink to="/events">Events</NavLink>
        <NavLink to="/careers">Careers</NavLink>
        {location.pathname === '/' ?
          <ScrollLink 
            to="contact-form" 
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={500} 
            style={{cursor: 'pointer'}}
          >Contact</ScrollLink>
          : null
        }
        <NavLink to="/about">About</NavLink>
        {!loggedIn ? <NavLink to="/signup">Signup</NavLink> : null}
        {loggedIn ? <NavLink to={`/accounts/${user.user.id}`}>Account</NavLink> : null}
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