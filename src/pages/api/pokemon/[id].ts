// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import type { PokemonDetail } from '../pokemon-list';

export default async function handler(req: NextApiRequest, res: NextApiResponse<PokemonDetail>) {
  const { id } = req.query;
  const response = await fetch(
    `https://jherr-pokemon.s3.us-west-1.amazonaws.com/pokemon/${id}.json`,
  );
  const data: PokemonDetail = await response.json();
  res.status(200).json(data);
}

export const getPokemon = async (id: number) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pokemon/${id}`);
  const data: PokemonDetail = await res.json();
  return data;
};
