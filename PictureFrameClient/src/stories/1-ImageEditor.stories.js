import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageEditor from '../components/ImageEditor';
import Catalina from '../assets/catalina.jpg';

export default {
  title: 'ImageEditor',
  component: ImageEditor,
};

export const Initial = () => <ImageEditor src={null} />;
export const WithSrc = () => <ImageEditor src={Catalina} />;
