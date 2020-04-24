import React from 'react';
import { action } from '@storybook/addon-actions';
import 'bootstrap/dist/css/bootstrap.min.css';
import UploadButton from '../components/UploadButton';

export default {
  title: 'UploadButton',
  component: UploadButton,
};

export const Initial = () => <UploadButton onClick={action('clicked')} />;
export const Disabled = () => <UploadButton disabled />;
export const Uploading = () => <UploadButton uploading />;
