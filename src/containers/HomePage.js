import React from 'react';
import styled from 'styled-components';
import {Grid, Row, Col }from '../components/styled/Grid';
import { BackgroundImage }from '../components/styled/BackgroundImage';
import Background from '../assets/background.jpg';





const HomePage = () => {
  return (
    <Grid>
      <Row>
        <Col size={1}>
          <BackgroundImage src={Background}/>
        </Col>
      </Row>
      <Row height={'400px'}>
        <Col size={1}>
          <h1 style={{textAlign: 'center'}}>Where young professionals can find Mentors</h1>
        </Col>
      </Row>
      <Row height={'400px'} background={'#f8f7f2'}>
        <Col size={1}>
          3
        </Col>
      </Row>
    </Grid>
  )
}
export default HomePage;