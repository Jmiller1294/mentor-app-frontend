import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from '../components/styled/Grid';

const Header = styled.h1`
  display: flex;
  justify-content: center;
`

const AboutPage = () => {

  return(
    <Grid>
      <Row>
        <Col size={1}>
          <Header>Our Mission</Header>
        </Col>
      </Row>
    </Grid>
  )
}
export default AboutPage;