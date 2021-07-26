import styled from "styled-components";

export const Grid = styled.div`
  margin: 10px;
`
export const Row = styled.div`
  display: flex;
`

export const Col = styled.div`
  flex: ${ (props) => props.size};
  height: 100%;
  padding: 10px;
`
