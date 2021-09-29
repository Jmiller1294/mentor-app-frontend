import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MentorCard from '../components/cards/MentorCard';
import EventCard from '../components/cards/EventCard';
import AppointmentCard from '../components/cards/AppointmentCard';
import { Grid, Row, Col } from '../components/styled/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { getEvents } from '../actions/eventActions';
import { getUserMentors } from '../actions/mentorActions';
import { getAppointments } from '../actions/appointmentActions';
import { getAccountInfo } from '../actions/userActions';
import styled from 'styled-components';
import profile from '../assets/profile-img.jpg';


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-self: space-around;
  height: auto;
  flex-basis: 100%;
  margin: 60px 0;
`
const Avatar = styled.img`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-self: center;
  align-self: center;
  text-align: center;
  height: 160px;
  width: 160px;
  margin-right: 20px;
  margin-bottom: 20px;
  border: 1px solid black;
  border-radius: 80px;
`
const EmptyAvatar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-self: center;
  align-self: center;
  text-align: center;
  height: 130px;
  width: 130px;
  margin-right: 20px;
  margin-bottom: 20px;
  border: 1px solid black;
  border-radius: 65px;
`
const UserName = styled.span`
  position: relative;
  top: 50px;
  height: auto;
  font-size: 20px;
  font-weight: bold;
`
const Text = styled.span`
  color: blue;
`
const Headers = styled.h2`
  text-align: center;
`

const AccountPage = () => {
  const currentUser = useSelector(state => state.currentUser);
  const mentors = useSelector(state => state.mentors);
  const events = useSelector(state => state.events);
  const appointments = useSelector(state => state.appointments);
  const dispatch = useDispatch();

 
  useEffect(() => {
    dispatch(getEvents(currentUser.user.id));
    dispatch(getAppointments(currentUser.user.id))
    dispatch(getUserMentors(currentUser.user.id));
    dispatch(getAccountInfo(currentUser.user.id));
  }, [dispatch, currentUser.user.id])

  return(
    !!currentUser ?
    <Grid margin={'50px'}>
      <Row minHeight={'220px'} height={'250px'}>
        {currentUser.avatar === null ? 
          <EmptyAvatar><Link to="/upload">Upload Image</Link></EmptyAvatar> 
        : <Link to="/upload"><Avatar  src={`http://localhost:3001/${currentUser.avatar}`}/></Link>}
        <UserName>{currentUser.user.name}</UserName>
      </Row>
      <Row minHeight={'150px'} height={'auto'}>
        <Col size={1}>
          <Headers>Mentors</Headers>
          <Container>
            {mentors.map(mentor => 
            <MentorCard 
              key={mentor.id} 
              mentor={mentor.mentor}
            ></MentorCard>)}
          </Container>
        </Col>
      </Row>
      <Row minHeight={'150px'} height={'auto'}>
        <Col size={1}>
          <Headers>Upcoming Events</Headers>
          <Container>
            {events.map(event => 
              <EventCard 
                key={event.id} 
                event={event.event}
                image={event.image}
              >
              </EventCard>)}
          </Container>
        </Col>
      </Row>
      <Row minHeight={'150px'} height={'auto'}>
        <Col size={1}>
          <Headers>Upcoming Appointments</Headers>
          <Container>
            {appointments.map(appointment => 
              <AppointmentCard 
                key={appointment.id}
                appointment={appointment}
              />
            )}
          </Container>
        </Col>
      </Row>
    </Grid>
    : null
  )
}
export default AccountPage;