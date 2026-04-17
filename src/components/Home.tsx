import { useEffect, useState } from 'react';
import CursorGlow from './CursorGlow';

const TITLES = ['Freelance IT Specialist', 'AI-Enabled Developer', 'Automation Engineer'];

function useTypingEffect(words: string[], typingSpeed = 80, deleteSpeed = 45, pause = 1800) {
  const [displayed, setDisplayed] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];

    if (!deleting && charIdx < current.length) {
      const t = setTimeout(() => setCharIdx((c) => c + 1), typingSpeed);
      return () => clearTimeout(t);
    }
    if (!deleting && charIdx === current.length) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
    if (deleting && charIdx > 0) {
      const t = setTimeout(() => setCharIdx((c) => c - 1), deleteSpeed);
      return () => clearTimeout(t);
    }
    if (deleting && charIdx === 0) {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % words.length);
    }
  }, [charIdx, deleting, wordIdx, words, typingSpeed, deleteSpeed, pause]);

  useEffect(() => {
    setDisplayed(words[wordIdx].slice(0, charIdx));
  }, [charIdx, wordIdx, words]);

  return displayed;
}

export default function Home() {
  const typed = useTypingEffect(TITLES);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white dark:bg-[#0a1628]"
    >
      <CursorGlow />
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(#1d6bf3 1px, transparent 1px), linear-gradient(90deg, #1d6bf3 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Blue accent blob */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#1d6bf3] opacity-5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-[#4f8ef7] opacity-5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="flex justify-center lg:justify-start fade-up">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] rounded-full border-4 border-[#1d6bf3] p-1.5 shadow-2xl overflow-hidden bg-white dark:bg-[#0a1628] group">
              <div className="absolute inset-0 bg-[#1d6bf3]/10 group-hover:bg-transparent transition-colors duration-500" />
              <img
                src="/pfp.jpg"
                alt="Petrus J. Maas"
                className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Location badge */}
            <div className="inline-flex items-center gap-2 bg-[#e8f0fe] text-[#1d6bf3] text-xs font-semibold px-3 py-1.5 rounded-full mb-8 fade-up">
              <span className="w-2 h-2 rounded-full bg-[#1d6bf3] animate-pulse" />
              KwaZulu-Natal, South Africa
            </div>

            {/* Name */}
            <h1
              className="font-['Montserrat'] font-extrabold text-5xl sm:text-7xl lg:text-8xl text-[#0a1628] dark:text-white leading-none tracking-tight mb-4 fade-up"
              style={{ animationDelay: '0.1s' }}
            >
              Petrus J.<br />
              <span className="text-[#1d6bf3]">Maas</span>
            </h1>

            {/* Typing subtitle */}
            <p
              className="font-['Montserrat'] text-2xl sm:text-3xl text-[#475569] dark:text-slate-300 mb-6 h-10 fade-up"
              style={{ animationDelay: '0.2s' }}
            >
              {typed}
              <span className="cursor-blink" />
            </p>

            {/* Short bio */}
            <p
              className="max-w-xl text-[#475569] dark:text-slate-400 text-lg leading-relaxed mb-10 fade-up"
              style={{ animationDelay: '0.3s' }}
            >
              Building robust web applications, automating workflows, and integrating
              AI solutions. Based in KZN, working globally.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-4 mb-12 fade-up"
              style={{ animationDelay: '0.4s' }}
            >
              <a
                href="#experience"
                className="inline-flex items-center gap-2 bg-[#1d6bf3] hover:bg-[#1558d6] text-white font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                My Experience
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 border-2 border-[#e2e8f0] hover:border-[#1d6bf3] text-[#0a1628] dark:text-white dark:border-slate-700 font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                View Projects
              </a>
            </div>

            {/* Social links */}
            <div
              className="flex items-center gap-4 fade-up"
              style={{ animationDelay: '0.5s' }}
            >
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-[#475569] hover:text-[#1d6bf3] dark:text-slate-400 transition-colors"
              >
                <i className="fa-brands fa-github" style={{ fontSize: '18px' }}></i> GitHub
              </a>
              <span className="w-px h-4 bg-slate-300" />
              <a
                href="https://www.upwork.com/freelancers/~0115123195757e4159"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-[#475569] hover:text-[#1d6bf3] dark:text-slate-400 transition-colors"
              >
                <i className="fa-brands fa-square-upwork" style={{ fontSize: '18px' }}></i> upwork
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-xs text-[#94a3b8] hover:text-[#1d6bf3] transition-colors animate-bounce"
      >
        <i className="fa-solid fa-arrow-down" style={{ fontSize: '18px' }}></i>
      </a>
    </section>
  );
}
