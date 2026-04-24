import { useState } from 'react';

export function useToggle() {
  const [booleanState, setBooleanState] = useState(false);
  function toggle() {
    setBooleanState(!booleanState);
  }

  return { booleanState, toggle };
}
