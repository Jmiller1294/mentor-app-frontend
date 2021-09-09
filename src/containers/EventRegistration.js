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
  justify-content: center;
  height: 30%;
  width: 100%;
  margin: 0 300px;
`
const InputCon = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 150px;
  margin: 20px;
  justify-content: center;
`
const FormInput = styled.input`
  height: 50%;
  width: 100%;
  margin: 10px 0;
`

const EventRegistration = () => {
  return (
    <Grid>
      <Row>
        <Col size={1}>
          
          <FormCon>
            <h2>Contact Information</h2>
            <EventForm>
              <InputCon>
                <FormInput type="text" name="" />
                <FormInput type="text" name="" />
              </InputCon>
              <InputCon>
                <FormInput type="text" name="" />
                <FormInput type="text" name="" />
              </InputCon>
            </EventForm>
          </FormCon>
        </Col>
      </Row>
    </Grid>
  )
}
export default EventRegistration;