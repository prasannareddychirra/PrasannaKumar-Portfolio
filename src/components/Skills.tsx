import { SectionTitle } from './ui/SectionTitle';
import { SiHtml5, SiCss3, SiJavascript, SiTailwindcss, SiExpress, SiMongodb, SiNextdotjs, SiTypescript, SiCplusplus, SiGit, SiGithub, SiVite, SiAmazonwebservices, SiGooglecloud, SiTerraform, SiGitlab, SiBamboo, SiAnsible, SiJenkins, SiDocker, SiKubernetes, SiCloudflare } from 'react-icons/si';
import { FaReact, FaNodeJs, FaJava, FaPython } from 'react-icons/fa';
import { VscVscode } from "react-icons/vsc";
import { IoLogoFirebase } from "react-icons/io5";

const skills = [
  { name: 'AWS', icon: SiAmazonwebservices, color: '#FF9900' },
  { name: 'Google Cloud', icon: SiGooglecloud, color: '#4285F4' },
  { name: 'Azure', icon: SiCloudflare, color: '#4285F4' },
  { name: 'Terraform', icon: SiTerraform, color: '#7B42BC' },
  { name: 'GitLab', icon: SiGitlab, color: '#fc6d26' },
  { name: 'Bamboo', icon: SiBamboo, color: '#47d666' },
  { name: 'Ansible', icon: SiAnsible, color: '#E0218A' },
  { name: 'Jenkins', icon: SiJenkins, color: '#3b78d7' },
  { name: 'Docker', icon: SiDocker, color: '#0db7ed' },
  { name: 'Kubernetes', icon: SiKubernetes, color: '#3970e4' },
  {name: 'HTML', icon: SiHtml5, color: '#e34f26'},
  {name: 'CSS', icon: SiCss3, color: '#1572b6'},
  {name: 'JavaScript', icon: SiJavascript, color: '#f7df1e'},
  { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
  { name: 'Node.js', icon: FaNodeJs, color: '#68a063' },
  { name: 'Python', icon: FaPython, color: '#306998' },
  { name: 'VS Code', icon: VscVscode, color: '#007acc' },
  { name: 'Git', icon: SiGit, color: '#f34f29' },
  { name: 'GitHub', icon: SiGithub, color: '' },
];


export function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-8">
        <SectionTitle>Skills</SectionTitle>
        <div className="max-w-6xl mx-auto space-y-12">
          {/* skills */}
          <div>
            <div className="flex flex-wrap gap-6 justify-center">
              {skills.map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center p-2 sm:p-4 sm:border border-gray-300 dark:border-gray-600 rounded-lg  shadow-md hover:shadow-xl hover:scale-105 transform transition-transform duration-300"
                >
                  <tech.icon size={40} color={tech.color} />
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200 mt-2">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
