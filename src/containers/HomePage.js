import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import {Grid, Row, Col }from '../components/styled/Grid';
import { BackgroundImage }from '../components/styled/BackgroundImage';
import ContactForm from '../components/ContactForm';
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
import peopleIcon from '../assets/people.svg';
import breiefcaseIcon from '../assets/briefcase.svg';
import calenderIcon from '../assets/calender.svg';
import schoolIcon from '../assets/school.svg';
import instagram from '../assets/instagram.png';
import linkedIn from '../assets/linkedIn.png';
import twitter from '../assets/twitter.png';
import youtube from '../assets/youtube.png';
import github from '../assets/github.png';
import breakpoint from '../commons/breakpoints';

const faker = require('faker');

const Header = styled.h1`
  font-size: 40px;
  font-weight: 300;
  text-transform: uppercase;
  color: #005776;
  margin: 200px auto;
  text-align: center;

  @media only screen and (${breakpoint.device.phone}){
    font-size: 30px;
    margin: 150px auto;
  }
`
const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin: 75px 0;
`
const Card = styled.div`
  text-align: center;
  height: 400px;
  width: 400px;
  margin: 10px;

  @media only screen and (${breakpoint.device.phone}){
    height: 470px;
    width: 250px;
    margin: 20px;
  }

  @media only screen and (${breakpoint.device.laptop}){
    margin: 35px 10px;
    flex-direction: column;
  }
`
const CardAvatar = styled.img`
  height: 60%;
  width: 100%;
`
const CardDescription = styled.p`
  display: flex;
  flex-direction: column;
  height: 40%;
  width: 100%;
  overflow: hidden;
  line-height: 2.5;
  overflow-wrap: break-word; 

  @media only screen and (${breakpoint.device.phone}){
    margin-bottom: 0;
  }
`
const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 30px;

  @media only screen and (${breakpoint.device.phone}){
    margin-top: 5px;
  }
`
const Logo = styled.img`
  height: 35px;
  width: 180px;
  justify-content: space-between;
  margin: 5px 35px 15px 35px;
  
  @media only screen and (${breakpoint.device.phone}){
    margin-top: 20px;
  }
`
const TestimonialList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-left: 40px;
  margin-right: 40px;
  column-gap: 10px;
  padding-left: 0;
`
const TestimonialItem = styled.li`
  height: auto;
  flex-basis: 32%;
  margin: 5px;
  padding: 55px;

  @media only screen and (${breakpoint.device.phone}){
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0;
    flex-basis: 100%;
  }

  @media only screen and (${breakpoint.device.tablet}){
    padding: 0;
    margin: 30px;
  }
`
const CityList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-left: 40px;
  margin-right: 40px;
  column-gap: 10px;
  padding-left: 0;

  @media only screen and (${breakpoint.device.phone}){
   margin: 5px;
  }
`
const CityItem = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 16%;
  margin: 20px;
  padding: 5px;

  @media only screen and (${breakpoint.device.phone}){
    width: 100%;
  }

  @media only screen and (${breakpoint.device.tablet}){
    padding: 0;
    width: 60%;
  }

  @media only screen and (${breakpoint.device.laptop}){
    width: 40%;
  }
`
const CityImage = styled.img`
  width: 100%;
  height: 150px;
`
const CityName = styled.span`
  font-weight: bold;
  font-size: 20px;
  margin: 10px 0;
`
const Icon = styled.img`
  display: flex;
  height: 25px;
  width: 25px;
  margin: 5px;

  @media only screen and (${breakpoint.device.phone}){
    margin-bottom: 10px;
    margin-top: 11px;
  }
`
const IconText = styled.span`
  display: flex;
  font-weight: bold;
  font-size: 17px;
  height: 25px;
  width: 100;
  margin-top: 5px;
  margin-bottom: 5px;
  top: -20px;
  right: -40px;

  @media only screen and (${breakpoint.device.phone}){
    margin-bottom: 15px;
  }
`
const IconImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 25%;
`
const IconTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 5px;
  padding-top: 5px;
  height: 100%;
  width: 100%;
`
const IconContainer = styled.div`
  display: flex;
  width: 100%;
  height: 220px;
  position: relative;
`
const Avatar = styled.img`
  display: block;
  height: 100px;
  width: 100px;
  border-radius: 50px;
  margin-bottom: 20px;
`
const CardDesc = styled.p`
  
