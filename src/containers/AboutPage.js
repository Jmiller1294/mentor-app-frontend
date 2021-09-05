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
const MissionStatement = styled.p`
  text-align: center;
  font-size: 28px;
  margin: 30px 280px;
`
const LeadershipCon = styled.div`
  display: flex;
  justify-content: center;
  height: 400px;
  width: 100%;
`
const Leaders = styled.img`
  display: flex;
  flex-direction: column;
  height: 200px;
  width: 200px;
  margin: 30px;
`

const AboutPage = () => {

  return(
    <Grid>
      <Row height={'470px'}>
        <Col size={1}>
          <BackgroundImg src={backgroundPic}></BackgroundImg>
        </Col>
      </Row>
      <Row>
        <Col size={1}>
          <Header>Our Mission</Header>
          <MissionStatement>
            hghjghjgjhkhghjghjghjghjghgffffffff
            hghghjghjghjghjghjghjghjgjhgddddddd
            ghkjghjjghgjhghjghjghjghgjhgh
            dkjfksdfjkdsjfkdsjfkjskfjkfksd
            sfsdfdslfsdlfksdlfklsdkfldskf
            sdlfksdlfkldskfldskfldsklfkdsl
            sdfdsfdsfsdfsfsdfdsfsfsdfdssdf
          </MissionStatement>
        </Col>
      </Row>
      <Row>
       <LeadershipCon>
         <Leaders>

         </Leaders>
         <Leaders>

         </Leaders>
         <Leaders>
           
         </Leaders>
       </LeadershipCon>
      </Row>
    </Grid>
  )
}
export default AboutPage;