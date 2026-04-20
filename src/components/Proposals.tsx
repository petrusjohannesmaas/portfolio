export default function Proposals() {
  return (
    <section id="proposals" className="py-24 bg-[#f1f5f9] dark:bg-[#0d1f3c]">
      <style>{`
        @keyframes subtle-shake {
          0%, 90%, 100% { transform: translateX(0); }
          92%, 96% { transform: translateX(-2px); }
          94%, 98% { transform: translateX(2px); }
        }
        .animate-shake-periodic {
          animation: subtle-shake 3s ease-in-out infinite;
        }
      `}</style>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-[#1d6bf3] rounded-[2rem] p-10 md:p-16 lg:p-20 flex flex-col items-start shadow-xl border border-blue-400/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
          
          {/* Concentric Circles Background */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] pointer-events-none opacity-80 mix-blend-overlay">
            <svg viewBox="0 0 800 800" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <circle cx="800" cy="400" r="600" fill="white" fillOpacity="0.15" />
              <circle cx="800" cy="400" r="450" fill="white" fillOpacity="0.25" />
              <circle cx="800" cy="400" r="300" fill="white" fillOpacity="0.4" />
              <circle cx="800" cy="400" r="150" fill="white" fillOpacity="0.6" />
              <circle cx="800" cy="400" r="50" fill="white" fillOpacity="0.8" />
            </svg>
          </div>

          {/* Text Content */}
          <div className="relative z-10 max-w-xl text-left mb-10">
            <h2 className="font-['Montserrat'] font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white mb-5 leading-tight tracking-tight">
              Let's Start a Project
            </h2>
            <p className="text-base md:text-lg leading-relaxed max-w-md inline-block text-white/90">
              You deserve secure contracts, transparent billing, and a professional workflow. I'd be happy to help you with your next project.
            </p>
          </div>

          {/* Buttons */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto shrink-0">
            {/* Button 1: Upwork */}
            <a
              href="https://upwork.com/"
              target="_blank"
              rel="noreferrer"
              className="animate-shake-periodic flex items-center justify-between w-full sm:w-auto bg-[#0a1628] hover:bg-black text-white rounded-full pl-7 pr-2 py-2 transition-all active:scale-95 group shadow-lg"
            >
              <span className="font-bold mr-6 text-sm">Hire me on Upwork</span>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white to-slate-200 flex items-center justify-center shrink-0 shadow-inner group-hover:scale-95 transition-transform">
                <i className="fa-brands fa-upwork text-[#1d6bf3]" style={{ fontSize: '18px' }}></i>
              </div>
            </a>

            {/* Button 2: Projects */}
            <a
              href="#projects"
              className="flex items-center justify-between w-full sm:w-auto bg-[#0a1628] hover:bg-black text-white rounded-full pl-7 pr-2 py-2 transition-all active:scale-95 group shadow-lg"
            >
              <span className="font-bold mr-6 text-sm">View Projects</span>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-300 to-slate-400 flex items-center justify-center shrink-0 shadow-inner group-hover:scale-95 transition-transform">
                <i className="fa-solid fa-arrow-up text-[#0a1628]" style={{ fontSize: '16px' }}></i>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
