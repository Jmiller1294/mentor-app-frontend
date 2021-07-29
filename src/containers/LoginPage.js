import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from '../components/styled/Grid';

const LoginForm = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  min-height: 500px;
  align-items: center;
`

const LoginInput = styled.input`

`

const LoginPage = () => {
  return(
    <Grid>
      <Row>
        <Col size={1}>
          <LoginForm>
            <LoginInput></LoginInput>
            <LoginInput></LoginInput>
          </LoginForm>
        </Col>
      </Row>
    </Grid>
  )
}
export default LoginPage;