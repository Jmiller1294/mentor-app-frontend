import React from 'react';
import styled from 'styled-components';
import Careers from '../components/Careers';
import { fields } from '../data/fields';

const CareersCon = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  height: 1000px;
  padding: 50px 200px;
`

const CareersPage = () => {
  return(
    <CareersCon>
      {fields.map( field => 
        <Careers title={field.title} careers={field.jobs}/>
      )}
    </CareersCon>
  )
}
export default CareersPage;