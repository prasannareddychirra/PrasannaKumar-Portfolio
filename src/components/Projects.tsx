import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { ProjectCard } from './ui/ProjectCard';

const projects = [
  {
    title: 'Portfolio',
    description: 'Personal portfolio website showcasing projects and skills',
    image: '/assets/portfolio.png',
    link: 'https://.netlify.app',
    tags: ['React', 'Tailwind CSS', 'TypeScript'],
  },
  {
    title: "Flask Webcam Face Detection",
    description: "This Flask web application captures video from the webcam.",
    image: "/assets/flask.png",
    tags: ['Python'],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <SectionTitle>Projects</SectionTitle>

        {/* Center projects when only one, adjust dynamically for more */}
        <div
          className={`max-w-4xl mx-auto grid gap-8 ${
            projects.length === 1 ? "grid-cols-1 place-items-center" : "md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}