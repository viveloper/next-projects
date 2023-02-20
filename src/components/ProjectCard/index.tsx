import Image from 'next/image';
import Link from 'next/link';

export interface Props {
  id: number;
  image?: string;
  title: string;
  path: string;
  description?: string;
  tags?: string[];
}

const ProjectCard = ({
  image = '/project-thumbnails/empty-project.png',
  title,
  path,
  description = '',
  tags = [],
}: Props) => {
  return (
    <div className="rounded overflow-hidden shadow-lg px-6 py-4">
      <Link href={path}>
        <div className="relative w-full h-56">
          <Image className="object-contain" fill sizes="192px" priority alt={'image'} src={image} />
        </div>
        <div className="mt-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
      </Link>

      <div className="mt-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            {`#${tag}`}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
