
interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
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

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-[#0a1628]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-[#1d6bf3] mb-2">What I Do</p>
          <h2 className="font-['Montserrat'] font-extrabold text-4xl sm:text-5xl text-[#0a1628] dark:text-white">
            Skills
          </h2>
          <p className="mt-3 text-[#475569] dark:text-slate-400 max-w-xl">
            A broad toolkit spanning frontend, backend, infrastructure, and AI — built to deliver
            end-to-end solutions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.title}
              className="group bg-[#f8fafc] dark:bg-[#0d1f3c] border border-slate-100 dark:border-slate-800 rounded-2xl p-6 hover:border-[#1d6bf3] hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#e8f0fe] text-[#1d6bf3] flex items-center justify-center group-hover:bg-[#1d6bf3] group-hover:text-white transition-colors">
                  {cat.icon}
                </div>
                <h3 className="font-['Montserrat'] font-bold text-[#0a1628] dark:text-white text-sm">
                  {cat.title}
                </h3>
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
    </section>
  );
}
