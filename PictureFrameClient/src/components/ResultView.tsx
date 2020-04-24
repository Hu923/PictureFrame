import React from 'react';

interface Props {
  src?: string,
}

const ResultView: React.FC<Props> = (props: Props) => {
  const { src } = props;

  return src ? <img src={src} alt="result" /> : <div />
};

export default ResultView;
