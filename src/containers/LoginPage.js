import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Grid, Row, Col } from '../components/styled/Grid';
import { startLogin } from '../actions/userActions';

const Header = styled.h2`
  margin-top: 0;
`
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #f8f7f2;
  height: 65%;
  flex-basis: 35%;
  border-radius: 20px;
  justify-content: center;
`
const LoginInput = styled.input`
  border-radius: 25px;
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
  border-radius: 20px;
  font-size: 22px;
  letter-spacing: 5px;
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
const Message = styled.p`
  color: red;
  text-align: center;
`
const LoginPage = (props) => {
  const dispatch = useDispatch();
  const loggedIn = useSelector(state => state.loggedIn);
  const [error, setError] = useState('')
  const initialRender = useRef(true);
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
    setLoginInfo({...loginInfo, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(startLogin(loginInfo));
  }

  return(
    <Grid>
      <Row height={'600px'}>
        <Col size={1}>
          <LoginContainer>
            <LoginForm>
              <Message>{error}</Message>
              <Header style={{textAlign: 'center'}}>Please Login</Header>
              <LoginInput onChange={(e) => handleInputChange(e)} 
                type="text" 
                name="email" 
                value={loginInfo.email} 
                placeholder="Email">
              </LoginInput>
              <LoginInput onChange={(e) => handleInputChange(e)} 
                type="password" 
                name="password" 
                value={loginInfo.password} 
                placeholder="Password">
              </LoginInput>
              <LoginBtn onClick={(e) => handleSubmit(e)}>Login</LoginBtn>
            </LoginForm>
          </LoginContainer>
        </Col>
      </Row>
    </Grid>
  )
}
export default LoginPage;