import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { EducationCard } from './ui/EducationCard';

const education = [
  {
    degree: 'Master\'s Degree in Computer Science',
    institution: 'Eastern Kentucky University, Richmond, KY - USA',
    period: 'Aug, 2023 - July, 2024',
    score: '3.87 CGPA',
  },
  {
    degree: 'Master of Computer Application',
    institution: 'Andhra University, India',
    period: '2014 - 2017',
    score: '7.9 CGPA',
  },
  {
    degree: 'Bachelor\'s in Computer Science',
    institution: 'Acharya Nagarjuna University, India',
    period: '2011 - 2014',
    score: '78.9%',
  },
];

export function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-8">
        <SectionTitle>Education</SectionTitle>
        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu) => (
            <EducationCard key={edu.degree} {...edu} />
          ))}
        </div>
      </div>
    </section>
  );
}