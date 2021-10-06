import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from '../components/styled/Grid';
import backgroundPic from '../assets/background-pic1.jpg';
import profilePic from '../assets/profile-img.jpg';
import leadershipPic1 from '../assets/leadership-pic1.jpg';
import leadershipPic2 from '../assets/leadership-pic2.jpg';
import logo1 from '../assets/google.svg';
import logo2 from '../assets/youtube.svg';
import logo3 from '../assets/nasa.svg';
import logo4 from '../assets/tesla.svg';
import logo5 from '../assets/microsoft.svg';
import logo6 from '../assets/amazon.svg';
import breakpoint from '../commons/breakpoints';

const Header = styled.h1`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  margin-top: 150px;
  margin-bottom: 0;
  font-size: 50px;

  @media only screen and (${breakpoint.device.tablet}){
    font-size: 28px;
    margin-top: 50px;
  }
`
const ImageCon = styled.div`
  display: flex;
  position: relative;
  text-align: center;
  color: white;
`
const BackgroundImg = styled.img`
  width: 100%;
  height: 600px;

  @media only screen and (${breakpoint.device.tablet}){
    height: 300px;
  } 
`

const ImageHeader = styled.h1`
  font-size: 80px;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media only screen and (${breakpoint.device.phone}){
    top: 40%;
    font-size: 50px;
  } 
`
const MissionStatement = styled.p`
  line-height: 1.7;
  height: 'auto';
  width: 100%;
  flex-wrap: wrap;
  text-align: center;
  font-size: 28px;
  padding: 10px 285px;

  @media only screen and (${breakpoint.device.tablet}){
    padding: 20px;
    font-size: 16px;
  } 
`
const LeadershipCon = styled.div`
  display: flex;
  height: auto;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`
const Leaders = styled.img`
  display: flex;
  flex-direction: column;
  height: 200px;
  width: 180px;
`
const LeaderName = styled.span`
  font-weight: bold;
  margin-top: 10px;
`
const LeaderTitle = styled.span`
  display: flex;
`
const Bio = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin: 35px;
`
const PartnersCon = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;
  margin-bottom: 200px;
`
const Line = styled.hr`
  width: 5%;
  height: 7px;
  margin-bottom: 100px;
  background-color: #FF9531;

  @media only screen and (${breakpoint.device.tablet}){
    margin-bottom: 50px;
  } 
`
const Logo = styled.img`
  width: 25%;
  height: 60px;
  margin: 20px;
`

const AboutPage = () => {

  return(
    <Grid>
      <Row height={'auto'}>
        <Col size={1}>
          <ImageCon>
            <BackgroundImg src={backgroundPic}></BackgroundImg>
            <ImageHeader>About</ImageHeader>
          </ImageCon>
        </Col>
      </Row>
      <Row height={'auto'}>
        <Col size={1}>
          <Header>Our Mission</Header>
          <Line />
          <MissionStatement>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          In eu mi bibendum neque. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Natoque penatibus et magnis dis parturient montes. 
          Nunc faucibus a pellentesque sit amet. Consectetur adipiscing elit ut aliquam purus sit. Accumsan in nisl nisi scelerisque eu. 
          Quam viverra orci sagittis eu volutpat odio facilisis mauris sit. Semper risus in hendrerit gravida rutrum.  
          </MissionStatement>
        </Col>
      </Row>
      <Row height={'auto'}>
        <Col size={1}>
          <Header>Our Team</Header>
          <Line />
          <LeadershipCon>
            <Bio>
              <Leaders src={profilePic} />
              <LeaderName>Justin Miller</LeaderName>
              <LeaderTitle>CEO & Founder</LeaderTitle>
            </Bio>
            <Bio>
              <Leaders src={leadershipPic2} />
              <LeaderName>Mary Smith</LeaderName>
              <LeaderTitle>COO</LeaderTitle>
            </Bio>
            <Bio>
              <Leaders src={leadershipPic1} />
              <LeaderName>Jason Lee</LeaderName>
              <LeaderTitle>CTO</LeaderTitle>
            </Bio>
          </LeadershipCon>
        </Col>
      </Row>
      <Row height={'auto'}>
        <Col size={1}>
          <Header>Partners</Header>
          <Line />
          <PartnersCon>
            <Logo src={logo1}/>
            <Logo src={logo2}/>
            <Logo src={logo3}/>
            <Logo src={logo4}/> 
            <Logo src={logo5}/>
            <Logo src={logo6}/>
          </PartnersCon>
        </Col>
      </Row>
    </Grid>
  )
}
export default AboutPage;