import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDate, setLocation, setTime } from '../actions/userActions';
import styled from 'styled-components';
import Event from '../components/event';
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

  const getTime = (string) => {
    let time = parseInt(string.replace(/[^0-9]/g, ''));
    if(t < 1200 && string.includes("PM")) {
      time += 1200;
    }
    return time;
  }

  let filteredItems = (events.filter(event => {
    console.log(getTime(event.time));
    let month;
    let day;
    
    if(date === "This Month") {
      month = getMonthName(new Date().getMonth()).slice(0, 3).toLowerCase();
    }
    else if(date === "Next Month"){
      month = getMonthName(new Date().getMonth() + 1).slice(0, 3).toLowerCase();
    }
    else {
      month = date;
    }
    return (event.date.toLowerCase().includes(month.toLowerCase()) 
    && event.location.toLowerCase().includes(location.toLowerCase()))
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
            filteredByTerm.map(event => 
              <Event 
                key={event.id} 
                event={event}
              /> 
            )
          : 
          filteredItems.map(event => 
              <Event 
                key={event.id} 
                event={event}
              /> 
            )
          }
          </EventList>
        </Col>
        <Col size={2} />
      </Row>
    </Grid>
  )
}
export default EventsPage;