import React from 'react';
import Navbar from './components/Navbar';
import AbsSelect from './abs/AbsSelect';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
    <Navbar/>
    <div>
        <AbsSelect/>
    </div>
    </>
  );
};

export default App;
