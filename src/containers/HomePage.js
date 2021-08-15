import React from 'react';
import styled from 'styled-components';
import {Grid, Row, Col }from '../components/styled/Grid';
import { BackgroundImage }from '../components/styled/BackgroundImage';
import { Card, CardAvatar, CardDescription } from '../components/styled/Card';
import Background from '../assets/background.jpg';
import Pic1 from '../assets/pic1.jpg';
import Pic2 from '../assets/pic2.jpg';
import Pic3 from '../assets/pic3.jpg';
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
import logo4 from '../assets/logo4.png';
import logo5 from '../assets/logo5.png';


const faker = require('faker');
const array = []
const createTestimonials = () => {
  array.push(faker.image.avatar())
}


const Header = styled.h1`
  font-size: 40px;
  font-weight: 300;
  text-transform: uppercase;
  color: #005776;
  margin-top: 100px;
`
const Logo = styled.img`
  height: 35px;
  width: 150px;
  justify-content: space-between;
  margin: 0 35px 0 35px;
`
const List = styled.ul`
  list-style: none;
`
const ListItem = styled.li`
  height: 250px;
  width: 250px;
  float: left;
`
const Avatar = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50px;
  margin-bottom: 20px;
`

const HomePage = () => {
  return (
    <Grid>
      <Row>
        <Col size={1}>
          <BackgroundImage src={Background}/>
        </Col>
      </Row>
      <Row height={'400px'} >
        <Col size={1}>
          <Header style={{textAlign: 'center'}}>Where young professionals <br></br>can find Mentors</Header>
        </Col>
      </Row>
      <Row padding={'0 40px 0 40px'} height={'auto'} background={'#f8f7f2'}>
        <Col size={1}>
          <Card>
            <CardAvatar src={Pic1} />
            <CardDescription>
              jhjfahjshfjsdhfjhsjfhjsdhjfhdsjhfjhdsfjhjs
              dhfjsjvjhjfvvhbjhhvbjchbjhdfjhfjhffhsdjfhj
              sdhfjsdhfjdshjfhdsjshcjhdjhsdjchjdschjcdhj
              hsdjchdsjchjsdhcjsdjchdsjchjdshcjdcsh
            </CardDescription>
          </Card>
        </Col>
        <Col size={1}>
          <Card>
            <CardAvatar src={Pic2} />
            <CardDescription>
              jhjfahjshfjsdhfjhsjfhjsdhjfhdsjhfjhdsfjhjs
              dhfjsjvjhjfvvhbjhhvbjchbjhdfjhfjhffhsdjfhj
              sdhfjsdhfjdshjfhdsjshcjhdjhsdjchjdschjcdhj
              hsdjchdsjchjsdhcjsdjchdsjchjdshcjdcsh
            </CardDescription>
          </Card>
        </Col>
        <Col size={1}>
          <Card>
            <CardAvatar src={Pic3} />
            <CardDescription>
              jhjfahjshfjsdhfjhsjfhjsdhjfhdsjhfjhdsfjhjs
              dhfjsjvjhjfvvhbjhhvbjchbjhdfjhfjhffhsdjfhj
              sdhfjsdhfjdshjfhdsjshcjhdjhsdjchjdschjcdhj
              hsdjchdsjchjsdhcjsdjchdsjchjdshcjdcsh
            </CardDescription>
          </Card>
        </Col>
      </Row>
      <Row height={'100px'} padding={'20px 40px 45px 20px'}>
        <Col size={1}>
          <h3>AS FEATURED IN</h3>
        </Col>
      </Row>
      <Row height={'200px'} padding={'0 40px 0 40px'}>
        <Col size={2}>
          <Logo src={logo1} alt="logo1" />
          <Logo src={logo2} alt="logo2" />
          <Logo src={logo3} alt="logo3" />
          <Logo src={logo4} alt="logo4" />
          <Logo src={logo5} alt="logo5" />
        </Col>
      </Row>
      <Row height={'100px'}>
        <Col size={1}>
          <h1>Testimonials</h1>
        </Col>
      </Row>
      <Row height={'250px'}>
        <Col size={1}>
          <List>
            <ListItem>
              <Avatar src={faker.image.avatar()} alt="avatar1" />  
              bnbnbnnbnnbbnbnbnnnbbbn
              bjbnbnbnbnjjnbnnbnbnbnb
              hjhjhjhjhjhjhjhjhjhjhjj
              hjhjhjhjhjhjhjhjhjhjhjh
              <br></br>
              <br></br>
              - John Smith
            </ListItem>
            <ListItem>
              <Avatar src={faker.image.avatar()} alt="avatar2" />
              jfkjskfjksasdasdasdasdd
              adasdasdasdasdsadasdsad
              asdasddaddasdasdasdasdd
              asdasdasdasdadasdasdasd
              <br></br>
              <br></br>
              -Alex Miller
            </ListItem>
            <ListItem>
              <Avatar src={faker.image.avatar()} alt="avatar3" />
              jfkjskfjksdasdasdasdasd
              asdasdasdasdasdasdadsd
              adasdasdasdasdasdaddasd
              dasdasdasdasdasdasdasdas
              <br></br>
              <br></br>
              -Dustin Wilson
            </ListItem>
          </List>
        </Col>
      </Row>
      <Row height={'250px'}>
        <Col size={1}>
          <List>
            <ListItem>
              <Avatar src={faker.image.avatar()} alt="avatar4" />
              jfkjskfjksadasdasdasdad
              adasdasdasdasdadasdadads
              asdasdasdasdasdasdasdads
              asdasdasdasdasdasdasdads
              <br></br>
              <br></br>
              -Max Filmore
            </ListItem>
            <ListItem>
              <Avatar src={faker.image.avatar()} alt="avatar5" />
              jfkjskfjksadasdasdasdad
              adasdasdasdasdadasdadads
              asdasdasdasdasdasdasdads
              asdasdasdasdasdasdasdads
              <br></br>
              <br></br>
              -Kyle Perez
            </ListItem>
            <ListItem>
              <Avatar src={faker.image.avatar()} alt="avatar6" />
              jfkjskfjksadasdasdasdad
              adasdasdasdasdadasdadads
              asdasdasdasdasdasdasdads
              asdasdasdasdasdasdasdads
              <br></br>
              <br></br>
              -Felix Conway
            </ListItem>
          </List>
        </Col>
      </Row>
      <Row height={'400px'} background={'#f8f7f2'}>

      </Row>
    </Grid>
  )
}
export default HomePage;