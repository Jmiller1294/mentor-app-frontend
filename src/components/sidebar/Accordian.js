import React, { useState } from 'react';
import styled from 'styled-components';

const AccordianItem = styled.div`
  height: 33%;
  width: 100%;
` 
const Accordian = ({title, name}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <AccordianItem className="accordion-item">
        <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
          <h2>{title}</h2>
          <div>{isActive ? '-' : '+'}</div>
        </div>
        {isActive && <div className="accordion-content">
        <form>
          <input type="checkbox">{name}</input>
        </form>
      </div>}
    </AccordianItem>
  )
}
export default Accordian;