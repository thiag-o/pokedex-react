import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import Title from '../../components/Title/Title';

const Pokemon = () => {
  const { num } = useParams();
  const [data, setData] = React.useState<any>(null);
  const url = 'https://pokeapi.co/api/v2/pokemon/' + num;

  React.useEffect(() => {
    (async () => {
      const response = (await axios.get(url)).data;
      setData(response);
    })();
  }, [num]);

  if (data) {
    return (
      <main className={`${''} size-full`}>
        <Title text={data.name} />
      </main>
    );
  } else {
    return null;
  }
};

export default Pokemon;
