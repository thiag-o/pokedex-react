import React from 'react';

interface Props {
  error: string;
}

const Error = ({ error }: Props) => {
  return <div>{error}</div>;
};

export default Error;
