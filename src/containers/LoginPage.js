import React, { useState } from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from '../components/styled/Grid';
import { startLogin } from '../actions/userActions'

const LoginForm = styled.form`
  background-color: #f8f7f2;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  min-height: 400px;
  align-items: center;
  margin-top: 10%;
  width: 25%;
  border-radius: 25px;
`

const LoginInput = styled.input`
  display: flex;
  height: 8%;
  width: 60%;
  border-radius: 10px;
  margin: 5px;
`

const LoginBtn = styled.button`
  color: #005776;
  width: 100px;
  height: 35px;
  background-color: #808080;
  border-radius: 10px;
  font-size: 20px;
`


const LoginPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    this.setEmail(event.target.value)
    
  }

  const handlePasswordChange = (event) => {
    this.setPassword(event.target.value)
  }

  
  const handleSubmit = (event) => {
    event.preventDefault();
    startLogin();
  }

  return(
    <Grid>
      <Row>
        <Col size={1}>
          <LoginForm>
            <h2>Please Login</h2>
            <LoginInput placeholder="Email" onChange={(e) => handleEmailChange(e)}></LoginInput>
            <LoginInput placeholder="Password" onChange={(e) => handlePasswordChange(e)}></LoginInput>
            <LoginBtn onClick={(e) => handleSubmit(e)}>Login</LoginBtn>
          </LoginForm>
        </Col>
      </Row>
    </Grid>
  )
}
export default LoginPage;