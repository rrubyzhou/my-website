import React from 'react';

const experiences = [
  {
    company: 'Omdema',
    jobTitle: 'Junior Machine Learning Engineer',
    startDate: '06/2023',
    endDate: '08/2023',
    logo: '/images/omdema-logo.png',
  },
  {
    company: 'Envision Robotics',
    jobTitle: 'Python Instructor',
    startDate: '07/2022',
    endDate: '08/2022',
    logo: '/images/envision-robotics-logo.png',
  },
];

const bgClasses = [
  'bg-pink-400 text-white',
  'bg-yellow-300 text-yellow-900',
];

const ExperienceSection = () => (
  <section className="container py-16">
    <h2 className="text-4xl font-bold mb-10 text-pink-600">Experience</h2>
    <div className="grid gap-8 xs:grid-cols-1 md:grid-cols-2">
      {experiences.map((exp, idx) => (
        <div
          key={idx}
          className={`flex items-center rounded-2xl shadow-lg p-8 transition-transform hover:-translate-y-2 hover:scale-105 ${bgClasses[idx % bgClasses.length]}`}
        >
          {exp.logo && (
            <div className="flex-shrink-0 h-20 w-20 bg-white/40 flex items-center justify-center mr-6 rounded-xl">
              <img src={exp.logo} alt={exp.company} className="h-12 w-12 object-contain" />
            </div>
          )}
          <div>
            <h3 className="text-2xl font-bold mb-2">{exp.company}</h3>
            <div className="text-lg font-semibold mb-1">{exp.jobTitle}</div>
            <div className="text-xs opacity-80">{exp.startDate} - {exp.endDate}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ExperienceSection;
