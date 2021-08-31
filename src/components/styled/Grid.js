import styled from "styled-components";

export const Grid = styled.div`
  margin: ${ (props) => props.margin};
`
export const Row = styled.div`
  display: flex;
  height: ${ (props) => props.height};
  background: ${ (props) => props.background};
`

export const Col = styled.div`
  flex: ${ (props) => props.size};
`
