import React, { useEffect } from 'react';
import MentorCard from '../components/cards/MentorCard';
import EventCard from '../components/cards/EventCard';
import { Grid, Row, Col } from '../components/styled/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { getEvents, getMentors } from '../actions/userActions';
import styled from 'styled-components';

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
`
const UserName = styled.span`
`

const AccountPage = () => {
  const userInfo = useSelector(state => state.currentUser);
  const mentors = useSelector(state => state.mentors);
  const events = useSelector(state => state.events)
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(userInfo.user_id)
    dispatch(getMentors(userInfo.id));
    dispatch(getEvents(userInfo.id))
  }, [])

  return(
    !!userInfo ?
    <Grid margin={'25px'}>
      <Row>
          <AccountImg />
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
          <h2>Events</h2>
          <EventsCon>
            {events.map(event => 
              <EventCard 
                key={event.id} 
                event={event}
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