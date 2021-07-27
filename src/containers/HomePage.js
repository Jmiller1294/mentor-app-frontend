import React from 'react';
import styled from 'styled-components';
import {Grid, Row, Col }from '../components/styled/Grid';
import { BackgroundImage }from '../components/styled/BackgroundImage';
import { Card, CardAvatar } from '../components/styled/Card';
import Background from '../assets/background.jpg';
import Pic1 from '../assets/pic1.jpg'
import Pic2 from '../assets/pic2.jpg'
import Pic3 from '../assets/pic3.jpg'

const Header = styled.h1`
  font-size: 40px;
  font-weight: 300;
  text-transform: uppercase;
  color: #005776;
  margin-top: 100px;
`


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
          <Header style={{textAlign: 'center'}}>Where young professionals <br></br>can find Mentors</Header>
        </Col>
      </Row>
      <Row padding={'0 40px 0 40px'} height={'400px'} background={'#f8f7f2'}>
        <Col size={1}>
          <Card style={{ padding: '20px'}}>
            <CardAvatar src={Pic1} />
          </Card>
        </Col>
        <Col size={1}>
          <Card style={{ padding: '20px'}}>
            <CardAvatar src={Pic2} />
          </Card>
        </Col>
        <Col size={1}>
          <Card style={{ padding: '20px'}}>
            <CardAvatar src={Pic3} />
          </Card>
        </Col>
      </Row>
      <Row height={'400px'}>
        <Col size={1}>
          1
        </Col>
      </Row>
    </Grid>
  )
}
export default HomePage;