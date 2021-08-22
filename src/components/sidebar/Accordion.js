import React, { useState } from 'react';
import styled from 'styled-components';

const AccordionItem = styled.div`
  height: 100%;
  flex-basis: 100%;
` 
const Expand = styled.span`
  float: right;
  font-size: 25px;
`
const Categories = styled.form`
  margin: 15px 0;
`
const Accordion = ({title, names}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <AccordionItem onClick={() => setIsActive(!isActive)}>
          <h2 style={{display: 'inline', fontSize: '25px', marginRight: 'auto'}}>{title}</h2>
          <Expand style={{ }}>{isActive ? '-' : '+'}</Expand>
        {isActive && <div className="accordion-content">
        <Categories>
          {names.map((name, index) => 
            <div key={index}>
              <label htmlFor="name">{name}</label> 
              <input id="name" type="checkbox"/>
            </div>
          )}
        </Categories>
      </div>}
    </AccordionItem>
  )
}
export default Accordion;