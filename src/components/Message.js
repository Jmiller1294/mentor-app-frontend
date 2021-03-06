import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import styled from 'styled-components';

const MessageCon = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`
const Header = styled.h1`
`

const Message = (props) => {
  const history = useHistory();
  const user = useSelector(state => state.currentUser);
  
  const chooseRoute = () => {
    let path; 
    if(props.location.state.type === 'appointment') {
      path = `/accounts/${user.user.id}`
    }
    else {
      path = '/events'
    }
    history.push(path)
  }

  useEffect(() => {
    setTimeout(() => { chooseRoute() }, 1500)
  })

  return(
    <MessageCon>
      <Header>{props.location.state.message}</Header>
    </MessageCon>
  )
}
export default Message;