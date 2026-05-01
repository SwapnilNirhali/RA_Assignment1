import { useState, useEffect } from "react";

export function useLocalStorage() {
  const [localStorageValue, setLocalStorageValue] = useState("");

  useEffect(() => { getLocalValue("myKey"); }, []);

  function storeLocally(key, localValue) {
    localStorage.setItem(key, localValue);
  }

  function getLocalValue(key) {
    const value = localStorage.getItem(key);
    setLocalStorageValue(value);
  }

  return { localStorageValue, storeLocally, getLocalValue };
}
