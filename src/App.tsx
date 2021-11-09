import React from 'react';
import './App.css';

function getInitialValue()
{
  const initialValue = Math.floor(Math.random() * 100);
  console.log(`initial value is ${initialValue}`);
  return initialValue;
}

function MyRandom() {
  const [randomValue, setRandomValue] = React.useState<number>(getInitialValue);  
  console.log(`Rendering a random value of ${randomValue}`);
  return <p>Random value: {randomValue}</p>
}

function App() {
  
  return <MyRandom/>;
}

export default App;
