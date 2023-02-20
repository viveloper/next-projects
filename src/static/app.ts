import { Props as ProjectCardProps } from '@/components/ProjectCard';

export const PROJECTS: ProjectCardProps[] = [
  {
    id: 1,
    image: '/project-thumbnails/pikachu.jpeg',
    title: 'Pokemon',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: ['SSR', 'React-Query', 'Next.js'],
    path: '/pokemon',
  },
  {
    id: 2,
    image: '/project-thumbnails/todo.webp',
    title: 'Todo',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    tags: ['Recoil', 'Next.js'],
    path: 'todo',
  },
];
