import React from 'react';
import styled from 'styled-components';

const EventCon = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;   
  width: 20%;
  margin: 10px;
  padding: 5px;
  box-shadow: 0 4px 8px 0 grey, 0 6px 20px 0 grey;
  
  &:hover {
    -moz-box-shadow: 0 0 10px #777777;
    -webkit-box-shadow: 0 0 10px #777777;
    box-shadow: 0 0 10px #777777;
  }
`
const Header = styled.h2`
  height: 10px;
  align-self: center;
`
const Info = styled.p`
  align-self: center;
`


const EventCard = ({ event }) => {
  return (
    <EventCon>
      <Header>{event.title} </Header>
      <Info>
        <span style={{color: 'orange'}}><br></br>
          {event.date} at {event.time}<br></br>
        </span>
        <span>Location: {event.location}</span><br></br>
        <span>Description: {event.description}</span><br></br>
      </Info>
    </EventCon>
  )
}
export default EventCard;