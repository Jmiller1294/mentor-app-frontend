import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Grid, Row, Col } from '../components/styled/Grid';
import { startLogin } from '../actions/userActions'

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #f8f7f2;
  margin-top: 100px;
  height: 300px;
  flex-basis: 35%;
  border-radius: 20px;
  justify-content: center;
`
const LoginInput = styled.input`
  border-radius: 25px;
  height: 10%;
  width: 50%;
  align-self: center;
  margin: 10px;
`
const LoginBtn = styled.button`
  color: #005776;
  width: 100px;
  height: 35px;
  background-color: #808080;
  border-radius: 10px;
  font-size: 20px;
  align-self: center;
`
const LoginContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const LoginPage = (props) => {
  const dispatch = useDispatch();
  
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (event) => {
    setLoginInfo({...loginInfo, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(startLogin(loginInfo));
    props.history.push('/')
  }

  return(
    <Grid>
      <Row>
        <Col size={1}>
        <LoginContainer>
          <LoginForm>
            <h2 style={{textAlign: 'center'}}>Please Login</h2>
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