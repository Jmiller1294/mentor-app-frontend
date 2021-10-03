import React from 'react';
import styled from 'styled-components';
import Careers from '../components/Careers';
import { fields } from '../data/fields';
import breakpoint from '../commons/breakpoints';

const CareersCon = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  height: auto;
  padding: 50px 200px;
  padding-top: 0;

  @media only screen and (${breakpoint.device.tablet}){
    flex-direction: column;
    padding: 0;
  }
`
const Header = styled.h1`
  font-size: 40px;
  text-decoration: underline;
  text-align: center;
  margin: 100px;

  @media only screen and (${breakpoint.device.tablet}){
    margin: 50px;
    margin-top: 80px;
  } 
`

const CareersPage = () => {
  return(
    <>
      <Header>Careers</Header>
      <CareersCon>
        {fields.map( field => 
          <Careers title={field.title} careers={field.jobs}/>
        )}
      </CareersCon>
    </>
  )
}
export default CareersPage;