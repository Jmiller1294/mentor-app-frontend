import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDate, setLocation, setTime } from '../../actions/userActions';
import styled from 'styled-components';

const AccordionItem = styled.div`
  height: 100%;
  flex-basis: 100%;
` 
const Header = styled.h2`
  display: inline;
  font-size: 25px;
  margin-right: auto;
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
  const date = useSelector(state => state.date);

  const handleClick = (event) => {
    console.log(event.target.value);
    switch(event.target.value) {
      case "Today" : 
      case "Tomorrow" :
      case "This Month" :
      case "Next Month" :
        dispatch(setDate(event.target.value))
        break;
      case "Morning" :
      case "Afternoon" : 
      case "Evening" :
        dispatch(setTime(event.target.value))
        break;
      case "New York" :
      case "Los Angeles" :
      case "Atlanta" :
      case "Chicago" :
        dispatch(setLocation(event.target.value))
        break;
      default:
        console.log("not found")
    }
  }

  const handleAccordion = () => {
    setIsActive(!isActive);
    onChildClick(isActive, title);
  }
  return (
    <AccordionItem >
      <Header onClick={() => setIsActive(!isActive)}>{title}</Header>
      <Expand 
        type={title} 
        onClick={() => handleAccordion()}>{isActive ? '-' : '+'}
      </Expand>
      {isActive &&
        <Categories>
          {names.map((name, index) => 
            <div key={index}>
              <input onClick={(e) => handleClick(e)} 
                type="radio" 
                id="name" 
                name="value" 
                value={name} 
              />
              <label htmlFor='name'>{name}</label>
            </div>
          )}
        </Categories>}
    </AccordionItem>
  )
}
export default Accordion;