import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Nav = styled.nav`
  background: blue;
  height: 85px;
  display: flex;
  justify-content: space-between;
`

export const NavLink = styled(Link)`
  color: black;
  display: flex;
  text-decoration: none;
`