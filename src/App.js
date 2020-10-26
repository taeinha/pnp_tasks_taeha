import React, { useState } from 'react';
import ChangeString from './components/ChangeString';
import Dice from './components/Dice';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

function App() {

  const [ step, setStep ] = useState(1);

  return (
    <div className="App">
      <NavBar setStep={setStep} />

      {step === 1 && <Dice />}
      {step === 2 && <ChangeString />}

      <Footer />
    </div>
  );
}

export default App;
