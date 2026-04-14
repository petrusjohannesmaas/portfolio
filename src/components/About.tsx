
const CERTS = [
  { name: 'CompTIA A+', issuer: 'CompTIA', year: '2023' },
  { name: 'Google IT Support Professional', issuer: 'Google / Coursera', year: '2022' },
  { name: 'AWS Cloud Practitioner', issuer: 'Amazon Web Services', year: '2024' },
];

const INTERESTS = ['Chess', 'Hiking', 'Open Source', 'Astronomy', 'Cooking', 'Photography'];

const LANGUAGES = [
  { lang: 'Afrikaans', level: 'Native' },
  { lang: 'English',   level: 'Fluent' },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-[#f8fafc] dark:bg-[#0d1f3c]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-[#1d6bf3] mb-2">Who I Am</p>
          <h2 className="font-['Montserrat'] font-extrabold text-4xl sm:text-5xl text-[#0a1628] dark:text-white">
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left: bio (3 cols) */}
          <div className="lg:col-span-3 bg-white dark:bg-[#0a1628] rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#e8f0fe] flex items-center justify-center">
                <i className="fa-solid fa-briefcase text-[#1d6bf3]" style={{ fontSize: '20px' }}></i>
              </div>
              <span className="font-['Montserrat'] font-bold text-lg text-[#0a1628] dark:text-white">
                IT Specialist & Developer
              </span>
            </div>

            <p className="text-[#475569] dark:text-slate-400 leading-relaxed mb-4">
              I'm a passionate IT professional and full-stack developer based in KwaZulu-Natal, South Africa.
              My work spans web development, system administration, infrastructure, and AI integrations — I
              love bridging the gap between technical complexity and practical business solutions.
            </p>
            <p className="text-[#475569] dark:text-slate-400 leading-relaxed mb-4">
              With a background in both hands-on sysadmin work and modern software development, I bring
              a holistic perspective to every project: I care as much about uptime and security as I do
              about clean code and great UX.
            </p>
            <p className="text-[#475569] dark:text-slate-400 leading-relaxed">
              I'm always exploring the latest in automation, AI tooling, and cloud infrastructure —
              and I believe the best solutions are the ones that quietly just work.
            </p>
          </div>

          {/* Right: quick facts (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            {/* Certificates */}
            <div className="bg-white dark:bg-[#0a1628] rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2 mb-4">
                <i className="fa-solid fa-award text-[#1d6bf3]" style={{ fontSize: '18px' }}></i>
                <h3 className="font-['Montserrat'] font-bold text-[#0a1628] dark:text-white">Certificates</h3>
              </div>
              <ul className="flex flex-col gap-3">
                {CERTS.map((c) => (
                  <li key={c.name} className="flex items-start gap-3">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#1d6bf3] shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-[#0a1628] dark:text-white">{c.name}</p>
                      <p className="text-xs text-[#94a3b8]">{c.issuer} · {c.year}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Languages */}
            <div className="bg-white dark:bg-[#0a1628] rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2 mb-4">
                <i className="fa-solid fa-globe text-[#1d6bf3]" style={{ fontSize: '18px' }}></i>
                <h3 className="font-['Montserrat'] font-bold text-[#0a1628] dark:text-white">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {LANGUAGES.map((l) => (
                  <span
                    key={l.lang}
                    className="inline-flex items-center gap-1.5 bg-[#e8f0fe] text-[#1d6bf3] text-xs font-semibold px-3 py-1.5 rounded-full"
                  >
                    {l.lang}
                    <span className="text-[#94a3b8] font-normal">· {l.level}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="bg-white dark:bg-[#0a1628] rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2 mb-4">
                <i className="fa-solid fa-heart text-[#1d6bf3]" style={{ fontSize: '18px' }}></i>
                <h3 className="font-['Montserrat'] font-bold text-[#0a1628] dark:text-white">Interests</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {INTERESTS.map((i) => (
                  <span
                    key={i}
                    className="bg-[#f1f5f9] dark:bg-slate-800 text-[#475569] dark:text-slate-300 text-xs font-medium px-3 py-1.5 rounded-full"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
