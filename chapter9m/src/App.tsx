import React from 'react';
import { FancyButton } from './FancyButton'
import { SignupForm } from './SignupForm'

function App() {
  return (
    <>
      <SignupForm
        title='Data'
        userId='2'
      />
      <FancyButton
        size="Big"
        text="Sign Up Now"
        onClick={() => console.log("Click !")}
      />
    </>
  );
}

export default App;
