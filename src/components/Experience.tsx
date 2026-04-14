
interface Job {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  achievements: string[];
}

const JOBS: Job[] = [
  {
    company: 'Freelance / Self-Employed',
    role: 'IT Consultant & Full-Stack Developer',
    period: 'Jan 2022 – Present',
    location: 'KwaZulu-Natal, SA',
    type: 'Remote',
    summary:
      'Independent consulting across web development, infrastructure, and AI automation for local and international clients.',
    achievements: [
      'Delivered full-stack web applications for SME clients using React, Node.js, and PostgreSQL.',
      'Designed and maintained self-hosted infrastructure, reducing client cloud costs by up to 40%.',
      'Integrated OpenAI-powered chatbots and document-processing pipelines for business workflow automation.',
      'Provided ongoing IT support, network setup, and security hardening for small businesses.',
    ],
  },
  {
    company: 'Tech Solutions KZN',
    role: 'IT Support Specialist',
    period: 'Jun 2020 – Dec 2021',
    location: 'Pietermaritzburg, SA',
    type: 'On-site',
    summary:
      'End-user support, server administration, and internal tooling for a regional managed services provider.',
    achievements: [
      'Handled Tier 1–2 support tickets, achieving consistent 95%+ resolution rates within SLA.',
      'Managed Windows Server environments, Active Directory, and Group Policy for 200+ users.',
      'Scripted automated backup and monitoring routines in Bash and PowerShell, saving 8 hours/week.',
      'Led the migration of on-premise file shares to a hybrid cloud solution.',
    ],
  },
  {
    company: 'Web & Automation Side Projects',
    role: 'Developer (Personal)',
    period: '2018 – 2020',
    location: 'Remote',
    type: 'Personal',
    summary:
      'Built and maintained personal projects to sharpen full-stack and automation skills before transitioning into professional roles.',
    achievements: [
      'Built a home-lab Kubernetes cluster to experiment with container orchestration and self-hosting.',
      'Developed web scrapers and data pipelines for personal analytics projects.',
      'Contributed to open-source repositories in the Python ecosystem.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-[#0a1628]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-[#1d6bf3] mb-2">
            Career Journey
          </p>
          <h2 className="font-['Montserrat'] font-extrabold text-4xl sm:text-5xl text-[#0a1628] dark:text-white">
            Experience
          </h2>
          <p className="mt-3 text-[#475569] dark:text-slate-400 max-w-xl">
            From helpdesk to full-stack and AI integrations — a hands-on path through the IT world.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 -translate-x-1/2 hidden md:block" />

          <div className="flex flex-col gap-12">
            {JOBS.map((job, i) => (
              <div
                key={job.company}
                className={`relative grid md:grid-cols-2 gap-6 md:gap-12 ${
                  i % 2 === 0 ? '' : 'md:[&>*:first-child]:order-last'
                }`}
              >
                {/* Dot on timeline */}
                <div className="hidden md:block absolute left-1/2 top-8 w-4 h-4 rounded-full bg-[#1d6bf3] border-4 border-white dark:border-[#0a1628] -translate-x-1/2 z-10" />

                {/* Company card */}
                <div className={`bg-[#f8fafc] dark:bg-[#0d1f3c] border border-slate-100 dark:border-slate-800 rounded-2xl p-6 ${i % 2 !== 0 ? 'md:text-right' : ''}`}>
                  <div className="w-16 h-16 rounded-xl bg-slate-200 dark:bg-slate-700 mb-4 flex items-center justify-center text-2xl font-bold text-[#1d6bf3]">
                    {job.company[0]}
                  </div>
                  <h3 className="font-['Montserrat'] font-bold text-lg text-[#0a1628] dark:text-white mb-1">
                    {job.company}
                  </h3>
                  <p className="text-[#1d6bf3] font-semibold text-sm mb-3">{job.role}</p>
                  <div className={`flex flex-wrap gap-2 text-xs text-[#94a3b8] ${i % 2 !== 0 ? 'md:justify-end' : ''}`}>
                    <span className="flex items-center gap-1">
                      <i className="fa-solid fa-location-dot" style={{ fontSize: '12px' }}></i> {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <i className="fa-solid fa-tag" style={{ fontSize: '12px' }}></i> {job.type}
                    </span>
                  </div>
                  <p className="mt-3 text-xs text-[#475569] dark:text-slate-400 italic">{job.summary}</p>
                </div>

                {/* Achievements card */}
                <div className="bg-white dark:bg-[#0a1628] border border-slate-100 dark:border-slate-800 rounded-2xl p-6">
                  <div className="inline-flex items-center gap-2 bg-[#e8f0fe] text-[#1d6bf3] text-xs font-bold px-3 py-1 rounded-full mb-5">
                    📅 {job.period}
                  </div>
                  <h4 className="font-['Montserrat'] font-bold text-sm text-[#0a1628] dark:text-white mb-3 flex items-center gap-2">
                    Key Achievements
                  </h4>
                  <ul className="flex flex-col gap-2.5">
                    {job.achievements.map((a) => (
                      <li key={a} className="flex items-start gap-2.5 text-sm text-[#475569] dark:text-slate-400">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1d6bf3] shrink-0" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
