import React from 'react';
import styled from 'styled-components';
import { Grid, Col, Row } from '../components/styled/Grid';

const FormCon = styled.div`
  display: flex;
  flex-direction: column;
  height: 700px;
  width: 100%;
  justify-content: center;
  align-items: center;
`
const EventForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 30%;
  width: 100%;
  margin: 0 300px;
`
const InputCon = styled.div`
  display: flex;
  width: 450px;
  height: 250px;
  margin: 20px;
  justify-content: center;
`
const FormInput = styled.input`
  height: 60px;
  width: 80%;
  margin: 0 10px;
`
const Button = styled.button`

`

const EventRegistration = () => {
  return (
    <Grid>
      <Row>
        <Col size={1}>
          <FormCon>
            <EventForm>
              <h2>Contact Information</h2>
              <InputCon>
                <FormInput type="text" name="first" placeholder="First Name" />
                <FormInput type="text" name="email" placeholder="Email address" />
              </InputCon>
              <InputCon>
                <FormInput type="text" name="last" placeholder="Last Name" />
                <FormInput type="text" name="phone" placeholder="Phone Number" />
              </InputCon>
              <Button>Register</Button>
            </EventForm>
          </FormCon>
        </Col>
      </Row>
    </Grid>
  )
}
export default EventRegistration;