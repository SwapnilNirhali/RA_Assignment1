import { useState } from 'react';

export function useCustomLogger(counter) {
  console.log("from CustomLogger ....", counter);
}
export function useCounter(int) {

  const [counter, setCounter] = useState(int);

  function incrementCounter() {
    setCounter((counter) => counter + 1);
  }

  function decrementCounter() {
    setCounter((counter) => counter - 1);
  }

  function resetCounter(){
    setCounter(0);
  }

  return { counter, incrementCounter, decrementCounter,resetCounter };
}
