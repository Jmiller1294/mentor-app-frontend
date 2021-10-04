import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setDate, setLocation, setTime } from '../../actions/eventActions';
import styled from 'styled-components';
import breakpoint from '../../commons/breakpoints';

const AccordionItem = styled.div`
  height: 230px;
  width: 100%;
  margin: 10px 0;

  @media only screen and (${breakpoint.device.tablet}){
   height: 150px;
  }
` 
const Header = styled.h2`
  display: inline;
  font-size: 25px;
  margin-right: auto;

  @media only screen and (${breakpoint.device.tablet}){
   font-size: 20px;
  }
`
const Expand = styled.span`
  float: right;
  font-size: 25px;

  @media only screen and (${breakpoint.device.tablet}){
   float: none;
  }
`
const Categories = styled.form`
  margin: 15px 0;
  
  @media only screen and (${breakpoint.device.tablet}){
    background-color: #f8f7f2;
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
    font-size: 10px;
  }
`
const Accordion = ({ title, names, onChildClick }) => {
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    switch(event.target.value) {
      case "Today" : 
      case "Tomorrow" :
      case "This Month" :
      case "Next Month" :
        dispatch(setDate(event.target.value));
        break;
      case "Morning" :
      case "Afternoon" : 
      case "Evening" :
        dispatch(setTime(event.target.value));
        break;
      case "New York" :
      case "Los Angeles" :
      case "Atlanta" :
      case "Chicago" :
        dispatch(setLocation(event.target.value));
        break;
      default:
        console.log(event.target.value);
        console.log("not found");
    }
  }

  const handleAccordion = () => {
    setIsActive(!isActive);
    onChildClick(isActive, title);
  }

  return (
    <AccordionItem>
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