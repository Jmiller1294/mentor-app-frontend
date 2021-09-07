import React, { useState, useEffect } from 'react';
import Mentor from '../components/mentor';
import SearchBar from '../components/SearchBar';
import styled from 'styled-components';
import { Col, Grid, Row } from '../components/styled/Grid';


const List = styled.ul`
  display: flex;  
  flex-direction: column;
  list-style: none;
  padding: 0;
`
const MentorCount = styled.h2`
  margin-left: 35px;
`

const MentorsPage = () => {
  const [mentors, setMentors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/mentors')
    .then(resp => resp.json())
    .then(data => setMentors(data))
    .catch((error) => console.error('Error:', error))
  },[])

  const handleChildClick = (term) => {
    setSearchTerm(term)
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
  else {
    return <h3>...Loading</h3>
  }
}
export default MentorsPage;

