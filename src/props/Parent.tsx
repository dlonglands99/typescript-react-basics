import React from 'react';
import { Child } from './Child';

const Parent: React.FC = () => {
  const logData = () => {
    console.log('Clicked!');
  };
  return <Child color={'blue'} onClick={logData} />;
};

export default Parent;
