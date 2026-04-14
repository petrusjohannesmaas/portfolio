interface Tech {
  name: string;
  icon: string; // devicons CSS class
}

interface Category {
  title: string;
  techs: Tech[];
}

// Using devicons for icons — include the CDN link in index.html
const CATEGORIES: Category[] = [
  {
    title: 'Programming Languages',
    techs: [
      { name: 'Python',     icon: 'devicon-python-plain colored' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
      { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
      { name: 'Bash',       icon: 'devicon-bash-plain' },
      { name: 'SQL',        icon: 'devicon-azuresqldatabase-plain colored' },
    ],
  },
  {
    title: 'Web Fundamentals',
    techs: [
      { name: 'HTML5',       icon: 'devicon-html5-plain colored' },
      { name: 'CSS3',        icon: 'devicon-css3-plain colored' },
      { name: 'Tailwind',    icon: 'devicon-tailwindcss-plain colored' },
      { name: 'REST APIs',   icon: 'devicon-fastapi-plain colored' },
    ],
  },
  {
    title: 'Frameworks',
    techs: [
      { name: 'React',      icon: 'devicon-react-original colored' },
      { name: 'Next.js',    icon: 'devicon-nextjs-plain' },
      { name: 'Node.js',    icon: 'devicon-nodejs-plain colored' },
      { name: 'FastAPI',    icon: 'devicon-fastapi-plain colored' },
      { name: 'Express',    icon: 'devicon-express-original' },
    ],
  },
  {
    title: 'Automation',
    techs: [
      { name: 'Ansible',    icon: 'devicon-ansible-plain colored' },
      { name: 'GitHub Actions', icon: 'devicon-githubactions-plain colored' },
      { name: 'Docker',     icon: 'devicon-docker-plain colored' },
      { name: 'n8n',        icon: 'devicon-nodejs-plain' }, // placeholder
      { name: 'Selenium',   icon: 'devicon-selenium-original colored' },
    ],
  },
  {
    title: 'Development Tools',
    techs: [
      { name: 'Git',        icon: 'devicon-git-plain colored' },
      { name: 'GitHub',     icon: 'devicon-github-original' },
      { name: 'VS Code',    icon: 'devicon-vscode-plain colored' },
      { name: 'Linux',      icon: 'devicon-linux-plain' },
      { name: 'Nginx',      icon: 'devicon-nginx-original colored' },
      { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
    ],
  },
];

export default function Stack() {
  return (
    <section id="stack" className="py-24 bg-[#f8fafc] dark:bg-[#0d1f3c]">
      {/* Devicons CDN — inject once per page; safe to include here */}
      {/* Add the following to your index.html <head>:
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      */}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-[#1d6bf3] mb-2">Tools & Technologies</p>
          <h2 className="font-['Montserrat'] font-extrabold text-4xl sm:text-5xl text-[#0a1628] dark:text-white">
            Tech Stack
          </h2>
          <p className="mt-3 text-[#475569] dark:text-slate-400 max-w-xl">
            Languages, frameworks, and tools I use to ship things end-to-end.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.title}
              className="bg-white dark:bg-[#0a1628] border border-slate-100 dark:border-slate-800 rounded-2xl p-6"
            >
              <h3 className="font-['Montserrat'] font-bold text-[#0a1628] dark:text-white mb-5 text-sm">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-4">
                {cat.techs.map((tech) => (
                  <div key={tech.name} className="flex flex-col items-center gap-1.5 group">
                    <div className="w-12 h-12 rounded-xl bg-[#f8fafc] dark:bg-[#0d1f3c] border border-slate-100 dark:border-slate-800 flex items-center justify-center group-hover:border-[#1d6bf3] transition-colors">
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

        {/* Note about devicons */}
        <p className="mt-8 text-xs text-[#94a3b8] text-center">
          ⚠️ Add{' '}
          <code className="font-mono bg-slate-100 dark:bg-slate-800 px-1 rounded">
            devicon.min.css
          </code>{' '}
          to your <code className="font-mono bg-slate-100 dark:bg-slate-800 px-1 rounded">index.html</code> — see SETUP.md.
        </p>
      </div>
    </section>
  );
}
