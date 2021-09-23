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

const Message = (props) => {
  const history = useHistory();
  
  const chooseRoute = () => {
    let path; 
    if(props.location.state.type === 'appointment') {
      path = '/accounts'
    }
    else {
      path = '/events'
    }
    history.push(path)
  }

  useEffect(() => {
    console.log(props.location)
    setTimeout(() => { chooseRoute() }, 1500)
  },[history])

  return(
    <MessageCon>
      <Header>{props.location.state.message}</Header>
    </MessageCon>
  )
}
export default Message;