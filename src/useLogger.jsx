import { useState, useEffect } from 'react';



export function useLogger() {
  const [ changedValue, setValue]  = useState("");

  useEffect(() => {
    console.log(`The typed message is: `, changedValue)},  [changedValue]);
 
    
  

   function changeValue(input){
    setValue(input)
  }

  return {changedValue, changeValue}
};

export default useLogger;
