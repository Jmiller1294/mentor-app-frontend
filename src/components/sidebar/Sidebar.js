import React, { useState } from 'react';
import styled from 'styled-components';
import Accordian from './Accordian';

const AccordianContainer = styled.div`
  height: auto;
  width: 100%;
  background-color: red;
` 

const Sidebar = () => {
  
  return(
    <>
      <AccordianContainer className="accordion">
        
        <Accordian title={title} content={content} />
      </AccordianContainer>
    </>
  )
}
export default Sidebar;