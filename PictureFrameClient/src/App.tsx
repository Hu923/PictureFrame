import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import UploadButton from './components/UploadButton';
import ImageEditor from './components/ImageEditor';

const App: React.FC = () => {
  const [processedImage, setProcessedImage] = useState('');
  const [selectedImage, setSelectedImage] = useState('');
  const [loading, setLoading] = useState(false);

  const onSelectFile = (e: any) => {
    setLoading(true);
    setSelectedImage(URL.createObjectURL(e.target.files[0]));
  }
  const onFinishProcess = (src: any, err: any) => {
    if (err) {
      console.log(err);
    } else {
      setProcessedImage(src);
    }
    setLoading(false);
  }
  const onProcessing = (processing: boolean) => {
    setLoading(processing);
  }

  return (
    <Container className="p-3">
      <Form>
        <Form.Group>
          <Form.Label>Choose Image</Form.Label>
          <Form.File 
            id="image"
            label="Select"
            custom
            onChange={onSelectFile}
          />
        </Form.Group>
        <Form.Group>
          <ImageEditor src={selectedImage} onFinishProcess={onFinishProcess} onProcessing={onProcessing} />
        </Form.Group>
        <UploadButton disabled={!processedImage || loading} />
      </Form>
    </Container>
  );
};

export default App;
