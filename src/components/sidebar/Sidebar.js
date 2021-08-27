import React, { useState } from 'react';
import styled from 'styled-components';
import Accordion from './Accordion';

const data = [
  {
    title: "Date",
    names: [ "Today" ,"Tomorrow" ,"This Month", "Next Month" ]
  },
  {
    title: "Time",
    names: [ "Morning","Afternoon", "Evening" ]
  },
  {
    title: "Location",
    names: [ "New York","Los Angeles", "Atlanta", "Chicago"]
  }
]

const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 17%;
  width: 100%;
` 
const Sidebar = ({ onChildClick }) => {
  
  return(
    <>
      <AccordionContainer className="accordion">
        {data.map(({ title, names}, index) => (
          <Accordion key={index} title={title} names={names} onChildClick={(isActive, data) => onChildClick(isActive, data)} />
        ))}
      </AccordionContainer>
    </>
  )
}
export default Sidebar;