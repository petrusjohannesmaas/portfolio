
interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  techIcons: string[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Web Development',
    icon: <i className="fa-solid fa-globe" style={{ fontSize: '20px' }}></i>,
    skills: ['React', 'TypeScript', 'Next.js', 'HTML & CSS', 'Tailwind CSS', 'REST APIs', 'GraphQL'],
    techIcons: [
      'devicon-html5-plain colored',
      'devicon-css3-plain colored',
      'devicon-react-original colored',
      'devicon-nextjs-plain',
      'devicon-typescript-plain colored',
      'devicon-tailwindcss-plain colored',
    ],
  },
  {
    title: 'Back-End Development',
    icon: <i className="fa-solid fa-server" style={{ fontSize: '20px' }}></i>,
    skills: ['Node.js', 'Python', 'FastAPI', 'Express', 'PostgreSQL', 'MongoDB', 'Redis'],
    techIcons: [
      'devicon-nodejs-plain colored',
      'devicon-python-plain colored',
      'devicon-fastapi-plain colored',
      'devicon-express-original',
      'devicon-postgresql-plain colored',
    ],
  },
  {
    title: 'DevOps & Cloud',
    icon: <i className="fa-solid fa-cloud" style={{ fontSize: '20px' }}></i>,
    skills: ['Docker', 'CI/CD Pipelines', 'GitHub Actions', 'AWS', 'Cloudflare', 'Linux Server Admin', 'Nginx'],
    techIcons: [
      'devicon-docker-plain colored',
      'devicon-githubactions-plain colored',
      'devicon-linux-plain',
      'devicon-bash-plain',
      'devicon-nginx-original colored',
    ],
  },
  {
    title: 'Automation & Scripting',
    icon: <i className="fa-solid fa-terminal" style={{ fontSize: '20px' }}></i>,
    skills: ['Bash Scripting', 'Python Automation', 'Cron Jobs', 'Ansible', 'Web Scraping', 'Task Scheduling'],
    techIcons: [
      'devicon-bash-plain',
      'devicon-python-plain colored',
      'devicon-ansible-plain colored',
      'devicon-selenium-original colored',
      'devicon-nodejs-plain', // n8n placeholder
    ],
  },
  {
    title: 'SysAdmin',
    icon: <i className="fa-solid fa-gear" style={{ fontSize: '20px' }}></i>,
    skills: ['Linux (Debian/Ubuntu)', 'Windows Server', 'Active Directory', 'Networking', 'Firewalls', 'Backups & Recovery'],
    techIcons: ['devicon-linux-plain'],
  },
  {
    title: 'AI Integrations',
    icon: <i className="fa-solid fa-robot" style={{ fontSize: '20px' }}></i>,
    skills: ['OpenAI API', 'LangChain', 'RAG Pipelines', 'Vector Databases', 'Prompt Engineering', 'AI Workflow Automation'],
    techIcons: [
      'devicon-python-plain colored',
      'devicon-nodejs-plain colored',
      'devicon-postgresql-plain colored',
      'devicon-nodejs-plain', // n8n placeholder
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
              className="group flex flex-col bg-[#f8fafc] dark:bg-[#0d1f3c] border border-slate-100 dark:border-slate-800 rounded-2xl p-6 hover:border-[#1d6bf3] transition-all duration-300"
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
              <div className="flex flex-wrap gap-2 mb-8 flex-1">
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
