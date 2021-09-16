import React, { useEffect } from 'react';
import MentorCard from '../components/cards/MentorCard';
import EventCard from '../components/cards/EventCard';
import AppointmentCard from '../components/cards/AppointmentCard';
import { Grid, Row, Col } from '../components/styled/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { getEvents } from '../actions/eventActions';
import { getMentors } from '../actions/mentorActions';
import { getAppointments } from '../actions/appointmentActions';
import styled from 'styled-components';
import profileImg from '../assets/profile-img.jpg';


const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  width: 100%;
`
const AccountImg = styled.img`
  height: 75px;
  width: 75px;
  margin-right: 20px;
  border: 1px solid black;
  border-radius: 40px;
`
const UserName = styled.span`
  font-size: 25px;
  font-weight: bold;
`

const AccountPage = () => {
  const userInfo = useSelector(state => state.currentUser);
  const mentors = useSelector(state => state.mentors);
  const events = useSelector(state => state.events);
  const appointments = useSelector(state => state.appointments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMentors(userInfo.id));
    dispatch(getEvents(userInfo.id));
    dispatch(getAppointments(userInfo.id));
  }, [dispatch, userInfo.id])

  return(
    !!userInfo ?
    <Grid margin={'30px'}>
      <Row>
        <AccountImg src={profileImg}/>
        <UserName>{userInfo.name}</UserName>
      </Row>
      <Row>
        <Col size={1}>
          <h2>Mentors</h2>
          <Container>
            {mentors.map(mentor => 
            <MentorCard 
              key={mentor.id} 
              mentor={mentor.mentor}
            ></MentorCard>)}
          </Container>
        </Col>
      </Row>
      <Row>
        <Col size={1}>
          <h2>Upcoming Events</h2>
          <Container>
            {events.map(event => 
              <EventCard 
                key={event.id} 
                event={event.event}
              >
              </EventCard>)}
          </Container>
        </Col>
      </Row>
      <Row>
        <Col size={1}>
          <h2>Upcoming Appointments</h2>
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