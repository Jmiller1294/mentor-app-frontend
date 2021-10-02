import React, { useState, useEffect } from 'react';
import Mentor from '../components/Mentor';
import SearchBar from '../components/SearchBar';
import Loader from '../components/Loader';
import styled from 'styled-components';
import { Col, Grid, Row } from '../components/styled/Grid';
import breakpoint from '../commons/breakpoints';


const List = styled.ul`
  display: flex;  
  flex-direction: column;
  list-style: none;
  padding: 0;

  @media only screen and (${breakpoint.device.phone}){
    margin-top: 0;
  }
`
const MentorCount = styled.h2`
  margin-left: 35px;
  margin-bottom: 35px;

  @media only screen and (${breakpoint.device.phone}){
    text-align: center;
    font-size: 20px;
    margin-left: 0;
    margin-bottom: 70px;
  }
`
const LoaderCon = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`
const Message = styled.h2`
  display: flex;
  justify-content: center;
`

const MentorsPage = () => {
  const [mentors, setMentors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count)
    fetch('http://localhost:3001/mentors')
    .then(resp => resp.json())
    .then(data => setMentors(data))
    .catch((error) => console.error('Error:', error))
  },[])

  const handleChildClick = (term) => {
    setSearchTerm(term)
  }

  const handleParentCallback = (count) => {
    console.log(count)
    setCount(count);
  }

  let filteredItems = (mentors.filter(mentor => {
    return mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) 
    || mentor.city.toLowerCase().includes(searchTerm.toLowerCase()) 
    || mentor.title.toLowerCase().includes(searchTerm.toLowerCase()) 
  }))

  if(filteredItems && filteredItems.length !== 0) {
    return(
      <Grid>
        <Row>
          <Col size={1}>
            <SearchBar 
              onChildClick={(term) => handleChildClick(term)} 
              text="Search by Mentor, City, or Industry"
            />
          </Col>
        </Row>
        <Row>
          <Col size={1}>
            <List>
              <MentorCount>{filteredItems.length} Mentors Available</MentorCount>
                {filteredItems.map(mentor => 
                  <Mentor 
                    key={mentor.id}
                    mentor={mentor}
                  />
                )}
            </List>
          </Col>
        </Row>
      </Grid>
    )
  }
  else if(count > 1) {
    return(
      <Grid>
        <Row>
          <Col size={1}>
            <SearchBar 
              onChildClick={(term) => handleChildClick(term)} 
              text="Search by Mentor, City, or Industry"
            />
          </Col>
        </Row>
        <Row>
          <Col size={1}>
            <List>
              <Message>No Mentors Found</Message>
            </List>
          </Col>
        </Row>
      </Grid>
    )
  }
  else {
    return <LoaderCon><Loader parentCallback={(count) => handleParentCallback(count)} /></LoaderCon>
  }
}
export default MentorsPage;

