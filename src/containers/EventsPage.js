import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Event from '../components/event';
import EventSearchBar from '../components/EventsSearchBar';
import {Grid, Row, Col }from '../components/styled/Grid';

const EventList = styled.ul`
  list-style: none;
  margin-bottom: 30px;
  padding: 0;
`
const EventItem = styled.li`
  height: 170px;
  width: 650px;
  box-shadow: 5px 10px 18px #888888;
`

const EventsPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/events')
    .then(resp => resp.json())
    .then(data => setEvents(data))
    .catch((error) => console.error('Error:', error))
  }, [])

  return (
    <Grid>
      <Row>
        <Col size={1} direction={'column'}>
          <h2>Filters</h2>
        </Col>
        <Col size={3} direction={'column'}>
          <EventSearchBar />
          <EventList>
            {events.map(event => 
              <EventItem key={event.id}>
                <Event event={event}></Event>
              </EventItem>
            )}
          </EventList>
        </Col>
        <Col size={1}>
          3
        </Col>
      </Row>
    </Grid>
  )
}
export default EventsPage;