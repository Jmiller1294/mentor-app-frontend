import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Nav = styled.nav`
  height: 70px;
  padding: 25px;
  display: flex;
  font-weight: bold;
  justify-content: center;
`

export const NavLink = styled(Link)`
  margin: 0 50px 0 50px;
  color: #005776;
  display: flex;
  text-decoration: none;
`
export const NavBtn = styled.nav`
  display: flex;
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