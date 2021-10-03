import React from 'react';
import styled from 'styled-components';
import Accordion from './Accordion';
import breakpoint from '../../commons/breakpoints';

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


  @media only screen and (${breakpoint.device.tablet}){
    margin: 10px;
    flex-direction: row;
    justify-content: space-between;
  }
`

const Sidebar = ({ onChildClick }) => {
  
  return(
    <>
      <AccordionContainer className="accordion">
        {data.map(({ title, names}, index) => (
          <Accordion 
            key={index} 
            title={title} 
            names={names} 
            onChildClick={(active, data) => 
              onChildClick(active, data)} 
          />
        ))}
      </AccordionContainer>
    </>
  )
}
export default Sidebar;