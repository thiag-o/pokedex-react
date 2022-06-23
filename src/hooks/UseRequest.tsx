import axios from 'axios';
import React from 'react';

export const UseRequest = () => {
  const [data, setData] = React.useState<any>(null);
  const [error, setError] = React.useState<string | unknown | null>(null);
  const [loading, setLoading] = React.useState(false);

  async function request(url: string) {
    try {
      setLoading(true);
      setError(null);
      const response = (await axios.get(url)).data;
      setData(response);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  return { request, error, loading, data };
};
