import React from 'react';

const projects = [
  {
    title: 'ReWear',
    image: '/images/rewear-screenshot.png',
    previewUrl: 'https://devpost.com/software/rewear-ahofe3',
  },
  {
    title: 'Chronicle',
    image: '/images/chronicle-screenshot.png',
    previewUrl: 'https://dorahacks.io/buidl/21701/',
  },
  {
    title: 'Forkify Recipe App',
    image: '/images/forkify-screenshot.png',
    previewUrl: 'https://github.com/rrubyzhou/forkify-recipe-app',
  },
];

const bgClasses = [
  'bg-pink-400 text-white',
  'bg-yellow-300 text-yellow-900',
  'bg-purple-400 text-white',
];

const ProjectsSection = () => (
  <section className="container py-16">
    <h2 className="text-4xl font-bold mb-10 text-pink-600">Projects</h2>
    <div className="grid gap-8 xs:grid-cols-1 md:grid-cols-3">
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
  </section>
);

export default ProjectsSection; 