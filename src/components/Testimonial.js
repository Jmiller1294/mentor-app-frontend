import React from "react";
import styled from "styled-components";
import breakpoint from "../commons/breakpoints";


const TestimonialItem = styled.li`
  height: auto;
  flex-basis: 32%;
  margin: 5px;
  padding: 55px;

  @media only screen and (${breakpoint.device.phone}){
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0;
    flex-basis: 100%;
  }

  @media only screen and (${breakpoint.device.tablet}){
    padding: 0;
    margin: 30px;
  }
`
const Avatar = styled.img`
  display: block;
  height: 100px;
  width: 100px;
  border-radius: 50px;
  margin-bottom: 20px;
`

const Testimonials = ({text, testimonial}) => {
  return(
    <TestimonialItem>
      <Avatar src={testimonial.avatar} alt="avatar4" />
      {text.text}
      <br></br>
      <br></br>
      - {testimonial.name}
    </TestimonialItem>
  )
}
export default Testimonials;