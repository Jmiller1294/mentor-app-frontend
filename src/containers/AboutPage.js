import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from '../components/styled/Grid';
import backgroundPic from '../assets/background-pic1.jpg';

const Header = styled.h1`
  display: flex;
  justify-content: center;
  margin: 40px 0;
  font-size: 50px;
`
const BackgroundImg = styled.img`
  width: 100%;
  height: 100%;
`

const AboutPage = () => {

  return(
    <Grid>
      <Row height={'450px'}>
        <Col size={1}>
          <BackgroundImg src={backgroundPic}></BackgroundImg>
        </Col>
      </Row>
      <Row>
        <Col size={1}>
          <Header>Our Mission</Header>
        </Col>
      </Row>
    </Grid>
  )
}
export default AboutPage;