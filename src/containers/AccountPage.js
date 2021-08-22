import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAtendees, getBooking } from '../actions/userActions';

const AccountPage = () => {
  const userInfo = useSelector(state => state.currentUser);
  const mentors = useSelector(state => state.mentors);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(userInfo.user_id)
    dispatch(getBooking(userInfo.id));
    dispatch(getAtendees())
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
        
      </div>
    </>
    : null
  )
}
export default AccountPage;