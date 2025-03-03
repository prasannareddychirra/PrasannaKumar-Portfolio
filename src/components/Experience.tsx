import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { Timeline } from './ui/Timeline';

const experiences = [
  {
    title: 'Senior Azure Devops Engieer',
    company: 'Elevance Health',
    period: 'Nov 2024 - Present',
    description: 'Engineered scalable Azure infrastructure with Terraform, achieving 100% deployment efficiency, automated VM rehydration, and optimized CI/CD with Bamboo and Ansible.',
  },
  {
    title: 'Senior Infrastructure Engieer',
    company: 'American Express',
    period: 'July 2024 - Nov 2024',
    description: 'Developed secure Terraform modules, ensuring 95% compliance with least privilege access and encryption, while optimizing cloud deployments and CI/CD efficiency across AWS and GCP.',
  },
  {
    title: 'Graduate Programmer',
    company: 'Eastern Kentucky University',
    period: 'Aug 2023 - May, 2024',
    description: 'Innovated AI models and optimized performance, leveraging TensorFlow, PyTorch, and NVIDIA Jetson, enhancing research visualization and documentation by 90%.',
  },
  {
    title: 'Senior Software Engieer - Cloud Operations',
    company: 'Carelon Global Solutions',
    client: "Elevance Health",
    period: 'Sep 2020 - July 2023',
    description: 'Architected secure multi-cloud infrastructure with 99% compliance, reduced manual provisioning by 85% using Terraform, and improved deployment efficiency by 75% through automation.',
  },
  {
    title: 'Cloud Engineer',
    company: 'Powerup Cloud Technologies',
    Clients: "ResMed, CSA-Genarli Insurance, Bharath Matrimony",
    period: 'May, 2017 - Sep, 2020',
    description: 'Led cloud migration and infrastructure automation, achieving 99% on-time delivery, 95% deployment efficiency, and seamless SQL-to-AWS data migration.',
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-8">
        <SectionTitle>Experience</SectionTitle>
        <Timeline items={experiences} />
      </div>
    </section>
  );
}