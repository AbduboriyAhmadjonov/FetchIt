import { BoltIcon, ChartBarIcon, ServerIcon, ClockIcon } from '@heroicons/react/24/outline';

const Scalability = () => {
  const stats = [
    { value: '99.9%', label: 'Uptime SLA', icon: ClockIcon },
    { value: '100M+', label: 'Pages Scraped Daily', icon: ChartBarIcon },
    { value: '10TB+', label: 'Data Processed', icon: ServerIcon },
    { value: '50ms', label: 'Average Response', icon: BoltIcon },
  ];

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl animate-[fadeInUp_0.6s_ease-out]">
            Built for Scale, Designed for Reliability
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 animate-[fadeInUp_0.6s_ease-out_0.2s_both]">
            From startup to enterprise—handle any volume with elastic scaling
          </p>
        </div>

        {/* Stats grid */}
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                style={{ animationDelay: `${i * 0.15}s` }}
                className="group flex flex-col items-center rounded-2xl bg-white p-6 shadow-md transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl hover:-translate-y-2 animate-[fadeInUp_0.6s_ease-out_both]"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <stat.icon className="h-9 w-9" />
                </div>
                <div className="mt-4 text-center">
                  <div className="text-4xl font-bold text-gray-900">{stat.value}</div>
                  <div className="mt-1 text-sm text-gray-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Elastic infrastructure banner */}
        <div
          className="relative mx-auto mt-16 max-w-4xl rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-center text-white
                     transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 animate-[fadeInUp_0.6s_ease-out_0.8s_both]"
        >
          <h3 className="text-2xl font-bold mb-4">Elastic Infrastructure</h3>
          <p className="text-lg text-blue-100">
            Our cloud-native architecture automatically scales based on demand. Whether you&apos;re
            scraping 100 pages or 100 million, we&apos;ve got you covered.
          </p>
        </div>
      </div>

      {/* Keyframes (inline, still Tailwind-only) */}
      <style>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(25px);
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

export default Scalability;
