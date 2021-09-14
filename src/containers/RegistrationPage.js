import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startCreateUser } from '../actions/userActions';
import styled from 'styled-components';
import { Grid, Row, Col } from '../components/styled/Grid';

const RegistrationForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #f8f7f2;
  height: 50%;
  flex-basis: 35%;
  border-radius: 20px;
  justify-content: center;
`
const FormInput = styled.input` 
  height: 10%;
  width: 50%;
  align-self: center;
  margin: 10px;
`
const RegistrationBtn = styled.button`
  color: #005776;
  width: 25%;
  height: 35px;
  background-color: #808080;
  border-radius: 5px;
  font-size: 20px;
  align-self: center;
`
const RegistrationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 700px;
`

const RegistrationPage = () => {
  const [registrationInfo, setRegistrationInfo] = useState({
    name: '',
    email: '',
    password: ''
  })
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('clicked', registrationInfo);
    dispatch(startCreateUser(registrationInfo));
  }

  const handleInputChange = (event) => {
    setRegistrationInfo({...registrationInfo, [event.target.name]: event.target.value})
  }
  
  return(
    <Grid>
      <Row>
        <Col size={1}>
          <RegistrationContainer>
            <RegistrationForm>
              <h2 style={{textAlign: 'center'}}>Register</h2>
              <FormInput 
                type="text" 
                name="name" 
                value={registrationInfo.name} 
                placeholder="Full Name"
                onChange={(e) => handleInputChange(e)} 
              >
              </FormInput>
              <FormInput 
                type="text" 
                name="email" 
                value={registrationInfo.email} 
                placeholder="Email"
                onChange={(e) => handleInputChange(e)} 
              >
              </FormInput>
              <FormInput 
                type="password" 
                name="password" 
                value={registrationInfo.password} 
                placeholder="Password"
                onChange={(e) => handleInputChange(e)} 
              >
              </FormInput>
              <RegistrationBtn onClick={(e) => handleSubmit(e)}>Register</RegistrationBtn>
            </RegistrationForm>
          </RegistrationContainer>
        </Col>
      </Row>
    </Grid>
  )
}
export default RegistrationPage;