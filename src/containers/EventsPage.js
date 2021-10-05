import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDate, setLocation, setTime } from '../actions/eventActions';
import { getFavorites } from '../actions/favoriteActions';
import styled from 'styled-components';
import Event from '../components/Event';
import SearchBar from '../components/SearchBar';
import Sidebar from '../components/sidebar/Sidebar';
import { Grid, Row, Col }from '../components/styled/Grid';
import breakpoint from '../commons/breakpoints';


const EventList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin-bottom: 30px;
  padding: 0;
`
const SidebarContainer = styled.div`
  display: flex;
  position: fixed;
  height: 900px;
  width: 25%;
  flex-direction: column;
  background-color: #f8f7f2;
  padding: 15px;

  @media only screen and (${breakpoint.device.tablet}){
    flex-direction: row;
    position: absolute;
    width: 100%;
    height: 70px;
    padding: 0 40px;
    z-index: 1;
  }
`
const SidebarHeader = styled.h2`
  margin-top: 45px; 
  border-bottom: black 2px solid; 
  padding-bottom: 10px;

  @media only screen and (${breakpoint.device.tablet}){
   border-bottom: 0;
   font-size: 0;
  }
`

const EventsCon = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  flex-basis: 100%;
  
  @media only screen and (${breakpoint.device.tablet}){
   justify-content: center;
   align-items: center;
   margin-top: 150px;
  }
`
const SearchBarCon =  styled.div`
  

  @media only screen and (${breakpoint.device.tablet}){
    display: flex;
    width: 350px;
    align-items: flex-start;
  }
`

const SidebarCol = styled.div`
  flex: 1;

  @media only screen and (${breakpoint.device.tablet}){
   flex: 0;
  }
`


const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const date = useSelector(state => state.date);
  const user = useSelector(state => state.currentUser);
  const location = useSelector(state => state.location);
  const favorites = useSelector(state => state.favorites);
  const time = useSelector(state => state.time);
  const dispatch = useDispatch();

  const rerenderParentCallback = () => {
    setIsActive(!isActive);
  }

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
    let timeOfDay = TimeOfDay(event.event.time);

    return (event.event.date.toLowerCase().includes(month.toLowerCase()) 
    && event.event.location.toLowerCase().includes(location.toLowerCase())
    && timeOfDay.toLowerCase().includes(time.toLowerCase()))
  }))

  let filteredByTerm = (events.filter(event => {
    return event.event.name.toLowerCase().includes(searchTerm.toLowerCase())
    || event.event.location.toLowerCase().includes(searchTerm.toLowerCase())
  }))

  useEffect(() => {
    console.log(events)
    fetch('http://localhost:3001/events')
    .then(resp => resp.json())
    .then(data => setEvents(data))
    .catch((error) => console.error('Error:', error))
    if(user !== null) { dispatch(getFavorites(user.user.id)) };
  }, [isActive])
 

    return (
      <Grid>
        <Row>
          <SidebarCol size={1}>
            <SidebarContainer>
              <SidebarHeader>Filter by</SidebarHeader>
              <Sidebar onChildClick={(active, data) => handleCallback(active, data)} />
            </SidebarContainer>
          </SidebarCol>
          <Col size={3}>
            <EventsCon>
              <SearchBarCon>
                <SearchBar 
                  onChildClick={(term) => handleChildClick(term)} 
                  text="Search Events"
                />
              </SearchBarCon>
              <EventList>
                {searchTerm !== '' ?
                  filteredByTerm.length !== 0 ? filteredByTerm.map(function(event) {
                    let value;
                    if (favorites.includes(event.event.id)) value = true;
                      return <Event 
                        image={event.image}
                        key={event.event.id} 
                        event={event.event}
                        value={value}
                        rerenderParentCallback={rerenderParentCallback}
                      /> 
                  }) : <h2>No Events Found</h2>
                : 
                filteredItems.length !== 0 ? filteredItems.map(function(event) {
                    let value;
                    if (favorites.includes(event.event.id)) value = true;
                      return <Event 
                        image={event.image}
                        key={event.event.id} 
                        event={event.event}
                        value={value}
                        rerenderParentCallback={rerenderParentCallback}
                      /> 
                  }) : <h2>No Events Found</h2>
                }
              </EventList>
            </EventsCon>
          </Col>
        </Row>
      </Grid>
    )
}
export default EventsPage;