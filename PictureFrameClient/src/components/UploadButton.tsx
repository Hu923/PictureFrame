import React from 'react';
import Button from 'react-bootstrap/Button';

interface Props {
  uploading?: boolean,
  onClick?: () => void
}

const UploadButton: React.FC<Props> = (props: Props) => (
  <Button variant="primary" onClick={props.onClick} disabled={props.uploading}>
    {
      props.uploading ? 'Uploading...' : 'Upload'
    }
  </Button>
);

export default UploadButton;
