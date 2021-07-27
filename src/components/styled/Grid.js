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
  flex: ${ (props) => props.size};
  height: 100%;
`
