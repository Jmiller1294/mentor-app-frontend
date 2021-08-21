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
import cityImg1 from '../assets/newYork.jpg';
import cityImg2 from '../assets/houston.jpg';
import cityImg3 from '../assets/chicago.jpg';
import cityImg4 from '../assets/atlanta.jpg';
import cityImg5 from '../assets/losAngeles.jpg';
import icon1 from '../assets/instagram.png';
import icon2 from '../assets/linkedIn.png';
import icon3 from '../assets/twitter.png';
import icon4 from '../assets/youtube.png';
import icon5 from '../assets/github.png';



const faker = require('faker');

const Header = styled.h1`
  display: flex;
  font-size: 40px;
  font-weight: 300;
  text-transform: uppercase;
  color: #005776;
  margin-top: 100px;
  text-align: center;
  flex-direction: col;
`
const Logo = styled.img`
  height: 35px;
  width: 150px;
  justify-content: space-between;
  margin: 0 35px 0 35px;
`
const List = styled.ul`
  height: 100%;
  width: 100%;
  display: flex;
  list-style: none;
`
const ListItem = styled.li`
  height: 150px;
  flex-basis: 33%;
  padding: 10px;
`
const Avatar = styled.img`
  display: block;
  height: 100px;
  width: 100px;
  border-radius: 50px;
  margin-bottom: 20px;
`
const CityCard = styled.div`
  height: 300px;
  width: 250px;
`
const CardImage = styled.img`
  width: 100%;
  height: 50%;
`

const CardDesc = styled.p`
  display: block;
`

