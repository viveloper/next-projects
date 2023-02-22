import LoadingScreen from '@/components/common/LoadingScreen';
import { useQuery } from '@tanstack/react-query';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { getPokemonList } from '../api/pokemon';

export default function Home() {
  const { data: pokemonList, isLoading } = useQuery({
    queryKey: ['pokemon'],
    queryFn: getPokemonList,
  });

  return (
    <>
      <Head>
        <title>Pokemon List</title>
      </Head>
      {isLoading && <LoadingScreen />}
      <div className="p-10">
        <div className="flex flex-wrap gap-12">
          {pokemonList?.slice(0, 30).map((pokemon) => (
            <div key={pokemon.id}>
              <Link href={`/pokemon/${pokemon.id}`}>
                <div className="relative w-48 h-48">
                  <Image
                    className="object-contain"
                    fill
                    sizes="192px"
                    priority
                    alt={pokemon.name}
                    src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
                  />
                </div>

                <h3 className="text-center mt-2">{pokemon.name}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
