import React from 'react';
import { useSelector } from 'react-redux';

const AccountPage = () => {
  const userInfo = useSelector(state => state.currentUser);
  const mentors = useSelector(state => state.mentors);

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
        {mentors.map(mentor => <h2>{mentor.name}</h2>)}
      </div>
    </>
    : null
  )
}
export default AccountPage;