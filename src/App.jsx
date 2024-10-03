import { useState } from "react";
import Header from "./components/Header";
import Calculator from "./components/Calculator";
import InvestmentResults from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const inputIsValid = userInput.duration >= 1;

  function handleInputChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      }
    })
  }

  return (
    <>
      <Header />
      <Calculator userInput={userInput} onHandleInputChange={handleInputChange}/>
      {inputIsValid ? <InvestmentResults userInput={userInput} /> : <p>Please enter a duration greater than 0.</p>}
    </>
  );
}

export default App;
