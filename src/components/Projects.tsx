
interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  live?: string;
  stars: number;
  forks: number;
  accent: string;
}

const PROJECTS: Project[] = [
  {
    title: 'HomeLabOS',
    description:
      'A self-hosted home-lab orchestration tool. Automates provisioning, monitoring, and management of Docker-based services on a local server — with a clean web dashboard.',
    tags: ['Python', 'Docker', 'FastAPI', 'React', 'SQLite'],
    github: 'https://github.com/',
    stars: 42,
    forks: 8,
    accent: '#1d6bf3',
  },
  {
    title: 'AutoScript',
    description:
      'A collection of Bash and Python automation scripts for common sysadmin tasks: backups, log rotation, user provisioning, health checks, and alerting via webhook.',
    tags: ['Bash', 'Python', 'Linux', 'Cron', 'Webhooks'],
    github: 'https://github.com/',
    stars: 28,
    forks: 5,
    accent: '#0ea5e9',
  },
  {
    title: 'AIDesk',
    description:
      'An AI-powered helpdesk assistant that integrates with an existing ticketing system. Uses RAG over internal documentation to provide instant, contextual answers.',
    tags: ['Python', 'LangChain', 'OpenAI', 'PostgreSQL', 'pgvector'],
    github: 'https://github.com/',
    live: 'https://example.com',
    stars: 67,
    forks: 12,
    accent: '#6366f1',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#f8fafc] dark:bg-[#0d1f3c]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-[#1d6bf3] mb-2">
            What I've Built
          </p>
          <h2 className="font-['Montserrat'] font-extrabold text-4xl sm:text-5xl text-[#0a1628] dark:text-white">
            Projects
          </h2>
          <p className="mt-3 text-[#475569] dark:text-slate-400 max-w-xl">
            A selection of personal and open-source projects I've shipped.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <article
              key={p.title}
              className="flex flex-col bg-white dark:bg-[#0a1628] border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow group"
            >
              {/* Accent bar */}
              <div
                className="h-1.5 w-full"
                style={{ background: p.accent }}
              />

              <div className="flex flex-col flex-1 p-6">
                <h3 className="font-['Montserrat'] font-bold text-xl text-[#0a1628] dark:text-white mb-3 group-hover:text-[#1d6bf3] transition-colors">
                  {p.title}
                </h3>

                <p className="text-sm text-[#475569] dark:text-slate-400 leading-relaxed mb-5 flex-1">
                  {p.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#e8f0fe] text-[#1d6bf3] text-xs font-semibold px-2.5 py-1 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-3 text-xs text-[#94a3b8]">
                    <span className="flex items-center gap-1">
                      <i className="fa-solid fa-star" style={{ fontSize: '13px' }}></i> {p.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <i className="fa-solid fa-code-fork" style={{ fontSize: '13px' }}></i> {p.forks}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-lg text-[#475569] hover:text-[#1d6bf3] hover:bg-[#e8f0fe] transition-all"
                      aria-label="View on GitHub"
                    >
                      <i className="fa-brands fa-github" style={{ fontSize: '17px' }}></i>
                    </a>
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded-lg text-[#475569] hover:text-[#1d6bf3] hover:bg-[#e8f0fe] transition-all"
                        aria-label="View live demo"
                      >
                        <i className="fa-solid fa-up-right-from-square" style={{ fontSize: '17px' }}></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border-2 border-slate-200 dark:border-slate-700 text-[#0a1628] dark:text-white font-semibold px-6 py-3 rounded-xl hover:border-[#1d6bf3] transition-colors"
          >
            <i className="fa-brands fa-github" style={{ fontSize: '18px' }}></i> View all on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
