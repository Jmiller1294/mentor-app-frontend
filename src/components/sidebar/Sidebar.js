import React from 'react';
import styled from 'styled-components';
import Accordian from './Accordian';

const AccordianContainer = styled.div`
  height: auto;
  width: 100%;
  background-color: orange;
  padding: 20px;
` 

const Sidebar = () => {
  const data = [
    {
      title: "Date",
      names: [ "August - October","November - January"]
    },
    {
      title: "Time",
      names: [ "7am - 11pm","12pm - 4pm", "5pm - 9pm"]
    },
    {
      title: "Location",
      names: [ "New York","Los Angeles", "Atlanta", "Chicago"]
    }
    
  ]
  return(
    <>
      <AccordianContainer className="accordion">
        {data.map(({ index, title, names }) => (
          <Accordian key={index} title={title} names={names} />
        ))}
      </AccordianContainer>
    </>
  )
}
export default Sidebar;