// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

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

export default async function handler(req: NextApiRequest, res: NextApiResponse<Pokemon[]>) {
  const response = await fetch('https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json');
  const data: Pokemon[] = await response.json();
  res.status(200).json(data);
}

export const getPokemonList = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pokemon-list`);
  const data: Pokemon[] = await res.json();
  return data;
};
