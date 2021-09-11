import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';

const MessageCon = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`
const Header = styled.h1`

`

const Message = () => {
  const history = useHistory();
  
  useEffect(() => {
    const newRoute = () => { 
      let path = `/events`; 
      history.push(path)
    }
    setTimeout(() => { newRoute() }, 1500)
  },[history])

  return(
    <MessageCon>
      <Header>Thank You For Registering!</Header>
    </MessageCon>
  )
}
export default Message;