import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from '../components/styled/Grid';

const LoginForm = styled.form`
  background-color: #f8f7f2;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  min-height: 400px;
  align-items: center;
  margin-top: 35px;
  width: 25%;
  border-radius: 25px;
`

const LoginInput = styled.input`
  height: 30px;
  width: 175px;
  border-radius: 10px;
  margin: 5px;
`

const LoginBtn = styled.button`
  color: #005776;
  width: 65px;
  height: 25px;
  background-color: #808080;
  border-radius: 10px;
`


const LoginPage = () => {
  return(
    <Grid>
      <Row>
        <Col size={1}>
          <LoginForm>
            <LoginInput placeholder="Email"></LoginInput>
            <LoginInput placeholder="Password"></LoginInput>
            <LoginBtn>Login</LoginBtn>
          </LoginForm>
        </Col>
      </Row>
    </Grid>
  )
}
export default LoginPage;