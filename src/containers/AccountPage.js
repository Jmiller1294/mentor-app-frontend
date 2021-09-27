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
  height: 75px;
  width: 75px;
  margin-right: 20px;
  border: 1px solid black;
  border-radius: 40px;
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
  align-self: center;
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
  const user = useSelector(state => state.currentUser);
  const accountInfo = useSelector(state => state.accountInfo);
  const mentors = useSelector(state => state.mentors);
  const events = useSelector(state => state.events);
  const appointments = useSelector(state => state.appointments);
  const [profileImg, setProfileImg] = useState(null);
  const dispatch = useDispatch();

 
  useEffect(() => {
    dispatch(getEvents(user.id));
    dispatch(getAppointments(user.id))
    dispatch(getUserMentors(user.id));
    dispatch(getAccountInfo(user.id));
    console.log()
  }, [dispatch, user.id])

  return(
    !!user ?
    <Grid margin={'70px'}>
      <Row minHeight={'220px'}>
        <Col size={1}>
        {profileImg === null ? 
          <EmptyAvatar><Link to="/upload">Upload Image</Link></EmptyAvatar> 
        : <AccountImg src={profile} />}
        <UserName>{user.name}</UserName>
        </Col>
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