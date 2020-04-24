import React from 'react';
import Button from 'react-bootstrap/Button';

interface Props {
  disabled?: boolean,
  uploading?: boolean,
  onClick?: () => void
}

const UploadButton: React.FC<Props> = (props: Props) => {
  const { uploading, disabled, onClick } = props;

  return (
    <Button variant="primary" onClick={onClick} disabled={uploading || disabled}>
      {
        props.uploading ? 'Uploading...' : 'Upload'
      }
    </Button>
  );
};

export default UploadButton;
