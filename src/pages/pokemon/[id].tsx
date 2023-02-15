import { getPokemon } from '@/api/pokemon';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/Details.module.css';

export default function Details() {
  const {
    query: { id },
  } = useRouter();

  const { data: pokemon } = useQuery({
    queryKey: ['pokemon', Number(id)],
    queryFn: () => getPokemon(Number(id)),
    enabled: !!id,
    // refetchOnMount: false,
  });

  if (!pokemon) return;

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
