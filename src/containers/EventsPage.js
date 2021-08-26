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
const SidebarContainer = styled.div`
  display: flex;
  position: fixed;
  height: 900px;
  width: 20%;
  flex-direction: column;
  background-color: gray;
  padding: 15px;
`
const SidebarHeader = styled.h2`
  margin-top: 20px; 
  border-bottom: black 2px solid; 
  padding-bottom: 10px;
`

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/events')
    .then(resp => resp.json())
    .then(data => setEvents(data))
    .catch((error) => console.error('Error:', error))
  }, [])

  const handleChildClick = (term) => {
    setSearchTerm(term);
  }

  let filteredItems = (events.filter(event => {
    return event.name.toLowerCase().includes(searchTerm.toLowerCase()) 
  }))

  return (
    <Grid>
      <Row>
        <Col size={1}>
          <SidebarContainer>
            <SidebarHeader>Filters</SidebarHeader>
            <Sidebar />
          </SidebarContainer>
        </Col>
        <Col size={3}>
          <EventSearchBar onChildClick={(term) => handleChildClick(term)}/>
          <EventList>
            {filteredItems.map(event => 
              <Event 
                key={event.id} 
                event={event}
              /> 
            )}
          </EventList>
        </Col>
        <Col size={2} />
      </Row>
    </Grid>
  )
}
export default EventsPage;