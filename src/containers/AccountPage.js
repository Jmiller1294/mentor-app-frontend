import React, { useEffect } from 'react';
import MentorCard from '../components/cards/MentorCard';
import EventCard from '../components/cards/EventCard';
import { Grid, Row, Col } from '../components/styled/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { getEvents } from '../actions/eventActions';
import { getMentors } from '../actions/mentorActions';
import styled from 'styled-components';
import profileImg from '../assets/profile-img.jpg';

const MentorsCon = styled.div`
  display: flex;
  flex-direction: space-between;
  height: auto;
  width: 100%;
`
const EventsCon = styled.div`
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
  const events = useSelector(state => state.events)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMentors(userInfo.id));
    dispatch(getEvents(userInfo.id))
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
          <MentorsCon>
            {mentors.map(mentor => 
            <MentorCard 
              key={mentor.id} 
              mentor={mentor.mentor}
            ></MentorCard>)}
          </MentorsCon>
        </Col>
      </Row>
      <Row>
        <Col size={1}>
          <h2>Upcoming Events</h2>
          <EventsCon>
            {events.map(event => 
              <EventCard 
                key={event.id} 
                event={event.event}
              >
              </EventCard>)}
          </EventsCon>
        </Col>
      </Row>
    </Grid>
    : null
  )
}
export default AccountPage;