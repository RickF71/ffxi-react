import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import React from 'react';
import { useState } from 'react';
import Job from './components/Job'
import Spells from './components/Spells';
import allJobs from './data/allJobs';
import { ButtonGroup, Button, Container, Row, Col } from 'react-bootstrap';

const App = () => {
  
  const JobButton = ({ allJob }) => (
      <Button
        variant="secondary" 
        onClick={() => setJobSelect(allJob.name)}
      >{allJob.name}</Button>
    
  );
  const JobButtons = ({jobType}) => (
    <>
      <ButtonGroup className="me-2">
        {allJobs.filter(allJob => allJob.type===jobType).map((allJob, index) => (
            <JobButton key={index} allJob={allJob} />
        ))}
      </ButtonGroup>
    </>
  );

  const [jobSelect, setJobSelect] = useState('WAR');
  return (
    <div className="App">
      <h1>FFXI</h1>
      <Container>
        <JobButtons jobType='basic' jobSelected={jobSelect} />
        <JobButtons  jobType='advanced' />
      </Container>
      { jobSelect ? (
        <>
          <Container style={{ marginTop:'20px'}}>
            <Row>
              <Col><Job name={jobSelect} /></Col>
              <Col><Spells name={jobSelect} /></Col>
            </Row>
          </Container>
        </>
      ) : (
        <>
          <h2>No Job Selected</h2>
        </>
      )}
    </div>
  );
}

export default App;
