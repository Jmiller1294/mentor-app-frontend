import React from 'react';
import styled from 'styled-components';
import breakpoint from '../commons/breakpoints';

const CareerCon = styled.div`
  flex-direction: column;
  margin: 20px;
  height: auto;
  width: 22%;

  @media only screen and (${breakpoint.device.tablet}){
   width: 90%;
  }
`
const Header = styled.h3`
  text-decoration: underline;
`
const Career = styled.div`
  height: auto;
  width: 100%;
  margin: 5px;
`

const Careers = ({ title, careers }) => {
  return (
    <CareerCon>
      <Header>{title}</Header>
      {careers.map((career, index) => 
        <Career key={index}>
          <a 
            href={career.url} 
            target="_blank" 
            rel="noreferrer"
          >{career.name}</a>
        </Career>
      )}
    </CareerCon>
  )
}
export default Careers;