import React, { useState } from 'react';
import {Navbar} from './components';
import AbsSelect from './abs/AbsSelect';
import FingerSelect from './finger/FingerSelect';

const App = () => {
  const [index, setIndex] = useState(0);
  const components = [
    <AbsSelect handleIndex={() => setIndex((index) => index + 1)} />,
    <FingerSelect handleIndex={() => setIndex((index) => index - 1)} />,
  ];
  return (
    <>
      <Navbar />
      <div>{components[index]}</div>
    </>
  );
};

export default App;
