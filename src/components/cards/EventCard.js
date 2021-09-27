import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Card } from '../styled/Card';

const Header = styled.h3`
  height: 10px;
  align-self: center;
  margin-bottom: 0;
`
const Info = styled.p`
  padding: 20px;
  height: 55%;
  line-height: 1.5;
  align-self: center;
  margin: 0;
`
const EventImage = styled.img`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 40%;
`

const EventCard = ({ event }) => {
  const [image, setImage] = useState(null);

  const getImage = () => {
    fetch(`http://localhost:3001/events/${event.id}`)
    .then(resp => resp.json())
    .then(data => setImage(data.image))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getImage()
  }, [])

  return (
    <Card height={'350px'} padding={'0'}>
      <EventImage src={`http://localhost:3001/${image}`} />
      <Header>{event.name} </Header>
      <Info>
        <span style={{color: 'orange'}}><br></br>
          {event.date} at {event.time}<br></br>
        </span>
        <span>Location: {event.location}</span><br></br>
        <span>Description: {event.description}</span><br></br>
      </Info>
    </Card>
  )
}
export default EventCard;