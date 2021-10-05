import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { Link as Scroll } from 'react-scroll';
import breakpoint from "../../commons/breakpoints";
import { useLocation as location } from 'react-router-dom'

export const Nav = styled.nav`
   
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background: #f8f7f2;
  height: 70px;
  padding: 0 25px;
  font-weight: bold;
  justify-content: space-around;
  align-items: center;

  
  @media only screen and (${breakpoint.device.phone}){
    font-size: 7px;
    padding: 0 5px;
  }

  @media only screen and (${breakpoint.device.phone}){
    padding: 5px;
    padding-right: 0;
  }
`
export const NavLink = styled(Link)`
  padding: 25px;
  color: #000000;
  text-decoration: none;

  @media only screen and (${breakpoint.device.phone}){
    padding: 5px;
  }

  @media only screen and (${breakpoint.device.tablet}){
    font-size: 12px;
    padding: 5px;
  }
`
export const ScrollLink = styled(Scroll)`
  padding: 25px;
  color: #000000;
  text-decoration: none;

  @media only screen and (${breakpoint.device.phone}){
    padding: 5px;
  }

  @media only screen and (${breakpoint.device.tablet}){
    padding: 5px;
    font-size: 12px;
  }
`
export const NavBtn = styled.nav`
  align-self: center;
  display: flex;
  height: 55%;
  width: 8%;
  margin-right: 24px;
  text-align: center;

  @media only screen and (${breakpoint.device.phone}){
    margin-right: 2px;
    height: 40%;
    width: 10%;
  }
`
export const NavBtnLink = styled(Link)`
  display: flex;
  border-radius: 10px;
  background: #FF9531;
  padding: 10px;
  flex-basis: 100%;
  font-weight: bold;
  color: black;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  justify-content: center;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #000000;
  }

  @media only screen and (${breakpoint.device.phone}){
    height: 60%;
    justify-content: center;
    font-size: 8px;
    padding: 8px 0;
    &:hover {
    background: orange;
    color: #000000
  }

  @media only screen and (${breakpoint.device.tablet}){
    height: 100%;
  }
`