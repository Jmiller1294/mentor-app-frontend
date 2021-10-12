import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import MentorCard from '../components/cards/MentorCard';
import EventCard from '../components/cards/EventCard';
import AppointmentCard from '../components/cards/AppointmentCard';
import { Grid, Row, Col } from '../components/styled/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { getEvents } from '../actions/eventActions';
import { getUserMentors } from '../actions/mentorActions';
import { getAppointments } from '../actions/appointmentActions';
import styled from 'styled-components';
import breakpoint from '../commons/breakpoints';


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  height: auto;
  width: 100%;
  margin: 60px 0;

  @media only screen and (${breakpoint.device.laptop}){
    flex-direction: column;
    justify-content: content;
    align-items: center;
  } 
`

const AvatarCon = styled.div`
  display: flex;
  margin-top: 65px;
  width: 30%;
  height: 380px;
  margin-left: 35px;

  @media only screen and (${breakpoint.device.laptop}){
    display: flex;
    width: 100%;
    flex-direction: column;
    margin-top: 50px;
    text-align: center;
    margin-left: 0;
  } 
`
const Avatar = styled.img`
  display: flex;
  height: 160px;
  width: 160px;
  border: 1px solid black;
  border-radius: 80px;
  margin-right: 10px;

  @media only screen and (${breakpoint.device.laptop}){
    height: 130px;
    width: 130px;
    margin: 0 auto;
    margin-bottom: 20px;
  } 
`
const EmptyAvatar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 160px;
  width: 160px;
  margin-right: 20px;
  margin-bottom: 20px;
  border: 1px solid black;
  border-radius: 80px;

  @media only screen and (${breakpoint.device.laptop}){
    height: 130px;
    width: 130px;
    margin: 0 auto;
    margin-bottom: 20px;
  } 
`
const UserName = styled.span`
  height: auto;
  font-size: 20px;
  font-weight: bold;
`
const Headers = styled.h1`
  text-align: center;
  top: 20px;
`
const Text = styled.span`
  text-align: center;
  height: 100px;
  width: 200px;
  margin: auto;
  font-size: 16px;
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
  }, [dispatch, currentUser.user.id])

  return(
    !!currentUser ?
    <Grid margin={'20px'}>
      <Row minHeight={'220px'} height={'auto'}>
        <AvatarCon>
          {currentUser.avatar === null ? 
            <EmptyAvatar><Link to="/upload">Upload Image</Link></EmptyAvatar> 
          : <Link to="/upload"><Avatar  src={`https://mentor-app-api.herokuapp.com/${currentUser.avatar}`}/></Link>}
          <UserName>{currentUser.user.name}</UserName>
        </AvatarCon>
      </Row>
      <Row minHeight={'250px'} height={'auto'}>
        <Col size={1}>
          <Headers>Mentors</Headers>
          <Container>
            {mentors.length !== 0 ? mentors.map(mentor => 
            <MentorCard 
              key={mentor.id} 
              mentor={mentor.mentor}
            ></MentorCard>
          ): <Text>No Mentors</Text>}
          </Container>
        </Col>
      </Row>
      <Row minHeight={'150px'} height={'auto'}>
        <Col size={1}>
          <Headers>Upcoming Events</Headers>
          <Container>
            {events.length !== 0 ? events.map(event => 
              <EventCard 
                key={event.id} 
                event={event.event}
                image={event.image}
              >
              </EventCard>
            ) : <Text>No Upcoming Events</Text>}
          </Container>
        </Col>
      </Row>
      <Row minHeight={'150px'} height={'auto'}>
        <Col size={1}>
          <Headers>Upcoming Appointments</Headers>
          <Container>
            {appointments.length !== 0 ? appointments.sort().map(appointment => 
              <AppointmentCard 
                key={appointment.id}
                appointment={appointment}
              />
            ) : <Text>No Upcoming Appointments</Text>}
          </Container>
        </Col>
      </Row>
    </Grid>
    : null
  )
}
export default AccountPage;

