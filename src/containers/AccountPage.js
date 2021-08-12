import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMentors } from '../actions/userActions';

const AccountPage = () => {
  const userInfo = useSelector(state => state.currentUser);
  const mentors = useSelector(state => state.mentors);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMentors());
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
        {mentors.map(mentor => <h2 key={mentor.id}>{mentor.mentor.name}</h2>)}
      </div>
    </>
    : null
  )
}
export default AccountPage;