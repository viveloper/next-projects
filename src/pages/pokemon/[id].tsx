import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { getPokemon } from '../api/pokemon/[id]';
import { Icon } from '@iconify/react';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import type { GetServerSideProps } from 'next';
import type { PokemonDetail } from '../api/pokemon';

interface Props {
  data: PokemonDetail;
}

export const getServerSideProps: GetServerSideProps<{ data: PokemonDetail }> = async ({
  params,
}) => {
  const id = isNaN(Number(params?.id)) ? -1 : Number(params?.id);
  const data = await getPokemon(id);
  return {
    props: {
      data,
    },
  };
};

export default function Details({ data }: Props) {
  const {
    query: { id },
  } = useRouter();

  const { data: pokemon } = useQuery({
    queryKey: ['pokemon', Number(id)],
    queryFn: () => getPokemon(Number(id)),
    enabled: !!id,
    initialData: data,
    refetchOnMount: false,
  });

  return (
    <>
      <Head>
        <title>{pokemon.name}</title>
      </Head>
      <div className="p-10">
        <Link href="/pokemon" className="block w-9">
          <Icon icon="mdi:arrow-left" className="text-4xl" />
        </Link>
        <div className="flex gap-8">
          <div className="relative w-64 h-64">
            <Image
              className="object-contain"
              fill
              sizes="256px"
              priority
              alt={pokemon.name}
              src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
            />
          </div>
          <div>
            <div className="font-bold text-3xl mb-2">{pokemon.name}</div>
            <div className="italic mb-2">{pokemon.type.join(', ')}</div>
            <table>
              <thead className="font-bold">
                <tr>
                  <th>Name</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                {pokemon.stats.map(({ name, value }) => (
                  <tr key={name}>
                    <td className="font-bold">{name}</td>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
