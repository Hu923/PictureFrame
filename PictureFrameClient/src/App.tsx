import React, { useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import UploadButton from './components/UploadButton';
import ImageEditor from './components/ImageEditor';
import ResultView from './components/ResultView';
import CONFIG from './config'

const App: React.FC = () => {
  const [processedImage, setProcessedImage] = useState('');
  const [selectedImage, setSelectedImage] = useState('');
  const [resultImage, setResultImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);

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

  const onUpload = () => {
    const API_BASE: string = CONFIG.API_BASE;
    const PORT: number = CONFIG.PORT;
    setUploading(true);
    setResultImage('');
    
    axios.post(`${API_BASE}:${PORT}`, {
      base64image: processedImage
    })
    .then((response) => {
      console.log(response);
      setUploading(false);
      setResultImage(response.data.url);
    })
    .catch((error) => {
      console.log(error);
      setUploading(false);
    });
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
        <Form.Group>
        <UploadButton disabled={!processedImage || loading} uploading={uploading} onClick={onUpload} />
        </Form.Group>
        <Form.Group>
          <ResultView src={resultImage} />
        </Form.Group>
      </Form>
    </Container>
  );
};

export default App;
