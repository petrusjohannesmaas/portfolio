import { useState } from 'react';

const INFO_CARDS = [
  {
    icon: 'fa-brands fa-linkedin',
    label: 'LinkedIn',
    value: 'Connect with me',
    href: 'https://linkedin.com/',
  },
  {
    icon: 'fa-brands fa-github',
    label: 'GitHub',
    value: 'See my work',
    href: 'https://github.com/',
  },
  {
    icon: 'fa-solid fa-calendar-days',
    label: 'Calendly',
    value: 'Book a call',
    href: 'https://calendly.com/',
  },
  {
    icon: 'fa-solid fa-clock',
    label: 'Office Hours',
    value: 'Mon – Fri  09:00 – 17:00 SAST / GMT+2',
    href: null,
  },
];

const INPUT_CLS =
  'w-full bg-white dark:bg-[#0a1628] border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm text-[#0a1628] dark:text-white placeholder-[#94a3b8] focus:outline-none focus:border-[#1d6bf3] transition-colors';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    alert('Message sent! (wire up your endpoint)');
  };

  return (
    <section id="contact" className="py-24 bg-[#f8fafc] dark:bg-[#0d1f3c]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* ── LEFT COLUMN ── */}
          <div>
            {/* Pill tag */}
            <div className="inline-flex items-center gap-2 border border-[#1d6bf3] text-[#1d6bf3] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-7">
              <i className="fa-solid fa-headset" style={{ fontSize: '12px' }}></i>
              Contact Me
            </div>

            {/* Heading */}
            <h2 className="font-['Montserrat'] font-extrabold text-4xl sm:text-5xl leading-tight mb-5">
              <span className="text-[#1d6bf3]">Get In Touch</span>
              <br />
              <span className="text-[#0a1628] dark:text-white">With Me Directly</span>
            </h2>

            {/* Subtitle */}
            <p className="text-[#475569] dark:text-slate-400 text-base leading-relaxed mb-10 max-w-md">
              I'm open to freelance projects, consulting work, and interesting full-time
              opportunities. Fill out the form and I'll get back to you within 24 hours.
            </p>

            {/* 2×2 Info cards */}
            <div className="grid grid-cols-2 gap-4">
              {INFO_CARDS.map((card) => {
                const Wrapper = card.href ? 'a' : 'div';
                const wrapperProps = card.href
                  ? { href: card.href, target: '_blank', rel: 'noreferrer' }
                  : {};

                return (
                  <Wrapper
                    key={card.label}
                    {...wrapperProps}
                    className="group flex flex-col gap-3 bg-[#f8fafc] dark:bg-[#0d1f3c] border border-slate-100 dark:border-slate-800 rounded-2xl p-5 hover:border-[#1d6bf3] hover:shadow-sm transition-all cursor-default"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#e8f0fe] flex items-center justify-center shrink-0 group-hover:bg-[#1d6bf3] transition-colors">
                      <i
                        className={`${card.icon} text-[#1d6bf3] group-hover:text-white transition-colors`}
                        style={{ fontSize: '16px' }}
                      ></i>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#0a1628] dark:text-white mb-0.5">
                        {card.label}
                      </p>
                      <p className="text-xs text-[#475569] dark:text-slate-400 leading-snug">
                        {card.value}
                      </p>
                    </div>
                  </Wrapper>
                );
              })}
            </div>
          </div>

          {/* ── RIGHT COLUMN — Form ── */}
          <div className="bg-white dark:bg-[#0d1f3c] rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800 overflow-hidden">
            {/* Blue accent bar */}
            <div className="h-1.5 bg-[#1d6bf3]" />

            <div className="p-8">
              {/* Name + Email */}
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-xs font-semibold text-[#475569] dark:text-slate-400 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={INPUT_CLS}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#475569] dark:text-slate-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={INPUT_CLS}
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="mb-5">
                <label className="block text-xs font-semibold text-[#475569] dark:text-slate-400 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className={INPUT_CLS}
                />
              </div>

              {/* Message */}
              <div className="mb-7">
                <label className="block text-xs font-semibold text-[#475569] dark:text-slate-400 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your project or inquiry..."
                  className={`${INPUT_CLS} resize-none`}
                />
              </div>

              {/* Submit */}
              <button
                onClick={handleSubmit}
                className="w-full flex items-center justify-center gap-2.5 bg-[#1d6bf3] hover:bg-[#1558d6] text-white font-bold px-8 py-4 rounded-full transition-all hover:shadow-lg hover:shadow-blue-500/25 active:scale-[0.98]"
              >
                <i className="fa-solid fa-paper-plane" style={{ fontSize: '15px' }}></i>
                Send Message
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
