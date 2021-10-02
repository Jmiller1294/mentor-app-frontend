import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { Link as Scroll } from 'react-scroll';
import breakpoint from "../../commons/breakpoints";

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

  @media only screen and (${breakpoint.device.phone}){
    padding: 5px;
  }

  @media only screen and (${breakpoint.device.tablet}){
    padding: 5px;
  }
`
export const NavBtnLink = styled(Link)`
  border-radius: 10px;
  background: #FF9531;
  text-align: center;
  padding: 10px;
  flex-basis: 100%;
  font-weight: bold;
  color: black;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }

  @media only screen and (${breakpoint.device.phone}){
    padding: 5px;
    height: 60%;
    margin-top: 5px;
  }

  @media only screen and (${breakpoint.device.tablet}){
    height: 100%;
  }
`