interface Job {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  achievements: string[];
  logo: string;
  accent: string;
  icon: string;
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
    logo: '/logo-1.png',
    accent: '#1d6bf3',
    icon: 'fa-solid fa-laptop-code',
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
    logo: '/logo-2.png',
    accent: '#0ea5e9',
    icon: 'fa-solid fa-headset',
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
    logo: '/logo-3.png',
    accent: '#6366f1',
    icon: 'fa-solid fa-flask',
  },
  {
    company: 'Digital Agency ZA',
    role: 'Junior Web Developer',
    period: '2017 – 2018',
    location: 'Durban, SA',
    type: 'Hybrid',
    summary:
      'Front-end development and CMS integration for a boutique digital agency serving hospitality and e-commerce clients.',
    achievements: [
      'Built and maintained responsive landing pages and marketing sites using HTML, CSS, and JavaScript.',
      'Collaborated with designers to implement pixel-perfect UI components from Figma mockups.',
      'Integrated WordPress and Shopify themes for client storefronts, improving page load times by 30%.',
      'Assisted with SEO audits and Google Analytics reporting for client campaigns.',
    ],
    logo: '/logo-4.png',
    accent: '#f59e0b',
    icon: 'fa-solid fa-code',
  },
];

/* ── Decorative SVG patterns (one per card) ── */

function WavesPattern({ color }: { color: string }) {
  return (
    <svg className="absolute bottom-0 right-0 w-56 h-40 opacity-30" viewBox="0 0 200 150" fill="none">
      <path d="M20 120 Q60 80 100 110 T180 90" stroke={color} strokeWidth="2.5" fill="none" />
      <path d="M10 135 Q50 95 90 125 T170 105" stroke={color} strokeWidth="2" fill="none" />
      <path d="M30 145 Q70 105 110 135 T190 115" stroke={color} strokeWidth="1.5" fill="none" opacity="0.6" />
      <path d="M0 100 Q40 60 80 90 T160 70" stroke={color} strokeWidth="1.5" fill="none" opacity="0.4" />
      <path d="M40 110 Q80 70 120 100 T200 80" stroke={color} strokeWidth="1" fill="none" opacity="0.3" />
    </svg>
  );
}

function DotsPattern({ color }: { color: string }) {
  const dots = [];
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 10; col++) {
      const x = 20 + col * 18 + (row % 2 === 0 ? 0 : 9);
      const y = 10 + row * 16;
      const dist = Math.sqrt((x - 100) ** 2 + (y - 70) ** 2);
      const r = Math.max(1, 4 - dist / 30);
      const opacity = Math.max(0.15, 1 - dist / 100);
      dots.push(<circle key={`${row}-${col}`} cx={x} cy={y} r={r} fill={color} opacity={opacity} />);
    }
  }
  return (
    <svg className="absolute bottom-0 right-0 w-56 h-40 opacity-40" viewBox="0 0 200 140" fill="none">
      {dots}
    </svg>
  );
}

function DiagonalLinesPattern({ color }: { color: string }) {
  const lines = [];
  for (let i = 0; i < 14; i++) {
    const x = 10 + i * 15;
    const opacity = 0.2 + (i / 14) * 0.6;
    lines.push(
      <line key={i} x1={x} y1="150" x2={x + 70} y2="0" stroke={color} strokeWidth="2.5" opacity={opacity} />
    );
  }
  return (
    <svg className="absolute bottom-0 right-0 w-56 h-40 opacity-35" viewBox="0 0 220 150" fill="none">
      {lines}
    </svg>
  );
}

