import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    }
    return 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm dark:bg-[#0a1628]/95'
          : 'bg-transparent'
        }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Brand */}
        <a
          href="#home"
          className="font-['Montserrat'] font-extrabold text-xl tracking-tight text-[#0a1628] dark:text-white"
        >
          PJ<span className="text-[#1d6bf3]">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-3 py-1.5 text-sm font-medium text-[#475569] hover:text-[#1d6bf3] transition-colors dark:text-slate-300 dark:hover:text-[#4f8ef7]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Social icons (desktop) */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-md text-[#475569] hover:text-[#1d6bf3] hover:bg-[#e8f0fe] transition-all dark:text-slate-300"
            aria-label="GitHub"
          >
            <i className="fa-brands fa-github" style={{ fontSize: '18px' }}></i>
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-md text-[#475569] hover:text-[#1d6bf3] hover:bg-[#e8f0fe] transition-all dark:text-slate-300"
            aria-label="LinkedIn"
          >
            <i className="fa-brands fa-linkedin" style={{ fontSize: '18px' }}></i>
          </a>
          <a
            href="https://calendly.com/"
            target="_blank"
            rel="noreferrer"
            className="ml-1 flex items-center gap-1.5 bg-[#1d6bf3] text-white text-sm font-medium px-3 py-1.5 rounded-lg hover:bg-[#1558d6] transition-colors"
          >
            <i className="fa-solid fa-calendar-days" style={{ fontSize: '15px' }}></i>
            Book a call
          </a>
          {/* Theme toggle pill — far right on desktop */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
            className="ml-2 flex items-center gap-0.5 rounded-full px-1 py-1 transition-all duration-300 bg-white border border-slate-200 shadow-sm dark:bg-[#0d1f3c] dark:border-slate-700"
          >
            <span
              className={`flex items-center justify-center w-7 h-7 rounded-full transition-all duration-300 ${
                theme === 'light' ? 'bg-[#1d6bf3] text-white' : 'text-slate-400'
              }`}
            >
              <i className="fa-solid fa-sun" style={{ fontSize: '13px' }}></i>
            </span>
            <span
              className={`flex items-center justify-center w-7 h-7 rounded-full transition-all duration-300 ${
                theme === 'dark' ? 'bg-[#1d6bf3] text-white' : 'text-slate-400'
              }`}
            >
              <i className="fa-solid fa-moon" style={{ fontSize: '13px' }}></i>
            </span>
          </button>
        </div>

        {/* Mobile: toggle pill between brand and hamburger */}
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          aria-label="Toggle theme"
          className="md:hidden flex items-center gap-0.5 rounded-full px-1 py-1 transition-all duration-300 bg-white border border-slate-200 shadow-sm dark:bg-[#0d1f3c] dark:border-slate-700"
        >
          <span
            className={`flex items-center justify-center w-7 h-7 rounded-full transition-all duration-300 ${
              theme === 'light' ? 'bg-[#1d6bf3] text-white' : 'text-slate-400'
            }`}
          >
            <i className="fa-solid fa-sun" style={{ fontSize: '13px' }}></i>
          </span>
          <span
            className={`flex items-center justify-center w-7 h-7 rounded-full transition-all duration-300 ${
              theme === 'dark' ? 'bg-[#1d6bf3] text-white' : 'text-slate-400'
            }`}
          >
            <i className="fa-solid fa-moon" style={{ fontSize: '13px' }}></i>
          </span>
        </button>

        {/* Hamburger (mobile) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-md text-[#0a1628] dark:text-white"
          aria-label="Toggle menu"
        >
          {open ? <i className="fa-solid fa-xmark" style={{ fontSize: '22px' }}></i> : <i className="fa-solid fa-bars" style={{ fontSize: '22px' }}></i>}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-white dark:bg-[#0a1628] border-t border-slate-100 dark:border-slate-800 px-4 pb-6 pt-2 shadow-lg">
          <ul className="flex flex-col gap-1 mb-4">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={close}
                  className="block px-3 py-2.5 text-sm font-medium text-[#475569] hover:text-[#1d6bf3] hover:bg-[#e8f0fe] rounded-md transition-colors dark:text-slate-300"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex gap-3 px-3">
            <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-[#475569] dark:text-slate-300">
              <i className="fa-brands fa-github" style={{ fontSize: '20px' }}></i>
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-[#475569] dark:text-slate-300">
              <i className="fa-brands fa-linkedin" style={{ fontSize: '20px' }}></i>
            </a>
            <a
              href="https://calendly.com/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 bg-[#1d6bf3] text-white text-sm font-medium px-3 py-1 rounded-lg"
            >
              <i className="fa-solid fa-calendar-days" style={{ fontSize: '14px' }}></i> Book a call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
