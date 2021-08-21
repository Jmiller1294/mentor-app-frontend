import React from 'react';
import styled from 'styled-components';

const AddButton = styled.button`
  color: blue;
  height: 30px;
  width: 25px;
`


const Event = ({ event }) => {

  const handleClick = (event) => {
    event.preventDefault();
    console.log('clicked');
  }

  return(
    <div>
      <h3>{event.name}</h3><br></br>
      {event.date}<br></br>
      {event.time}<br></br>
      {event.location}<br></br>
      {event.description}<br></br>
      {event.likes} likes<br></br>
      <AddButton onClick={(e) => handleClick(e)}>Add Event</AddButton>
    </div>
  )
}
export default Event;