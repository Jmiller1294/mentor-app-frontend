import React from 'react';
import styled from 'styled-components';
import Accordion from './Accordion';

const data = [
  {
    title: "Date",
    names: [ "August - October","November - January", "Feburary - April", "May - July" ]
  },
  {
    title: "Time",
    names: [ "7am - 11pm","12pm - 4pm", "5pm - 9pm", "10pm - 1am"]
  },
  {
    title: "Location",
    names: [ "New York","Los Angeles", "Atlanta", "Chicago"]
  }
]

const AccordionContainer = styled.div`
  height: auto;
  width: 100%;
  padding: 20px;
` 
const Sidebar = () => {
  
  return(
    <>
      <AccordionContainer className="accordion">
        {data.map(({ title, names}, index) => (
          <Accordion key={index} title={title} names={names} />
        ))}
      </AccordionContainer>
    </>
  )
}
export default Sidebar;