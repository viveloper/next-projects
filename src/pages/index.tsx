import styles from '@/styles/Home.module.css';
import { useQuery } from '@tanstack/react-query';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { getPokemonList } from './api/pokemon-list';

export default function Home() {
  const { data: pokemonList } = useQuery({
    queryKey: ['pokemon'],
    queryFn: getPokemonList,
    initialData: [],
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemon List</title>
      </Head>
      <h2>Pokemon List</h2>
      <div className={styles.grid}>
        {pokemonList.slice(0, 10).map((pokemon) => (
          <div className={styles.card} key={pokemon.id}>
            <Link href={`/pokemon/${pokemon.id}`}>
              <Image
                width={200}
                height={200}
                alt={pokemon.name}
                src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
              />
              <h3>{pokemon.name}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
