import Head from 'next/head';
import ProjectCard, { Props as ProjectCardProps } from '@/components/ProjectCard';

const PROJECTS: ProjectCardProps[] = [
  {
    id: 1,
    image: 'https://jherr-pokemon.s3.us-west-1.amazonaws.com/images/pikachu.jpg',
    title: 'Pokemon',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: ['Next.js', 'SSR', 'React-Query'],
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Side Projects</title>
      </Head>
      <div className="p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </>
  );
}
