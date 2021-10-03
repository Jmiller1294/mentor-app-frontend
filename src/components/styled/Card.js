import styled from "styled-components";
import breakpoint from "../../commons/breakpoints";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: ${ (props) => props.height};
  padding: ${ (props) => props.padding};;   
  width: 25%;
  min-width: 300px;
  max-width: 400px;
  margin: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  
  &:hover {
    -moz-box-shadow: 0 0 10px #777777;
    -webkit-box-shadow: 0 0 10px #777777;
    box-shadow: 0 0 10px #777777;
  }

  @media only screen and (${breakpoint.device.laptop}){
    width: 300px;
  } 
`