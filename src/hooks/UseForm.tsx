import React, { EventHandler } from 'react';

const validations = {
  notNull: {
    message: 'O campo não pode ser nulo',
  },
};

const UseForm = () => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState<string | null>(null);

  function validate(value: string) {
    if (value === '') {
      setError(validations.notNull.message);
    } else {
      return true;
    }
  }

  function onChange(event: any) {
    if (error) setError(null);
    setValue(event.target.value);
    console.log(event.target.value);
  }

  return {
    value,
    error,
    onChange,
    onBlur: () => validate(value),
  };
};

export default UseForm;
