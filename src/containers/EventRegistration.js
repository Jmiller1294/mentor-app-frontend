import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import { Grid, Col, Row } from '../components/styled/Grid';
import breakpoint from '../commons/breakpoints';

const FormCon = styled.div`
  display: flex;
  flex-direction: column;
  height: 800px;
  width: 100%;
  justify-content: center;
  align-items: center;

  @media only screen and (${breakpoint.device.laptop}){
    margin: 0;
  }
`
const EventForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f8f7f2;
  align-items: center;
  height: 70%;
  width: 45%;
  border-radius: 20px;
  max-width: 800px;

  @media only screen and (${breakpoint.device.tablet}){
    width: 90%;
  }

  @media only screen and (${breakpoint.device.laptop}){
    width: 85%;
  }
`
const InputCon = styled.div`
  display: flex;
  width: 80%;
  height: 18%;
  justify-content: center;
`
const FormInput = styled.input`
  height: 60px;
  width: 80%;
  margin: 0 10px;

  @media only screen and (${breakpoint.device.laptop}){
    height: 55%;
    width: 45%;
  }
`
const Button = styled.button`
  background-color: #FF9531;
  height: 10%;
  width: 70%;
  border-radius: 25px;
  font-size: 18px;
  letter-spacing: 2px;
`
const Header = styled.h1`
  justify-content: flex-start;
  margin-top: 0;
  margin-bottom: 65px;

  @media only screen and (${breakpoint.device.phone}){
    font-size: 22px;
  }
`

const EventRegistration = (props) => {
  const user = useSelector(state => state.currentUser.user);
  const event = props.location.state.event;
  const history = useHistory();
  
  const [registrationInfo, setRegistrationInfo] = useState({
    first: '',
    last: '',
    email: '',
    phone: ''
  });

  const newRoute = () => { 
    let path = `/message`; 
    history.push({
      pathname: path,
      state: {
        message: "Thank You For Registering!",
        type: 'event'
      }
    });
  }

  const createEventRegistration = (userId) => {
    fetch(`https://mentor-app-api.herokuapp.com/users/${userId}/event_registrations`, {
      method: "POST",
      //credentials: "include",
      headers: { 
        "Content-Type": "application/json",
      },
        body: JSON.stringify(Object.assign(registrationInfo, event, props.location.state.image))
    })
    .then(resp => resp.json())
    .then(event => console.log(event))
  }

  const handleInputChange = (event) => {
    setRegistrationInfo({...registrationInfo, [event.target.name]: event.target.value})
  }

  const handleClick = (e) => {
    e.preventDefault();
    createEventRegistration(user.id,registrationInfo);
    newRoute();
  }

  return (
    <Grid>
      <Row>
        <Col size={1}>
          <FormCon>
            <EventForm>
            <Header>Contact Information</Header>
              <InputCon>
                <FormInput 
                  onChange={handleInputChange} 
                  type="text" name="first" 
                  value={registrationInfo.first} 
                  placeholder="First Name" 
                />
                <FormInput 
                  onChange={handleInputChange} 
                  type="text" name="last" 
                  value={registrationInfo.last} 
                  placeholder="Last Name"
                />
              </InputCon>
              <InputCon>
                <FormInput 
                  onChange={handleInputChange} 
                  type="text" name="email" 
                  value={registrationInfo.email} 
                  placeholder="Email" 
                />
                <FormInput 
                  onChange={handleInputChange} 
                  type="text" name="phone" 
                  value={registrationInfo.phone} 
                  placeholder="Phone Number" 
                />
              </InputCon>
              <Button onClick={(e) => handleClick(e) }>Register</Button>
            </EventForm>
          </FormCon>
        </Col>
      </Row>
    </Grid>
  )
}
export default EventRegistration;