function ConfettiPattern({ color }: { color: string }) {
  const pieces = [
    { x: 30, y: 20, r: 35 }, { x: 80, y: 40, r: -20 }, { x: 130, y: 15, r: 60 },
    { x: 55, y: 70, r: -45 }, { x: 110, y: 60, r: 15 }, { x: 160, y: 30, r: -70 },
    { x: 40, y: 110, r: 50 }, { x: 90, y: 95, r: -30 }, { x: 145, y: 85, r: 40 },
    { x: 175, y: 70, r: -15 }, { x: 65, y: 130, r: 25 }, { x: 120, y: 120, r: -55 },
    { x: 170, y: 110, r: 10 }, { x: 20, y: 80, r: -40 }, { x: 185, y: 130, r: 65 },
    { x: 100, y: 140, r: -25 }, { x: 50, y: 50, r: 70 }, { x: 155, y: 50, r: -60 },
  ];
  return (
    <svg className="absolute bottom-0 right-0 w-56 h-40 opacity-35" viewBox="0 0 200 150" fill="none">
      {pieces.map((p, i) => (
        <rect
          key={i}
          x={p.x}
          y={p.y}
          width="12"
          height="3"
          rx="1.5"
          fill={color}
          transform={`rotate(${p.r} ${p.x + 6} ${p.y + 1.5})`}
          opacity={0.4 + (i % 3) * 0.2}
        />
      ))}
    </svg>
  );
}

const PATTERNS = [WavesPattern, DotsPattern, DiagonalLinesPattern, ConfettiPattern];

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

        {/* 2×2 Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {JOBS.map((job, i) => {
            const Pattern = PATTERNS[i % PATTERNS.length];
            return (
              <article
                key={job.company}
                className="group bg-[#f8fafc] dark:bg-[#0d1f3c] border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Card header with logo + SVG pattern */}
                <div
                  className="relative h-52 flex items-center justify-start pl-8 overflow-hidden"
                  style={{ background: `${job.accent}0a` }}
                >
                  {/* Logo — large */}
                  <img
                    src={job.logo}
                    alt={job.company}
                    className="relative z-10 w-64 h-64 object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Decorative SVG pattern */}
                  <Pattern color={job.accent} />

                  {/* Icon badge (top-left like reference) */}
                  <div
                    className="absolute top-5 left-5 w-11 h-11 rounded-2xl flex items-center justify-center shadow-md z-10"
                    style={{ background: job.accent }}
                  >
                    <i
                      className={job.icon}
                      style={{ fontSize: '18px', color: '#ffffff' }}
                    ></i>
                  </div>

                  {/* Period badge (top-right like reference) */}
                  <span className="absolute top-5 right-5 text-xs font-semibold text-[#94a3b8] dark:text-slate-500 z-10">
                    {job.period}
                  </span>
                </div>

                {/* Accent bar */}
                <div className="h-1 w-full" style={{ background: job.accent }} />

                <div className="p-6">
                  {/* Company & Role */}
                  <h3 className="font-['Montserrat'] font-bold text-lg text-[#0a1628] dark:text-white mb-1 group-hover:text-[#1d6bf3] transition-colors">
                    {job.company}
                  </h3>
                  <p
                    className="font-semibold text-sm mb-3"
                    style={{ color: job.accent }}
                  >
                    {job.role}
                  </p>

                  {/* Meta: location & type */}
                  <div className="flex flex-wrap gap-3 text-xs text-[#94a3b8] mb-4">
                    <span className="flex items-center gap-1.5">
                      <i className="fa-solid fa-location-dot" style={{ fontSize: '11px' }}></i>
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <i className="fa-solid fa-building" style={{ fontSize: '11px' }}></i>
                      {job.type}
                    </span>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-[#475569] dark:text-slate-400 leading-relaxed mb-5 italic">
                    {job.summary}
                  </p>

                  {/* Divider */}
                  <div className="border-t border-slate-100 dark:border-slate-800 mb-4" />

                  {/* Achievements */}
                  <p className="text-xs font-bold uppercase tracking-wider text-[#0a1628] dark:text-white mb-3">
                    Key Achievements
                  </p>
                  <ul className="flex flex-col gap-2.5">
                    {job.achievements.map((a) => (
                      <li
                        key={a}
                        className="flex items-start gap-2.5 text-sm text-[#475569] dark:text-slate-400"
                      >
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ background: job.accent }}
                        />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
