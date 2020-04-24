import React from 'react';
import ResultView from '../components/ResultView';
import Catalina from '../assets/catalina.jpg';

export default {
  title: 'ResultView',
  component: ResultView,
};

export const Initial = () => <ResultView />;
export const WithSrc = () => <ResultView src={Catalina} />;
