import Image from 'next/image';
import Link from 'next/link';

export interface Props {
  id: number;
  image?: string;
  title: string;
  description?: string;
  tags?: string[];
}

const ProjectCard = ({
  image = '/empty-project.png',
  title,
  description = '',
  tags = [],
}: Props) => {
  return (
    <div className="rounded overflow-hidden shadow-lg">
      <Link href={`/pokemon`}>
        <Image className="w-full px-6 py-4" width={400} height={400} alt={'image'} src={image} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
      </Link>

      <div className="px-6 pt-4 pb-2">
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
