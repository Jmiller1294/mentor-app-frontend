import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const AddButton = styled.button`
  background-color: orange;
  height: 40px;
  width: 100px;
  border-radius: 25px;
  align-self: flex-end;
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

  const handleClick = () => {
    createAttendance(event, user.id);
  }

  return(
    <>
      <h3>{event.name}</h3>
      <span style={{color: 'orange'}}>
        {event.date} at {event.time}
      </span>
      <span></span>
      <span>Location: {event.location}</span>
      <span>Description: {event.description}</span>
      <span>{event.likes} Likes</span>
      {user ? <AddButton onClick={() => handleClick()}>Add Event</AddButton> : null}
    </>
  )
}
export default Event;