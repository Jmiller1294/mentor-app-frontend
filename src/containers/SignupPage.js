import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startCreateUser } from '../actions/userActions';
import styled from 'styled-components';
import { Grid, Row, Col } from '../components/styled/Grid';
import breakpoint from '../commons/breakpoints';

const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #f8f7f2;
  height: 85%;
  flex-basis: 40%;
  max-width: 500px;
  border-radius: 10px;
  justify-content: center;

  @media only screen and (${breakpoint.device.laptop}){
    flex-basis: 85%;
    height: 65%;
  } 
`
const FormInput = styled.input` 
  height: 8%;
  width: 70%;
  align-self: center;
  margin: 10px;
  margin-top: 20px;
  margin-bottom: 0;
  border-radius: 10px;
  @media only screen and (${breakpoint.device.laptop}){
   height: 6%;
  } 
`
const SignupBtn = styled.button`
  width: 70%;
  height: 8%;
  background-color: #FF9531;
  border-radius: 10px;
  font-size: 20px;
  align-self: center;
  margin-top: 20px;
  margin-bottom: 30px;
`
const SignupContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 750px;
`
const ErrorCon = styled.div`
  margin: 0 auto;
  height: 20px;
  font-size: 16px;
  color: red;
`

const SignupPage = (props) => {
  const dispatch = useDispatch();
  const loggedIn = useSelector(state => state.loggedIn);
  const initialRender = useRef(true);
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [ConfirmationError, setConfirmationError] = useState('');
  const [signupInfo, setSignupInfo] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  })
  

  useEffect(() => {
    if(!initialRender.current) {
      if(loggedIn) {
        props.history.push('/');
      } 
      else {
        console.log('not signed in');
      }
    } 
    else {
      initialRender.current = false;
    }
  }, [loggedIn, props.history])

  const handleSubmit = (event) => {
    event.preventDefault();
    if(signupInfo.name === '') {
      setNameError('Name cant be blank');
    }
    if(signupInfo.password !== signupInfo.passwordConfirmation) {
      setConfirmationError('Passwords dont match');
    }
    if(signupInfo.password === '') {
      setPasswordError('Password cant be blank');
    }
    if(signupInfo.email === '') {
      setEmailError('Email cant be blank');
    }
    if(!signupInfo.email.includes('@')) {
      setEmailError('Email does not have @');
    }
    dispatch(startCreateUser(signupInfo));
  }

  const handleInputChange = (event) => {
    console.log(event.target.name);
    if (event.target.name === 'name') setNameError('');
    if (event.target.name === 'email')setEmailError('');
    if (event.target.name === 'password')setPasswordError('');
    if (event.target.name === 'passwordConfirmation')setConfirmationError('');
    setSignupInfo({...signupInfo, [event.target.name]: event.target.value})
  }
  
  return(
    <Grid>
      <Row>
        <Col size={1}>
          <SignupContainer>
            <SignupForm>
              <h2 style={{textAlign: 'center'}}>Signup</h2>
              <FormInput 
                type="text" 
                name="name" 
                value={signupInfo.name} 
                placeholder="Full Name"
                onChange={(e) => handleInputChange(e)} 
              >
              </FormInput>
              {nameError !== '' ?<ErrorCon>{nameError}</ErrorCon> : null}
              <FormInput 
                type="text" 
                name="email" 
                value={signupInfo.email} 
                placeholder="Email"
                onChange={(e) => handleInputChange(e)} 
              >
              </FormInput>
              {emailError !== '' ?<ErrorCon>{emailError}</ErrorCon> : null}
              <FormInput 
                type="password" 
                name="password" 
                value={signupInfo.password} 
                placeholder="Password"
                onChange={(e) => handleInputChange(e)} 
              >
              </FormInput>
              {passwordError !== '' ?<ErrorCon>{passwordError}</ErrorCon> : null}
              <FormInput 
                type="password" 
                name="passwordConfirmation" 
                value={signupInfo.passwordConfirmation} 
                placeholder="Retype Password"
                onChange={(e) => handleInputChange(e)} 
              >
              </FormInput>
              {ConfirmationError !== '' ?<ErrorCon>{ConfirmationError}</ErrorCon> : null}
              <SignupBtn onClick={(e) => handleSubmit(e)}>Signup</SignupBtn>
            </SignupForm>
          </SignupContainer>
        </Col>
      </Row>
    </Grid>
  )
}
export default SignupPage;