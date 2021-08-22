import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import styled from 'styled-components';
import { createAttendance } from '../actions/userActions';

const AddButton = styled.button`
  background-color: orange;
  height: 40px;
  width: 65px;
`


const Event = ({ event }) => {
  const user = useSelector(state => state.currentUser);

  const createAttendance = (event, userId) => {
    fetch(`http://localhost:3001/users/${userId}/attendances`, {
        method: "POST",
        credentials: "include",
        headers: { 
          "Content-type": "application/json",
        },
        body: JSON.stringify(event)
      })
      .then(resp => resp.json())
      .then(event => console.log(event))
    }

  const handleClick = (evt) => {
    evt.preventDefault();
    createAttendance(event, user.id);
  }

  return(
    <div>
      <h3>{event.name}</h3><br></br>
      {event.date}<br></br>
      {event.time}<br></br>
      {event.location}<br></br>
      {event.description}<br></br>
      {event.likes} likes<br></br>
      {user ? <AddButton onClick={(e) => handleClick(e)}>Add Event</AddButton> : null}
    </div>
  )
}
export default Event;