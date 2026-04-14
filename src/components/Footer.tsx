
const NAV = [
  { label: 'Home',       href: '#home' },
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Stack',      href: '#stack' },
  { label: 'Contact',    href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <p className="font-['Montserrat'] font-extrabold text-2xl mb-3">
              PJ<span className="text-[#1d6bf3]">.</span>
            </p>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              IT Specialist & Full-Stack Developer based in KwaZulu-Natal, South Africa.
              Building things that actually work.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-['Montserrat'] font-bold text-xs uppercase tracking-widest text-slate-500 mb-4">
              Navigate
            </h4>
            <ul className="grid grid-cols-2 gap-2">
              {NAV.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-slate-400 hover:text-[#4f8ef7] transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-['Montserrat'] font-bold text-xs uppercase tracking-widest text-slate-500 mb-4">
              Connect
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-[#4f8ef7] transition-colors"
              >
                <i className="fa-brands fa-github" style={{ fontSize: '16px' }}></i> GitHub
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-[#4f8ef7] transition-colors"
              >
                <i className="fa-brands fa-linkedin" style={{ fontSize: '16px' }}></i> LinkedIn
              </a>
              <a
                href="https://calendly.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-[#4f8ef7] transition-colors"
              >
                <i className="fa-solid fa-calendar-days" style={{ fontSize: '16px' }}></i> Calendly
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-600">
          <p>© {new Date().getFullYear()} Petrus J. Maas. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <i className="fa-solid fa-heart text-[#1d6bf3]" style={{ fontSize: '11px' }}></i> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
