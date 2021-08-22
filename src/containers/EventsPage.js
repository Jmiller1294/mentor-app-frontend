import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Event from '../components/event';
import EventSearchBar from '../components/EventsSearchBar';
import Sidebar from '../components/sidebar/Sidebar';
import { Grid, Row, Col }from '../components/styled/Grid';

const EventList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  margin-bottom: 30px;
  padding: 0;
`
const EventItem = styled.li`
  display: flex;
  flex-direction: column;
  height: 200px;
  width: 80%;
  padding: 15px;
  box-shadow: 5px 10px 18px #888888;
  margin: 5px;
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
        <Col size={1}>
          <h2 style={{borderBottom: 'black 2px solid', paddingBottom: '10px'}}>Filters</h2>
          <Sidebar />
        </Col>
        <Col size={3} direction={'column'} justify={'center'}>
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
          
        </Col>
      </Row>
    </Grid>
  )
}
export default EventsPage;