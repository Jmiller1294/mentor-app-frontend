import React, { useState } from 'react';
import styled from 'styled-components';

const AccordianItem = styled.div`
  height: 33%;
  width: 100%;
` 
const Accordian = ({title, names}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <AccordianItem className="accordion-item">
        <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
          <h2>{title}</h2>
          <span>{isActive ? '-' : '+'}</span>
        </div>
        {isActive && <div className="accordion-content">
        <form>
          {names.map((name, index) => 
            <div key={index}>
              <label htmlFor="name">{name}</label> 
              <input id="name" type="checkbox"/>
            </div>
          )}
        </form>
      </div>}
    </AccordianItem>
  )
}
export default Accordian;