import { Rocket, Wrench, Award, CloudIcon } from 'lucide-react';
import { SectionTitle } from './ui/SectionTitle';
import { AboutCard } from './about/AboutCard';
// import { Stats } from './about/Stats';

export function About() {
  const cards = [
    {
      icon: CloudIcon,
      title: 'Multi Cloud Expert',
      description: 'Specialized designing, deploying, and optimizing scalable, secure, and cost-efficient cloud solutions across AWS, Azure, and GCP.',
      color: 'bg-blue-600',
    },
    {
      icon: Wrench,
      title: "DevOps & Terraform Problem Solving",
      description: "Expert in automating infrastructure with Terraform, optimizing CI/CD pipelines, and resolving complex cloud deployment challenges.",
      color: "bg-blue-600"
    
    },
    {
      icon: Award,
      title: 'Certifications',
      description: 'Achieved industry-recognized certifications in AWS, Terraform, GCP, and Azure.',
      color: 'bg-green-600',
    },
    {
      icon: Rocket,
      title: 'Innovation',
      description: 'Passionate about creating innovative solutions to complex problems across all cloud environments.',
      color: 'bg-orange-600',
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.06]" />
      </div>

      <div className="container mx-auto px-8 relative">
        <SectionTitle>About Me</SectionTitle>
        
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-8">
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
            I am a results-driven Multi-Cloud & DevOps Engineer with expertise in designing, automating, and optimizing cloud infrastructure across Azure, AWS, and GCP. With a strong foundation in Terraform, CI/CD automation, and cloud security, I have successfully led cloud migrations, developed scalable infrastructure, and enhanced operational efficiency through infrastructure as code (IaC) and automation. Completed my Master’s in Computer Science (AI & Data Science) at Eastern Kentucky University, I bring a blend of AI research, DevOps, and cloud engineering experience.
            </p>
          </div>

          {/* <Stats /> */}
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {cards.map((card) => (
            <AboutCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}