import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {Grid, Row, Col }from '../components/styled/Grid';
import { BackgroundImage }from '../components/styled/BackgroundImage';
import ContactForm from '../components/ContactForm';
import Testimonial from '../components/Testimonial';
import City from '../components/City';
import Background from '../assets/background.jpg';
import Pic1 from '../assets/pic1.jpg';
import Pic2 from '../assets/pic2.jpg';
import Pic3 from '../assets/pic3.jpg';
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
import logo4 from '../assets/logo4.png';
import logo5 from '../assets/logo5.png';
import instagram from '../assets/instagram.png';
import linkedIn from '../assets/linkedIn.png';
import twitter from '../assets/twitter.png';
import youtube from '../assets/youtube.png';
import github from '../assets/github.png';
import testimonialText from '../data/testimonials';
import cities from '../data/cities';
import breakpoint from '../commons/breakpoints';


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
              {testimonials.map((testimonial, index) => 
                <Testimonial 
                  key={index} 
                  testimonial={testimonial} 
                  text={testimonialText[index]} 
                />
              )}
            </TestimonialList>
          </Col>
        </Row>
        <Row background={'#f8f7f2'}>
          <Col size={1}>
            <CityList>
                {cities.map((city, index) => <City key={index} city={city}/>)}
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