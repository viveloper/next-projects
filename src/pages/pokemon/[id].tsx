import { getPokemon } from '@/api/pokemon';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/Details.module.css';
import type { GetServerSideProps } from 'next';
import type { PokemonDetail } from '../../api/pokemon';

interface Props {
  pokemon: PokemonDetail;
}

export const getServerSideProps: GetServerSideProps<{ pokemon: PokemonDetail }> = async ({
  params,
}) => {
  const id = isNaN(Number(params?.id)) ? -1 : Number(params?.id);
  const pokemon = await getPokemon(id);
  return {
    props: {
      pokemon,
    },
  };
};

export default function Details({ pokemon }: Props) {
  return (
    <div>
      <Head>
        <title>{pokemon.name}</title>
      </Head>
      <div>
        <Link href="/">Back to Home</Link>
      </div>
      <div className={styles.layout}>
        <div>
          <Image
            className={styles.picture}
            width={250}
            height={250}
            alt={pokemon.name}
            src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
          />
        </div>
        <div>
          <div className={styles.name}>{pokemon.name}</div>
          <div className={styles.type}>{pokemon.type.join(', ')}</div>
          <table>
            <thead className={styles.header}>
              <tr>
                <th>Name</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {pokemon.stats.map(({ name, value }) => (
                <tr key={name}>
                  <td className={styles.attribute}>{name}</td>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