`
const Footer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-left: 0;
  flex-wrap: wrap;

  @media only screen and (${breakpoint.device.phone}){
    justify-content: space-between;
    margin-left: 15px;
    margin-right: 15px;
  }
`
const FooterIcon = styled.img`
  height: 35px;
  margin: 10px 75px;

  @media only screen and (${breakpoint.device.phone}){
    height: 25px;
    width: 25px;
    margin: 5px;
  }
`


const HomePage = () => {
  const [testimonials, setTestimonials] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:3001/mentors')
    .then(resp => resp.json())
    .then(data => setTestimonials(data.slice(0, 6)))
    .catch((error) => console.error('Error:', error))
  },[])

  
  if(testimonials && testimonials.length !== 0) 
    return (
      <Grid>
        <Row>
          <Col size={1}>
            <BackgroundImage src={Background}/>
          </Col>
        </Row>
        <Row>
          <Col size={1}>
            <Header>Where young professionals <br></br>can find Mentors</Header>
          </Col>
        </Row>
        <Row background={'#f8f7f2'} height={'auto'}>
          <Col size={1}>
            <CardContainer>
              <Card>
                <CardAvatar src={Pic1} />
                <CardDescription>
                  Meet and network with professionals in your field.
                  We host weekly events that in major cities around the country.
                  This is a great opportunity to meet new people.
                </CardDescription>
              </Card>
              <Card>
                <CardAvatar src={Pic2} />
                <CardDescription>
                  We help turn new graduates into career professionals.
                  By helping members develop the skills 
                  crucial to thriving in your career path. Get started now!
                </CardDescription>
              </Card>
              <Card>
                <CardAvatar src={Pic3} />
                <CardDescription>
                  We offer materials to help develop you 
                  into a perfect canidate for potential jobs. We over a 
                  range of career developemnt classes in person and online.
                </CardDescription>
              </Card>
            </CardContainer>
          </Col>
        </Row>
        <Row>
          <Col size={1}>
            <h3 style={{textAlign: 'center', margin: '50px'}}>AS FEATURED IN</h3>
          </Col>
        </Row>
        <Row>
          <Col size={1}>
            <LogoContainer>
              <Logo src={logo1} alt="logo1" />
              <Logo src={logo2} alt="logo2" />
              <Logo src={logo3} alt="logo3" />
              <Logo src={logo4} alt="logo4" />
              <Logo src={logo5} alt="logo5" />
            </LogoContainer>
          </Col>
        </Row>
        <Row>
          <Col size={1}>
            <h2 style={{margin: '35px'}}>Testimonials</h2>
          </Col>
        </Row>
        <Row>
          <Col size={1}>
            <TestimonialList>
              <TestimonialItem>
                <Avatar src={testimonials[0].avatar} alt="avatar1" />  
                Mentors changed my life without
                this program I dont Know where 
                I would be. This website helped 
                get on the right track.
                <br></br>
                <br></br>
                - {testimonials[0].name}
              </TestimonialItem>
              <TestimonialItem>
                <Avatar  src={testimonials[1].avatar} alt="avatar2" />
                Mentors.com is a great website. This
                is an easy way to get paired up 
                with mentors an jumpstart your career.
                You will not regret making the decision.
                <br></br>
                <br></br>
                - {testimonials[1].name}
              </TestimonialItem>
              <TestimonialItem>
                <Avatar  src={testimonials[2].avatar} alt="avatar3" />
                This website is essential for finding 
                finding something in your field. Being able to 
                talk to people who have proven experience.
                <br></br>
                <br></br>
                - {testimonials[2].name}
              </TestimonialItem>
              <TestimonialItem>
                <Avatar src={testimonials[3].avatar} alt="avatar4" />
                The events that mentors.com hosts are 
                great ways to network and meet people.
                I waas able to connect with a mentor and land
                my dream job!
                <br></br>
                <br></br>
                - {testimonials[3].name}
              </TestimonialItem>
              <TestimonialItem>
                <Avatar  src={testimonials[4].avatar} alt="avatar5" />
                After graduating college I was lost 
                and I needed some guidance. Mentor.com
                helped me find a mentor and start to 
                get the advice I needed to get a job.
                <br></br>
                <br></br>
                - {testimonials[4].name}
              </TestimonialItem>
              <TestimonialItem>
                <Avatar  src={testimonials[5].avatar} alt="avatar6" />
                <CardDesc>
                Mentors are an important part of 
                become a career professional. Thats why
                I joined. I dont regret taking the step 
                and connecting.
                <br></br>
                <br></br>
              - {testimonials[5].name}
                </CardDesc>
              </TestimonialItem>
            </TestimonialList>
          </Col>
        </Row>
        <Row background={'#f8f7f2'}>
          <Col size={1}>
            <CityList>
              <CityItem>
                  <CityImage src={cityImg1}></CityImage>
                  <CityName>New York</CityName>
                  <IconContainer>
                    <IconImageContainer>
                      <Icon src={peopleIcon}></Icon>
                      <Icon src={breiefcaseIcon}></Icon>
                      <Icon src={calenderIcon}></Icon>
                      <Icon src={schoolIcon}></Icon>
                    </IconImageContainer>
                  <IconTextContainer>
                    <IconText>3800+ Members</IconText>
                    <IconText>900+ Jobs Landed</IconText>
                    <IconText>300 Local Events</IconText>
                    <IconText>100 Mentors</IconText>
                  </IconTextContainer>
                </IconContainer>
              </CityItem>
              <CityItem>
                  <CityImage src={cityImg5}></CityImage>
                  <CityName>Los Angeles</CityName>
                  <IconContainer>
                    <IconImageContainer>
                      <Icon src={peopleIcon}></Icon>
                      <Icon src={breiefcaseIcon}></Icon>
                      <Icon src={calenderIcon}></Icon>
                      <Icon src={schoolIcon}></Icon>
                    </IconImageContainer>
                    <IconTextContainer>
                      <IconText>1200+ Members</IconText>
                      <IconText>400+ Jobs Landed</IconText>
                      <IconText>100 Local Events </IconText>
                      <IconText>200 Mentors</IconText>
                    </IconTextContainer>
                </IconContainer>
              </CityItem>
              <CityItem>
                  <CityImage src={cityImg3}></CityImage>
                  <CityName>Chicago</CityName>
                  <IconContainer>
                    <IconImageContainer>
                      <Icon src={peopleIcon}></Icon>
                      <Icon src={breiefcaseIcon}></Icon>
                      <Icon src={calenderIcon}></Icon>
                      <Icon src={schoolIcon}></Icon>
                    </IconImageContainer>
                  <IconTextContainer>
                    <IconText>1800+ Members</IconText>
                    <IconText>300+ Jobs Landed</IconText>
                    <IconText>100 Local Events</IconText>
                    <IconText>200 Mentors</IconText>
                  </IconTextContainer>
                </IconContainer>
              </CityItem>
              <CityItem>
                  <CityImage src={cityImg2}></CityImage>
                  <CityName>Houston</CityName>
                  <IconContainer>
                    <IconImageContainer>
                      <Icon src={peopleIcon}></Icon>
                      <Icon src={breiefcaseIcon}></Icon>
                      <Icon src={calenderIcon}></Icon>
                      <Icon src={schoolIcon}></Icon>
                    </IconImageContainer>
                  <IconTextContainer>
                    <IconText>1000+ Members</IconText>
                    <IconText>250+ Jobs Landed</IconText>
                    <IconText>90 Local Events</IconText>
                    <IconText>150 Mentors</IconText>
                  </IconTextContainer>
                </IconContainer>
              </CityItem>
              <CityItem>
                  <CityImage src={cityImg4}></CityImage>
                  <CityName>Atlanta</CityName>
                  <IconContainer>
                    <IconImageContainer>
                      <Icon src={peopleIcon}></Icon>
                      <Icon src={breiefcaseIcon}></Icon>
                      <Icon src={calenderIcon}></Icon>
                      <Icon src={schoolIcon}></Icon>
                    </IconImageContainer>
                  <IconTextContainer>
                    <IconText>1000+ Members</IconText>
                    <IconText>200+ Jobs Landed</IconText>
                    <IconText>75 Local Events</IconText>
                    <IconText>90 Mentors</IconText>
                  </IconTextContainer>
                </IconContainer>
              </CityItem>
            </CityList>
          </Col>
        </Row>
        <Row height={'650px'}>
          <Col size={1}>
            <ContactForm />
          </Col>
        </Row>
        <Row background={'#f8f7f2'}>
          <Col size={1}>
            <Footer>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" ><FooterIcon src={instagram}/></a>
              <a href="https://www.linkedin.com/in/justinmiller92/" target="_blank" rel="noreferrer" ><FooterIcon src={linkedIn}/></a>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer"><FooterIcon src={twitter}/></a>
              <a href="https://www.youtube.com/channel/UCQeSn6i6siaUjXyctSDA3Mw" target="_blank" rel="noreferrer"><FooterIcon src={youtube}/></a>
              <a href="https://github.com/Jmiller1294/mentor-app-frontend" target="_blank" rel="noreferrer"><FooterIcon src={github}/></a>
            </Footer>
          </Col>
        </Row>
      </Grid>
    )
    else return null;
}
export default HomePage;