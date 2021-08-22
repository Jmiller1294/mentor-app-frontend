import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEvents, getMentors } from '../actions/userActions';

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
    <>
      <div>
        <h1>AccountPage</h1>
        <p>
          name: {userInfo.name} 
          <br></br>
          email: {userInfo.email}
        </p>
      </div>
      <div>
      <h2>Mentors</h2>
        {mentors.map(mentor => 
          <h4 key={mentor.id}>
            {mentor.mentor.name}
          </h4>)}
      </div>
      <div>
        <h2>Events</h2>
        {events.map(event => 
          <h4 key={event.id}>
            {event.event.name}
          </h4>)}
      </div>
    </>
    : null
  )
}
export default AccountPage;