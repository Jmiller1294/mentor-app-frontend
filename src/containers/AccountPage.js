import React from 'react';
import { useSelector } from 'react-redux';

const AccountPage = () => {
  const userInfo = useSelector(state => state.currentUser);

  return(
    !!userInfo ?
      <div>
        <h1>AccountPage</h1>
        <p>
          name: {userInfo.name} 
          <br></br>
          email: {userInfo.email}
        </p>
      </div>
    : null
  )
}
export default AccountPage;