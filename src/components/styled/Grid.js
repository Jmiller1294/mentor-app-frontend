import styled from "styled-components";

export const Grid = styled.div`
`
export const Row = styled.div`
  display: flex;
  height: ${ (props) => props.height};
  background: ${ (props) => props.background};
  padding: ${ (props => props.padding)};
`

export const Col = styled.div`
  display: flex;
  justify-content: ${ (props) => props.justify};
  flex-direction: ${ (props) => props.direction};
  flex-wrap: ${ (props) => props.wrap};
  flex: ${ (props) => props.size};
  align-items: ${ (props) => props.align};
  height: 100%;
`
