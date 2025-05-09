import SectionTitle from '@/components/shared/SectionTitle';
import Link from 'next/link';

const bgClasses = [
  'bg-pink-400 text-white',
  'bg-yellow-300 text-yellow-900',
  'bg-purple-400 text-white',
  'bg-blue-400 text-white',
  'bg-green-400 text-white',
  'bg-rose-400 text-white',
  'bg-fuchsia-400 text-white',
  'bg-teal-400 text-white',
];

const projects = [
  {
    title: 'ReWear',
    previewUrl: 'https://devpost.com/software/rewear-ahofe3',
    image: '/images/rewear-screenshot.png', // Make sure this image is in your public/images folder
  },
  {
    title: 'Chronicle',
    previewUrl: 'https://dorahacks.io/buidl/21701/',
    // image: '/images/chronicle-screenshot.png', // Add this if you have a Chronicle screenshot
  },
  {
    title: 'Forkify Recipe App',
    previewUrl: 'https://github.com/rrubyzhou/forkify-recipe-app',
    image: '/images/forkify-screenshot.png', // Add this image to your public/images folder
  },
  // Add more of your own projects here
];

const RecentWorkSection = () => {
  return (
    <>
      <SectionTitle>Projects</SectionTitle>
      <div className="mt-10 grid gap-8 xs:grid-cols-2 md:grid-cols-3">
        {projects.slice(0, 3).map((project, idx) => (
          <a
            key={idx}
            href={project.previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`block overflow-hidden rounded-2xl shadow-lg transition-transform hover:-translate-y-2 ${bgClasses[idx % bgClasses.length]}`}
          >
            <div className="h-64 w-full flex items-center justify-center bg-white/40 rounded-t-2xl">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-contain rounded-t-2xl"
                />
              ) : (
                <span className="text-2xl opacity-60">Website Preview</span>
              )}
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{project.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default RecentWorkSection;
