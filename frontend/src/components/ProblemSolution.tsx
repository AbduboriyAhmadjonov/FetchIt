import {
  ExclamationTriangleIcon,
  ShieldCheckIcon,
  ClockIcon,
  CodeBracketIcon,
} from '@heroicons/react/24/outline';

const ProblemSolution = () => {
  const problems = [
    {
      icon: ExclamationTriangleIcon,
      title: 'Anti-Bot Measures',
      description: 'Constantly battling CAPTCHAs, IP bans, and rate limits',
    },
    {
      icon: ClockIcon,
      title: 'Time-Consuming Setup',
      description: 'Hours spent writing and maintaining scraping scripts',
    },
    {
      icon: CodeBracketIcon,
      title: 'Technical Complexity',
      description: 'Requires deep knowledge of web technologies and APIs',
    },
    {
      icon: ShieldCheckIcon,
      title: 'Proxy Management',
      description: 'Managing rotating proxies and IP pools is a nightmare',
    },
  ];

  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl animate-[fadeInUp_0.6s_ease-out]">
            Web Scraping Shouldn&apos;t Be This Hard
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 animate-[fadeInUp_0.6s_ease-out_0.2s_both]">
            We&apos;ve solved the most common pain points so you can focus on what matters—your data
          </p>
        </div>

        {/* Pain-point cards */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {problems.map((problem, i) => (
              <div
                key={problem.title}
                style={{ animationDelay: `${i * 0.1}s` }}
                className="flex flex-col rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-200 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/10 animate-[fadeInUp_0.6s_ease-out_both]"
              >
                <div className="flex items-center gap-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 transition-transform duration-300 group-hover:scale-110">
                    <problem.icon className="h-7 w-7 text-red-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{problem.title}</h3>
                </div>
                <p className="mt-2 text-sm leading-6 text-gray-600">{problem.description}</p>
              </div>
            ))}
          </div>

          {/* Solution banner */}
          <div
            className="relative mt-12 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-center text-white
                       transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30
                       animate-[fadeInUp_0.6s_ease-out_0.5s_both]"
          >
            <h3 className="text-2xl font-bold">The Solution is Here</h3>
            <p className="mt-2 text-lg text-blue-100">
              Our platform handles all the complexity behind the scenes. Just point, click, and get
              your data—no headaches required.
            </p>
          </div>
        </div>
      </div>

      {/* Keyframes (inline, still Tailwind-only) */}
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

export default ProblemSolution;
