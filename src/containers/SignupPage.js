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
  height: 55%;
  flex-basis: 65%;
  max-width: 800px;
  border-radius: 20px;
  justify-content: center;

  @media only screen and (${breakpoint.device.laptop}){
    flex-basis: 85%;
  } 
`
const FormInput = styled.input` 
  height: 15%;
  width: 70%;
  align-self: center;
  margin: 10px;
  border-radius: 20px;
  
  @media only screen and (${breakpoint.device.laptop}){
   height: 10%;
  } 
`
const SignupBtn = styled.button`
  width: 70%;
  height: 15%;
  background-color: #FF9531;
  border-radius: 20px;
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

const SignupPage = (props) => {
  const dispatch = useDispatch();
  const loggedIn = useSelector(state => state.loggedIn);
  const initialRender = useRef(true);
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
    console.log('clicked', signupInfo);
    dispatch(startCreateUser(signupInfo));
  }

  const handleInputChange = (event) => {
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
              <FormInput 
                type="text" 
                name="email" 
                value={signupInfo.email} 
                placeholder="Email"
                onChange={(e) => handleInputChange(e)} 
              >
              </FormInput>
              <FormInput 
                type="password" 
                name="password" 
                value={signupInfo.password} 
                placeholder="Password"
                onChange={(e) => handleInputChange(e)} 
              >
              </FormInput>
              <FormInput 
                type="password" 
                name="passwordConfirmation" 
                value={signupInfo.passwordConfirmation} 
                placeholder="Retype Password"
                onChange={(e) => handleInputChange(e)} 
              >
              </FormInput>
              <SignupBtn onClick={(e) => handleSubmit(e)}>Signup</SignupBtn>
            </SignupForm>
          </SignupContainer>
        </Col>
      </Row>
    </Grid>
  )
}
export default SignupPage;