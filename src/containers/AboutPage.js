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
import logo7 from '../assets/facebook.svg';
import logo8 from '../assets/nba.svg';

const Header = styled.h1`
  display: flex;
  justify-content: center;
  margin-top: 150px;
  margin-bottom: 0;
  font-size: 50px;
`
const BackgroundImg = styled.img`
  width: 100%;
  height: 100%;
`
const MissionStatement = styled.p`
  height: 'auto';
  text-align: center;
  font-size: 28px;
  padding: 10px 285px;
`
const LeadershipCon = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: auto;
  width: 100%;
  margin: 20px;
`
const Leaders = styled.img`
  display: flex;
  flex-direction: column;
  height: 200px;
  width: 200px;
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
  flex-wrap: wrap;
  justify-content: center;
  height: auto;
  width: 100%;
  padding: 45px;
`
const Line = styled.hr`
  width: 5%;
  height: 7px;
  background-color: orange;
`
const Logo = styled.img`
  width: 20%;
  height: 50px;
  margin: 20px;
`

const AboutPage = () => {

  return(
    <Grid margin={'0 0 150px 0'}>
      <Row height={'500px'}>
        <Col size={1}>
          <BackgroundImg src={backgroundPic}></BackgroundImg>
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
      <Row height={'520px'}>
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
            <Logo src={logo7}/>
            <Logo src={logo8}/>
          </PartnersCon>
        </Col>
      </Row>
    </Grid>
  )
}
export default AboutPage;