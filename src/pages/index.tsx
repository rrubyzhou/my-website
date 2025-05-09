import React from 'react';
import Menu from '@/components/partials/Menu';
import SiteBackground from '@/components/partials/SiteBackground';
import HeroSection from '@/components/partials/HeroSection';
import ExperienceSection from '@/components/partials/ExperienceSection';
import ProjectsSection from '@/components/partials/ProjectsSection';
import MLShowcaseSection from '@/components/partials/MLShowcaseSection';
import ContactSection from '@/components/partials/ContactSection';
import Footer from '@/components/partials/Footer';
import AppLayout from '@/layouts/AppLayout';
import { api } from '@/lib/api';
import type { GetServerSideProps, NextPage } from 'next';

// type Props = {
//   experiences: ;
// }

const Home = () => (
  <div className="min-h-screen w-full bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 relative">
    <Menu />
    <SiteBackground />
    <section id="about">
      <HeroSection />
    </section>
    <section id="experiences">
      <SiteBackground />
      <ExperienceSection />
    </section>
    <section id="projects">
      <SiteBackground />
      <ProjectsSection />
      <MLShowcaseSection />
    </section>
    <section id="contact">
      <SiteBackground />
      <ContactSection />
    </section>
    <Footer />
  </div>
);

// export const getServerSideProps: GetServerSideProps = async ({}) => {
//   const getExperiences = api.get('/experiences').then((res) => res.data.data);
//   const getEducations = api.get('/educations').then((res) => res.data.data);
//   const profile = api.get('/profile').then((res) => res.data.data);
//   const result = await Promise.all([getExperiences, getEducations, profile]);
//   return {
//     props: {
//       experiences: result[0],
//       educations: result[1],
//       profile: result[2],
//     },
//   };
// };

export default Home;
