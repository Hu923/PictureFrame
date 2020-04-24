import React, { useState } from 'react';
import ProcessImage from 'react-imgpro';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';

interface Props {
  src?: any,
  onProcessing?: (loading: boolean) => void,
  onFinishProcess?: (result: any, err: any) => void
}

const ImageEditor: React.FC<Props> = (props: Props) => {
  const { src, onFinishProcess, onProcessing } = props;

  const [width, setWidth] = useState<number>(500);
  const [height, setHeight] = useState<number>(500);
  const [loading, setLoading] = useState<boolean>(true);

  const finishProcess = (processedImage: any, err: any) => {
    setLoading(false);
    onProcessing && onProcessing(false);
    onFinishProcess && onFinishProcess(processedImage, err);
  }

  const onChangeWidth = (w: number) => {
    setLoading(true);
    onProcessing && onProcessing(true);
    setWidth(w);
  }

  const onChangeHeight = (h: number) => {
    setLoading(true);
    onProcessing && onProcessing(true);
    setHeight(h);
  }

  return (
    <>
      {
        !src && <div>Need to select image</div>
      }
      {
        src && <>
          <Form.Group>
            <Form.Label>{`Width: ${width}px`}</Form.Label>
            <Form.Control type="range" max={736} min={100} value={width} onChange={(e) => onChangeWidth(Number(e.target.value))} disabled={loading} />
          </Form.Group>
          <Form.Group>
            <Form.Label>{`Height: ${height}px`}</Form.Label>
            <Form.Control type="range" max={539} min={100} value={height} onChange={(e) => onChangeHeight(Number(e.target.value))} disabled={loading} />
          </Form.Group>
          <Form.Group>
            {
              src && loading && <Spinner animation="grow" />
            }
          </Form.Group>
          <Form.Group>
            {
              src && <ProcessImage
                image={src}
                resize={{
                  width: width === 0 ? 500 : width,
                  height: height === 0 ? 500 : height
                }}
                onProcessFinish={() => { console.log('finished') }}
                processedImage={(src, err) => finishProcess(src, err)}
              />
            }
          </Form.Group>
        </>
      }
    </>
  );
};

export default ImageEditor;
