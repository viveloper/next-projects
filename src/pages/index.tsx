import styles from '@/styles/Home.module.css';
import { useQuery } from '@tanstack/react-query';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { getPokemonList } from './api/pokemon-list';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  const { data: pokemonList } = useQuery({
    queryKey: ['pokemon'],
    queryFn: getPokemonList,
    initialData: [],
  });

  return (
    <div>
      <Head>
        <title>Side Projects</title>
      </Head>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        <ProjectCard />
      </div>
    </div>
  );
}
