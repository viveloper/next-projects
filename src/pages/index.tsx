import Head from 'next/head';
import ProjectCard from '@/components/ProjectCard';
import { PROJECTS } from '@/static/app';

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
