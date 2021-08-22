import React, { useState } from 'react';
import styled from 'styled-components';

const AccordionItem = styled.div`
  height: 33%;
  width: 100%;
` 
const Accordion = ({title, names}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <AccordionItem>
        <div onClick={() => setIsActive(!isActive)}>
          <h2 style={{display: 'inline', fontSize: '25px', marginRight: '50px'}}>{title}</h2>
          <span style={{ fontSize: '25px', justifyContent: 'flex-end'}}>{isActive ? '-' : '+'}</span>
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
    </AccordionItem>
  )
}
export default Accordion;