import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDate, setLocation, setTime } from '../actions/userActions';
import styled from 'styled-components';
import Event from '../components/Event';
import SearchBar from '../components/SearchBar';
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
  const [isActive, setIsActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const date = useSelector(state => state.date);
  const location = useSelector(state => state.location);
  const time = useSelector(state => state.time);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('http://localhost:3001/events')
    .then(resp => resp.json())
    .then(data => setEvents(data))
    .catch((error) => console.error('Error:', error))
  }, [])

  const handleChildClick = (term) => {
    setSearchTerm(term);
  }

  const handleCallback = (active, data) => {
    if(active === true && data === "Date") {
      dispatch(setDate(''));
    }
    if(active === true && data === "Location") {
      dispatch(setLocation(''));
    }
    if(active === true && data === "Time") {
      dispatch(setTime(''));
    }
  }

  const getMonthName = (num) => {
    let months = [ 'January', 'February', 'March', 
                  'April', 'May', 'June', 'July', 
                  'August', 'September', 'October', 
                  'November', 'December'
                ];

    return months[num];
  }

  const TimeOfDay = (string) => {
    let time = parseInt(string.replace(/[^0-9]/g, ''));
    let timeOfDay;

    if(time < 1200 && string.includes("PM")) {
      time += 1200;
    }
    
    if(time > 600 && time < 1200) {
      timeOfDay = "Morning";
    }
    if(time > 1100 && time < 1900) {
      timeOfDay = "Afternoon";
    }
    if(time > 1900 && time <= 2400) {
      timeOfDay = "Evening";
    }
    return timeOfDay;
  }

  const getMon = () => {
    let month;
    if(date === "This Month") {
      month = getMonthName(new Date().getMonth()).slice(0, 3).toLowerCase();
    }
    else if(date === "Next Month"){
      month = getMonthName(new Date().getMonth() + 1).slice(0, 3).toLowerCase();
    }
    else {
      month = date;
    }
    return month;
  }

  let filteredItems = (events.filter(event => {
    let month = getMon();
    let timeOfDay = TimeOfDay(event.time);

    return (event.date.toLowerCase().includes(month.toLowerCase()) 
    && event.location.toLowerCase().includes(location.toLowerCase())
    && timeOfDay.toLowerCase().includes(time.toLowerCase()))
  }))

  let filteredByTerm = (events.filter(event => {
    return event.name.toLowerCase().includes(searchTerm.toLowerCase())
    || event.location.toLowerCase().includes(searchTerm.toLowerCase())
  }))

  return (
    <Grid>
      <Row>
        <Col size={1}>
          <SidebarContainer>
            <SidebarHeader>Filters</SidebarHeader>
            <Sidebar onChildClick={(active, data) => handleCallback(active, data)} />
          </SidebarContainer>
        </Col>
        <Col size={3}>
          <SearchBar 
            onChildClick={(term) => handleChildClick(term)} 
            text="Search Events"
          />
          <EventList>
          {searchTerm !== '' ?
            filteredByTerm.length !== 0 ? filteredByTerm.map(event => 
              <Event 
                key={event.id} 
                event={event}
              /> 
            ) : <h2>No Events Found</h2>
          : 
          filteredItems.length !== 0 ? filteredItems.map(event => 
              <Event 
                key={event.id} 
                event={event}
              /> 
            ) : <h2>No Events Found</h2>
          }
          </EventList>
        </Col>
        <Col size={2} />
      </Row>
    </Grid>
  )
}
export default EventsPage;