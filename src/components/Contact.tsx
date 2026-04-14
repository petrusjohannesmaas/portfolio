import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    // Wire to your backend / Formspree / EmailJS here
    alert('Message sent! (wire up your endpoint)');
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-[#0a1628]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-[#1d6bf3] mb-2">Let's Talk</p>
          <h2 className="font-['Montserrat'] font-extrabold text-4xl sm:text-5xl text-[#0a1628] dark:text-white">
            Contact
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: info + contact details (2 cols) */}
          <div className="lg:col-span-2">
            <p className="text-[#475569] dark:text-slate-400 text-lg leading-relaxed mb-8 max-w-lg">
              I'm open to freelance projects, consulting work, and interesting full-time
              opportunities. Feel free to reach out — I typically reply within 24 hours.
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-4 mb-8">
              <a
                href="mailto:petrus@example.com"
                className="flex items-center gap-3 text-[#475569] dark:text-slate-400 hover:text-[#1d6bf3] transition-colors"
              >
                <div className="w-9 h-9 rounded-xl bg-[#e8f0fe] flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-envelope text-[#1d6bf3]" style={{ fontSize: '16px' }}></i>
                </div>
                petrus@example.com
              </a>
              <div className="flex items-center gap-3 text-[#475569] dark:text-slate-400">
                <div className="w-9 h-9 rounded-xl bg-[#e8f0fe] flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-location-dot text-[#1d6bf3]" style={{ fontSize: '16px' }}></i>
                </div>
                KwaZulu-Natal, South Africa
              </div>
            </div>

            {/* Contact form */}
            <div className="bg-[#f8fafc] dark:bg-[#0d1f3c] border border-slate-100 dark:border-slate-800 rounded-2xl p-6">
              <h3 className="font-['Montserrat'] font-bold text-[#0a1628] dark:text-white mb-5">
                Send me a message
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-semibold text-[#475569] dark:text-slate-400 mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full bg-white dark:bg-[#0a1628] border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm text-[#0a1628] dark:text-white placeholder-[#94a3b8] focus:outline-none focus:border-[#1d6bf3] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#475569] dark:text-slate-400 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full bg-white dark:bg-[#0a1628] border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm text-[#0a1628] dark:text-white placeholder-[#94a3b8] focus:outline-none focus:border-[#1d6bf3] transition-colors"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-xs font-semibold text-[#475569] dark:text-slate-400 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className="w-full bg-white dark:bg-[#0a1628] border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm text-[#0a1628] dark:text-white placeholder-[#94a3b8] focus:outline-none focus:border-[#1d6bf3] transition-colors"
                />
              </div>
              <div className="mb-5">
                <label className="block text-xs font-semibold text-[#475569] dark:text-slate-400 mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell me about your project or inquiry..."
                  className="w-full bg-white dark:bg-[#0a1628] border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm text-[#0a1628] dark:text-white placeholder-[#94a3b8] focus:outline-none focus:border-[#1d6bf3] transition-colors resize-none"
                />
              </div>
              <button
                onClick={handleSubmit}
                className="flex items-center gap-2 bg-[#1d6bf3] hover:bg-[#1558d6] text-white font-semibold px-6 py-2.5 rounded-xl transition-colors"
              >
                <i className="fa-solid fa-paper-plane" style={{ fontSize: '16px' }}></i> Send Message
              </button>
            </div>
          </div>

          {/* Right: vertical social buttons */}
          <div className="flex lg:flex-col gap-4 lg:gap-5 items-start lg:items-center lg:pt-16">
            <a
              href="https://calendly.com/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 bg-[#1d6bf3] hover:bg-[#1558d6] text-white font-semibold px-5 py-3 rounded-xl transition-colors w-full justify-center"
            >
              <i className="fa-solid fa-calendar-days" style={{ fontSize: '20px' }}></i>
              <span className="hidden lg:inline">Book a Call</span>
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 bg-[#0a66c2] hover:bg-[#084f99] text-white font-semibold px-5 py-3 rounded-xl transition-colors w-full justify-center"
            >
              <i className="fa-brands fa-linkedin" style={{ fontSize: '20px' }}></i>
              <span className="hidden lg:inline">LinkedIn</span>
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 bg-[#0a1628] hover:bg-[#1e293b] dark:bg-slate-800 dark:hover:bg-slate-700 text-white font-semibold px-5 py-3 rounded-xl transition-colors w-full justify-center"
            >
              <i className="fa-brands fa-github" style={{ fontSize: '20px' }}></i>
              <span className="hidden lg:inline">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
