interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
}

const PROJECTS: Project[] = [
  {
    title: 'HomeLabOS',
    description:
      'A self-hosted home-lab orchestration tool. Automates provisioning, monitoring, and management of Docker-based services on a local server — with a clean web dashboard.',
    tags: ['Python', 'Docker', 'FastAPI', 'React', 'SQLite'],
    link: '#',
    image: '/project_1.png',
  },
  {
    title: 'AutoScript',
    description:
      'A collection of Bash and Python automation scripts for common sysadmin tasks: backups, log rotation, user provisioning, health checks, and alerting via webhook.',
    tags: ['Bash', 'Python', 'Linux', 'Cron', 'Webhooks'],
    link: '#',
    image: '/project_2.png',
  },
  {
    title: 'AIDesk',
    description:
      'An AI-powered helpdesk assistant that integrates with an existing ticketing system. Uses RAG over internal documentation to provide instant, contextual answers.',
    tags: ['Python', 'LangChain', 'OpenAI', 'PostgreSQL', 'pgvector'],
    link: '#',
    image: '/project_3.png',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#f1f5f9] dark:bg-[#0d1f3c]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div id="projects-heading" className="mb-16">
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

        {/* Project rows */}
        <div className="flex flex-col gap-32">
          {PROJECTS.map((p, i) => {
            const isEven = i % 2 === 1;
            return (
              <div
                key={p.title}
                className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 lg:gap-16 items-center`}
              >
                {/* Screenshot */}
                <div className="w-full lg:w-1/2 shrink-0">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700 group">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-[#1d6bf3] z-10" />
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-[#1d6bf3]/0 group-hover:bg-[#1d6bf3]/5 transition-colors duration-500" />
                  </div>
                </div>

                {/* Text content */}
                <div className="w-full lg:w-1/2">
                  <h3 className="font-['Montserrat'] font-extrabold text-3xl sm:text-4xl text-[#0a1628] dark:text-white mb-4 leading-tight">
                    {p.title}
                  </h3>

                  <p className="text-[#475569] dark:text-slate-400 text-base leading-relaxed mb-7">
                    {p.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-[#e8f0fe] text-[#1d6bf3] text-xs font-bold px-3 py-1.5 rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2.5 bg-[#1d6bf3] hover:bg-[#1558d6] text-white font-bold px-6 py-3 rounded-xl transition-all hover:shadow-lg hover:shadow-blue-500/20 active:scale-[0.98]"
                  >
                    <i className="fa-solid fa-up-right-from-square" style={{ fontSize: '14px' }}></i>
                    VIEW PROJECT
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
