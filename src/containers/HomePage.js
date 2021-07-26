import React from 'react';
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
    </Grid>
  )
}
export default HomePage;