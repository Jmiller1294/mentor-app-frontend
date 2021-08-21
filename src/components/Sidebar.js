import React, { useState } from 'react';
import styled from 'styled-components';

const AccordianContainer = styled.div`
  height: auto;
  width: 100%;
  background-color: red;
` 
const AccordianItem = styled.div`
  height: 33%;
  width: 100%;
` 


const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);

  return(
    <>
      <AccordianContainer className="accordion">
        <AccordianItem className="accordion-item">
          <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
            <h2>Dates</h2>
            <div>{isActive ? '-' : '+'}</div>
          </div>
          <div className="accordion-content">
            <form>
              <input type="checkbox"></input>
            </form>
          </div>
        </AccordianItem>
        <AccordianItem className="accordion-item">
          <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
            <h2>Location</h2>
            <div>{isActive ? '-' : '+'}</div>
          </div>
          <div className="accordion-content">
            <form>
              <input type="checkbox"></input>
            </form>
          </div>
        </AccordianItem>
        <AccordianItem className="accordion-item">
          <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
            <h2>Time</h2>
            <div>{isActive ? '-' : '+'}</div>
          </div>
          <div className="accordion-content">
            <form>
              <input type="checkbox"></input>
            </form>
          </div>
        </AccordianItem>
      </AccordianContainer>
    </>
  )
}
export default Sidebar;