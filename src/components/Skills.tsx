
interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  techIcons: string[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Front-End Development',
    icon: <i className="fa-solid fa-globe" style={{ fontSize: '20px' }}></i>,
    skills: [
      'Responsive Design',
      'State Management',
      'Accessibility (WCAG)',
      'Cross-Browser Compatibility',
      'Performance Optimization',
      'UI/UX Principles',
    ],
    techIcons: [
      'devicon-react-original colored',
      'devicon-typescript-plain colored',
      'devicon-html5-plain colored',
      'devicon-css3-plain colored',
      'devicon-tailwindcss-plain colored',
      'devicon-flutter-plain colored',
    ],
  },
  {
    title: 'Back-End Development',
    icon: <i className="fa-solid fa-database" style={{ fontSize: '20px' }}></i>,
    skills: [
      'API Design (REST/GraphQL)',
      'Database Schema Design',
      'Authentication & Authorization',
      'Error Handling & Logging',
      'Scalability Concepts',
      'Data Modeling',
    ],
    techIcons: [
      'devicon-nodejs-plain colored',
      'devicon-express-original',
      'devicon-python-plain colored',
      'devicon-flask-plain',
      'devicon-mongoose-original colored',
      'devicon-sqlalchemy-plain',
    ],
  },
  {
    title: 'DevOps & Cloud',
    icon: <i className="fa-solid fa-cloud" style={{ fontSize: '20px' }}></i>,
    skills: [
      'CI/CD Pipelines',
      'Infrastructure as Code',
      'Monitoring & Observability',
      'Container Orchestration',
      'Cloud Cost Optimization',
      'Reverse Proxy Management',
    ],
    techIcons: [
      'devicon-docker-plain colored',
      'devicon-jenkins-plain colored',
      'devicon-github-plain colored',
      'devicon-digitalocean-original colored',
      'devicon-k3os-original colored',
      'devicon-kubernetes-plain colored',
      'devicon-cloudflare-plain colored',
      'devicon-nginx-original colored',
    ],
  },
  {
    title: 'Automation & Scripting',
    icon: <i className="fa-solid fa-terminal" style={{ fontSize: '20px' }}></i>,
    skills: [
      'Task Automation',
      'Workflow Orchestration',
      'Data Parsing & Transformation',
      'Error Recovery Logic',
      'Configuration Management',
    ],
    techIcons: [
      'devicon-bash-plain',
      'devicon-python-plain colored',
      'devicon-ansible-plain',
      'devicon-vagrant-plain colored',
    ],
  },
  {
    title: 'SysAdmin',
    icon: <i className="fa-solid fa-server" style={{ fontSize: '20px' }}></i>,
    skills: [
      'User & Permission Management',
      'Network Troubleshooting',
      'Backup & Disaster Recovery',
      'Log Analysis',
      'Security Hardening',
      'Virtualization Management',
    ],
    techIcons: [
      'devicon-prometheus-original colored',
      'devicon-proxmox-plain-wordmark',
      'devicon-debian-plain colored',
      'devicon-ubuntu-plain',
      'devicon-opensuse-original colored',
    ],
  },
  {
    title: 'Artificial Intelligence',
    icon: <i className="fa-solid fa-robot" style={{ fontSize: '20px' }}></i>,
    skills: [
      'Data Preprocessing',
      'Model Training & Evaluation',
      'Hyperparameter Tuning',
      'RAG Pipelines',
      'Vector Database Integration',
      'Ethical AI Practices',
    ],
    techIcons: [
      'devicon-firebase-plain colored',
      'devicon-dart-plain colored',
      'devicon-google-plain colored',
      'devicon-sqlite-plain colored',
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-[#0a1628]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-[#1d6bf3] mb-2">What I Do</p>
          <h2 className="font-['Montserrat'] font-extrabold text-4xl sm:text-5xl text-[#0a1628] dark:text-white">
            Skills & Stack
          </h2>
          <p className="mt-3 text-[#475569] dark:text-slate-400 max-w-xl">
            A broad toolkit spanning frontend, backend, infrastructure, and AI — built to deliver
            end-to-end solutions.
          </p>
        </div>

        {/* 3-column grid for better balance */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.title}
              className="group flex flex-col bg-[#f1f5f9] dark:bg-[#0d1f3c] border border-slate-100 dark:border-slate-800 rounded-2xl p-6 hover:border-[#1d6bf3] transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#e8f0fe] text-[#1d6bf3] flex items-center justify-center group-hover:bg-[#1d6bf3] group-hover:text-white transition-colors">
                  {cat.icon}
                </div>
                <h3 className="font-['Montserrat'] font-bold text-[#0a1628] dark:text-white text-sm">
                  {cat.title}
                </h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap items-start content-start gap-2 mb-8 flex-1">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-white dark:bg-[#0a1628] border border-slate-200 dark:border-slate-700 text-[#475569] dark:text-slate-300 text-[11px] font-medium px-2.5 py-1 rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Tech Footer */}
              <div className="pt-5 border-t border-slate-200/60 dark:border-slate-800/60">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#94a3b8] mb-3">
                  Technologies
                </p>
                <div className="flex flex-wrap gap-3">
                  {cat.techIcons.map((icon, idx) => (
                    <div key={idx} className="group/icon">
                      <i className={`${icon} text-xl opacity-70 hover:opacity-100 transition-opacity`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
