import { useState } from "react";
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Result from "./components/Results";
function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment:10000,
    annualInvestment:1200,
    expectedReturn: 6,
    duration: 10
});

const inputIsValid = userInput.duration >= 1

function handleChange(inputIdentifier,newValue) {
    setUserInput(prevUserInput => {
        return {
            ...prevUserInput,
            [inputIdentifier]: parseInt(newValue)
        }
    });
}

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {inputIsValid && <Result userInput={userInput} />}
      {!inputIsValid &&  <p className="center">Please enter valid duration greater than zero</p>}
     </>
  )
}

export default App
