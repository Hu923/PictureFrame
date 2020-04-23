import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import UploadButton from './components/UploadButton';

const App: React.FC = () => {
  return (
    <Container className="p-3">
      <Jumbotron>
        <h1 className="header">
          Picture Frame React App
        </h1>
      </Jumbotron>
      <Form>
        <Form.Group>
          <Form.Label>Choose Image</Form.Label>
          <Form.File 
            id="image"
            label="Select"
            custom
          />
        </Form.Group>
        <UploadButton />
      </Form>
    </Container>
  );
};

export default App;
