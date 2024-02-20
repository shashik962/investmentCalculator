import { useState } from 'react';
import Header from "./components/Header.jsx"
import UserInput from "./components/UserInput.jsx"
import Results from './components/Results.jsx';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const inpurIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
          return {
                ...prevUserInput,
                [inputIdentifier]: +newValue
          }
    });
  }

  return (
    <>
       <Header />
       <UserInput userInput={userInput} onChange={handleChange} />
       {/* Results go here */}
       {!inpurIsValid && (<p className='center'>Please enter a duration greater than zero.</p>)}
       {inpurIsValid && <Results input={userInput} />}

    </>
   
  )
}

export default App
