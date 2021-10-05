import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Grid, Row, Col } from '../components/styled/Grid';
import { startLogin } from '../actions/userActions';
import breakpoint from '../commons/breakpoints';

const Header = styled.h2`
  margin-top: 0;
`
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #f8f7f2;
  height: 80%;
  flex-basis: 35%;
  border-radius: 10px;
  justify-content: center;
  max-width: 500px;

  @media only screen and (${breakpoint.device.laptop}){
    flex-basis: 90%;
    height: 70%;
  } 
`
const LoginInput = styled.input`
  border-radius: 10px;
  height: 10%;
  width: 70%;
  align-self: center;
  margin: 10px;
`
const LoginBtn = styled.button`
  color: #000000;
  width: 70%;
  height: 10%;
  background-color: #FF9531;
  border-radius: 10px;
  font-size: 22px;
  align-self: center;
  margin-top: 10px;
`
const LoginContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  flex-basis: 50%;
  justify-content: center;
  align-items: center;
`
const ErrorCon = styled.div`
  margin: 0 auto;
  height: 20px;
  font-size: 16px;
  color: red;
`
const ErrorMess = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px auto;
  width: 100%;
  height: 60px;
  font-size: 16px;
`

const LoginPage = (props) => {
  const dispatch = useDispatch();
  const loggedIn = useSelector(state => state.loggedIn);
  const initialRender = useRef(true);
  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
  });


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

  const handleInputChange = (event) => {
    setError('');
    if (event.target.name === 'email')setEmailError('');
    if (event.target.name === 'password')setPasswordError('');
    setLoginInfo({...loginInfo, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(loginInfo.password === '') {
      setPasswordError('password cant be blank');
    }
    if(loginInfo.email === '') {
      setEmailError('email cant be blank');
    }
    else {
      setError('Invalid email/password combination')
    }
    dispatch(startLogin(loginInfo));
  }

  return(
    <Grid>
      <Row height={'700px'}>
        <Col size={1}>
          <LoginContainer>
            <LoginForm>
            <ErrorMess>{error}</ErrorMess>
              <Header style={{textAlign: 'center'}}>Please Login</Header>
              <LoginInput onChange={(e) => handleInputChange(e)} 
                type="text" 
                name="email" 
                value={loginInfo.email} 
                placeholder="Email">
              </LoginInput>
              {emailError !== '' ?<ErrorCon>{emailError}</ErrorCon> : null}
              <LoginInput onChange={(e) => handleInputChange(e)} 
                type="password" 
                name="password" 
                value={loginInfo.password} 
                placeholder="Password">
              </LoginInput>
              {passwordError !== '' ?<ErrorCon>{passwordError}</ErrorCon> : null}
              <LoginBtn onClick={(e) => handleSubmit(e)}>Login</LoginBtn>
            </LoginForm>
          </LoginContainer>
        </Col>
      </Row>
    </Grid>
  )
}
export default LoginPage;