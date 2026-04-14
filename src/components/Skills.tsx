
interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

interface Tech {
  name: string;
  icon: string;
}

interface StackCategory {
  title: string;
  techs: Tech[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Web Development',
    icon: <i className="fa-solid fa-globe" style={{ fontSize: '22px' }}></i>,
    skills: ['React', 'TypeScript', 'Next.js', 'HTML & CSS', 'Tailwind CSS', 'REST APIs', 'GraphQL'],
  },
  {
    title: 'Back-End Development',
    icon: <i className="fa-solid fa-server" style={{ fontSize: '22px' }}></i>,
    skills: ['Node.js', 'Python', 'FastAPI', 'Express', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    title: 'DevOps & Cloud',
    icon: <i className="fa-solid fa-cloud" style={{ fontSize: '22px' }}></i>,
    skills: ['Docker', 'CI/CD Pipelines', 'GitHub Actions', 'AWS', 'Cloudflare', 'Linux Server Admin', 'Nginx'],
  },
  {
    title: 'Automation & Scripting',
    icon: <i className="fa-solid fa-terminal" style={{ fontSize: '22px' }}></i>,
    skills: ['Bash Scripting', 'Python Automation', 'Cron Jobs', 'Ansible', 'Web Scraping', 'Task Scheduling'],
  },
  {
    title: 'SysAdmin',
    icon: <i className="fa-solid fa-gear" style={{ fontSize: '22px' }}></i>,
    skills: ['Linux (Debian/Ubuntu)', 'Windows Server', 'Active Directory', 'Networking', 'Firewalls', 'Backups & Recovery'],
  },
  {
    title: 'AI Integrations',
    icon: <i className="fa-solid fa-robot" style={{ fontSize: '22px' }}></i>,
    skills: ['OpenAI API', 'LangChain', 'RAG Pipelines', 'Vector Databases', 'Prompt Engineering', 'AI Workflow Automation'],
  },
];

const STACK_CATEGORIES: StackCategory[] = [
  {
    title: 'Programming Languages',
    techs: [
      { name: 'Python', icon: 'devicon-python-plain colored' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
      { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
      { name: 'Bash', icon: 'devicon-bash-plain' },
      { name: 'SQL', icon: 'devicon-azuresqldatabase-plain colored' },
    ],
  },
  {
    title: 'Web Fundamentals',
    techs: [
      { name: 'HTML5', icon: 'devicon-html5-plain colored' },
      { name: 'CSS3', icon: 'devicon-css3-plain colored' },
      { name: 'Tailwind', icon: 'devicon-tailwindcss-plain colored' },
      { name: 'REST APIs', icon: 'devicon-fastapi-plain colored' },
    ],
  },
  {
    title: 'Frameworks',
    techs: [
      { name: 'React', icon: 'devicon-react-original colored' },
      { name: 'Next.js', icon: 'devicon-nextjs-plain' },
      { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
      { name: 'FastAPI', icon: 'devicon-fastapi-plain colored' },
      { name: 'Express', icon: 'devicon-express-original' },
    ],
  },
  {
    title: 'Automation',
    techs: [
      { name: 'Ansible', icon: 'devicon-ansible-plain colored' },
      { name: 'GitHub Actions', icon: 'devicon-githubactions-plain colored' },
      { name: 'Docker', icon: 'devicon-docker-plain colored' },
      { name: 'n8n', icon: 'devicon-nodejs-plain' },
      { name: 'Selenium', icon: 'devicon-selenium-original colored' },
    ],
  },
  {
    title: 'Development Tools',
    techs: [
      { name: 'Git', icon: 'devicon-git-plain colored' },
      { name: 'GitHub', icon: 'devicon-github-original' },
      { name: 'VS Code', icon: 'devicon-vscode-plain colored' },
      { name: 'Linux', icon: 'devicon-linux-plain' },
      { name: 'Nginx', icon: 'devicon-nginx-original colored' },
      { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
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

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT — Skills */}
          <div>
            <h3 className="font-['Montserrat'] font-bold text-sm uppercase tracking-wider text-[#0a1628] dark:text-white mb-5">
              Core Skills
            </h3>
            <div className="flex flex-col gap-4">
              {SKILL_CATEGORIES.map((cat) => (
                <div
                  key={cat.title}
                  className="group bg-[#f8fafc] dark:bg-[#0d1f3c] border border-slate-100 dark:border-slate-800 rounded-2xl p-5 hover:border-[#1d6bf3] transition-colors"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-[#e8f0fe] text-[#1d6bf3] flex items-center justify-center group-hover:bg-[#1d6bf3] group-hover:text-white transition-colors text-sm">
                      {cat.icon}
                    </div>
                    <h4 className="font-['Montserrat'] font-bold text-[#0a1628] dark:text-white text-sm">
                      {cat.title}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-white dark:bg-[#0a1628] border border-slate-200 dark:border-slate-700 text-[#475569] dark:text-slate-300 text-xs font-medium px-2.5 py-1 rounded-lg"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Tech Stack */}
          <div>
            <h3 className="font-['Montserrat'] font-bold text-sm uppercase tracking-wider text-[#0a1628] dark:text-white mb-5">
              Tech Stack
            </h3>
            <div className="flex flex-col gap-4">
              {STACK_CATEGORIES.map((cat) => (
                <div
                  key={cat.title}
                  className="bg-[#f8fafc] dark:bg-[#0d1f3c] border border-slate-100 dark:border-slate-800 rounded-2xl p-5"
                >
                  <h4 className="font-['Montserrat'] font-bold text-[#0a1628] dark:text-white mb-4 text-sm">
                    {cat.title}
                  </h4>
                  <div className="flex flex-wrap gap-4">
                    {cat.techs.map((tech) => (
                      <div key={tech.name} className="flex flex-col items-center gap-1.5 group">
                        <div className="w-11 h-11 rounded-xl bg-white dark:bg-[#0a1628] border border-slate-100 dark:border-slate-800 flex items-center justify-center group-hover:border-[#1d6bf3] transition-colors">
                          <i className={`${tech.icon} text-2xl`} />
                        </div>
                        <span className="text-[10px] font-medium text-[#94a3b8] group-hover:text-[#1d6bf3] transition-colors text-center">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
