export type Pokemon = {
  id: number;
  name: string;
  image: string;
};

export type Stats = {
  name: string;
  value: number;
};

export type PokemonDetail = {
  name: string;
  type: string[];
  stats: Stats[];
  image: string;
};

export const getPokemonList = async () => {
  const res = await fetch('https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json');
  const data: Pokemon[] = await res.json();
  return data;
};

export const getPokemon = async (id: number) => {
  const res = await fetch(`https://jherr-pokemon.s3.us-west-1.amazonaws.com/pokemon/${id}.json`);
  const data: PokemonDetail = await res.json();
  return data;
};
