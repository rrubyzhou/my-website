import AppLayout from '@/layouts/AppLayout';
import SectionTitle from '@/components/shared/SectionTitle';

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
    image: '/images/rewear-screenshot.png',
  },
  {
    title: 'Chronicle',
    previewUrl: 'https://dorahacks.io/buidl/21701/',
    image: '/images/chronicle-screenshot.png',
  },
  {
    title: 'Forkify Recipe App',
    previewUrl: 'https://github.com/rrubyzhou/forkify-recipe-app',
    image: '/images/forkify-screenshot.png',
  },
  // Add three more placeholder projects
  {
    title: 'Project Placeholder 1',
    previewUrl: '#',
    image: '',
  },
  {
    title: 'Project Placeholder 2',
    previewUrl: '#',
    image: '',
  },
  {
    title: 'Project Placeholder 3',
    previewUrl: '#',
    image: '',
  },
];

const ProjectsPage = () => {
  return (
    <AppLayout title="Projects">
      <div className="min-h-screen w-full bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20">
        <div className="container py-16">
          <SectionTitle>Projects</SectionTitle>
          <div className="mt-10 grid gap-8 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {projects.map((project, idx) => (
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
        </div>
      </div>
    </AppLayout>
  );
};

export default ProjectsPage; 