import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import HeartIcon from '../assets/unfilled-heart.svg';

const AddButton = styled.button`
  background-color: orange;
  height: 40px;
  width: 100px;
  border-radius: 25px;
  margin-left: auto;
  margin-top: auto;
`
const LikeButton = styled.button`
  background: url(${HeartIcon}) no-repeat left;
  height: 40px;
  width: 100px;
  border: none;
`
const EventsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 220px;
  width: 80%;
  padding: 15px 15px 10px 15px;
  box-shadow: 5px 10px 18px #888888;
  margin: 5px;
`
const ButtonCont = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: auto;
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
    <EventsContainer>
      <h3>{event.name}</h3>
      <span style={{color: 'orange'}}>
        {event.date} at {event.time}
      </span>
      <span></span>
      <span>Location: {event.location}</span>
      <span>Description: {event.description}</span>
      <span>{event.likes} Likes</span>
      <ButtonCont>
        {user ? <LikeButton onClick></LikeButton> : null}
        {user ? <AddButton onClick={() => handleClick()}>Add Event</AddButton> : null}
      </ButtonCont>
    </EventsContainer>
  )
}
export default Event;