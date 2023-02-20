import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = () => {
  return (
    <div className="rounded overflow-hidden shadow-lg">
      <Link href={`/pokemon`}>
        <Image
          className="w-full px-6 py-4"
          width={400}
          height={400}
          alt={'image'}
          src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/images/pikachu.jpg`}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Pokemon</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea!
            Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
      </Link>

      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #Next.js
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #SSR
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #React-Query
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
