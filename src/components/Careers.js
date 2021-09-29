import React from 'react';
import styled from 'styled-components';

const CareerCon = styled.div`
  flex-direction: column;
  margin: 20px;
  height: auto;
  width: 22%;
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
      {careers.map(career => 
        <Career><a href={career.url}>{career.name}</a></Career>
      )}
    </CareerCon>
  )
}
export default Careers;