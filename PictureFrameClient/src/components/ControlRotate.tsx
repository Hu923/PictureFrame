import React from 'react';
import Form from 'react-bootstrap/Form';

interface Props {
  disabled?: boolean,
  onChange?: (val: number) => void,
  value?: number
}

const ControlRotate: React.FC<Props> = (props: Props) => {
  const { value, disabled, onChange } = props;

  return (
    <Form.Group>
      <Form.Label>{`Rotate: ${value || 0}`}</Form.Label>
      <Form.Control type="range" max={360} min={0} value={value || 0} onChange={(e) => onChange && onChange(Number(e.target.value))} disabled={disabled} />
    </Form.Group>
  );
};

export default ControlRotate;
