import { useState } from 'react';

export const useInputState = (initialValue: any) => {
  const [value, setValue] = useState(initialValue);
  const handleChange = (e: any) => setValue(e.target.value);
  const reset = () => setValue('');

  return [value, handleChange, reset];
};