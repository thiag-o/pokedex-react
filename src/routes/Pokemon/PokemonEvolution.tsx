import axios from 'axios';
import React from 'react';
import Card from '../../components/Card/Card';
import { colors } from '../../pokeutils/importTypes';
import styles from './PokemonEvolution.module.css';

interface Props {
  url: string;
  data: any;
  num: string | undefined;
}

const urlSpecie = 'https://pokeapi.co/api/v2/pokemon-species/';

const PokemonEvolution = ({ url, data, num }: Props) => {
  const [evolution, setEvolution] = React.useState<
    { name: string; id: string }[] | []
  >([]);

  function speciesArray(
    data: any,
    arrayEvolution: Array<string> = [],
    arrayUrl: Array<string> = [],
  ) {
    for (let key in data) {
      if (key === 'evolves_to' && data.evolves_to.lenght != 0) {
        arrayEvolution.push(data.species.name);
        arrayUrl.push(data.species.url);
        //revisar
        for (let num in data[key]) {
          let newData = data[key][num];
          speciesArray(newData, arrayEvolution, arrayUrl);
        }
      }
    }
    return { arrayEvolution, arrayUrl };
  }

  React.useEffect(() => {
    (async () => {
      const urlEvolution = (await axios.get(urlSpecie + num)).data
        .evolution_chain.url;
      const response = (await axios.get(urlEvolution)).data.chain;

      const { arrayEvolution, arrayUrl } = speciesArray(response);

      const ids = arrayUrl.map((url) => {
        const splitUrl = url.split('/');
        return splitUrl[splitUrl.length - 2];
      });
      let teste = [];
      for (let i = 0; i < ids.length; i++) {
        let newData = {
          name: '',
          id: '',
        };
        newData.name = arrayEvolution[i];
        newData.id = ids[i];
        teste.push(newData);
      }
      setEvolution(teste);
    })();
  }, []);

  return (
    <section className={styles.evolution}>
      <h2>Evolutions</h2>
      <div>
        {evolution?.map((info) => (
          <div key={info.id} className={styles.specie}>
            <Card url={url} name={info.name} num={info.id} />

            <span
            //  style={{ color: colors[data.types[0].type.name] }}
            >
              {'>'}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PokemonEvolution;
