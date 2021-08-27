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
const Accordion = ({title, names, onChildClick }) => {
  const [isActive, setIsActive] = useState(false);

  const handleChange = (event) => {
    onChildClick(event.target.value);
  }

  const handleClick = (event) => {
    setIsActive(!isActive);
    onChildClick(isActive);
  }

  return (
    <AccordionItem >
          <h2 onClick={() => setIsActive(!isActive)} style={{display: 'inline', fontSize: '25px', marginRight: 'auto'}}>{title}</h2>
          <Expand onClick={(e) => handleClick(e)} style={{ }}>{isActive ? '-' : '+'}</Expand>
        {isActive && <div className="accordion-content">
        <Categories>
          {names.map((name, index) => 
            <div key={index}>
              <input onChange={(e) => handleChange(e)} type="radio" id="name" name="value" value={name} />
              <label htmlFor='name'>{name}</label>
            </div>
          )}
        </Categories>
      </div>}
    </AccordionItem>
  )
}
export default Accordion;