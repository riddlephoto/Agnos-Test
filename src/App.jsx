import React, { useState, useEffect } from 'react';
import {Navbar} from './components';
import AbsSelect from './abs/AbsSelect';
import FingerSelect from './finger/FingerSelect';

const App = () => {

  const intIndex = localStorage.getItem('index', 0);

  const [index, setIndex] = useState(Number(intIndex));
  const components = [
    <AbsSelect handleIndex={() => setIndex((index) => index + 1)} />,
    <FingerSelect handleIndex={() => setIndex((index) => index - 1)} />,
  ];

  useEffect(() => {
    localStorage.setItem('index', index)
  },[index])
  return (
    <>
      <Navbar progress={index} length={components.length} />
      <div>{components[index]}</div>
    </>
  );
};

export default App;
