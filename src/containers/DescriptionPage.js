import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { Grid, Row, Col } from '../components/styled/Grid';

const DescriptionCon = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid grey;
`
const EventImage = styled.img`
  display: flex;
  height: 300px;
  width: 60%;
`
const EventInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  
`
const EventTitle = styled.h2`
  margin-bottom: 2px;
`
const ButtonCon = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 60px;
  margin-top: 10px;
  border-bottom: 1px solid grey;
`
const Button = styled.button`
  height: 50px;
  width: 300px;
  font-size: 16px;
  letter-spacing: 2px;
  flex-direction: flex-end;
  background-color: orange;
`
const Header = styled.h2`

`
const Text = styled.span`
  margin-top: 5px;
`

const DescriptionPage = (props) => {
  const history = useHistory();

  const newRoute = () => { 
    let path = `/registration`; 
    history.push({
      pathname: path,
      state: {
        event: props.location.state.data.event
      }
    });
  }

  const handleClick = (event) => {
    event.preventDefault();
    newRoute();
  }

  console.log(props.location.state.data.image)
  return(
    <Grid margin={'100px 200px'}>
      <Row height={'auto'}>
        <Col size={1}>
          <DescriptionCon>
            <EventImage src={`http://localhost:3001/${props.location.state.data.image}`}/>
            <EventInfo>
              <EventTitle>{props.location.state.data.event.name}</EventTitle>
              <Text>{props.location.state.data.event.date} at, {props.location.state.data.event.time}<br /></Text>
              <Text>in {props.location.state.data.event.location}</Text>
            </EventInfo>
          </DescriptionCon>
        </Col>
      </Row>
      <Row height={'auto'}>
        <Col size={1}>
          <ButtonCon>
          <Button onClick={(e) => handleClick(e)}>Register</Button>
          </ButtonCon>
        </Col>
      </Row>
      <Row height={'400px'}>
        <Col size={1}>
          <Header>Description</Header>
          <p>{props.location.state.data.event.description}</p>
        </Col>
      </Row>
    </Grid>
  )
}
export default DescriptionPage;