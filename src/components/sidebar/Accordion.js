import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDate, setLocation, setTime } from '../../actions/userActions';
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
  const dispatch = useDispatch();

  const handleClick = (event) => {
    if(event.target.value === "Today"
      || event.target.value === "Tomorrow" 
      || event.target.value === "This Month"
      || event.target.value === "Next Month") {
        dispatch(setDate(event.target.value))
    }
    if(event.target.value === "Morning"
      || event.target.value === "Afternoon" 
      || event.target.value === "Evening")  
    {
      dispatch(setTime(event.target.value));
    }
    if(event.target.value === "New York"
    || event.target.value === "Los Angeles" 
    || event.target.value === "Atlanta"
    || event.target.value === "Chicago") 
    {
      dispatch(setLocation(event.target.value));
    }  
  }

  const handleAccordion = (event) => {
    setIsActive(!isActive);
    onChildClick(isActive);
  }

  return (
    <AccordionItem >
          <h2 onClick={() => setIsActive(!isActive)} style={{display: 'inline', fontSize: '25px', marginRight: 'auto'}}>{title}</h2>
          <Expand onClick={(e) => handleAccordion(e)} style={{ }}>{isActive ? '-' : '+'}</Expand>
        {isActive && <div className="accordion-content">
        <Categories>
          {names.map((name, index) => 
            <div key={index}>
              <input onClick={(e) => handleClick(e)} type="radio" id="name" name="value" value={name} />
              <label htmlFor='name'>{name}</label>
            </div>
          )}
        </Categories>
      </div>}
    </AccordionItem>
  )
}
export default Accordion;