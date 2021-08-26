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
  const [fall, setFall] = useState(false);
  const [winter, setWinter] = useState(false);
  const [spring, setSpring] = useState(false);
  const [summer, setSummer] = useState(false);
  const [morning, setMorning] = useState(false);
  const [afternoon, setAfternoon] = useState(false);
  const [evening, setEvening] = useState(false);
  const [newYork, setNewYork] = useState(false);
  const [losAngeles, setLosAngeles] = useState(false);
  const [atlanta, setAtlanta] = useState(false);
  const [chicago, setChicago] = useState(false);

  const handleChange = (event) => {
    console.log('changed');
    onChildClick(event.target.value);
  }

  return (
    <AccordionItem >
          <h2 onClick={() => setIsActive(!isActive)} style={{display: 'inline', fontSize: '25px', marginRight: 'auto'}}>{title}</h2>
          <Expand onClick={() => setIsActive(!isActive)} style={{ }}>{isActive ? '-' : '+'}</Expand>
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