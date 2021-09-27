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
  flex-direction: row;
  height: auto;
  width: 100%;
`
const AccountImg = styled.img`
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
  const accountInfo = useSelector(state => state.accountInfo);
  const mentors = useSelector(state => state.mentors);
  const events = useSelector(state => state.events);
  const appointments = useSelector(state => state.appointments);
  const [profileImg, setProfileImg] = useState('');
  const dispatch = useDispatch();

 
  useEffect(() => {
    dispatch(getEvents(currentUser.id));
    dispatch(getAppointments(currentUser.id))
    dispatch(getUserMentors(currentUser.id));
    dispatch(getAccountInfo(currentUser.id));
  }, [dispatch, currentUser.id])

  return(
    !!currentUser ?
    <Grid margin={'70px'}>
      <Row minHeight={'220px'} height={'250px'}>
        {profileImg === null ? 
          <EmptyAvatar><Link to="/upload">Upload Image</Link></EmptyAvatar> 
        : <Link to="/upload"><AccountImg  src={`http://localhost:3001/${currentUser.avatar}`}/></Link>}
        <UserName>{currentUser.user.name}</UserName>
      </Row>
      <Row minHeight={'150px'} height={'420px'}>
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
      <Row minHeight={'150px'} height={'440px'}>
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
      <Row minHeight={'150px'} height={'420px'}>
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