import React from 'react';

const useForm = () => {
  const [value, setValue] = React.useState<string>('');
  const [error, setError] = React.useState<string>('');
  function onChange(event: React.FormEvent<HTMLInputElement>) {
    setValue(event.currentTarget.value);
  }
  function validate(value: string) {
    if (value === '' || value === ' ') {
      setError('invalido');
    }
  }

  return {
    value,
    onChange,
    onBlur: () => validate(value),
    error,
  };
};

export default useForm;
