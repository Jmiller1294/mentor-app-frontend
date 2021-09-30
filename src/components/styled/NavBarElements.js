import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { Link as Scroll } from 'react-scroll';

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background: #f8f7f2;
  height: 70px;
  padding: 0 25px;
  font-weight: bold;
  justify-content: space-around;
`
export const NavLink = styled(Link)`
  padding: 25px;
  color: #000000;
  text-decoration: none;
`
export const ScrollLink = styled(Scroll)`
  padding: 25px;
  color: #000000;
  text-decoration: none;
`
export const NavBtn = styled.nav`
  align-self: center;
  display: flex;
  height: 55%;
  width: 8%;
  margin-right: 24px;
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
`