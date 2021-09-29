import React from 'react';
import styled from 'styled-components';

const CareerCon = styled.div`
  flex-direction: column;
  margin: 20px;
  height: 250px;
  width: 22%;
`
const Header = styled.h3`
  text-decoration: underline;
`

const Careers = ({ title, careers }) => {
  return (
    <CareerCon>
      <Header>{title}</Header>
      {careers.map(career => 
        career.name
      )}
    </CareerCon>
  )
}
export default Careers;