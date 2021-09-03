import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { Link as Scroll } from 'react-scroll';

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  background: #f8f7f2;
  height: 70px;
  padding: 25px;
  font-weight: bold;
  justify-content: space-around;
`
export const NavLink = styled(Link)`
  color: #005776;
  text-decoration: none;
`

export const ScrollLink = styled(Scroll)`
  color: #005776;
  text-decoration: none;
`
export const NavBtn = styled.nav`
  align-items: center;
  margin-right: 24px;
`
export const NavBtnLink = styled(Link)`
  border-radius: 10px;
  background: #808080;
  padding: 5px;
  height: 30px;
  text-align: center;
  width: 100px;
  font-weight: bold;
  color: #005776;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 50px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`