const Footer = styled.ul`
  list-style: none;
  float: left;
`
const FooterIcon = styled.img`
  height: 35px;
  margin-left: 100px;
`
const Featured = styled.h3`
  
`
const Testimonials = styled.h3`
 
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
        <Col size={1} justify={'center'}>
          <Header>Where young professionals <br></br>can find Mentors</Header>
        </Col>
      </Row>
      <Row padding={'0 40px 0 40px'} height={'auto'} background={'#f8f7f2'}>
        <Col size={1}>
          <Card>
            <CardAvatar src={Pic1} />
            <CardDescription>
              Meet and network with professionals in your field.
              We host weekly events that in major cities around the country.
              This is a great opportunity to meet new people.
            </CardDescription>
          </Card>
        </Col>
        <Col size={1}>
          <Card>
            <CardAvatar src={Pic2} />
            <CardDescription>
              We help turn new graduates into career professionals.
              By helping members develop the skills 
              crucial to thriving in your career path. Get started now!
            </CardDescription>
          </Card>
        </Col>
        <Col size={1}>
          <Card>
            <CardAvatar src={Pic3} />
            <CardDescription>
              We offer materials to help develop you 
              into a perfect canidate for potential jobs. We over a 
              range of career developemnt classes in person and online.
            </CardDescription>
          </Card>
        </Col>
      </Row>
      <Row height={'100px'} padding={'20px 40px 45px 20px'}>
        <Col size={1} justify={'center'}>
          <Featured>AS FEATURED IN</Featured>
        </Col>
      </Row>
      <Row height={'200px'} padding={'0 40px 0 40px'}>
        <Col size={2} justify={'center'}>
          <Logo src={logo1} alt="logo1" />
          <Logo src={logo2} alt="logo2" />
          <Logo src={logo3} alt="logo3" />
          <Logo src={logo4} alt="logo4" />
          <Logo src={logo5} alt="logo5" />
        </Col>
      </Row>
      <Row height={'100px'}>
        <Col size={1} justify={'center'}>
          <Testimonials>Testimonials</Testimonials>
        </Col>
      </Row>
      <Row height={'470px'}>
        <Col size={1} justify={'center'} direction={'column'} wrap={'wrap'}>
          <List>
            <ListItem>
              <Avatar alt="avatar1" />  
              Mentors changed my life without
              this program I dont Know where 
              I would be. This website helped 
              get on the right track.
              <br></br>
              <br></br>
              - John Smith
            </ListItem>
            <ListItem>
              <Avatar  alt="avatar2" />
              Mentors.com is a great website. This
              is an easy way to get paired up 
              with mentors an jumpstart your career.
              You will not regret making the decision.
              <br></br>
              <br></br>
              -Alex Miller
            </ListItem>
            <ListItem>
              <Avatar  alt="avatar3" />
              This website is essential for finding 
              finding something in your field. Being able to 
              talk to people who have proven experience.
              <br></br>
              <br></br>
              -Dustin Wilson
            </ListItem>
            <ListItem>
              <Avatar  alt="avatar4" />
              The events that mentors.com hosts are 
              great ways to network and meet people.
              I waas able to connect with a mentor and land
              my dream job!
              <br></br>
              <br></br>
              -Max Filmore
            </ListItem>
            <ListItem>
              <Avatar  alt="avatar5" />
              After graduating college I was lost 
              and I needed some guidance. Mentor.com
              helped me find a mentor and start to 
              get the advice I needed to get a job.
              <br></br>
              <br></br>
              -Kyle Perez
            </ListItem>
            <ListItem>
              <Avatar  alt="avatar6" />
              Mentors are an important part of 
              become a career professional. Thats why
              I joined. I dont regret taking the step 
              and connecting.
              <br></br>
              <br></br>
              -Felix Conway
            </ListItem>
          </List>
        </Col>
      </Row>
      <Row height={'280px'}>
        <Col size={1}>
          
        </Col>
      </Row>
      <Row height={'400px'} background={'#f8f7f2'} padding={'40px 40px 0 40px'}>
        <Col size={1} wrap={'wrap'}>
          <List>
            <ListItem>
              <CityCard>
                <CardImage src={cityImg1}></CardImage>
                New York
                <CardDesc>
                  cjkhjckhjvjcvxhjxhcc
                  xvxcvxcvxcvxcvxvvxcv
                  xcvxcvxcvxcvxcvxcvxcv
                  xvxcvxcvxcvxcvxvvxvxc
                  fsdfdsfdsfsdfsdfsdfds
                  sdfsdfsdfsdfsdfsdfdfsfds
                </CardDesc>
              </CityCard>
            </ListItem>
            <ListItem>
              <CityCard>
                <CardImage src={cityImg5}></CardImage>
                Los Angeles
                <CardDesc>
                  cjkhjckhjvjcvxhjxhcc
                  xvxcvxcvxcvxcvxvvxcv
                  xcvxcvxcvxcvxcvxcvxcv
                  xvxcvxcvxcvxcvxvvxvxc
                  fsdfdsfdsfsdfsdfsdfds
                  sdfsdfsdfsdfsdfsdfdfsfds
                </CardDesc>
              </CityCard>
            </ListItem>
            <ListItem>
              <CityCard>
                <CardImage src={cityImg3}></CardImage>
                Chicago
                <CardDesc>
                  cjkhjckhjvjcvxhjxhcc
                  xvxcvxcvxcvxcvxvvxcv
                  xcvxcvxcvxcvxcvxcvxcv
                  xvxcvxcvxcvxcvxvvxvxc
                  fsdfdsfdsfsdfsdfsdfds
                  sdfsdfsdfsdfsdfsdfdfsfds
                </CardDesc>
              </CityCard>
            </ListItem>
            <ListItem>
              <CityCard>
                <CardImage src={cityImg2}></CardImage>
                Houston
                <CardDesc>
                  cjkhjckhjvjcvxhjxhcc
                  xvxcvxcvxcvxcvxvvxcv
                  xcvxcvxcvxcvxcvxcvxcv
                  xvxcvxcvxcvxcvxvvxvxc
                  fsdfdsfdsfsdfsdfsdfds
                  sdfsdfsdfsdfsdfsdfdfsfds
                </CardDesc>
              </CityCard>
            </ListItem>
            <ListItem>
              <CityCard>
                <CardImage src={cityImg4}></CardImage>
                Atlanta
                <CardDesc>
                  cjkhjckhjvjcvxhjxhcc
                  xvxcvxcvxcvxcvxvvxcv
                  xcvxcvxcvxcvxcvxcvxcv
                  xvxcvxcvxcvxcvxvvxvxc
                  fsdfdsfdsfsdfsdfsdfds
                  sdfsdfsdfsdfsdfsdfdfsfds
                </CardDesc>
              </CityCard>
            </ListItem>
          </List>
        </Col>
      </Row>
      <Row height={'400px'}>

      </Row>
      <Row height={'70px'} background={'#f8f7f2'}>
        <Col size={1}>
          <Footer>
            <FooterIcon src={icon1}/>
            <FooterIcon src={icon2}/>
            <FooterIcon src={icon3}/>
            <FooterIcon src={icon4}/>
            <FooterIcon src={icon5}/>
          </Footer>
        </Col>
      </Row>
    </Grid>
  )
}
export default HomePage;