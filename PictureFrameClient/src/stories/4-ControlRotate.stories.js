import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ControlRotate from '../components/ControlRotate';

export default {
  title: 'Rotate Control',
  component: ControlRotate,
};

export const Initial = () => <ControlRotate />;
export const Disabled = () => <ControlRotate disabled value={30} />;
export const WithValue = () => <ControlRotate value={50} />;
