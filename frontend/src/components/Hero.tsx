import { ChevronRightIcon, PlayIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const Hero = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
        {/* Headline with fade-in-up */}
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-tight text-white sm:text-7xl animate-[fadeInUp_0.8s_ease-out]">
          Scrape the Web.
          <span className="relative whitespace-nowrap text-blue-300">
            <svg className="absolute top-0 left-0 h-full w-full">
              <path d="M0 50 Q50 20 100 50" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
            <span className="relative">Simplified.</span>
          </span>
          Scaled. JSON-Ready.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100 animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
          Extract web data effortlessly — no coding required for business users and powerful APIs
          for developers. Get clean, structured JSON in minutes.
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-x-6 gap-y-4 sm:flex-row animate-[fadeInUp_0.8s_ease-out_0.4s_both]">
          <button className="group rounded-full bg-white px-8 py-4 text-lg font-semibold text-blue-600 shadow-lg transition-all hover:scale-105 hover:shadow-xl">
            Start Scraping for Free
            <ChevronRightIcon className="ml-2 inline h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <button
            onClick={() => setIsVideoPlaying(true)}
            className="group flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:scale-105"
          >
            <PlayIcon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
            Watch Demo
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-blue-200 animate-[fadeInUp_0.8s_ease-out_0.6s_both]">
          {[
            { label: '10,000+ Active Users', dot: true },
            { label: '99.9% Uptime', dot: true },
            { label: 'Enterprise Ready', dot: true },
          ].map(({ label, dot }) => (
            <div key={label} className="flex items-center gap-x-2">
              {dot && <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />}
              <span>{label}</span>
            </div>
          ))}
        </div>

        {/* Logo strip */}
        <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-4 opacity-60 animate-[fadeInUp_0.8s_ease-out_0.8s_both]">
          {['TechCorp', 'DataFlow', 'CloudSync', 'WebMax'].map((name) => (
            <img
              key={name}
              src={`https://via.placeholder.com/120x40/ffffff/666666?text=${name}`}
              alt={name}
              className="h-10 rounded-md bg-white/10 backdrop-blur-sm transition-transform duration-300 hover:scale-110"
            />
          ))}
        </div>
      </div>

      {/* Video modal */}
      {isVideoPlaying && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setIsVideoPlaying(false)}
        >
          <div className="max-w-4xl rounded-xl bg-white p-4 shadow-2xl">
            <video controls autoPlay className="rounded-lg">
              <source src="/demo-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      )}

      {/* Tiny keyframe helper (still Tailwind-only) */}
      <style>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
