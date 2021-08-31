import React, { useEffect } from 'react';
import Mentor from '../components/mentor';
import { Grid, Row, Col } from '../components/styled/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { getEvents, getMentors } from '../actions/userActions';
import styled from 'styled-components';

const MentorsCon = styled.div`
 display: flex;
 flex-direction: row;
`
const EventsCon = styled.div`
 
`
const AccountImg = styled.img`
  height: 75px;
  width: 75px;
  margin-right: 20px;
`
const UserName = styled.span`
`
const MentorCard = styled.div`
  
  height: auto; 
  border: 1px solid black;
`
const EventCard = styled.div`
`
const AvatarImage = styled.img`
  height: 50%;
  flex-basis: 7%;
  border-radius: 50%;
  margin-right: 30px;
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
            <Mentor key={mentor.id} mentor={mentor.mentor}></Mentor>)}
          </MentorsCon>
        </Col>
      </Row>
      <Row>
        <Col size={1}>
          <h2>Events</h2>
          <EventsCon>
            {events.map(event => 
              <EventCard key={event.id}>
                {event.event.name}
              </EventCard>)}
          </EventsCon>
        </Col>
      </Row>
    </Grid>
    : null
  )
}
export default AccountPage;